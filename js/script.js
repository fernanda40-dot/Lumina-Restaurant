// 1. Función para filtrar el menú por categoría
function filtrarMenu(categoria, nombreImagen, boton) {
    // Quitar 'active' de todos los botones y ponérselo al presionado
    let botones = document.querySelectorAll('.tab-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    boton.classList.add('active');

    // Cambiar la imagen del banner de la categoría
    let imgBanner = document.getElementById('img-categoria');
    if (imgBanner) {
        imgBanner.src = 'imagenes/' + nombreImagen;
    }

    // Ocultar todos los ítems del menú
    let platillos = document.querySelectorAll('.menu-item');
    platillos.forEach(item => item.style.display = 'none');

    // Mostrar solo los de la categoría elegida
    let seleccionados = document.querySelectorAll('.' + categoria);
    seleccionados.forEach(item => item.style.display = 'block');
}

// 2. Lógica y validación del formulario de reservas
document.addEventListener('DOMContentLoaded', () => {
    const telefonoInput = document.getElementById('telefono');
    const form = document.getElementById('formReservaLumina');

    // Formateo del campo de teléfono (Solo números y máximo 8 dígitos)
    if (telefonoInput) {
        telefonoInput.addEventListener('input', (e) => {
            let valor = e.target.value.replace(/\D/g, '');
            if (valor.length > 8) {
                valor = valor.slice(0, 8);
            }
            e.target.value = valor;
        });
    }

    // Validación y confirmación de la reserva
    if (form) {
        form.addEventListener('submit', (e) => {
            // Validar que el teléfono tenga exactamente 8 dígitos
            if (telefonoInput && telefonoInput.value.length < 8) {
                e.preventDefault();
                alert('El número de teléfono debe tener exactamente 8 dígitos.');
                telefonoInput.focus();
                return;
            }

            // Evitar recarga de página para simular la confirmación
            e.preventDefault();

            // Mensaje de éxito al usuario
            alert('✨ ¡Tu reserva en Lúmina Restaurant ha sido confirmada con éxito! Te esperamos.');

            // Limpiar las casillas del formulario
            form.reset();
        });
    }
});
        