const notes = [
    { id: 1, title: "My first note", content: "First note content" },
    { id: 2, title: "My second note", content: "Second note content" },
    { id: 3, title: "My third note", content: "Third note content" },
]
//console.log(notes[i].title);

var noteList = document.getElementById("note-list");
//console.log(noteList)
//showNotesList();
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
        // Add class name
        note.classList.add('title');
        note.classList.add('delete');

    }
    noteList.appendChild(list).addEventListener('click', showSingleNote());


    // add button

    let btn = document.createElement('button');
    btn.innerText = "Add note"
    noteList.appendChild(btn);
    // add class name in the buuton tag
    btn.classList.add('btn-style');
    btn.addEventListener

}

//console.log(singleNote);
showSingleNote();

function showSingleNote(id) {
    var singleNote1 = document.getElementById("singleNote");
    singleNote1.style.display = "block";
    for (let i = 0; i < notes.length; i++) {
        id = notes[i].id;
    }
    //console.log(id);


    var titles = document.getElementById("input-title").value;
    //filling input
    for (var i = 0; i < titles.length; i++) {
        notes.title = titles[i].value;
        console.log(titles);

    }
    //filling textarea
    var contents = document.getElementById("note-text").value;

    for (var i = 0; i < contents.length; i++) {
        notes.content = contents[i].value;
        console.log(contents);

    }
}
function showAll() {
    var showBtn = document.getElementById("add-icon");
    //console.log(showBtn);
    showBtn.addEventListener('click', showNotesList());

}
showAll();
