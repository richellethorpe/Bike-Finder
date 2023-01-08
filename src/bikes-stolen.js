export default class BikeStolen {
  static getBikes(location) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `bikeindex.org/api/v3/search?q=${location}`;
      request.addEventListener('loadend', function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, location]);
        } else {
          reject([this, response, location]);
        }
      });
      request.open('GET', url, true);
      request.send();
    });
  }
}
