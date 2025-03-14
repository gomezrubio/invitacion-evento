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


// Fecha del evento (29 de marzo de 2025 a las 17:30)
const fechaEvento = new Date("March 29, 2025 17:30:00").getTime();

// Función para actualizar el contador
function actualizarContador() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaEvento - ahora;

    // Cálculos para días, horas, minutos y segundos
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    // Actualiza los elementos HTML
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    // Si el evento ya pasó
    if (tiempoRestante < 0) {
        clearInterval(intervalo);
        document.getElementById("cuenta-regresiva").innerHTML = "¡El evento ha comenzado!";
    }
}

// Actualiza el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);

// Llama a la función para evitar un retraso inicial
actualizarContador();