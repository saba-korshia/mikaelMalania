// 1. onClick events

function backgroundChanger() {
    let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "grey"];
    // let randomColor = colors[Math.floor(Math.random() * colors.length)];

    let body = document.querySelector("body");
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(randomColor)
    body.style.backgroundColor = randomColor;
}