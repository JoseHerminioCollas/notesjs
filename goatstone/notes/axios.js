/* rx-dom-sample */
/*
 get the weather
 depending on the weather get a country
 or get a book about the wether
 set up debugger
 */
const axios = require( 'axios' )

axios.get('http://www.goatstone.com')
    .then(function (response) {
        const br = response.data.substr(0, 200)
        console.log( br );
    })
    .catch(function (response) {
        console.log(response);
    });
