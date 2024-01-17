document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carusel');
    const options = {
        duration: 800,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 4,
        indicadors: true,
        noWrap: false,
    };
    
    const instances = M.Carusel.init(elementosCarousel, options);

    // Inicia el autoplay
    const autoplayInterval = 3000; // Intervalo de tiempo en milisegundos (ejemplo: 4000 ms = 4 segundos)
    let autoplayInstance;

    function startAutoplay() {
        autoplayInstance = setInterval(function() {
            instances.forEach(instance => instance.next());
        }, autoplayInterval);
    }

    startAutoplay(); // Inicia el autoplay por defecto

    // Pausa el autoplay cuando el mouse está sobre el carousel
    elementosCarousel.forEach(element => {
        element.addEventListener('mouseover', function() {
            clearInterval(autoplayInstance);
        });
    });

    // Reanuda el autoplay cuando el mouse sale del carousel
    elementosCarousel.forEach(element => {
        element.addEventListener('mouseout', function() {
            startAutoplay();
        });
    });
});