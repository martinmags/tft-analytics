from flask import Flask, request, jsonify
from flask_restx import Resource, Api
from riotwatcher import TftWatcher, ApiError
from settings import riot_key
from flask_cors import CORS

application = Flask(__name__)
api = Api(application)
cors = CORS(application, resources={r"*": {"origins": "*"}})
application.config['CORS_HEADERS'] = 'Content-Type'

api_key = riot_key
tft = TftWatcher(api_key)

regions = {
	'na1': 'americas',
	'br1': 'americas',
	'oc1': 'americas',
  'la1': 'americas',
  'la2': 'americas',
	'jp1': 'asia',
  'kr': 'asia',
	'eun1': 'europe',
	'euw1': 'europe',
	'tr1': 'europe',
	'ru': 'europe'	
}

server, region = 'na1', 'americas'

@api.doc(paths={})
class SummonerInfo(Resource):
  """
  Returns identifier information on summoner passed through Query params
  {
    "id": {string}, 
    "accountId": {string},
    "puuid": {string},
    "name": {string},
    "profileIconId": {string},
    "revisionDate": {string},
    "summonerLevel": {string}
  }
  """
  def get(self, summoner, server):
    response = tft.summoner.by_name(server, summoner)
    print(response)
    return response

@api.doc(paths={})
class MatchHistory(Resource):
  """
  Returns the information on the last x matches on a summoner
  {
    "matchhistory": [
      {
        "comp": {string}, 
        "position": {int}
      }, 
      ...
    ]
  }
  """
  def get(self, server, puuid):
    matchhistory = []
    region = regions[server]
    # Get matchlist
    matchlist = tft.match.by_puuid(region=region, puuid=puuid, count=20)

    if not matchlist:
      return jsonify(matchhistory=matchhistory)
    
    for matchid in matchlist:
      j = tft.match.by_id(region=region, match_id=matchid)

      idx = j['metadata']['participants'].index(puuid)
      player = j['info']['participants'][idx]
      
      #only remove 999 (disabled item slot) from items list if its the binary galaxy mode
      bin_galxy = None
      try:
        bin_galxy = j['info']['game_variation'] == 'TFT3_GameVariation_TwoItemMax'
      except KeyError:
        print("KeyError: {}".format(KeyError))
  
      # Store traits per other player
      traits_list = player['traits']
      traits = []
      for trait_json in traits_list:
        if trait_json['style'] != 0:
          trait_json['name'] = trait_json['name'].replace('Set3_', '').lower()
          traits.append(trait_json)
      
      units_list = player['units']
      for units_json in units_list:
        units_json['character_id'] = units_json['character_id'].replace('TFT3_', '').lower()
        if bin_galxy: units_json['items'].remove(999) #delete the disabled item slot added in binary star galaxy
       
      match_dict = {
        'traits': traits,
        'queue': j['info']['queue_id'],
        'position': player['placement'],
        'level': player['level'],
        'units': units_list
      }
      matchhistory.append(match_dict)
      
    return jsonify(matchhistory=matchhistory)

@api.doc(paths={})
class RankInfo(Resource):
  """
  Returns the ranked information on for a summoner
  {
    "tier": {string},
    "divion": {string},
    "lp": {int},
    "wins": {int},
    "losses": {int}
  }
  """
  def get(self, server, summoner_id):
    response_json = {}
    rank_json = tft.league.by_summoner(region=server, encrypted_summoner_id=summoner_id)
    
    if rank_json:
      rank_json = rank_json[0]
    else:
      return jsonify(response_json)
      
    response_json['tier'] = rank_json['tier']
    response_json['division'] = rank_json['rank']
    response_json['lp'] = rank_json['leaguePoints']
    response_json['wins'] = rank_json['wins']
    response_json['losses'] = rank_json['losses']
    return jsonify(response_json)

# Endpoints
api.add_resource(SummonerInfo, '/api/summonerinfo/<string:server>/<string:summoner>')
api.add_resource(MatchHistory, '/api/matchhistory/<string:server>/<string:puuid>')
api.add_resource(RankInfo, '/api/rankinfo/<string:server>/<string:summoner_id>')

if __name__ == '__main__':
  application.run(debug=True, host='0.0.0.0', port=8000)