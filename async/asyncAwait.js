/*The await keyword can only be used inside an async function. await is an operator: 
it returns the resolved value of a promise. Since promises resolve in an indeterminate amount 
of time, await halts, or pauses, the execution of our async function until a given promise is 
resolved.*/
const shopForBeans = require('./asyncAwaitLibrary.js');
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  
  //let value = await shopForBeans();
  console.log(`3. Great! I'm making ${await shopForBeans()} beans for dinner tonight!`);
}

getBeans();

