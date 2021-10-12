class rectangulo{
    constructor(paramAlto,paramAncho){
        this.alto = paramAlto
        this.ancho = paramAncho
    }

    get mostrarAlto(){
        return this.alto;
    }
    get mostrarAncho(){
        return this.ancho;
    }
    set modificarAlto(nuevoAlto){
        this.alto = nuevoAlto
    }
    set modificarAncho(nuevoAncho){
        this.ancho = nuevoAncho
    }

    mostrarRectangulo(){
        console.log(this.alto)
        console.log(this.ancho)
    }

    perimetro(){
        let perimetro = (this.alto * 2) + (this.ancho * 2)
        console.log(perimetro)
    }
    
    area(){
        let area = this.alto * this.ancho
        console.log(area)
    }

}

let r1 = new rectangulo(10,20)

// r1.mostrarRectangulo();
r1.perimetro();
r1.area();

// modificar alguna de las propiedades
r1.modificarAlto = 50
r1.perimetro();
r1.area();