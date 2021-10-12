class producto{
    constructor(paramCodigo,paramNombre,paramPrecio){
        this.codigo = paramCodigo
        this.nombre = paramNombre
        this.precio = paramPrecio
    }
    
    get mostrarCodigo(){
        return this.codigo;
    }
    set modificarCodigo(newCodigo){
        this.codigo = newCodigo
    }
    get mostrarNombre(){
        return this.nombre;
    }
    set modificarNombre(newNombre){
        this.nombre = newNombre
    }
    get mostrarPrecio(){
        return this.precio;
    }
    set modificarPrecio(newPrecio){
        this.precio = newPrecio
    }

    imprimirDatos() {
        // let codigo = this.codigo
        // let nombre = this.nombre
        // let precio = this.precio

        document.write(`<br>Codigo: ${this.codigo} <br>Nombre: ${this.nombre} <br>Precio: ${this.precio}`)
    
    }
}

let blackWidow = new producto(001,ironman,'$1050');
let hulk = new producto(002,'hulk','$300');
// let thor = new producto('003',thor,'$570')

// ironMan.imprimirDatos();
hulk.imprimirDatos();
// thor.imprimirDatos();

