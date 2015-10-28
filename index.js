'use strict';
var fullCalendar = require('fullcalendar');
//add global error event listener
(Function('return this')()).addEventListener('error', function() {
  alert('Script throws.');
});
//next line fails

var ru = require('fullcalendar/dist/lang/ru');

