/* The word “async” before a function means one simple thing: a function always returns a promise. 
Other values are wrapped in a resolved promise automatically.

The keyword await makes JavaScript wait until that promise settles and returns its result.
 */
function locationPromise(location)
{
    return new Promise((resolve,reject) => {
        console.log(`searching for your location : ${location} ...`);

        if(location === 'Chennai')
        {
            resolve(`Location found for ${location}`);
        }else if(location === 'Bangalore')
        {
            resolve(`Location found for ${location}`);
        }
        else{
            reject('Location not found. Try Again !!!');
        }
    })
}

/* with the usage of async/await we tell JS to wait for the execution of Promise function 
and then return the result .

without them, if we execute , it will return the Promise objects to the console 
 */

// To explicitely call reject we need to use try/catch syntax

async function trackLocation()
{
    try{
        const receiveLocation = await locationPromise('Kolkata');
        console.log(receiveLocation);    
        /* 
        OUTPUT : searching for your location : Chennai ...
                 Location found for Chennai */   
    }
    catch(err)
    {
        console.log(err);
        /* OUTPUT : searching for your location : Kolkata ...
            Location not found. Try Again !!! */
    }
}

trackLocation();
