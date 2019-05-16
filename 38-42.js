// no2
// var userInput = prompt("enter leap year");
// function leapYear() {
//     switch (userInput) {
//         case "2020":
//             alert("this is leap year");
//             break;
//         default:
//             alert("sorry this is not a leap year");
//     }
// }
// leapYear();


// no3
// var a = +prompt("enter value a");
// var b = +prompt("enter value b");
// var c = +prompt("enter value c");
// function area(a, b, c) {
//     var S = (a + b + c) / 2;
//     return S;
// }
// function where(a, b, c) {
//     S = area(a, b, c)
//     var ab = S * (S - a) * (S - b) * (S - c);
//     return ab;
// }
// alert(where(a, b, c))

// no4
// var a = +prompt("enter marks of 1 subject");
// var b = +prompt("enter marks of 2 subject");
// var c = +prompt("enter marks of 3 subject");
// function percentage(a, b, c) {
//     var percent;
//     var marksObt = a + b + c;
//     var totalMarks = 300;
//     percent = (marksObt / totalMarks) * 100;
//     return percent;
// }
// function average(a, b, c) {
//     var average;
//     average = (a + b + c) / 3
//     return average;
// }
// function mainFunction() {
//     var per = percentage(a, b, c);
//     var ave = average(a, b, c);
//     alert(per + "% " + ave);
// }
// mainFunction();

// no5
// function indexOf(a, b) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === b) {
//             var index = i;
//             alert(index);
//             return index;
//         }
//     }
// }
// indexOf("fardeen", "r");

// no6
// function delVowels(str) {
//     var vowels = ["a", "e", "i", "o", "u"];
//     return str.split('').filter(function (el) {
//         return vowels.indexOf(el.toLowerCase()) == -1;
//     }).join('');
//     for (var i = 0; i < vowels.length)
//         for (var i = 0; i < vowels.length; i++) {
//             for (var x = 0; x < vowels.length; x++) {
//                 return str.replace(/e|a|i|o|u/g, "")
//             }
//         }
// }
// alert(delVowels("fardeenalizubairdilawar"));

// no8
// var userInput = +prompt("enter the distance of two cities in km");
// function meter() {
//     var a = userInput * 1000;
//     return a;
// }
// function centimeter() {
//     var b = userInput * 100000;
//     return b;
// }
// function feet() {
//     var c = userInput * 3280.84;
//     return c;
// }
// function inch() {
//     var d = userInput * 39370.1;
//     return d;
// }
// document.write(`${meter()} km into meter <br>`)
// document.write(`${centimeter()} km into centimeter<br>`)
// document.write(`${feet()} km into feet<br>`)
// document.write(`${inch()} km into inch<br>`)


// no9
// var userInput = +prompt("enter overtime hours");
// function employe(abc) {
//     var i = 0;
//     while (i < abc) {
//         i++;
//         var overtime = (abc - 40) * 12
//         return overtime;
//     }
// }
// alert(employe(userInput));

// no7
// function vowel(str1) {
//     var vowels = ["e","a","i","o","u"];
//     for (var i = 0; i < str1.length; i++) {
//         for(var x = 1; x < str1.length; x++ ){
            
//         }
//     }
// }
// let newArray= []
// var str = "the qiuck brown fox jump our the lazu dog"
// function forMakingCombination (){

//     var vowels = ["a", "e", "i", "o", "u"];
//     for(var i=0;i<vowels.length; i++){
//         newArray.push(vowels[i]+vowels[i])
//         for(var b = 1;b<vowels.length; b++){
//             newArray.push(vowels[i]+vowels[b])
//         }
//     }
//     return newArray
// }

// function matching(){
//  var newArray = forMakingCombination()
//  for(var i =0;i<newArray.length;i++){
//     //  console.log(newArray)
//      alert(str.match(newArray[i]));

//  }
// }

// matching()
// var array = ["ae","io","au"]
// function delVowels(str) {
//     var vowels = ["a", "e", "i", "o", "u"];
//         // for (var i = 0; i < array.length; i++) {
//             // for (var x = 0; x < str.length; x++) {
//             //     if(vowels[i] === )
//             //     return str.match(/e|a|i|o|u/g, "")
//             // }
//            console.log(str.match(/ee/g))

//         // }

// }
// alert(delVowels(str));
