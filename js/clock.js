// VARIABLES

const clockContainer = document.querySelector("#clock");
const clockTitle = clockContainer.querySelector("h1");

setInterval(function () {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let ampm = "am";

  let date = time.getDate();
  let month = time.getMonth() + 1;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours >= 12) {
    ampm = "pm";
  }

  if (hours === 0) {
    hours = 12;
  } else if (hours < 10) {
    hours = "0" + hours;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  //Changes greeting depending on the time of the day
  let greeting = document.querySelector("#greet-text");
  if (ampm === "am" && hours <= 10) {
    greeting.innerHTML = "Good morning,&nbsp;";
  } else if (ampm === "pm" && (hours < 5 || hours === 12)) {
    greeting.innerHTML = "Good afternoon,&nbsp;";
  } else if (ampm === "pm" && hours >= 5) {
    greeting.innerHTML = "Good evening,&nbsp;";
  } else {
    greeting.innerHTML = "You are doing great,&nbsp;";
  }

  clockTitle.innerHTML = `${hours < 10 ? `${hours}` : hours}:${
    minutes < 10 ? `${minutes}` : minutes
  }`;
}, 1000);
