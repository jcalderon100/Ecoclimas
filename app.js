window.onload = function() {
    let arregloNombres = [];

    
    // funcion añadir
    const btnAgregar = document.getElementById('1');
    btnAgregar.addEventListener('click', Event => {

        let objetoProducto = {
            id:1,
            producto:'MS MIRAGE INVERTER 17',
            nombre:'',
            precio:'$8,900.00'
        }



        

        let nombre = document.getElementById('txtNombre').value;
        alert(nombre);

        // seteando valor nombre 
        objetoProducto.nombre = nombre;

        //añadir en el arreglo 
        arregloNombres.push(objetoProducto);

        console.log(arregloNombres);

        //logica localStorage

        //sessionStorage

        if (localStorage.getItem('valores') == null) {

            localStorage.setItem('valores', JSON.stringify(arregloNombres));

        }else {
            let datos = JSON.parse(localStorage.getItem('valores'));
            
            datos.push(objetoProducto);

            localStorage.setItem('valores', JSON.stringify(datos))

        }



    });



    //Funcion para cargar datos guardados 
    
    function cargarDatosGuardados () {

        if (localStorage.getItem('valores') != null) {

            let datos = JSON.parse(localStorage.getItem('valores'));

            // pintado de los datos 

            
            datos.forEach(element => {
                let divNombre = document.createElement('div')
                let textNombre = document.createTextNode(element.nombre);
                divNombre.appendChild(textNombre);

                let boton = document.createElement('button');
                    boton.className = 'btn btn-danger';
                let textBoton = document.createTextNode('borrar');
                    boton.addEventListener('clic', event =>{
                        alert(element.nombre)
                    });

                    

                boton.appendChild(textBoton);

                divNombre.appendChild(boton);

                document.body.appendChild(divNombre)
            });

        }

    }

}