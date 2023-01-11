// import "Object name" from "./projectname.js";
import './css/bootstrap.css';
import './css/styles.css';
import BikeStolen from './bikes-stolen';
  

async function getBikes(location) {
  const response = await BikeStolen.getBikes(location);
  if (response.proximity) {
    printBikes(response, location);
  } else {
    printError(location);
  }
}

//UI Logic

function printBikes(response, location) {
  document.querySelector('#showResponse').innerText = `The number of bikes stolen in ${location} is ${response.proximity}.`;
}

function printError(location) {
  console.log("printError" + location);
  document.querySelector(`#showResponse`).innerText = `There was an error accessing the bike index for ${location}: We were unable to find information on that location. Please try again.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const location = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getBikes(location);
  console.log(location);
}


window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});