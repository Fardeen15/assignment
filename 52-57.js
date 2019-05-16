// no1

// function modal() {
//     document.getElementById("display").setAttribute("class", "modalDiv");
//     document.getElementById("div").style = "display:inline-block;transition: all 0.9s;"
// }

var arr = ["images/tshirt3.jpg", "images/tshirt4.jpg", "images/tshirt5.jpg"];

var img = document.getElementById("mainDiv");
for (var i = 0; i < arr.length; i++) {
    img.innerHTML += `
   <div class = "img">
   <img src="${arr[i]}" height = "200"; width = "200" onclick = modal(${i}) id ="${i}">
   </div>`;
}
var modal = document.getElementById("myModal");
var image = document.getElementById("img01");
function modal(i) {
    // console.log(i);
    var img2 = document.getElementById(i);
    modal.style.display = "block";
    image.src = img2.src;
}