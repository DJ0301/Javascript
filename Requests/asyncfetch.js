/*
async await GET boilerplate

const getData = async() =>
{
    //sends request
    try{
        const response = await fetch('api-link endpoint');
    //handles response if successful
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




*/