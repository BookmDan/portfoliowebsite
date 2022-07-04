
function nextSlide(slideNo, dir) {
    if (!dir) { dir = "up"; }
    
    console.log("Current slide: " + slideNo)
    
    currentSlide = document.getElementById("slide-" + slideNo);
    currentSlide.style.display = "inline";
    
    function next() { 
        currentSlide.style.display = "none";
        if (slideNo == 4) { direction = "down"}
        if (slideNo == 0) { direction = "up"}
        dir == "up" ? nextSlide(slideNo + 1, "up") : nextSlide(slideNo - 1, "down");
    }
    setTimeout(next, 2000); 
}

function slideShow(id) {
    var container = document.getElementById(id);
    var imageCount = container.childElementCount;
    for (i = 0; i < imageCount; i++) {
        container.children[i].id = "slide-" + i;
    }
    container.children[imageCount - 1].setAttribute("class", "last-slide");
    nextSlide(0);
}
