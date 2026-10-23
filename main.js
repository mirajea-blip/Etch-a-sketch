const gridContainer = document.querySelector(".container");
const containerSize = gridContainer.clientWidth;

/**
 * Create a grid based on the number of cell requested 
 * 
 * @param {*} cellNumber 
 * @param {*} containerSize 
 */
function createGrid(cellNumber, containerSize) {

    const cellSize = Math.sqrt(containerSize**2 / cellNumber**2);

    for (let i=1; i<=cellNumber**2; i++) {

        const cell = document.createElement("div");
        cell.classList.add("cellClass");

        cell.style.width = `${cellSize}px`;
        cell.style.height= `${cellSize}px`;

        gridContainer.appendChild(cell);

    }
    
}
