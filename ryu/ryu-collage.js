const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;
canvas.style.width = window.innerWidth + "px";
canvas.style.height = window.innerHeight + "px";

const context = canvas.getContext("2d");
context.scale(2, 2);

let aimX = null;
let aimY = null;
let currentX = null;
let currentY = null;

let index = 0;
const images = ["ryu.png"].map(src => {
    const image = document.createElement("img");
    image.src = src;
    return image;
})

document.addEventListener("mousemove", function(event) {
    aimX = event.pageX;
    aimY = event.pageY;
    if(currentX === null) {
        currentX = event.pageX;
        currentY = event.pageY;
    }
})

canvas.addEventListener("click", function() {
    index++;
    if(index >= images.length) {
        index = 0;
    }
})

const draw = function() {
    if(currentX) {
        if(images[index].complete) {
            context.drawImage(images[index], currentX, currentY, 50, 400) ;
        }
        currentX = currentX + (aimX - currentX) * 0.05;
        currentY = currentY + (aimY - currentY) * 0.05;
    }
    requestAnimationFrame(draw);
}

draw();
