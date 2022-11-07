class Termo{
    constructor(nombre, caract, precio){
        this.nombre = nombre;
        this.caract = caract;
        this.precio = precio;
    }
}

const Termo1 = new Termo ("Luminox", "Negro", "$12000")
const Termo2 = new Termo ("Tango", "Fucsia", "$6000")
const Termo3 = new Termo ("Isotermico", "Azul", "$4000")

console.log(Termo1)
console.log(Termo2)
console.log(Termo3)