'use strict';

function Note(content) {
    this.content = content
}

Note.prototype.greeting = function() {
    return "hello"
}