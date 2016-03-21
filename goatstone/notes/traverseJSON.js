var traverse = require('traverse');
var a =
    [{
        "coord": {"lon": -81.7, "lat": 41.5},
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "base": "cmc stations",
        "main": {"temp": 289.54, "pressure": 1006, "humidity": 36, "temp_min": 288.15, "temp_max": 290.15},
        "wind": {"speed": 11.8, "deg": 230, "gust": 16.5},
        "clouds": {"all": 20},
        "dt": 1458161640,
        "sys": {"type": 1, "id": 2166, "message": 0.0028, "country": "US", "sunrise": 1458128070, "sunset": 1458171366},
        "id": 5150529,
        "name": "Cleveland",
        "cod": 200
    }]
var id = 54;
var callbacks = {};
var obj = { moo : function () {}, foo : [2,3,4, function () {}] };

var scrubbed = traverse( a ).forEach(function (x , i) {
    console.log('xxx', x)
    if (typeof x === 'string' || typeof x === 'number' ) {
        console.log( ' - - - -  -', x , this.path)
        callbacks[ this.path ] = x
    }
});
//console.log(scrubbed);
console.log(callbacks);