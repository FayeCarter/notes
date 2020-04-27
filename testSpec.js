// function testOnePlusOne() {
//   var two = onePlusOne();
//   return assert.isTrue(two === 2);
// };

// document.write(testOnePlusOne());

function labelTest() {
  var test = new Test('Test one plus one')
  return assert.isTrue(test.label === 'Test one plus one');
}

document.write(labelTest());
