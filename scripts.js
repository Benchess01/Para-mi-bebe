
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("showMessage");
    const message = document.getElementById("message");
    const container = document.querySelector(".container");
    container.style.opacity = "0";
    container.style.transform = "scale(0.8)";
    setTimeout(() => {
        container.style.transition = "all 1s ease-out";
        container.style.opacity = "1";
        container.style.transform = "scale(1)";
    }, 500);

    button.addEventListener("click", function () {
        message.classList.toggle("hidden");
        if (!message.classList.contains("hidden")) {
            button.textContent = "Ocultar mensaje 💔";
            message.style.opacity = "0";
            message.style.transform = "translateY(-20px)";
            setTimeout(() => {
                message.style.transition = "all 0.5s ease-in-out";
                message.style.opacity = "1";
                message.style.transform = "translateY(0)";
            }, 100);
        } else {
            button.textContent = "Haz clic aquí 💌";
            message.style.transition = "all 0.5s ease-in-out";
            message.style.opacity = "0";
            message.style.transform = "translateY(-20px)";
        }
    });

});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0; 
    } else if (index < 0) {
        currentIndex = slides.length - 1; 
    } else {
        currentIndex = index;
    }
    
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[currentIndex].style.display = 'block';
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}
showSlide(currentIndex);

