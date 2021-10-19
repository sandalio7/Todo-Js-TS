class Persona {
  constructor(
    paramNombre,
    paramDNI,
    paramSexo,
    paramPeso,
    paramAltura,
    paramNacimiento
  ) {
    this.nombre = paramNombre;
    this.DNI = paramDNI;
    this.sexo = paramSexo;
    this.peso = paramPeso;
    this.altura = paramAltura;
    this.nacimiento = paramNacimiento;
  }
    get mostrarNombre(){
    return this.nombre;
    }
    set modificarNombre(newNombre){
    this.nombre = newNombre
    }
    get mostrarDNI(){
    return this.DNI;
    }
    set modificarDNI(newDNI){
    this.DNI = newDNI
    }
    get mostrarSexo(){
    return this.sexo;
    }
    set modificarSexo(newSexo){
    this.sexo = newSexo
    }
    get mostrarPeso(){
    return this.peso;
    }
    set modificarPeso(newPeso){
    this.peso = newPeso
    }
    get mostrarAltura(){
    return this.altura;
    }
    set modificarAltura(newAltura){
    this.altura = newAltura
    }
    get mostrarNacimiento(){
    return this.nacimiento;
    }
    set modificarNacimiento(newNacimiento){
    this.nacimiento = newNacimiento
    }

   mostrarGeneracion(){
    let gen = this.nacimiento
    document.write('<br>')
    if(gen >= 1930 && gen<=1948 ){
        document.write('pertenece a la silent generation (la generacion de la austeridad) ')
    }else if(gen >= 1949 && gen<=1968 ){
        document.write('pertenece a la generacion Baby boom (la generacion de la ambicion) ')
    }else if(gen >= 1969 && gen<=1980 ){
        document.write('pertenece a la generacion X (la generacion de la obsecion por el exito) ')
    }else if(gen >= 1981 && gen<=1993 ){
        document.write('pertenece a la generacion milenial (la generacion de la frustracion) ')
    }else if(gen >= 1994 && gen<=2021){
        document.write('pertenece a la generacion Z (la generacion de la irreverencia) ')
    }
   } 

  esMayorDeEdad() {
    let edad = this.nacimiento;
    if (edad < 18) {
      document.write("<br> es menor de edad");
    } else {
      document.write("<br> es mayor de edad");
    }
  }

  mostrarDatos(){ 
    document.write(
      `Nombre: ${this.nombre}<br> DNI: ${this.DNI} <br>Sexo: ${this.sexo}<br> Peso:${this.peso}<br> Altura:${this.altura}<br> Fecha de nacimiento: ${this.nacimiento}`
    );
  }
  
//   generarDni(){
//     document.write('<br>')
//     for(i = 0 ; i < 8 ;i++){
//         document.write(Math.ceil(Math.random() * (9 - 0) + 0));
//     }
//   }



//preguntar por que no funciona la funcion si la defino como metodo pero si funciona cuando la saco de la class 
}

let gonzalo = new Persona('Gonzalo',0,'Masculino', '78kg', '1,85m', 2004)

gonzalo.mostrarDatos();

gonzalo.esMayorDeEdad();

// gonzalo.generarDni();

gonzalo.mostrarGeneracion();




  



