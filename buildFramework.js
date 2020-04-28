function it(label, testFunction) {
    console.log(label)
    testFunction()
};

function expect(a) {
    var toEqual = function(b) {
        if (a === b) {
            console.log("Pass")
        } else {
            console.log("Fail")
        }
        
    }
    return {
        toEqual: toEqual
    }
}

it("1+2 =3", function() {  
    expect((1 + 2)).toEqual(3)
})



