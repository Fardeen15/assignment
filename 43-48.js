// no:3
function delRow() {
    // console.log(this)
    // var lenght = document.getElementById("tabel").length;
    // var del = document.getElementById("tabel").delRow(lenght)
    // return del;
    // document.getElementById("table").deleteRow('0');
}
function addData() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var stage = document.getElementById("class").value;
    // console.log(name)
    // console.log(age)
    // console.log(stage)
    document.getElementById("tabel").innerHTML += `<tr>
                <td>${name}</td>
                 <td>${age}</td>
                <td>${stage}</td>
        <td><input type="button" value="delete" onclick="delRow()"></td>

                </tr>`
}
// <td><input type="button" value="delete" onClick = ${delRow()} ></td>



// function formClear() {
//     $("#name").value("");
//     $("#age").value("");
//     $("#stage").value("");
// }