it('making a note in the notebook stores a note in the notebook', function () {
    var notebook = new Notebook
    notebook.makeNote('buh')
    expect(notebook.thingsToRemember[0].content).toEqual('buh')
})
