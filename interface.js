document.addEventListener('DOMContentLoaded', function(event) {
    var notebook = new Notebook()
    notebook.makeNote("hello") 
    
    updateFeed()

    function updateFeed() {
        var noteContainer = document.getElementById('feed')
        while (noteContainer.lastElementChild) {
            noteContainer.removeChild(noteContainer.lastElementChild);
        }
        var notes = notebook.getNotes()
        for(var i = 0; i <notes.length; i++) {
            var div = document.createElement('div')
            div.innerHTML = notes[i].content
            noteContainer.appendChild(div)
        }
        
    }
    document.getElementById('submit').addEventListener('click', function(e) {
        e.preventDefault()
        var newNote = document.getElementById('note-text'),
        noteContent = newNote.value
        notebook.makeNote(noteContent)
        document.getElementById('new-note-form').reset()
        updateFeed()
    })
})