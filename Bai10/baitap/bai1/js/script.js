//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide

function showSlides() {
    var i;
    var container = document.getElementsByClassName("slideshow-container");
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    container[0].setAttribute('data-id', slideIndex);
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }

    //tự động chuyển đổi slide sau 10s
    // setTimeout(showSlides, 10000);
    setTimeout(function(){ showSlides(); }, 10000);
}

//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function preSlide() {
    var  slideIndex = parseInt(document.getElementsByClassName('slideshow-container')[0].getAttribute('data-id'));
    if (slideIndex >= 1) {
        currentSlide(slideIndex-1);
    }
}

function nextSlide() {
    var  slideIndex = parseInt(document.getElementsByClassName('slideshow-container')[0].getAttribute('data-id'));
    if (slideIndex <= 4) {
        currentSlide(slideIndex + 1);
    }
}

setTimeout(function(){ nextSlide(); }, 10000);