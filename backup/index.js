//for image
//Image Variables
var i = 0;
var images = [];
var timing = 5000;

//Image list
images[0] = 'xxx';
images[1] = 'xxx';

//Change IMage Function
function switchImg() {
    document.slide.src = images[i];

    if (i < images.length - 1)
    {
        i++;
    } else {
        i = 0;
    }

    //timing
    setTimeout("switchImg()", timing);
}

//onload
window.onload = switchImg;