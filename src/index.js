// import "Object name" from "./projectname.js";
import './css/bootstrap.css';
import './css/styles.css';
import BikeStolen from './bikes-stolen';
  
// Business Logic

function returnBikes(location) {
  let promise = BikeStolen.getBikes(location);
  promise.then(function(response) {
    printBikes(response);
  }, function(errorData) {
    printError(errorData);
  });
}

// UI Logic


function printBikes(response) {
  console.log(response.stolen);
  document.querySelector('#showResponse').innerText = `The amount of bikes reported stolen in ${response.stolen}`;
}


function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the bike data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  returnBikes(city);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
  
});




