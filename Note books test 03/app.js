
function opentextarea() {

    var input = document.createElement('textarea');
    input.name = 'post';
    input.maxLength = 5000;
    input.cols = 60;
    input.rows = 30;
    input.className = 'customTextarea';
    var button = document.createElement('button');
    var noteBody = document.getElementById('body');
    while (noteBody.childNodes.length > 0) {
        noteBody.removeChild(noteBody.childNodes[0]);
    }
    noteBody.appendChild(input);
    noteBody.appendChild(button);
}
