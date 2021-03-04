class esenario2 {
    constructor() {
        this.nombre = document.getElementById('nombre')
        this.personaje = document.getElementById('personaje')
        this.personajeN1 = document.getElementById('personaje1')
        this.personajeN2 = document.getElementById('personaje2')
        this.personajeN3 = document.getElementById('personaje3')
        this.personajeN4 = document.getElementById('personaje4')
        this.saludo = document.getElementById('saludo')
        this.intro = document.getElementById('intro')
        this.conversacion = document.getElementById('conversacion')
        this.introduccion = document.getElementById('introduccion')
        this.introduccion1 = document.getElementById('introduccion1')
        this.inicio = document.getElementById('inicios')
        this.deciones = document.getElementById('preguntas')
        this.boton =  document.getElementById('botos')
        this.boton1 =  document.getElementById('botos1')
        this.boton2 =  document.getElementById('botos2')
    }
    ubicacion() {
        if (this.nombre.value == "Hinatary") {
            this.personaje.style.display = 'block'
            this.personajeN1.style.display = 'none'
            this.personajeN2.style.display = 'block'
            this.personajeN3.style.display = 'block'
            this.personajeN4.style.display = 'none'
        }
        if (this.nombre.value == "Katzura") {
            this.personaje.style.display = 'block'
            this.personajeN3.style.display = 'block'
            this.personajeN2.style.display = 'none'
            this.personajeN4.style.display = 'block'
            this.personajeN1.style.display = 'none'
        }
        if (this.nombre.value == "Marishel") {
            this.personaje.style.display = 'block'
            this.personajeN2.style.display = 'none'
            this.personajeN3.style.display = 'none'
            this.personajeN4.style.display = 'none'
            this.personajeN1.style.display = 'none'
        }
        if (this.nombre.value == "Shiro") {
            this.personaje.style.display = 'block'
            this.personajeN4.style.display = 'none'
            this.personajeN3.style.display = 'none'
            this.personajeN2.style.display = 'block'
            this.personajeN1.style.display = 'block'
        }
    }
    inicios(){
        this.introduccion.style.display = "none"
        this.introduccion1.style.display = "none"
        this.nombre.style.display = "none"
        this.conversacion.style.display = "none"
        this.personajeN4.style.display = 'none'
        this.personajeN3.style.display = 'none'
        this.personajeN2.style.display = 'none'
        this.personajeN1.style.display = 'none'
        this.personaje.style.display = 'none'
        this.deciones.style.display = 'none'
    }
    intros() {
        this.introduccion.style.display = "block"
        this.introduccion1.style.display = "none"
        this.nombre.style.display = "none"
        this.boton.style.display = "none"
        this.conversacion.style.display = "none"
        this.personajeN4.style.display = 'none'
        this.personajeN3.style.display = 'none'
        this.personajeN2.style.display = 'none'
        this.personajeN1.style.display = 'none'
        this.personaje.style.display = 'none'
        this.inicio.style.display = 'none'
    }
    intros1(){
        if(this.introduccion.style.display=='block'){
        this.introduccion.style.display='none'
        this.introduccion1.style.display = "block"
        this.nombre.style.display = "none"
        this.boton.style.display = "none"
        this.conversacion.style.display = "none"
        this.personajeN4.style.display = 'none'
        this.personajeN3.style.display = 'none'
        this.personajeN2.style.display = 'none'
        this.personajeN1.style.display = 'none'
        this.personaje.style.display = 'none'
        this.inicio.style.display = 'none'
        }
    }
    conersaciones() {
        if(this.introduccion1.style.display=='block'){
            this.introduccion1.style.display = "none"
            this.conversacion.style.display = "block"
            this.nombre.style.display = "block"
            personaje.ubicacion()
        }
    }
    decicion(){}
}

let personaje = new esenario2()
window.onload= personaje.inicios()