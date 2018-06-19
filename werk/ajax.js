(function() {
    var source
    news = [],
        http = new HTTP(),
        apiKey = "29549ae49a1349379b1992a748d0dad8",
        language = 'ru',
        sourceUrl = 'https://newsapi.org/v2/sources',
        btnContainer = qs ('.buttons');

    http.get(sourceUrl, {apiKey: apiKey, language: language}, function(response){
        var sources = response.sources || [];

    });
})();
    function http (){
        this.get = HttpGet;
    }

    function HttpGet (url, cram, callback){
        if(cram) {
            url += '?' + Object.keys(cram).map(function(key){
                return key + '=' + cram[key];
            }).join('&')
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function(){
            callback(JSON.parse(xhr.response));
        };
    };

})();