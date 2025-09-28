let clock = document.getElementById('clock');


function updateTime() {
    let date = new Date();
let year = date.getFullYear();
let monthsArray = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', "November", 'December']
let month = monthsArray[date.getMonth()];
let dateNum = date.getDate();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let day = days[date.getDay()];
let hour = date.getHours();
let hourNow;
if (hour > 12) {
    hourNow = hour - 12;
}
let minute = date.getMinutes();
let minuteNow;
if (minute < 10) {
    minuteNow = `0${minute}`;
} else {
    minuteNow = minute
}
let second = date.getSeconds();
let secondNow;
if (second < 10) {
    secondNow = '0' + second;
} else {
    secondNow = second
    }
    
    let timeOfDay = hour < 12 ? 'AM':"PM";
let timeNow = `<h2>${hourNow} : ${minuteNow} : ${secondNow} ${timeOfDay}</h2><p>${day}, ${month} ${dateNum}, ${year}</p>`
    clock.innerHTML = timeNow;
}
updateTime()

setInterval(updateTime, 1000);

// let clock = document.getElementById("clock");
// let time = 10;
// let myTimer = setInterval(countdown, 1000);

// function countdown() {
//   if (time < 0) {
//     clearInterval(myTimer);
//   } else {
//     clock.textContent = time;
//     time = time - 1;
//   }
// }

