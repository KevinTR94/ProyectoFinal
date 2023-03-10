let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("ritmo");
        habilidades[1].classList.add("pases");
        habilidades[2].classList.add("disparo");
        habilidades[3].classList.add("fisico");
        habilidades[4].classList.add("regate");
        habilidades[5].classList.add("defensa");
        habilidades[6].classList.add("partidos");
        habilidades[7].classList.add("goles");
        habilidades[8].classList.add("asistencias");
        habilidades[9].classList.add("promedios");
        habilidades[10].classList.add("titulos");
        habilidades[11].classList.add("records");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// traigo elemento del dom
const inputNombre = document.getElementById('inputNombre')
const inputTelefono = document.getElementById('inputTelefono')
const inputTema = document.getElementById('inputTema')
const inputCorreo = document.getElementById('inputCorreo')
const btnEnviar = document.getElementById('btnEnviar')
const textoMensaje = document.getElementById('textoMensaje')
btnEnviar.addEventListener('click',(e) =>{
    e.preventDefault()
    if(( inputCorreo.value && inputTelefono.value && inputTema.value && inputNombre.value && textoMensaje.value)  === ('') ){
        Swal.fire({
            icon:'error',
            title:'Complete el formulario!',
            color: "#d69f30",
            background: "#1e2326",
            confirmButtonColor: "#d69f30",
        })
 }
 else{
    Swal.fire({
        icon:'success',
        title:'Mensaje enviado',
        color: "#d69f30",
        background: "#1e2326",
        confirmButtonColor: "#d69f30",
 })
}
})