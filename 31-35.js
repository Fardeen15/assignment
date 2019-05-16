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
// var minuteForm1970 = milliseconds / 1000 / 60
// // divide 1000 to covert to sec , diveide 60 to coinver to min , divide 6 to conver to hour , day , year

// var mins = date.getMinutes();
// document.write(`<h1>curent date</h1><br>${date}<br> <h1>millisecnd</h1> <br> ${milliseconds} <br> <h1> mins </h1> <br> ${minuteForm1970} `)

// no7
// var date = new Date();
// var hours = date.getHours()

// console.log(hours)
// if (hours > 11) {
//      alert("PM");
// }
// else {
//      alert("AM");
// }


// no8
// var laterDate = new Date("December 31, 2020");

// alert(laterDate);

// no9
// var date = new Date("june 18, 2015"); //ramzan
// var day = date.getTime();
// var mili = day / 1000 / 60 / 60 / 24
// var curr = new Date().getTime() / 1000 / 60 / 60 / 24
// var diffDay = Math.round(curr - mili)
// alert(diffDay);


//No 10 do it

// no12
// var current = new Date()
// // current.getFullYear() - 100) // 2019-100= 1919
// console.log(new Date().setFullYear(1919))
// console.log(new Date(new Date().setFullYear(1919)))
// console.log(current.setFullYear(2000) / 1000 / 60 / 60 / 24 / 30 / 12)
// console.log(new Date(new Date().setFullYear(new Date().getFullYear() - 100)))





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
// function sum() {
//      frstNum = +prompt("enter frst num");
//      scndNum = +prompt("enter secnd num");
//      add = frstNum + scndNum
//      return add
// }



// var a = sum()
// var add5 = a + 5
// alert(add5)

//simple function
// function sss(){
//      alert("ajhasjkasjk")
// }

// sss()

// function sss(a, c) {
//      alert(a + c)
// }

// // sss("sadiqiiq")
// // sss("qqqqq")
// var abc = "rtrtrytr"
// var cde = "asasdas"
// var gg = "iuoiu"
// sss(abc, cde, gg)




function change() {
    // document.getElementById("ugly").className = "hidden"
    document.getElementById("ugly").className = "chngeColor"
}

function makeInvisible() {
    document.getElementById("fd").className = "hidden"
}
