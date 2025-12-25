const grandParent = document.querySelector(".grand-parent");
const Parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Event bubbling goes from nearest element to farest element (bottom up approach)

document.addEventListener('click' , (e) => {
    console.log('Document clicked');
})

grandParent.addEventListener('click', (e) => {
    console.log('Grand parend clicked');
})
Parent.addEventListener('click', (e) => {
    console.log('Parent clicked');
})
child.addEventListener('click', (e) => {
    console.log('Child clicked');
})

//Capture events - goes from top to bottom, will be passed as third argument

document.addEventListener('click' , (e) => {
    console.log('Document Captured');
}, {capture : true}) //by default { capture : false }

grandParent.addEventListener('click', (e) => {
    console.log('Grand parend Captured');
}, {capture : true})
Parent.addEventListener('click', (e) => {
    console.log('Parent Captured');
}, {capture : true})
child.addEventListener('click', (e) => {
    console.log('Child Captured');
}, {capture : true})

/* 
OUTPUT : 

Document Captured 
Grand parend Captured
Parent Captured
Child Captured
Child clicked
Parent clicked
Grand parend clicked
Document clicked */

// console.clear();

/* once : true => sets to execute the event only once, no matter how many time 
user clicks */

document.addEventListener('click' , (e) => {
    console.log('Document Captured');
}, {once : true}) //by default { once : false }

grandParent.addEventListener('click', (e) => {
    console.log('Grand parend Captured');
}, {once : true})
Parent.addEventListener('click', (e) => {
    console.log('Parent Captured');
}, {once : true})
child.addEventListener('click', (e) => {
    console.log('Child Captured');
}, {once : true})

// removing event listner using set timeout function

function handleEvent(e)
{
    console.log('handle child');
    
}
setTimeout(() => {
        child.removeEventListener('click',handleEvent)
    }, 5000)

child.addEventListener('click', handleEvent);


// EVENT DELEGATION
//This will disable unnecessary event listeners getting triggered and required necessary trigger

document.querySelector(".card").addEventListener('click', (e) => {
    if(e.target.matches("button"))
    {
        console.log('clicked')
    }
})