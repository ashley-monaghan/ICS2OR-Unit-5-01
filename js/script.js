// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-5-01/sw.js", {
    scope: "/ICS2OR-Unit-5-01/",
  })
}
/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6

if (slider - value == Math.floor) {
  document.getElementById.innerHTML = "<p>Correct! " + "</p>"
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML =
    "<p>Value is: " + slider.value + "</p>"
}
