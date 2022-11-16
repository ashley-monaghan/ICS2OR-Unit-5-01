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

const randomNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was " + randomNumber + "!" + " You got it right! Good job."
  }

  //if (valueFromSlider !== randomNumber) {
  //document.getElementById("answer").innerHTML =
  // "The answer was " +
  //  randomNumber +
  //  "." +
  //   " You got it wrong. Better luck next time!"
  //}
}
