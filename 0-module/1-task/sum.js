function sum(a, b) {
  let checkNumber = [...arguments].find(val => {
    return (isNaN(val) || typeof val === 'string'); 
  });

  if (!checkNumber) {
    return a + b;
  } else {
    throw new TypeError('Not a number')
  };
}

module.exports = sum;
