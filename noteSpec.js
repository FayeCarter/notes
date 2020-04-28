'use strict';

it('note returns hello', function() {
    var note = new Note
    expect(note.greeting()).toEqual('hello');
});

it('creating a new note stores the note text', function() {
    var note = new Note('this is my note')
    expect(note.content).toEqual('this is my note')
})
