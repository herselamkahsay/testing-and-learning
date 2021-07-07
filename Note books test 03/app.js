var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var save = document.getElementById("add-icon")
var xIcon = document.getElementById("x-icon");
var i = 0;

//event listener

save.addEventListener("click", function () {
    makeNote();
})

xIcon.addEventListener("click", function () {
    openNewNote();

})
//remove when we click x-icon and open new note when we click create notes

//call the two function
function makeNote() {

}
function openNewNote() {
    if (container3.style.display == "none") {
        container3.style.display = "block";
    }
    else {
        container3.style.display = "none";
    }

}