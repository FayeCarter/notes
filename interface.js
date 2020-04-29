document.addEventListener('DOMContentLoaded', function(event) {
    var notebook = new Notebook()
    notebook.makeNote("hello, I have a habit of rambling on and it's actually quite bad I just talk incessantly wihtout any possibloity of people stopping me") 
    
    updateFeed()

    function updateFeed() {
        var noteContainer = document.getElementById('feed')
        while (noteContainer.lastElementChild) {
            noteContainer.removeChild(noteContainer.lastElementChild);
        }
        var notes = notebook.getNotes()
        for(var i = 0; i <notes.length; i++) {
            var div = document.createElement('div')
            div.innerHTML = notes[i].content.substring(0,20)
            div.id = i
            div.classList.add("note-style")
            noteContainer.appendChild(div);
        }
        
    }
  
    document.addEventListener('click', function(e) {
        if (e.target.id === 'submit') {
            e.preventDefault();
            var newNote = document.getElementById('note-text'),
            noteContent = newNote.value;
            notebook.makeNote(noteContent);
            document.getElementById('new-note-form').reset();
            updateFeed()
        } else if (!isNaN(parseInt(e.target.id))) {
            var notes = notebook.getNotes(),
            index = parseInt(e.target.id),
            popupContent = notes[index].content
            pop.open(popupContent)
        }
    })
})