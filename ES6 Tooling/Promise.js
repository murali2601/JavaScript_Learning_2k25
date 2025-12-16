/* promise are used to get the status eg. downloading a file, searching data , if it is success it is
handled by 'resolve' and if it is failure, it is handled by 'reject' */

let downloadSuccess = true;
let downloadFail = false;

function downloadSuccessPromise()
{
    return new Promise((resolve,reject) => {
        if(downloadSuccess)
        {
            resolve(
                {
                    status : "Dowload successful",
                    history : "Downloaded"
                }
            )
        }
        else if(downloadFail)
        {
            reject(
                {
                    status : "Download failed",
                    history : "Server Error ..."
                }
            )
        }
        else{
            resolve('All is well');
        }
    })
}

downloadSuccessPromise()
.then((message) => {
    console.log(`File ${message.status} and ${message.history} in folder`);
})
.catch((error) => 
{
    console.log(`File ${error.status} due to ${error.history}`);
})
/* 
Another way of using Promise.all() , it returs the array of message
 from different promise that we pass it as array in promise.all([]) */

const video1 = new Promise((resolve,reject) => {
    resolve("Video 1 is successful");
    reject("Video1 unsuccessful");
})

const video2 = new Promise((resolve,reject) => {
    resolve("Video 2 is successful");
    reject("Video2 unsuccessful");
})

const video3 = new Promise((resolve,reject) => {
    resolve("Video 3 is successful");
    reject("Video3 unsuccessful");
})

Promise.all([
    video1,
    video2,
    video3
]).then((messages) => {
    console.log(messages);
}).catch((error) => {
    console.log(error);
})

Promise.race([ // race returns only the first array promise if it is successful, it wont wait for next promises
    video1,
    video2,
    video3
]).then((messages) => {
    console.log(messages);
}).catch((error) => {
    console.log(error);
})


/* 
END OUTPUT 

PS D:\Programing languages\JavaScript\JS Learning\ES6 Tooling> node .\Promise.js
File Dowload successful and Downloaded in folder
[
  'Video 1 is successful',
  'Video 2 is successful',
  'Video 3 is successful'
]
Video 1 is successful */