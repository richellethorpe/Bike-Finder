export default class BikeStolen {
  static async getBikes(location) {
    try {
      const response = await fetch(`https://bikeindex.org:443/api/v3/search/count?location=${location}&distance=10&stolenness=proximity`); // fetch() returns a promise.
      const jsonResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${jsonResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonResponse;
    } catch(error) {
      return error;
    }
  }
}