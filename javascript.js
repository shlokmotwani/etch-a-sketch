const newGridButton = document.querySelector("button");
const container = document.querySelector(".container");

container.setAttribute("style", `display: flex;
flex-direction: column;
align-items: center;`);


newGridButton.setAttribute("style", `width: 450px;
height: 50px;
font-size: 20px;`);

container.appendChild(newGridButton);

newGridButton.addEventListener("click", ()=>{
    let size = +prompt("How many squares do you want per side?");
    if(size > 100 || size < 0){
        size = 100;
    }
    while(container.firstChild.nextSibling){
        container.removeChild(container.firstChild.nextSibling);
    }

    createGrid(size);
})

function createGrid(size){
    let width = 900/size;
    for(let i=0; i<size; i++){
        const rowDiv = document.createElement("div");
        for(let j=0; j<size; j++){
            const div = document.createElement("div");
            div.setAttribute("style", `width: ${width}px;
            height: ${width}px;
            background-color: gray;`);

            rowDiv.setAttribute("style", 
            `display: flex;`);

            addEventListenersToDiv(div);


            rowDiv.appendChild(div);
        }
        container.appendChild(rowDiv);
    }
}

function addEventListenersToDiv(elem){
    elem.addEventListener("mouseenter", ()=>{
        elem.style.backgroundColor = "brown";
    });
}