let today = new Date();
let day = today.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

console.log("Today is : " + dayList[day]);

let prepand = (hours >= 12) ? "PM" : "AM"       //( {0 to 12} >= 12)    if 
hours = (hours >= 12) ? hours - 12 : hours

if (hours === 0 && prepand === "PM") {
    if (minutes === 0 && second === 0) {
        hours = 12;
        prepand = "Noon";
    }
    else {
        hours = 12;
        prepand = "PM";
    }
}

if (hours === 0 && prepand === "AM") {
    if (minutes === 0 && second === 0) {
        hours = 12;
        prepand = "Midnight";
    }
    else {
        hours = 12;
        prepand = "AM";
    }
}
console.log("Current time is : " + hours + ":" + minutes + ":" + seconds + " " + prepand);