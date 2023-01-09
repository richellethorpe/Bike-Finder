export default class BikeStolen {
  static getBikes(input) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      //do we need a ?q parameter for location?
      const url = `https://bikeindex.org:api/v3/search?q=page=1&per_page=25&location=${input}&distance=10&stolenness=stolen`;
      request.addEventListener('loadend', function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, input]);
        } else {
          reject([this, response, input]);
        }
      });
      request.open('GET', url, true);
      request.send();
    });
  }
}

//error at line 16-webpack internal 16:15
