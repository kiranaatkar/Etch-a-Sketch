const container = document.querySelector(".container");
let gridWidth = 10;

function createGrid(gridWidth) {
  container.style.gridTemplateColumns = "1fr ".repeat(gridWidth);

  for (let i = 1; i <= gridWidth ** 2; i++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("gridElement");
    container.appendChild(newSquare);
  }

  let gridElements = document.querySelectorAll(".gridElement");
  gridElements.forEach((element) =>
    element.addEventListener("mouseenter", sketch)
  );
}

function sketch(e) {
  this.style.backgroundColor = "black";
}

function resetGrid(e) {
  let gridElements = document.querySelectorAll(".gridElement");
  gridElements.forEach((element) => (element.style.backgroundColor = "white"));
  let gridWidth = prompt("Enter new grid width (max 100): ");
  while (gridWidth > 100) {
    gridWidth = prompt("Grid width must be less than 100.");
  }
  createGrid(gridWidth);
}

createGrid(gridWidth);

let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", resetGrid);
