
//--- Базовый загрузчик ресурсов ---
//--- Вызывается resources.load со всеми изображениями для загрузки, 
// затем вызывается resources.onReady для создания callback на событие 
// загрузки всех данных. 
// Загруженные изображения хранятся в кеше в resourcesCache, 
// и когда все изображения буду загружены, будут вызваны все callback'и ---

(function() {
    let resourceCache = {};
    let readyCallbacks = [];

    //--- Загружаем URL-адрес изображения или массив URL-адресов изображений
    function load(urlOrArr) {
        if(urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                _load(url);
            });
        }
        else {
            _load(urlOrArr);
        }
    }

    function _load(url) {
        if(resourceCache[url]) {
            return resourceCache[url];
        }
        else {
            let img = new Image();
            img.onload = function() {
                resourceCache[url] = img;
                
                if(isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };
            resourceCache[url] = false;
            img.src = url;
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function isReady() {
        let ready = true;
        for(let k in resourceCache) {
            if(resourceCache.hasOwnProperty(k) &&
               !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {
        readyCallbacks.push(func);
    }

    window.resources = { 
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();