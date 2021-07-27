class Seleccion{
    constructor(){
        this.jugadora1 = document.getElementById("juegadora1")
        this.jugadora2 = document.getElementById("juegadora2")
        this.jugadora3 = document.getElementById("juegadora3")
        this.jugadora4 = document.getElementById("juegadora4")
        this.Nombre = document.getElementById("nombre")
        this.sonido = document.getElementById("sonido")
    }
    comienzo(){
        this.sonido.style.display='none'
        if(this.Nombre.value=="Hinatary"){
            this.jugadora1.style.display='block'
            this.jugadora3.style.display='none'
            this.jugadora4.style.display='none'
            this.jugadora2.style.display='none'
        }
    }
    Seleccion(){
        if(this.Nombre.value=="Hinatary"){
            this.jugadora1.style.display='block'
            this.jugadora3.style.display='none'
            this.jugadora4.style.display='none'
            this.jugadora2.style.display='none'
        }
        if(this.Nombre.value=="Katzura"){
            this.jugadora3.style.display='block'
            this.jugadora2.style.display='none'
            this.jugadora4.style.display='none'
            this.jugadora1.style.display='none'
        }
        if(this.Nombre.value=="Marishel"){
            this.jugadora2.style.display='block'
            this.jugadora3.style.display='none'
            this.jugadora4.style.display='none'
            this.jugadora1.style.display='none'
        }
        if(this.Nombre.value=="Shiro"){
            this.jugadora4.style.display='block'
            this.jugadora3.style.display='none'
            this.jugadora2.style.display='none'
            this.jugadora1.style.display='none'
        }
    }
}

let s = new Seleccion()
window.onload = s.comienzo()
