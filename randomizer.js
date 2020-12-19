"use strict";
const keyValues = [
  "A major",
  "B\u266D major",
  "B major",
  "C major",
  "D\u266D major",
  "D major",
  "E\u266D major",
  "E major",
  "F major",
  "F\u266F major",
  "G major",
  "A\u266D major",
  "A minor",
  "B\u266D minor",
  "B minor",
  "C minor",
  "D\u266D minor",
  "D minor",
  "E\u266D minor",
  "E minor",
  "F minor",
  "F\u266F minor",
  "G minor",
  "A\u266D minor",
];

const timeValues = ["3/4", "4/4", "5/8", "6/8", "7/8", "9/8", "13/8", "15/8"];

let keyOutput = document.getElementById("key");
let timeOutput = document.getElementById("time");
let tempoOutput = document.getElementById("tempo");
const keyButton = document.getElementById("keyButton");
const timeButton = document.getElementById("timeButton");
const tempoButton = document.getElementById("tempoButton");

function randomKeyValues() {
  return keyValues[Math.floor(Math.random() * keyValues.length)];
}
function randomTimeValues() {
  return timeValues[Math.floor(Math.random() * timeValues.length)];
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

keyButton.addEventListener("click", function () {
  keyOutput.innerHTML = `${randomKeyValues()}`;
});

timeButton.addEventListener("click", function () {
  timeOutput.innerHTML = `${randomTimeValues()}`;
});
tempoButton.addEventListener("click", function () {
  tempoOutput.innerHTML = `${randomInteger(50, 300)} bpm`;
});

all.addEventListener("click", function () {
  keyOutput.innerHTML = `${randomKeyValues()}`;
  timeOutput.innerHTML = `${randomTimeValues()}`;
  tempoOutput.innerHTML = `${randomInteger(50, 300)} bpm`;
});
