/*
/async fetch POST BOILERPLATE CODE
const getData = async() =>
{
    //sends request
    try{
        const response = await fetch('api-link endpoint',{
        method: 'POST'
        body : JSON.stringify({id: '200'})
        })
        if(response.ok)
        {
            const jsonResponse = await response.json();
            //code to execute with the response
        }
    //error handling
        throw new Error('Request failed!');
    } catch(error){
        console.log(error);
    }
}


// fetch('http://api-to-call.com/endpoint', {
// 

// CONVERTS RESPONSE OBJECT INTO JSON
// }). then(response =>
// {
// if (response. ok) {
// return response.json();
// }

// HANDLES ERRORS
// throw new Error ('Request failed!');
// },networkError => console. log (networkError.message)

// HANDLES SUCCESS
// ). then (jsonResponse => {
// / Code to execute with isonResponse
// }) :

*/