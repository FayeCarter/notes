function testOnePlusOne() {
    var two = onePlusOne();
    return assert.isTrue(two === 2);
};

document.write(testOnePlusOne());