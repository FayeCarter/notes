// function testOnePlusOne() {
//   var two = onePlusOne();
//   return assert.isTrue(two === 2);
// };

// document.write(testOnePlusOne());

function labelTest() {
  var testedItem = new Item('Test one plus one')
  if ( assert.isTrue(testedItem.name === 'Test one plus one')) {
    return `${testedItem.name} passes`
  }
};


document.write(labelTest());
