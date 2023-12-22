// animations.js

// Anima los elementos cuando se desplazan a la vista
const animatedSections = document.querySelectorAll(".animated-section");

const showAnimatedSection = () => {
    animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add("active");
        }
    });
};

window.addEventListener("scroll", showAnimatedSection);

// Animación al hacer clic en los enlaces de la barra de navegación
const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
        });
    });
});
// JavaScript (script.js)

// Efecto de scroll suave para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20, // Ajusta el valor de desplazamiento según tu diseño
                behavior: 'smooth'
            });
        }
    });
});

// Animación de entrada para elementos al desplazarse
const elementsToAnimate = document.querySelectorAll('.animated-fade-in');

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const animateElementsOnScroll = () => {
    elementsToAnimate.forEach(element => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateElementsOnScroll);

// Agregar efectos de carga
const loadingSpinner = document.getElementById('loading-spinner');

window.addEventListener('load', () => {
    // Oculta el spinner de carga una vez que la página se ha cargado completamente
    loadingSpinner.style.display = 'none';
});
const audio = document.getElementById('musica');

// Función para reproducir la música automáticamente
function reproducirMusica() {
    audio.play();
}

// Agregar un evento de clic a la página para iniciar la reproducción
document.addEventListener('click', reproducirMusica, { once: true });
const elementoAnimado = document.querySelector('.elemento-con-animacion');

document.addEventListener("DOMContentLoaded", function() {
    const animatedTitle = document.querySelector('.animated-title');
    const sections = document.querySelectorAll('.animated-section');
    
    // Inicialmente, ocultar todas las secciones.
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
    });
    
    // Función para activar animaciones cuando las secciones están en la vista.
    function activarAnimaciones() {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight / 1.5) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Agregar un evento de desplazamiento para activar las animaciones.
    window.addEventListener('scroll', activarAnimaciones);
    
    // Mostrar la primera sección (Título) al cargar la página.
    animatedTitle.style.opacity = 1;
    animatedTitle.style.transform = 'translateY(0)';
    
    // Después de un retraso, activar las animaciones para el resto de las secciones.
    setTimeout(function() {
        activarAnimaciones();
    }, 1000); // Ajusta el valor del retraso según tus preferencias.
});
// Agregar clases "active" a las secciones a medida que se desplaza por la página
const sections = document.querySelectorAll('.animated-section');

function activateSections() {
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('active');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Agregar un evento de desplazamiento para activar las animaciones
window.addEventListener('scroll', activateSections);
window.addEventListener('load', activateSections);