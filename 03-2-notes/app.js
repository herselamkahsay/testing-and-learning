const notes = [
    { id: 1, title: "My first note", content: "First note content" },
    { id: 2, title: "My second note", content: "Second note content" },
    { id: 3, title: "My third note", content: "Third note content" },
]
//console.log(notes[i].title);

var noteList = document.getElementById("note-list");
console.log(noteList)
//showNotesList();
noteList.addEventListener('click', function showNotesList() {
    // Create the list element:
    noteList.innerHTML = "";
    var list = document.createElement('ul');

    for (var i = 0; i < notes.length; i++) {

        var note = document.createElement('li');

        // Set its contents
        note.appendChild(document.createTextNode(notes[i].title));

        // Add it to the list:
        list.appendChild(note);

    }
    noteList.appendChild(list);


})
var singleNote = document.getElementById("single-note");
//console.log(singleNote);



var textArea = document.getElementById("note-text").value


function showSingleNote(id) {
    var titles = document.getElementById("input-title").value;

    for (var i = 0; i < titles.length; i++) {
        notes.title = titles[i].value;
        console.log(titles);

    }
    var contents = document.getElementById("note-text").value;

    for (var i = 0; i < contents.length; i++) {
        notes.content = contents[i].value;
        console.log(contents);

    }
    /* var newNote = document.getElementsByClassName("newNote");
 
     if (newNote.style.display == "none") {
         newNote.style.display = "block";
     }
     else {
         newNote.style.display = "none";
     }*/


}
showSingleNote();

function openNewNote() {

}
