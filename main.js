window.addEventListener('DOMContentLoaded', (event) => {
    const ttMensaje = document.getElementById('mensaje');
    const bttCopiar = document.getElementById('copiar');
    const bttEncriptar = document.querySelector('.encriptar');
    const bttDesencriptar = document.querySelector('.desencriptar');
    const ttMensajeResultado = document.getElementById('resultado');

    const encriptar = () => {
        mostrarResultado();
        if (ttMensaje.value !== "") {
            const mensaje = ttMensaje.value.toLowerCase().replace(/[áéíóú]/g, ""); // Eliminar acentos
            const mensajeEncriptado = mensaje
                .replaceAll("e", "enter")
                .replaceAll("i", "imes")
                .replaceAll("a", "ai")
                .replaceAll("o", "ober")
                .replaceAll("u", "ufat");
            ttMensajeResultado.value = mensajeEncriptado;
            ttMensaje.value = "";
        }
    };

    const desencriptar = () => {
        mostrarResultado();
        if (ttMensaje.value !== "") {
            const mensajeEncriptado = ttMensaje.value;
            const mensaje = mensajeEncriptado
                .replaceAll("enter", "e")
                .replaceAll("imes", "i")
                .replaceAll("ai", "a")
                .replaceAll("ober", "o")
                .replaceAll("ufat", "u");
            ttMensajeResultado.value = mensaje;
            ttMensaje.value = "";
        }
    };

    const mostrarResultado = () => {
        document.getElementById("aviso").style.display = 'none';
        document.getElementById("menuResultado").style.display = "block";
    };

    bttCopiar.addEventListener('click', e => {
        ttMensajeResultado.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    });

    bttEncriptar.addEventListener('click', encriptar);
    bttDesencriptar.addEventListener('click', desencriptar);
});