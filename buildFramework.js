function it(label, testFunction) {
    document.write(label)
    try { testFunction();
}
catch(err) {
    document.write(err.message)
}
};

function expect(a) {
    var toEqual = function(b) {
        if (a === b) {
            document.write("Pass")
        } else {
            document.write("Fail")
        }
        
    }
    return {
        toEqual: toEqual
    }
}





