const _ = require("lodash");
const $ = require( "jquery" );
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="btn">Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('#btn').on('click', _.debounce(updateCounter, 500));