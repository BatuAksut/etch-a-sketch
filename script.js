let container = document.querySelector("#container")

for(let i=1;i<=16;i++){
    for(let j=1;j<=16;j++){
        let div = document.createElement("div")
        div.classList.add("square");
        container.appendChild(div)

    }

}

function createGrid(gridSize) {
    
    let squareSize = 544 / gridSize;  
    
    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            let div = document.createElement("div");
            div.classList.add("square");
            div.style.width = `${squareSize}px`;  
            div.style.height = `${squareSize}px`;  
            container.appendChild(div);
        }
    }
}


let button = document.querySelector("button")

button.addEventListener("click",newGrid)

function newGrid(){
    let gridSize = parseInt(prompt("Enter new grid size (e.g., 16)"), 10);

    if (isNaN(gridSize) || gridSize <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }
    if (gridSize > 100) {
        alert("Please enter a value less than or equal to 100.");
        return;
    }
     container.innerHTML = ""
     createGrid(gridSize);
    colorize()
}

function colorize(){
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
      
            let randomColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
     
            square.style.backgroundColor = randomColor;
        });
    });
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

colorize()