function initCarousel(carousel) {
    const arrowLeft = carousel.querySelector(".fa-angle-left");
    const arrowRight = carousel.querySelector(".fa-angle-right");
    const moviesList = carousel.querySelector(".movies-list");
    const movieContainers = carousel.querySelectorAll(".movie-container");

    const vagonWidth = movieContainers[0].clientWidth;
    const vagonCount = movieContainers.length;
    const visibleVagons = 6;

    let currentIndex = 0;

    const showHideIcons = () => {
        arrowLeft.style.display = currentIndex === 0 ? "none" : "block";
        arrowRight.style.display = currentIndex < vagonCount - visibleVagons ? "block" : "none";
    };

    arrowLeft.addEventListener("click", () => {
        const moveBy = Math.min(currentIndex, visibleVagons);
        currentIndex -= moveBy;
        const newPosition = currentIndex * vagonWidth;
        moviesList.scrollTo({ left: newPosition, behavior: "smooth" });
        showHideIcons();
    });

    arrowRight.addEventListener("click", () => {
        const remainingVagons = vagonCount - currentIndex;
        const moveBy = Math.min(remainingVagons, visibleVagons);
        currentIndex += moveBy;
        const newPosition = currentIndex * vagonWidth;
        moviesList.scrollTo({ left: newPosition, behavior: "smooth" });
        showHideIcons();
    });

    moviesList.addEventListener("scroll", () => {
        const scrollLeft = moviesList.scrollLeft;
        currentIndex = Math.floor(scrollLeft / vagonWidth);
        showHideIcons();
    });

    showHideIcons();
}

// Appeler la fonction pour toutes les carousels
const carousels = document.querySelectorAll(".movie-carousel");
carousels.forEach(initCarousel);




document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = 1;
            } else {
                slide.style.opacity = 0;
            }
        });
    }

    function animateSlides() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    // Afficher le premier slide
    showSlide(currentSlideIndex);

    // Démarrer l'animation toutes les 5 secondes
    setInterval(animateSlides, 5000);
});
