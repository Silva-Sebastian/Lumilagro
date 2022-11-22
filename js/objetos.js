class Termo{
    constructor(nombre, caract, precio){
        this.nombre = nombre;
        this.caract = caract;
        this.precio = precio;
    }
}

const Termo1 = new Termo ("Luminox", "Acero", "$12000")
const Termo2 = new Termo ("Tango", "Vidrio", "$6000")
const Termo3 = new Termo ("Isotermico", "Plastico", "$4000")

ListaTermos = [Termo1, Termo2, Termo3]
console.log(ListaTermos[1])

const Acero = [
    {color: "Negro", precio: 13000},
    {color: "Blanco", precio: 14000},
    {color: "Seleccion", precio: 16000}
]
Acero.push({color: "Bordo", precio: 13000});
const res = Acero.filter((el) => el.precio <= 14000)
const res1 = Acero.filter((el) => el.color.includes('B'))

console.log(res)
console.log(res1)

