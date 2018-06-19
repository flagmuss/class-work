(function(){
    window.qs = document.querySelector.bind(document);
    window.dce = document.createElement.bind(document);
    window.ce = createElement;
    window.http = new HTTP();

    function HTTP(){
        this.get = HttpGet;
    }

    function HttpGet(url, params, callback){
        if(params){
            url += '?' + Object.keys(params).map(function(key){
                return key + '=' + params[key];
            }).join('&');
        }

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function(){
            callback(JSON.parse(xhr.response));
        };

        xhr.send();
    }

    function createElement(elemName, options, attributes){
        attributes = attributes || {};
        var elem = dce(elemName);

        Object.assign(elem, options);

        Object.keys(attributes).forEach(function(key){
            elem.setAttribute(key, attributes[key]);
        });
        return elem;
    }
})();