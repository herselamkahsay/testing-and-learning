const notes = [
    { id: 1, title: "My first note", content: "First note content" },
    { id: 2, title: "My second note", content: "Second note content" },
    { id: 3, title: "My third note", content: "Third note content" },
]
//console.log(notes[i].title);

var noteList = document.getElementById("note-list");
showNotesList();
function showNotesList() {
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

}



/*let noteList = [];
function showNotesList() {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < noteList.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(noteList[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}
noteList = document.getElementById("note-list");
//document.getElementById("note-list").appendChild(showNotesList(notes[1]));
//const noteList = notes.map(showNotesList);
//let noteList = [];
//noteList = document.getElementById("note-list");


*/
