let today = new Date();
let month = today.getMonth()+1;
// console.log(month)
let day = today.getUTCDate();
let year = today.getFullYear();

if (day <10){
    day = "0"+day;
}

if (month<10){
    month = "0"+month;
} 

console.log(day + "-" + month + "-" + year);