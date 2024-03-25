const container = document.querySelector(".container");

function createGrid(width = null){
    let size = 16;
    for(let i=0; i<size; i++){
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("style", "border: 2px solid black");
        for(let j=0; j<size; j++){
            const div = document.createElement("div");
            div.setAttribute("style", `width: ${width}px;
            height: ${width}px;
            background-color: pink;
            margin: 5px;`);

            div.setAttribute("id", `${i}-${j}`);

            div.textContent = div.getAttribute("id");
            rowDiv.setAttribute("style", 
            `display: flex;`)
            rowDiv.appendChild(div);
        }
        container.appendChild(rowDiv);
    }
}
createGrid(60);