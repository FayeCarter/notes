function it(label, testFunction) {
    document.write(label)
    testFunction()
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

it("1+2 =3", function() {  
    expect((1 + 2)).toEqual(3)
})



