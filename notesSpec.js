'use strict';

it('note returns hello', function() {
    var note = new Notes
    expect(note.greeting()).toEqual('hello');
});