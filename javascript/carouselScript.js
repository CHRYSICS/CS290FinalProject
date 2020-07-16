var carouselIndex = 0;
animateCarousel();
var timer = setInterval(animateCarousel, 5000);

function animateCarousel(){
    var photo_collection = document.getElementsByClassName("photo");
    var nav_dots = document.getElementsByClassName("nav-dot")
    for (var index = 0; index < photo_collection.length; index++){
        //photo_collection[index].style.display = "none";
        photo_collection[index].className = photo_collection[index].className.replace(" current", "");
        nav_dots[index].className = nav_dots[index].className.replace(" current", "");
    }

    if (carouselIndex > photo_collection.length - 1) {
        carouselIndex = 0;
    } else if(carouselIndex < 0){
        carouselIndex = 2
    } 

    curPhoto = photo_collection[carouselIndex];
    curPhoto.className += " current";
    curDot = nav_dots[carouselIndex];
    curDot.className += " current";
    carouselIndex++;
}

function navCarousel(direction){
    if(direction == "prev"){
        carouselIndex -= 2;
        animateCarousel();
    }
    else if(direction == "next"){
        animateCarousel();
    } else{
        console.log("directional input incorrect");
    }
}

document.getElementById("prevButton").addEventListener("click", function() {navCarousel('prev')});
document.getElementById("nextButton").addEventListener("click", function() {navCarousel('next')});
