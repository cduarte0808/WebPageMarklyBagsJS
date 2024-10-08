
//variables y funciones para el manejo del carrito de compras desde bags.html
let carrito = localStorage.getItem('listaCarrito') ? JSON.parse(localStorage.getItem('listaCarrito')) : [];
actualizarCantidadProductosCarrito();

//esta función se invoca desde el botón 'Añadir al carrito en cada producto que está en el carrusel'
function agregarProducto(detalleproducto) {
    alert('Se agrega al carrito de compras el producto: '+detalleproducto);
    carrito.push(detalleproducto);
    localStorage.setItem('listaCarrito',JSON.stringify(carrito));
    actualizarCantidadProductosCarrito();
}

function actualizarCantidadProductosCarrito() {
    const contador = document.getElementById('count-cart');
    contador.textContent=carrito.length;
}

//esta función se invoca desde el encabezado del lado derecho del menu, al dar click en la imagen o icono del carrito desde bags.html
function crearListadoCarrito() {
    const listado=document.getElementById('listadoCarrito');
    //console.log(listado);
    
    if (carrito.length ===0) {
        listado.innerHTML='El carrito está vacío';
    } else {
        //listado.innerHTML='El carrito tiene los siguientes productos:<br>'+carrito.toString();
        listado.innerHTML='El carrito tiene los siguientes productos:<br>';
        const ul = document.createElement('ul');
        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent='* '+producto;
            ul.appendChild(li);
        });
        listado.appendChild(ul);
    }
}

window.addEventListener('beforeunload', () => {
    localStorage.clear();
})