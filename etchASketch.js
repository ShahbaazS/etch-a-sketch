function generateGrid(length, width) {
    const grid = document.querySelector("#grid");
    const gridLength = grid.clientHeight;
    for (let row = 0; row < length; row++) {
        for (let col = 0; col < width; col++) {
            const square = document.createElement("div");
            square.setAttribute("style", `height: ${gridLength / length}px; width: ${gridLength / width}px`);
            square.classList.add("square");
            grid.appendChild(square);
        }
    }
}

generateGrid(4, 4);
setActive();

const slider = document.querySelector("#slider");
slider.onchange = (e) => {
    if (e.target.value > 100) e.target.value = 100;
    if (e.target.value <= 0) e.target.value = 1;
    const squares = document.querySelectorAll(".square");
    generateGrid(e.target.value, e.target.value);
    squares.forEach(square => square.parentNode.removeChild(square));
    setActive();
};

function setActive() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", function (e) {
        e.target.classList.add("hover");
    }))
}