const cookBeanSouffle = require('./tryCatchLibrary.js');

// Write your code below:

async function hostDinnerParty()
{
  try{
    const myVal = await cookBeanSouffle();
    console.log(`${myVal} is served!`);

  }
  catch(error)
  {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}
hostDinnerParty();



