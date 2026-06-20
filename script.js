document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typed-text");
    const btnYes = document.getElementById("btn-yes");
    const btnNo = document.getElementById("btn-no");

    // Tu mensaje personalizado
    const message = "Amor, encontré una app que se llama SumOne y pensé en nosotros apenas la vi 💜. Nos hace una pregunta del día a cada uno, y con nuestras respuestas vamos haciendo crecer una mascota virtual juntita, como si fuera un pedacito de nuestra relación viviendo ahí. Quiero construir esa mascota contigo, ¿le entras a la aventura? ✨";

    let index = 0;

    // Botón SÍ deshabilitado hasta que termine de escribirse el mensaje
    btnYes.disabled = true;
    btnYes.classList.add("btn-disabled");

    // 1. Efecto de escritura automática (Typing Effect) con cursor parpadeante
    function typeEffect() {
        if (index < message.length) {
            textElement.innerHTML = message.substring(0, index + 1) + '<span class="typing-cursor">|</span>';
            index++;
            setTimeout(typeEffect, 40); // Velocidad de escritura (ms)
        } else {
            // Termina de escribir: habilita el botón SÍ
            textElement.innerHTML = message + '<span class="typing-cursor">|</span>';
            btnYes.disabled = false;
            btnYes.classList.remove("btn-disabled");
        }
    }

    // Iniciar la escritura al cargar
    setTimeout(typeEffect, 500);

    // Mini confeti con emojis antes de redirigir
    function lanzarConfeti() {
        const emojis = ["💜", "✨", "💖", "🚀", "💫"];
        for (let i = 0; i < 24; i++) {
            const piece = document.createElement("div");
            piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            piece.style.position = "fixed";
            piece.style.left = Math.random() * 100 + "vw";
            piece.style.top = "-30px";
            piece.style.fontSize = (Math.random() * 16 + 14) + "px";
            piece.style.zIndex = "9999";
            piece.style.pointerEvents = "none";
            piece.style.transition = `transform ${1.2 + Math.random()}s ease-in, opacity ${1.2 + Math.random()}s ease-in`;
            document.body.appendChild(piece);

            requestAnimationFrame(() => {
                piece.style.transform = `translateY(${window.innerHeight + 60}px) rotate(${Math.random() * 360}deg)`;
                piece.style.opacity = "0.2";
            });

            setTimeout(() => piece.remove(), 2300);
        }
    }

    // 2. Acción del Botón SÍ (Confeti + Redirección a Play Store)
    btnYes.addEventListener("click", () => {
        if (btnYes.disabled) return;
        lanzarConfeti();
        // Enlace oficial de SumOne en Google Play Store
        setTimeout(() => {
            window.location.href = "https://play.google.com/store/apps/details?id=com.sumone";
        }, 900);
    });

    // 3. Acción del Botón NO (Hacerlo escurridizo/escapista)
    btnNo.addEventListener("mouseover", () => {
        // Calcula posiciones aleatorias dentro de la pantalla visible
        const x = Math.random() * (window.innerWidth - btnNo.clientWidth - 40);
        const y = Math.random() * (window.innerHeight - btnNo.clientHeight - 40);

        // Cambia la posición a absoluta para que se mueva por toda la pantalla
        btnNo.style.position = "fixed";
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    });

    // Por si acaso logra hacerle click en móvil rápido, también se mueve al tocarlo
    btnNo.addEventListener("touchstart", (e) => {
        e.preventDefault(); // Evita el click accidental
        const x = Math.random() * (window.innerWidth - btnNo.clientWidth - 40);
        const y = Math.random() * (window.innerHeight - btnNo.clientHeight - 40);
        btnNo.style.position = "fixed";
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    });
});