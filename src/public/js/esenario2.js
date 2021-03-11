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
        this.boton = document.getElementById('botos')
        this.boton1 = document.getElementById('botos1')
        this.boton2 = document.getElementById('botos2')
        this.boton3 = document.getElementById('botos3')
        this.boton4 = document.getElementById('botos4')
        this.boton5 = document.getElementById('botos5')
        this.boton6 = document.getElementById('botos6')
        this.boton7 = document.getElementById('botos7')
        this.boton8 = document.getElementById('botos8')
        this.boton9 = document.getElementById('botos9')
        this.boton10 = document.getElementById('botos10')
        this.boton11 = document.getElementById('botos11')
        this.boton12 = document.getElementById('botos12')
        this.boton13 = document.getElementById('botos13')
        this.boton14 = document.getElementById('botos14')
        this.boton15 = document.getElementById('botos15')
        this.Teacher = document.getElementById('imagen')
        this.teacher = document.getElementById('imagen1')
        this.Conversacion = document.getElementById('Conversacion')
        this.Conversacion1 = document.getElementById('Conversacion1')
        this.nombre1 = document.getElementById('saludoss')
        this.desision1 = document.getElementById('desicion1')
        this.desision2 = document.getElementById('desicion2')
        this.desision2_2 = document.getElementById('desicion2_2')
        this.pregunta1 = document.getElementById('pregunta1')
        this.pregunta2 = document.getElementById('pregunta2')
        this.continuacion = document.getElementById('desicion1_1')
        this.continuacion1 = document.getElementById('continuacion')
        this.continuacion2 = document.getElementById('continuacion1')
        this.continuacion3 = document.getElementById('continuacion2')
        this.continuacion4 = document.getElementById('continuacion3')
        this.continuacion5 = document.getElementById('continuacion4')
        this.continuacion6 = document.getElementById('continuacion5')
        this.continuacion7 = document.getElementById('continuacion6')
    }
    ubicacion() {
        if (this.nombre.value == "Hinatary") {
            this.personaje.style.display = 'block'
            this.personajeN1.style.display = 'none'
            this.personajeN2.style.display = 'none'
            this.personajeN3.style.display = 'none'
            this.personajeN4.style.display = 'none'
        }
        if (this.nombre.value == "Katzura") {
            this.personaje.style.display = 'block'
            this.personajeN3.style.display = 'none'
            this.personajeN2.style.display = 'none'
            this.personajeN4.style.display = 'none'
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
            this.personajeN2.style.display = 'none'
            this.personajeN1.style.display = 'none'
        }
    }
    inicios() {
        this.introduccion.style.display = "none"
        this.introduccion1.style.display = "none"
        this.nombre.style.display = "none"
        this.conversacion.style.display = "none"
        this.personajeN4.style.display = 'none'
        this.personajeN3.style.display = 'none'
        this.personajeN2.style.display = 'none'
        this.personajeN1.style.display = 'none'
        this.personaje.style.display = 'none'
        this.teacher.style.display = 'none'
        this.Conversacion.style.display = 'none'
        this.boton4.style.display = 'none'
        this.boton5.style.display = 'none'
        this.boton6.style.display = 'none'
        this.boton7.style.display = 'none'
        this.boton8.style.display = 'none'
        this.boton9.style.display = 'none'
        this.boton10.style.display = 'none'
        this.boton11.style.display = 'none'
        this.boton12.style.display = 'none'
        this.boton13.style.display = 'none'
        this.boton14.style.display = 'none'
        this.boton15.style.display = 'none'
        this.Conversacion1.style.display = 'none'
        this.nombre1.style.display = 'none'
        this.desision1.style.display = 'none'
        this.desision2.style.display = 'none'
        this.pregunta1.style.display = 'none'
        this.pregunta2.style.display = 'none'
        this.continuacion.style.display = 'none'
        this.continuacion1.style.display = 'none'
        this.continuacion2.style.display = 'none'
        this.continuacion3.style.display = 'none'
        this.continuacion4.style.display = 'none'
        this.continuacion5.style.display = 'none'
        this.continuacion6.style.display = 'none'
        this.continuacion7.style.display = 'none'
        this.desision2_2.style.display = 'none'
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
    intros1() {
        if (this.introduccion.style.display == 'block') {
            this.introduccion.style.display = 'none'
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
    coversaciones() {
        if (this.introduccion1.style.display == 'block') {
            this.introduccion1.style.display = "none"
            this.conversacion.style.display = "block"
            this.nombre.style.display = "block"
            personaje.ubicacion()
        }
    }
    conversacion1() {
        this.Teacher.style.display = 'none'
        this.teacher.style.display = 'block'
        this.nombre.value = 'Srta Frida Lazra'
        this.saludo.style.display = 'none'
        this.Conversacion.style.display = 'block'
        this.boton3.style.display = 'none'
        this.boton4.style.display = 'block'
    }
    conversacion2() {
        this.nombre.style.display='none'
        this.Conversacion.style.display = 'none'
        this.Conversacion1.style.display = 'block'
        this.nombre1.style.display = 'block'
        this.boton4.style.display = 'none'
        this.boton5.style.display = 'block'
    }
    deciciones() { 
        this.Conversacion1.style.display = 'none'
        this.nombre1.style.display = 'none'
        this.pregunta1.style.display = 'block'
        this.pregunta2.style.display = 'block'
        this.boton5.style.display = 'none'
    }
    decision1(){
        this.pregunta1.style.display = 'none'
        this.pregunta2.style.display = 'none'
        this.desision1.style.display = 'block'
        this.nombre1.style.display = 'block'
        this.boton6.style.display = 'block'
    }
    decision2(){
        this.pregunta1.style.display = 'none'
        this.pregunta2.style.display = 'none'
        this.desision2.style.display = 'block'
        this.nombre1.style.display = 'block'
        this.boton7.style.display = 'block'
    }
    conversacion1_1(){
        this.nombre.style.display = 'block'
        this.desision1.style.display = 'none'
        this.continuacion.style.display = 'block'
        this.nombre1.style.display = 'none'
        this.boton8.style.display = 'block'
    }
    despedida(){
        this.desision2_2.style.display = 'block'
        this.continuacion.style.display = 'none'
        this.boton6.style.display = 'none'
        this.nombre1.style.display = 'block'
        this.nombre.style.display = 'none'
        this.boton8.style.display = 'none'
        this.boton9.style.display = 'block'
    }
    regreos(){
        this.boton7.style.display = 'none'
        this.boton9.style.display = 'none'
        this.teacher.style.display = 'none'
        this.Teacher.style.display = 'block'
        this.personajeN2.style.display = 'block'
        this.desision2_2.style.display = 'none'
        this.continuacion1.style.display = 'block'
        this.boton10.style.display= 'block'
        this.nombre.value = 'Katzura'
        this.nombre1.style.display = 'none'
        this.nombre.style.display = 'block'
    }
    Charla(){
        this.nombre1.style.display = 'block'
        this.continuacion1.style.display = 'none'
        this.continuacion2.style.display = 'block'
        this.boton10.style.display = 'none'
        this.nombre.style.display = 'none'
        this.boton11.style.display = 'block'
    }
    Charla1(){
        this.continuacion3.style.display = 'block'
        this.continuacion2.style.display = 'none'
        this.boton11.style.display = 'none'
        this.nombre1.style.display = 'none'
        this.nombre.style.display = 'block'
        this.boton12.style.display = 'block'
    }
    Charla2(){
        this.continuacion4.style.display = 'block'
        this.continuacion3.style.display = 'none'
        this.personajeN4.style.display = 'block'
        this.boton12.style.display = 'none'
        this.nombre1.style.display = 'none'
        this.nombre.value = 'Shiro'
        this.nombre.style.display = 'block'
        this.boton13.style.display = 'block'
    }
    Charla3(){
        this.continuacion5.style.display = 'block'
        this.continuacion4.style.display = 'none'
        this.personajeN4.style.display = 'block'
        this.nombre1.style.display = 'none'
        this.nombre.value = 'Shiro'
        this.nombre.style.display = 'block'
        this.boton13.style.display = 'none'
        this.boton14.style.display = 'block'
    }
    Charla4(){
        this.continuacion6.style.display = 'block'
        this.continuacion5.style.display = 'none'
        this.personajeN4.style.display = 'block'
        this.boton14.style.display = 'none'
        this.nombre1.style.display = 'none'
        this.personajeN1.style.display = 'block'
        this.nombre.value = 'Hinatary'
        this.nombre.style.display = 'block'
        this.boton15.style.display = 'block'
    }
    Charla5(){
        this.continuacion7.style.display = 'block'
        this.continuacion6.style.display = 'none'
        this.personajeN4.style.display = 'block'
        this.boton15.style.display = 'none'
        this.nombre1.style.display = 'block'
        this.personajeN1.style.display = 'block'
        this.nombre.value = 'Hinatary'
        this.nombre.style.display = 'none'
    }
}

let personaje = new esenario2()
window.onload = personaje.inicios()