const notes = [
    { id: 61, title: "My first note", content: "First note content" },
    { id: 62, title: "My second note", content: "Second note content" },
    { id: 63, title: "My third note", content: "Third note content" },
]
//console.log(notes[i].title);

var noteList = document.getElementById("note-list");

//console.log(noteList)
showNotesList();
function showNotesList() {
    const singleNote = document.getElementById("singleNote");
    singleNote.style.display = "none";
    const noteList = document.getElementById("note-list");
    noteList.style.display = "block";

    // Create the list element:
    noteList.innerHTML = "";
    var list = document.createElement('ul');

    for (let i = 0; i < notes.length; i++) {

        var note = document.createElement('li');

        // Add it to the list:
        list.appendChild(note);
        //create span for each li
        let span = document.createElement('span');
        note.appendChild(span);
        span.classList.add('title');
        // Set its contents
        span.appendChild(document.createTextNode(notes[i].title));
        span.addEventListener('click', (e) => {
            e.preventDefault();
            showSingleNote(notes[i].id);

        });
        //add delete button for each list
        var deleteBtn = document.createElement('span');
        deleteBtn.innerText = "delete"
        deleteBtn.classList.add('delete');
        note.appendChild(deleteBtn);
        list.addEventListener('click', function (e) {
            if (e.target.classList == 'delete') {
                const li = e.target.parentElement;
                list.removeChild(li);
            }
        });

        //add delete button for each list
        /* var deleteBtn = document.createElement('button');
         deleteBtn.innerText = "delete"
         deleteBtn.classList.add('delete');
         note.appendChild(deleteBtn);
         list.addEventListener('click', function (e) {
             if (e.target.className == 'delete') {
                 list.removeChild(deleteBtn);
             }
         });*/



        //noteList.appendChild(deleteBtn);

        // Add class name
        //note.classList.add('title');

    }
    //noteList.appendChild(list);
    noteList.appendChild(list);


    // add button

    let btn = document.createElement('button');
    btn.innerText = "Add note"
    noteList.appendChild(btn);
    // add class name in the button tag
    btn.type = "button";
    btn.classList.add('btn', 'btn-success');

    //btn.addEventListener('click', showSingleNote(id));

}


function showSingleNote(id) {
    const singleNote1 = document.getElementById("singleNote");
    singleNote1.style.display = "block";
    const noteList = document.getElementById("note-list");
    noteList.style.display = "none";

    let note;
    for (let i = 0; i < notes.length; i++) {
        if (id == notes[i].id) {
            note = notes[i];
        }
    }

    document.getElementById("input-title").value = note.title;
    document.getElementById("note-text").value = note.content;
}

function initShowAll() {
    var showBtn = document.getElementById("show-all");
    //console.log(showBtn);
    showBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showNotesList();
    });

}
initShowAll();
