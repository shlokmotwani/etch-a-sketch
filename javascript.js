const body = document.querySelector("body");
body.setAttribute("style", "background-color: rgb(178, 102, 255);")

const newGridButton = document.createElement("button");
const containerBig = document.querySelector(".container-big");
const containerGrid = document.createElement("div");


//sets containerBig attributes
containerBig.setAttribute("style", `display: flex;
flex-direction: column;
align-items: center;`);

//sets containerBig attributes
containerGrid.setAttribute("class", "container-grid");
containerGrid.setAttribute("style", `background-color: rgb(250,235,215);`);

//sets button attributes
newGridButton.setAttribute("style", `width: 450px;
height: 50px;
font-size: 20px;
margin: 20px;
border-radius: 10px;`);

newGridButton.textContent = "Create My Sketchpad!";

containerBig.appendChild(newGridButton);
containerBig.appendChild(containerGrid);

//event listener on button
newGridButton.addEventListener("click", ()=>{
    let size = +prompt("How many squares do you want per side?");
    if(size > 70 || size < 0){
        size = 70;
    }
    while(containerBig.firstChild.nextSibling.firstChild){
        containerBig.firstChild.nextSibling.removeChild(containerBig.firstChild.nextSibling.firstChild);
    }

    createGrid(size);
})


//creates a new grid on button click
function createGrid(size){
    let width = 850/(1.2 * size);
    for(let i=0; i<size; i++){
        const rowDiv = document.createElement("div");
        for(let j=0; j<size; j++){
            const div = document.createElement("div");

            div.setAttribute("style", `width: ${width}px;
            height: ${width}px;
            border: 2px solid black;
            border-radius: 7px;`);

            rowDiv.setAttribute("style", 
            `display: flex;`);

            addEventListenerToDiv(div);


            rowDiv.appendChild(div);
        }
        containerGrid.appendChild(rowDiv);
    }
}

function addEventListenerToDiv(elem){
    elem.addEventListener("mouseenter", ()=>{
        let clr = elem.style.backgroundColor;
        let r = g = b = 255;
        if(!clr){
            r = Math.floor(Math.random() * 255 + 1);
            g = Math.floor(Math.random() * 255 + 1);
            b = Math.floor(Math.random() * 255 + 1);

            elem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
        
        //stores rgb value of current color of a div in an array
        clr = clr.slice(4, -1).split(",");

        let speed = [r/9, g/9, b/9];
        elem.style.backgroundColor = `rgb(${clr[0] - speed[0]}, ${clr[1] - speed[1]}, ${clr[2] - speed[2]})`;

    });
}