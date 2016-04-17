var matchID = prompt("Enter a match ID to call via the match API"); 
//var matchID =  2134410987
var api_key = prompt("Enter your api key provided by Riot");
//var api_key = ;
var matchAPI = 'https://na.api.pvp.net/api/lol/na/v2.2/match/' + matchID +'?api_key=' +api_key;

var match_results;

$.getJSON( matchAPI, results); 

function results(APIresults) {
  match_results = APIresults;
};

var match_res_html = JSON.stringify(match_results);
document.body.innerHTML = match_res_html;
