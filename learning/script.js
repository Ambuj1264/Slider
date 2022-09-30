
var arr_image = ["a", "b", "c"];

var num = 0;
function nextImage() {
    num++;
    if (num >= arr_image.length) {
        num = 0;
        document.getElementById("box").innerHTML = `<img id="slider" src="img/${arr_image[num]}.jpg" >`;

    }
    else {
        document.getElementById("box").innerHTML = `<img id="slider" src="img/${arr_image[num]}.jpg" >`;


    }
}
function prevImage() {
    num--;

    if (num < 0) {
        num = arr_image.length - 1;
        document.getElementById("box").innerHTML = `<img id="slider" src="img/${arr_image[num]}.jpg" >`;

    }
    else {
        document.getElementById("box").innerHTML = `<img  id="slider" src="img/${arr_image[num]}.jpg" >`;

    }
}
setInterval(nextImage,6500)