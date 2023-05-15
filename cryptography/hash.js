const {createHash} = require ('crypto');

//Creating a string hash

function hash(input)
{
    return createHash('sha256').update(input).digest('hex');
}