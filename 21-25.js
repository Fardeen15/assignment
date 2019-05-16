// no2
// var userInput = prompt("enter your favourite mobile name");
// document.write(`
//     <h1>My fav phone is : ${userInput}</h1><br/>
//     length of string = ${userInput.length}
//     `)

// no3
// var religion = "pakistani";
// document.write(`<h1>string : ${religion} </h1><br></br><h2>index of 'n' = ${religion.indexOf("n")}</h2>`)

// no4
// var hy = "helloo world";
// document.write(`
//     string : ${hy} <br><br> laast index of "l" : ${hy.lastIndexOf("l")}
//     `) 

// no5
// var hy = "pakistami";
// document.write(`
//  string : ${hy} <br><br> character at index 3 = ${hy.charAt(3)}
// `)

// no7
// var city = "hyderabad";
// document.write(`
//  city = ${city}<br><br> after replacement = ${city.replace("hyderabad","islambad")}
// `)

// no8
// var message = "Ali and Sami are best friends.They play cricket and football together."; 
// document.write(`
// message = ${message}<br><br> replacement and to & = ${message.replace(/and/g,"&")}
// `)

// no14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("enter");
// var x = false;
// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(`
//     ${userInput}is avaliable at index ${i}
//     `)
//         x = true;
//     }
// }
// if (x === false) {
//     document.write(`
//         sorry ${userInput}is not avaliable
//         `)
// }

// no 16
// var university = "University of Karachi" ;
// var spl = university.split("");
// for (var i = 0 ; i < spl.length; i++) {
//     document.write(`${spl[i]}<br>`)
// }

// var a = Math.random();
// var b = a * 2;
// var c = Math.ceil(b)
// console.log(c)
// if(c === 2) {
//     document.write("head")
// }
// else{
//     document.write("tail")
// }

// var a = Math.random();
// var b = a * 5;
// var c = Math.ceil(b)
// // console.log(c)
// var userInput = prompt("enter num betwen 1 to 10 ");
// if (userInput === c) {
//     alert("congo");
// }
// else{
//     alert("sorry wrong num");
// }


// var userInput = prompt("enter ur weigth");
// // console.log(userInput.split(""))
// // var spl = userInput.split();
// // console.log(spl)
// var b = userInput.indexOf("k");
// // console.log(userInput.split("").slice(0,b).join(""))
// document.write(`
//  user weigth is ${userInput.split("").slice(0,b).join("")}
// `)