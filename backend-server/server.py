from flask import Flask, request, jsonify
from flask_restx import Resource, Api
from riotwatcher import TftWatcher, ApiError
from settings import riot_key
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

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

def getSummoner():
  """
  Retrieves summoner json object

  Returns
  -------
  Json object that contains identifier information on summoner 
  """
  summoner_name = request.args.get('summoner')
  server = request.args.get('server')
  return tft.summoner.by_name(server, summoner_name)

@api.doc(params={'summoner': 'Enter summoner name:', 'server':'Enter server:'})
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
  def get(self):
    return getSummoner()

@api.doc(params={'summoner': 'Enter summoner name:', 'server':'Enter server:'})
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
  def get(self):
    summoner_json = getSummoner()

    puuid = summoner_json['puuid']
    region = regions[server]

    matchlist = tft.match.by_puuid(region=region, puuid=puuid, count=5)
    matchhistory = []
    for matchid in matchlist:
      j = tft.match.by_id(region='americas', match_id=matchid)

      idx = j['metadata']['participants'].index(puuid)
      player = j['info']['participants'][idx]
      
      # Store traits per other player
      traits_list = player['traits']
      trait_counts = []
      for trait_json in traits_list:
        string = str(trait_json['tier_current']) + " " + trait_json['name']
        trait_counts.append(string)
      
      # Creates an object for other players in the same match 
      match_dict = {}
      match_dict['comp'] = '   '.join(trait_counts)
      match_dict['position'] = player['placement']
      matchhistory.append(match_dict)
    return jsonify(matchhistory=matchhistory)

# Endpoints
api.add_resource(SummonerInfo, '/api', '/api/summonerinfo')
api.add_resource(MatchHistory, '/api/matchhistory')

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0', port=8000)