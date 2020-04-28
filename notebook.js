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
        words = this.thingsToRemember[i].content
        var characters = words.substr(0, 20);
        notes.push( characters)

    }
    return notes
}
