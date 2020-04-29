function Notebook() {
    this.thingsToRemember = []
}

Notebook.prototype.makeNote = function(noteContents) {
    var note = new Note(noteContents)
    this.thingsToRemember.push(note)
}

Notebook.prototype.getNotes = function() {
    return this.thingsToRemember;
}
