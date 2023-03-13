class Producto{
    constructor(nombre, descripcion, precio, stock){
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.stock = stock
    }

    obtenerNombre = () => this.nombre
    obtenerPrecio = () => this.precio
    obtenerStock = () => this.stock

    reducirPrecio = (valorAReducir) => this.precio -= valorAReducir
    reducirStock = (valorAReducir) => this.stock -= valorAReducir

    aumentarPrecio = (valorAAumentar) => this.precio += valorAAumentar
    aumentarStock = (valorAAumentar) => this.stock += valorAAumentar    

    toString = () => {
        let stringAMostrar = `Nombre: ${this.nombre}| Descripcion: ${this.descripcion}| Precio: ${this.precio}| Stock: ${this.stock}`
        return stringAMostrar
    }
}

// Array global de productos
let arrayProductos = []

// Funcion para cargar productos
const cargarProdcutos = () => {
    let condicion = true
    do {
        let nombre = prompt("Ingrese Nombre del Producto")
        let descripcion = prompt("Ingrese una descripcion")
        let precio = parseFloat(prompt("Ingrese un precio"))
        let stock = parseFloat(prompt("Ingrese un stock"))

        // Crear producto
        let producto = new Producto(nombre,descripcion,precio,stock)
        arrayProductos.push(producto)

        let continuar = prompt("¿Desea continuar? (si/no)")        
        if(continuar.toLowerCase() == "no") condicion = false
        
    } while (condicion);
}

// Muestra Todos los productos
const mostrarProductos = () => {    
    if (arrayProductos.length == 0) {
        alert("No hay Productos cargados")
    }else{
        arrayProductos.forEach(elem => {
            alert(elem.toString())
        });
    }    
}

// Filtra y muestra los productos obtenidos
const filtrarPorNombre = () => {
    let nombreABuscar = prompt("Ingrese Nombre a buscar")
    let datos = []
    if (nombreABuscar != "") {
        datos = arrayProductos.filter(producto2 => producto2.nombre.toLowerCase() == nombreABuscar.toLocaleLowerCase())        
    }

    if (datos.length == 0) {
        alert("No se encontraron productos")
    }else{
        for (const elem of datos) {
            alert(elem.toString())
        }
    }    
}

// Ordena de mayor a menor precio de productos
const ordenarPorPrecio = () => {
    arrayProductos.sort((a,b) => b.precio - a.precio )
    mostrarProductos()
}

// aumenta el precio de un producto dado en una cantidad dada
const aumentarPrecioProducto = () =>{
    let arrayNombresProductos = filtarProductoPorNombre()

    if (arrayNombresProductos.length == 0) {
        alert("No se encontraron productos con ese nombre")
    }else{
        let valor = parseFloat(prompt("Ingrese el valor a aumentar")) 
        if (valor != ""){
            arrayNombresProductos.forEach(elem => {
                elem.aumentarPrecio(valor)
            });
            alert("Precios aumentados!")
        }else{
            alert("No ingresó ningun valor")
        }
    }    
}

// Reduce el stock de un producto dado en una cantidad dada
const reducirStockProducto = () => {
    let arrayNombresProductos = filtarProductoPorNombre()

    if(arrayNombresProductos.length == 0){
        alert("No se encontraron productos con ese nombre")
    }else{
        let valor = parseFloat(prompt("Ingrese el valor a descontar")) 
        if (valor != ""){
            arrayNombresProductos.forEach(elem => {
                if (elem.obtenerStock() < valor) {
                    alert(`Para ${elem.toString()} el valor a reducir es mayor al stock`)
                }else{
                    elem.reducirStock(valor)
                }                
            });            
        }else{
            alert("No ingresó ningun valor")
        }
    }

}

// Función que retorna un array con los productos obtenidos al buscar por nombre
const filtarProductoPorNombre = () => {
    let nombreABuscar = prompt("Ingrese Nombre a buscar")
    let nombresProductos = []
    if (nombreABuscar != "") {
        nombresProductos = arrayProductos.filter(producto2 => producto2.nombre.toLowerCase() == nombreABuscar.toLocaleLowerCase())        
    }

    return nombresProductos
}

// Menu
const mostrarMenu = () => {
    let salir = false;
    let opcion = "";
    do {
        opcion = prompt("Ingrese el número de la opción a utilizar:\n 1- Cargar Productos \n 2- Ver Productos \n 3- Filtrar por Nombre de Producto \n 4- Ver Productos ordenados por precio(Decreciente)\n 5- Aumentar Precio Producto \n 6- Reducir Stock Producto \n 7- Salir");                
        
        // Caso en el que presione el boton cancelar o la tecla ESC
        if (opcion == null) {
            salir = true;        
        }else{            
            // Casteo la opcion a entero para utilizar el menu numérico
            const opcionNumerica = parseInt(opcion);
            switch (opcionNumerica) {
                case 1: 
                    cargarProdcutos()           
                    break;
                case 2:
                    mostrarProductos()
                    break;            
                case 3:             
                    filtrarPorNombre()                    
                    break;  
                case 4:
                    ordenarPorPrecio()
                    break;
                case 5:
                    aumentarPrecioProducto()
                    break;
                case 6:
                    reducirStockProducto()
                    break;
                case 7:
                    salir = true;
                    break;                
                default:
                    alert("Opción incorrecta");
                    break;
            }    
        }        
    } while (!salir);    
}

mostrarMenu()