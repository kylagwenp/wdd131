let x = 5;
let y = 10;
x += y;

// so ano nngyari...
// x is now 15 and y is still 10 daw

const btn = document.querySelector("button");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});