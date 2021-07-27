class comienso{
    constructor(){
        this.sonido = document.getElementById("sonido")
    }
    reproducir(){
        this.sonido.style.display='none'
    }
}

let c = new comienso()

window.onload=c.reproducir()