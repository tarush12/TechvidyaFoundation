console.log("hello aman")
document.getElementById("btn").addEventListener("click", function() {
    var model = document.getElementById("volunteer_form")
    model.style.display = model.style.display === "block" ? "none" : "block";
})
window.onclick = function(event) {
    var modal = document.getElementById("volunteer_form")
    if (event.target === modal){
        modal.style.display = "none"
    }
}

var menu = document.getElementById("menu");
var item = document.getElementById("nav")

menu.onclick = function () {
    item.style.display = item.style.display === "block" ? "none" : "block";
}