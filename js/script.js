function validarFormularioContacto() {
    const campoNombre= document.getElementById('nombre');
    const campoApellido= document.getElementById('apellido');
    const campoEdad= document.getElementById('edad');
    const campoCorreo= document.getElementById('correo');
    const campoFechaNacimiento= document.getElementById('fecha-nacimiento');
    const campoNumeroContacto= document.getElementById('numero-contacto');
    const campoPais= document.getElementById('pais');

    const mensajeError = document.getElementById('mensajeError');
    var muestraMensaje=0;

    if (campoNombre.value==='') {
        campoNombre.classList.add('invalido');
        muestraMensaje=1;
    }
    else if (campoApellido.value==='') {
        campoApellido.classList.add('invalido');
        muestraMensaje=1;
    } else if (campoEdad==='') {
        campoEdad.classList.add('invalido'); 
        muestraMensaje=1;
    } else if (campoCorreo.value==='') {
        campoCorreo.classList.add('invalido'); 
        muestraMensaje=1;
    } else if (campoFechaNacimiento.value==='') {
        campoFechaNacimiento.classList.add('invalido'); 
        muestraMensaje=1;
    } else if (campoNumeroContacto.value==='') {
        campoNumeroContacto.classList.add('invalido'); 
        muestraMensaje=1;
    } else if (campoPais.value==='') {
        campoPais.classList.add('invalido'); 
        muestraMensaje=1;
    } else {
        mensajeError.classList.add('d-none');
        campoNombre.remove('invalido');
        campoApellido.remove('invalido');
        campoEdad.remove('invalido');
        campoCorreo.remove('invalido');
        campoFechaNacimiento.remove('invalido');
        campoNumeroContacto.classList.remove('invalido');
        campoPais.remove('invalido');
    }

    if (muestraMensaje==1) {
        mensajeError.classList.remove('d-none');
        mensajeError.classList.add('d-block');
    }    
}