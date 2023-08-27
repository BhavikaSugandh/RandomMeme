var dest = new Date("Mar 11,2024 12:00:00").getTime();
console.log(dest);
var currDate = new Date().getTime();
console.log(currDate);
var difference = dest - currDate;
console.log(difference);
var days = Math.trunc(difference / (1000 *60*60*24));
console.log(days);
var hours = 