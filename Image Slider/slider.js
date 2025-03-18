const images = [
    "../ASSETS/image/pexels-nickkwanhk-2745258.jpg",
    "../ASSETS/image/pexels-tomfisk-2169857.jpg",
    "../ASSETS/image/pexels-lorenza-magnaghi-660554185-29830085.jpg",
    "../ASSETS/image/pexels-eberhardgross-443446.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const left = document.getElementById("left");
const right = document.getElementById("right");

function showImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    sliderImage.src = images[currentIndex];
}

left.addEventListener("click", () => showImage(currentIndex - 1));
right.addEventListener("click", () => showImage(currentIndex + 1));

showImage(currentIndex);
