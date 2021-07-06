var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var save = document.getElementsByName("add-icon");
var xIcon = document.getElementsByName("x-icon");
var i = 0;

//event listener
xIcon.addEventListener("click", function () {
    typeNote();

})
//remove when we click x-icon and open new note when we click create notes


save.addEventListener("click", function () {
    makeNote();
})
//call the two function
function makeNote() {

}
function typeNote() {
    if (container3.style.display == "none") {
        container3.style.display == "block";
    }
    else {
        container3.style.display == "none";
    }
    ;
}