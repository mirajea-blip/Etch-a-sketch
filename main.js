const gridContainer = document.querySelector(".container");
const containerSize = gridContainer.clientWidth;
const cellSizeForm = document.querySelector("form");

cellSizeForm.addEventListener("submit", () => {

    const userEntry = document.getElementById('cellNumber').value;

    createGrid(userEntry, containerSize)
    
    event.preventDefault();

});

/**
 * Create a grid based on the number of cells requested 
 * 
 * The size of the cells is computed so that cells 
 * fill the container. 
 * 
 * @param {number} cellNumber 
 * @param {number} containerSize 
 */
function createGrid(cellNumber, containerSize) {

    const cellSize = Math.sqrt(containerSize**2 / cellNumber**2);

    for (let i=1; i<=cellNumber**2; i++) {

        const cell = document.createElement("div");
        cell.classList.add("cellClass");

        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        cell.onmouseover = () => cell.style.backgroundColor = "red";

        gridContainer.appendChild(cell);

    }
    
}








