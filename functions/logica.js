


function agregar_al_carrito(event) {
    // Obtener el precio del artículo correspondiente al botón clickeado
    let precioElemento = event.target.closest('article').querySelector('.precio');
    let precio = parseFloat(precioElemento.value);
    let carritoFlotante = document.getElementById('carrito-flotante');
    let cantidadProductos = document.getElementById('cantidad-productos');
    let totalPrecio = document.getElementById('total-precio');
    let descuento = document.getElementById('descuento');

    // Asegurarse de que `precio` sea un número válido
    if (!isNaN(precio)) {
        // Incrementar el contador de productos y mostrarlo en la pantalla
        let cantidadActual = parseInt(cantidadProductos.innerHTML) || 0;
        cantidadActual++; // Incrementamos la cantidad de productos
        cantidadProductos.innerHTML = cantidadActual; // Actualizamos el contador en el HTML

        // Mantener el total sin descuento para calcular el descuento correctamente
        let totalSinDescuento = parseFloat(totalPrecio.getAttribute('data-total-sin-descuento')) || 0;
        totalSinDescuento += precio;

        // Actualizar el total de precio (sin descuento)
        totalPrecio.setAttribute('data-total-sin-descuento', totalSinDescuento.toFixed(2));
        totalPrecio.innerHTML = totalSinDescuento.toFixed(2); // Actualizamos el total sin descuento

        // Verificar si hay más de 3 productos en el carrito para aplicar el descuento
        if (cantidadActual >= 3) {
            // Calcular el descuento solo sobre el total sin descuento
            let descuentoTotal = totalSinDescuento * 0.35;
            descuento.innerHTML = descuentoTotal.toFixed(2); // Mostrar el descuento

            // Calcular el total con descuento
            let totalConDescuento = totalSinDescuento - descuentoTotal;
            totalPrecio.innerHTML = totalConDescuento.toFixed(2); // Actualizamos el total con descuento
        } else {
            // Si hay menos de 3 productos, no aplicamos el descuento
            descuento.innerHTML = '0.00'; // Restablecemos el valor del descuento
            totalPrecio.innerHTML = totalSinDescuento.toFixed(2); // Mostramos el total sin descuento
        }

        carritoFlotante.style.display = 'block'; // Mostrar el carrito flotante
    } else {
        alert("El valor de precio no es válido");
    }
}

$(document).ready(function() {
    $(".carrito").click(agregar_al_carrito); // Asignamos el evento de clic
});






  
$(document).ready(function() {
    $("#tema_claro_oscuro").click(function() {
        $("body").toggleClass("tema_claro");
        let boton = document.getElementById("tema_claro_oscuro")
        if (boton.value == "☀️"){
            boton.value = "🌙"
        }
        else{
            boton.value = "☀️"
        }
    });
});


$(document).ready(function() {
    $('#boxSelect').on('change', function() {
        let order = $(this).val();
        let articles = $('section article').toArray();

        articles.sort(function(a, b) {
            let nameA = $(a).find('a').attr('href').toLowerCase();
            let nameB = $(b).find('a').attr('href').toLowerCase();
            return order === 'A' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });
        $('section').empty().append(articles);
    });
});
