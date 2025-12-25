
const inner = document.querySelector("h1");

function changeText(element)
{
    element.innerHTML = "This text has been changed";
}

// changeText(inner);

let inputText = document.querySelector("input");
let button = document.querySelector("[update-text]");

button.addEventListener('click', () => {
    inner.innerHTML = inputText.value;
})

const hoverText = document.querySelector("[hover-text]");

hoverText.style.margin = "10px";
hoverText.style.padding = "30px";
hoverText.addEventListener('mouseover', () => {
    hoverText.innerHTML = "Idiot";
    // hoverText.style.color = 'red'; 
    hoverText.style.margin = "200px";
    hoverText.style.transition = ".4s";
})
hoverText.addEventListener('mouseleave', () => {
    hoverText.innerHTML = "Hover to change text";
    hoverText.style.margin = "10px";
})
const context = document.querySelector("#context");
console.log(context.textContent); 

function changeContent()
{
    const specialBtn = document.querySelector("[special-btn]");
    const retry = document.querySelector("[retry]");
    specialBtn.innerHTML = "downloading ...";
    setTimeout(()=>{
        specialBtn.innerHTML = "Downloaded";
        retry.outerHTML = `<p> if download not started, click here to <a href="#" target="blank">retry</a></p>`;
    },2000);
}