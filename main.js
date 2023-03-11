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
        let stringAMostrar = this.nombre + " " + this.descripcion+" "+this.precio
        return stringAMostrar
    }
}

// Array global de productos
let arrayProductos = []

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

const mostrarProductos = () => {
    arrayProductos.forEach(elem => {
        alert(elem.toString())
    });
}

const filtrarPorNombre = () => {
    let nombreABuscar = prompt("Ingrese Nombre a buscar")
    let datos = []
    if (nombreABuscar != "") {
        datos = arrayProductos.filter(producto2 => producto2.nombre.toLowerCase() == nombreABuscar.toLocaleLowerCase())        
    }

    for (const elem of datos) {
        alert(elem.toString())
    }
}

cargarProdcutos()
mostrarProductos()
filtrarPorNombre()