document.addEventListener("DOMContentLoaded", function() {
    var carritoDiv = document.getElementById("carrito");

    // Verifica si existe un carrito en la sesión
    if(sessionStorage.getItem('carrito')){
        var carrito = JSON.parse(sessionStorage.getItem('carrito'));
        var total = parseFloat(sessionStorage.getItem('total'));

        // Muestra los productos del carrito
        carrito.forEach(function(item){
            var productDiv = document.createElement('div');
            productDiv.innerHTML = item.producto + ' - S/' + item.precio;
            carritoDiv.appendChild(productDiv);
        });

        // Muestra el total
        var totalDiv = document.createElement('div');
        totalDiv.innerHTML = 'Total: S/' + total;
        carritoDiv.appendChild(totalDiv);
    }
});