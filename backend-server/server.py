from flask import Flask, request, jsonify
from riotwatcher import TftWatcher, ApiError
from settings import riot_key

app = Flask(__name__)

server = 'na1'
region = 'americas'

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


@app.route('/')
@app.route('/api/summoner')
def index():
	return getSummoner()
	
@app.route('/api/matchhistory')	
def getMatchHistory():	
	
	summoner_json = getSummoner()

	puuid = summoner_json['puuid']
	region = regions[server]
		
	# watcher = tft.summoner.by_name(server, summoner_name)
	# puuid = watcher['puuid']
	matchlist = tft.match.by_puuid(region=region, puuid=puuid, count=5)
	
	matchhistory = []
	placements = []
	comp = []
	for matchid in matchlist:
		j = tft.match.by_id(region='americas', match_id=matchid)

		# print('\n-----------------MATCH JSON-----------\n')
		# print(j)

		idx = j['metadata']['participants'].index(puuid)
		print(idx)
		# print(j['metadata']['participants'][idx])

		player = j['info']['participants'][idx]
		traits_list = player['traits']
		
		match_dict = {}

		trait_counts = []
		for trait_json in traits_list:
			string = str(trait_json['num_units']) + " " + trait_json['name']
			trait_counts.append(string)
			
		match_dict['comp'] = '   '.join(trait_counts)
		match_dict['position'] = player['placement']
		matchhistory.append(match_dict)
			
		# comp.append('   '.join(trait_counts))
		# placement = player['placement']
		# placements.append(placement)
	
	return jsonify(
		matchhistory=matchhistory
	)
	
	# return watcher
	

def getSummoner():
	summoner_name = request.args.get('summoner')
	server = request.args.get('server')
	return tft.summoner.by_name(server, summoner_name)

	

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
