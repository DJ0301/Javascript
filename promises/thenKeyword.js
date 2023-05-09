const {checkInventory} = require('./library(thenKeyword).js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolved) => {
  console.log(resolved);
}

const handleFailure = (reject) => {
  console.log(reject);
}
checkInventory(order).then(handleSuccess,handleFailure);