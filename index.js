particlesJS("background", {
    particles: {
        Number: {
            value: 15, 
            density: {
                enable: true,
                value_area: 300,

            },
        },

        color: {
            value: '#ffffff', //cor das partículas
        },
        shape: {
            type: "triangle", // shape type
        },
        opacity: {
            value: 0.8,
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        //Conectar linhas
        line_linked: {
            enable: true,
            distance: 125,
            color: "#ffffff",
            opacity: 0.1,
            width: 1,
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,

        },
    },
    // Interação
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "Push",
            },
            resize: true,
        },
    },

    //Detect Retina displays
    retina_detect: true,
});