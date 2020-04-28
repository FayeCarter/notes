function Notebook() {
    this.thingsToRemember = []
}

Notebook.prototype.makeNote = function(noteContents) {
    var note = new Note(noteContents)
    this.thingsToRemember.push(note)
}

Notebook.prototype.listAll = function() {
    var notes = []
    for (var i =0; i < this.thingsToRemember.length; i++) {
        notes.push(this.thingsToRemember[i].content)
    }
    return notes
}
