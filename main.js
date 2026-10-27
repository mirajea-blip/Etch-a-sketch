const gridContainer = document.querySelector(".container");
const containerSize = gridContainer.clientWidth;
const cellSizeForm = document.querySelector("form");

cellSizeForm.addEventListener("submit", () => {

    const userEntry = document.getElementById('cellNumber').value;

    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

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

        cell.onmouseover = () => {

            const cellComputedStyle = window.getComputedStyle(cell);
            const cellColor = cellComputedStyle.backgroundColor;
            let cellRgba = cellColor.slice(cellColor.indexOf("(") + 1, cellColor.indexOf(")")).split(",");

            /* rgba(r,g,b,1) is automatically converted to rgb(r,g,b)
               Without the following if : for colors with b=0 an opacity value inferior to 1 is created
               The 11th hovering event sets an opacity of 0.1 for the cell. 
            */
            if (cellRgba.length > 3) {

                const newOpacity = parseFloat(cellRgba.slice(-1)) + 0.1;
                cell.style.backgroundColor = `rgba(${cellRgba.at(0)}, ${cellRgba.at(1)}, ${cellRgba.at(2)}, ${newOpacity})`;
            
            }

        };

        gridContainer.appendChild(cell);

    }
    
}








