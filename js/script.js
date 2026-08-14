function filtrarMenu(categoria, nombreImagen, boton) {
            // 1. Quitar 'active' de todos los botones y ponérselo al presionado
            let botones = document.querySelectorAll('.tab-btn');
            botones.forEach(btn => btn.classList.remove('active'));
            boton.classList.add('active');

            // 2. Cambiar la imagen del banner de la categoría
            let imgBanner = document.getElementById('img-categoria');
            if (imgBanner) {
                imgBanner.src = 'imagenes/' + nombreImagen;
            }

            // 3. Ocultar todos los ítems del menú
            let platillos = document.querySelectorAll('.menu-item');
            platillos.forEach(item => item.style.display = 'none');

            // 4. Mostrar solo los de la categoría elegida
            let seleccionados = document.querySelectorAll('.' + categoria);
            seleccionados.forEach(item => item.style.display = 'block');
        }
        document.addEventListener('DOMContentLoaded', () => {
    const telefonoInput = document.getElementById('telefono');
    const form = document.getElementById('formReservaLumina');

    // 1. Bloquea caracteres no numéricos y limita a 8 números exactos
    telefonoInput.addEventListener('input', (e) => {
        // Elimina cualquier carácter que no sea número
        let valor = e.target.value.replace(/\D/g, '');
        
        // Limita a un máximo de 8 dígitos
        if (valor.length > 8) {
            valor = valor.slice(0, 8);
        }
        
        e.target.value = valor;
    });

    // 2. Validación de Nombre y Apellido al enviar el formulario
    form.addEventListener('submit', (e) => {
        const nombreInput = document.getElementById('nombre');
        const partesNombre = nombreInput.value.trim().split(/\s+/);

        if (partesNombre.length < 2) {
            e.preventDefault();
            alert('Por favor, ingresa tu nombre y apellido (al menos dos palabras).');
            nombreInput.focus();
            return;
        }

        if (telefonoInput.value.length < 8) {
            e.preventDefault();
            alert('El número de teléfono debe tener exactamente 8 dígitos.');
            telefonoInput.focus();
        }
    });
});document.addEventListener('DOMContentLoaded', () => {
    const telefonoInput = document.getElementById('telefono');
    const form = document.getElementById('formReservaLumina');

    // 1. Bloquea caracteres no numéricos y limita a 8 números exactos
    telefonoInput.addEventListener('input', (e) => {
        // Elimina cualquier carácter que no sea número
        let valor = e.target.value.replace(/\D/g, '');
        
        // Limita a un máximo de 8 dígitos
        if (valor.length > 8) {
            valor = valor.slice(0, 8);
        }
        
        e.target.value = valor;
    });

    // 2. Validación de Nombre y Apellido al enviar el formulario
    form.addEventListener('submit', (e) => {
        const nombreInput = document.getElementById('nombre');
        const partesNombre = nombreInput.value.trim().split(/\s+/);

        if (partesNombre.length < 2) {
            e.preventDefault();
            alert('Por favor, ingresa tu nombre y apellido (al menos dos palabras).');
            nombreInput.focus();
            return;
        }

        if (telefonoInput.value.length < 8) {
            e.preventDefault();
            alert('El número de teléfono debe tener exactamente 8 dígitos.');
            telefonoInput.focus();
        }
    });
});
        