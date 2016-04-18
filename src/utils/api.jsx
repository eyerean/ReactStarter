var Fetch = require('whatwg-fetch');
var baseUrl = 'YOUR_API_ENDPOIND_HERE';

module.exports = {
  get: function(url) {
    return fetch(baseUrl + url, {
      // headers: {
      //   'Accept': 'application/json'
      // }
    })
    .then(function(response){
      return response.json()
    });
  }
};
