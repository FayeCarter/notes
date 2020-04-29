it('making a note in the notebook stores a note in the notebook', function () {
    var notebook = new Notebook
    notebook.makeNote('buh')
    expect(notebook.thingsToRemember[0].content).toEqual('buh')
})


it(' should be able to give me all the notes in the notebook pt 1', function () {
    var notebook = new Notebook;
    for (let index = 0; index < 5; index++) {
        notebook.makeNote(`note number:` + index);        
    }

    expect(notebook.getNotes()[0].content).toEqual('note number:0')
})

it(' should be able to give me all the notes in the notebook pt 2', function () {
    var notebook = new Notebook;
    for (let index = 0; index < 5; index++) {
        notebook.makeNote(`note number:` + index);        
    }

    expect(notebook.getNotes()[notebook.thingsToRemember.length - 1].content).toEqual('note number:4')
})