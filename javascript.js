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

            let r = Math.floor(Math.random() * 255 + 1);
            let g = Math.floor(Math.random() * 255 + 1);
            let b = Math.floor(Math.random() * 255 + 1);

            div.setAttribute("style", `width: ${width}px;
            height: ${width}px;
            background-color: rgb(${r}, ${g}, ${b});`);

            rowDiv.setAttribute("style", 
            `display: flex;`);

            let speed = [r/9, g/9, b/9];

            addEventListenersToDiv(div, speed);


            rowDiv.appendChild(div);
        }
        container.appendChild(rowDiv);
    }
}

function addEventListenersToDiv(elem, speed){
    elem.addEventListener("mouseenter", ()=>{
        let clr = elem.style.backgroundColor;
        console.log(clr);
        clr = clr.slice(4, -1).split(",");
        console.log(clr);
        elem.style.backgroundColor = `rgb(${clr[0] - speed[0]}, ${clr[1] - speed[1]}, ${clr[2] - speed[2]})`;
    });
}