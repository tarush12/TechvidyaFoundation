var menu = document.getElementById("menu");
var item = document.getElementById("nav")

menu.onclick = function () {
    item.style.display = item.style.display === "block" ? "none" : "block";

    // if (item.style.right === '-400px') {
    //     item.style.right = '0px';
    // }
    // else {
    //     item.style.right = '-400px';
    // }
}
// window.onclick = function(event) {
//     if (event.target) {
//         if (item.style.display === "block") {
//             item.style.display = "none";
//         }
//     }
// }