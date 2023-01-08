// import "Object name" from "./projectname.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeStolen from './bikes-stolen';
  
// Business Logic

function returnBikes(location) {
  let promise = BikeStolen.getBikes(location);
  promise.then(function(bikeData) {
    printBikes(bikeData);
  }, function(errorData) {
    printError(errorData);
  });
}

