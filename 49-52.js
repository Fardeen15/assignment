// no2

// function readmore(){
//  var a = document.getElementById("para").innerHTML += `
//     <li>oppo</li>
//     <li>vivo</li>
//     <li>A7</li>
//     <li>IphoneX</li>
//     ` 
//     // console.log(a);
//     document.getElementById("link").innerHTML = ""
// }
var nameArr = [];
var ageArr = [];
var classArr = [];


function add() {
    var name = document.getElementById("studentName").value;
    var Age = document.getElementById("studentAge").value;
    var Class = document.getElementById("studentClass").value;
    nameArr.push(name);
    ageArr.push(Age);
    classArr.push(Class);
    document.getElementById("tabel").innerHTML = ""
    addData();
}

function addData() {
    document.getElementById("tabel").innerHTML = `
    <tr>
    <th>s.no</th>
    <th>name</th>
    <th>age</th>
    <th>class</th>
    </tr>
`

    for (var i = 0; i < nameArr.length; i++) {
        // console.log(i)
        document.getElementById("tabel").innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${nameArr[i]}</td>
        <td>${ageArr[i]}</td>
        <td>${classArr[i]}</td>
        <td><button onclick = "delrow(${i})">del row</button></td>
        <td><button onclick = "selectedRow(${i})">Edit</button></td>
        </tr>
        `
    }
    document.getElementById("studentName").value = "";
    document.getElementById("studentAge").value = "";
    document.getElementById("studentClass").value = "";

}

function delrow(a) {
    // console.log(a)
    nameArr.splice(a, 1);
    ageArr.splice(a, 1);
    classArr.splice(a, 1);
    addData();
}

var index;

function selectedRow(b) {
    document.getElementById("studentName").value = nameArr[b];
    document.getElementById("studentAge").value = ageArr[b];
    document.getElementById("studentClass").value = classArr[b];
    index = b;
    // console.log(name);
}

function update() {
    index;
    // console.log(index)
    var name = document.getElementById("studentName").value;
    var age = document.getElementById("studentAge").value;
    var Class = document.getElementById("studentClass").value;

    nameArr.splice(index, 1, name);
    ageArr.splice(index, 1, age);
    classArr.splice(index, 1, Class);
    addData();
}









