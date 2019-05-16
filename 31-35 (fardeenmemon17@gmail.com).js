// // no1
// var date = new Date();
// document.write(date)

// no2
// var arr = ["jan","feb","march","april","may","jun","july","aug","sep","oct","nov","dec"]
// // var date = new Date()
// var month = arr[11];
// document.write(month)

// no3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write(nameOfToday)

// no5
// var date = new Date();
// var theDate = date.getDate();
// if (theDate < 16) {
//     alert("first fifteen days of the month");
// } 
// else{
//     alert("last fifteen days of the month");
// }

// no6
// var date = new Date();
// var milliseconds = date.getTime();
// var mins = date.getMinutes();
// document.write(`<h1>curent date</h1><br>${date}<br> <h1>millisecnd</h1> <br> ${milliseconds} <br> <h1> mins </h1> <br> ${mins} `  )

// no7
// var date = new Date();
// var hours = date.getHours()
// var b = false;
// // if (hours > 11){
// //     alert("PM");
// // }
// // else{
// //     alert("AM");
// // }
// for (var i = 0 ; i < 23 ; i++) {
//     if (hours < 11) {
//       alert("PM");
//       b = true;
//     }
//     else{
//         alert("am");
//     }
// }

// no8
// var laterDate = new Date("December 31, 2020");
// alert(laterDate);

// no9
// var date = new Date("june 18, 2015");
// var day = date.getDay();
// alert(day);

// no11
// var date = new Date();
// var hours = date.getHours();
// var date2 = new Date();
// var hours1 = hours - 1;
// date2.setHours(hours1);
// document.write(`current date = ${date}<br>
// 1 hour ago = ${date2}`)

// no13
// var userInput = +prompt("enter your age ");
// var year = new Date().getFullYear();
// var birth = year - userInput ;
// document.write(`your age is ${userInput}<br>
// your birth month is ${birth}`)

// no 14
// var date = new Date();
// var mnth = date.getMonth();
// var userInput = +prompt("enter num of unit");
// var charges = 16;
// var surcharges = 350;
// document.write(`
// <h1>K Electric Bill</h1><br><br>
// coustomer Name = ABC <br>
// month = ${mnth}<br>
// Number Of unit = ${userInput}<br>
// charges per unit = 16<br><br><br>
// Net Amount Payable (within Due Date) = ${userInput*charges} <br>
// late payment sur charges = 350<br>
// Gross Amount Payable (after Due Date) = ${(userInput*charges) + surcharges}
// `)

// no18
// var frstNum = +prompt("enter frst num");
// var scndNum = +prompt("enter secnd num");
// var add;
// var sum = sum1(frstNum , scndNum);
// function sum1(x,y) {
//     add = frstNum + scndNum;
//     alert(add);
// }
// sum1(x,y);

// no19
// var frstNum = +prompt("enter first num");
// var sign = prompt("+,-,*,/")
// var scndNum = +prompt("enter second num");
// if (sign === "+") {
//     alert(frstNum + scndNum);
// }
// if (sign === "-") {
//     alert(frstNum - scndNum);
// }
// if (sign === "*") {
//     alert(frstNum * scndNum);
// }
// if (sign === "/") {
//     alert(frstNum / scndNum);
// }

// // n0 20 
// function square(x) {
//     var value;
//     for (var i = x; i < x; i++) {
//         value = i * i;
//     }
//     return value;
// }
// var value = square(5);
// alert(value);

// no 22
// var num1 = +prompt("enter start num ");
// var num2 = +prompt("enter end num");
// for ( var i = num1; i <= num2 ; i++){
//     document.write(`${i}<br>`)
// }