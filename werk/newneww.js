var url = 'https://newsapi.org/v2/sources?apiKey=29549ae49a1349379b1992a748d0dad8&language=ru';
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
xhr.onload = function(){
    var response = JSON.parse(xhr.response);
    var sources = response.sources;

    //console.log(JSON.parse(xhr.response));
};

function rennderButtons(sources){

}