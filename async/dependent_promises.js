const {shopForBeans, soakTheBeans, cookTheBeans} = require('./dependent_promises_library.js');
async function makeBeans()
{
  let type =  await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner)
}
makeBeans();