it('making a note in the notebook stores a note in the notebook', function () {
    var notebook = new Notebook
    notebook.makeNote('buh')
    expect(notebook.thingsToRemember[0].content).toEqual('buh')
})


it('notebook displays list of notes', function() {
    var notebook = new Notebook
    notebook.makeNote('buh')
    expect(notebook.listAll()[0]).toEqual(['buh'][0])
})

it('notebook displays first 20 characters of the note', function() {
    var notebook = new Notebook
    notebook.makeNote('This is a really, really long note')
    expect(notebook.listAll()[0]).toEqual(['This is a really, re'][0])
})