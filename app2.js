class carrito{

    // añadir el producto al carrito
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProductos(producto)
        }
    }

    leerDatosProductos(producto){
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h3')

        }
    }























}