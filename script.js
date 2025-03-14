document.getElementById("confirmar").addEventListener("click", function() {
    alert("¡Gracias por confirmar tu asistencia!");
});

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100, // Cantidad de partículas
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffd700" // Color dorado
        },
        shape: {
            type: "circle", // Forma de las partículas
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8, // Opacidad de las partículas
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3, // Tamaño de las partículas
            random: true
        },
        line_linked: {
            enable: false // Desactiva las líneas entre partículas
        },
        move: {
            enable: true,
            speed: 2, // Velocidad de caída
            direction: "bottom", // Dirección de caída
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: false
            },
            resize: true
        }
    },
    retina_detect: true
});
