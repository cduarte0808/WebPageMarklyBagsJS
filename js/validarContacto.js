
document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("entre a validarFormularioContacto");
    const campoNombre= document.getElementById('nombre');
    const campoApellido= document.getElementById('apellido');
    const campoEdad= document.getElementById('edad');
    const campoCorreo= document.getElementById('correo');
    const campoFechaNacimiento= document.getElementById('fecha-nacimiento');
    const campoNumeroContacto= document.getElementById('numero-contacto');
    const campoPais= document.getElementById('pais');
    const mensajeError=document.getElementById('mensajeError');
    let formularioValido=true;

    validarNombre(campoNombre.value);
    validarApellido(campoApellido.value);
    validarCorreo(campoCorreo.value);
    validarEdad(campoEdad.value);
    validarFechaNacimiento(campoFechaNacimiento.value);
    validarNumeroContacto(campoNumeroContacto.value);
    validarPais(campoPais.value);

    if (formularioValido) {
        alert('Todos los campos del formulario han sido validado y son correctos!!!');
        mensajeError.classList.remove('d-block');
    }

    function validarNombre(cadena) {
        //se manejará para validar el NOMBRE una expresión regular RegEx que admita solo letras:May,Min,con tildes, la ñ, espacio, y mínimo 5 y máximo 30 caracteres
        const nombreRegEx=/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{5,30}$/gm;
        if (cadena ==='' || (!cadena.match(nombreRegEx))) {
            console.log('El Nombre no es válido');
            alert('El Nombre no es válido');
            mensajeError.classList.add('d-block');
            formularioValido=false;
        }    
    }

    function validarApellido(cadena) {
        //se manejará también para validar el APELLIDO una expresión regular RegEx que admita solo letras:May,Min,con tildes, la ñ, espacio, y mínimo 5 y máximo 30 caracteres
        const nombreRegEx=/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{5,30}$/gm;
        if (cadena ==='' || (!cadena.match(nombreRegEx))) {
            console.log('El Apellido no es válido');
            alert('El Apellido no es válido');
            mensajeError.classList.add('d-block');
            formularioValido=false;
        } 
    }
    
    function validarCorreo(cadena) {
        //se manejará para validar el correo una expresión regular RegEx que admita en la primera parte del correo letras may y min, números, el punto, guion y guion bajo
        //seguido del arroba, para la segunda parte también letras may y min, números, el punto, y el guion, 
        //seguido de un punto y para la tercera parte letras min, mínimo 2 y máximo 3
        const correoRegEx=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/gm;
        if (cadena ==='' || (!cadena.match(correoRegEx))) {
            console.log('El Correo Electrónico no es válido');
            alert('El Correo Electrónico no es válido');
            mensajeError.classList.add('d-block');
            formularioValido=false;
        } 
    }

    function validarEdad(cadena) {
        //para la edad se valida que no se deje el campo vacío ni la edad pase de 110 años
        if (cadena ==='' || parseInt(cadena)>110) {
            console.log('El campo Edad es vacío o mayor a 110 años');
            alert('El campo Edad es vacío o mayor a 110 años');
            mensajeError.classList.add('d-block');
            formularioValido=false;
        }   
    }

    function validarFechaNacimiento(cadena) {
        //para la Fecha de Nacimiento se valida que no se deje el campo vacío
        let fecha = new Date(cadena);
        let fechaActual = new Date();
        if (cadena ==='' || (fecha >= fechaActual)) {
            console.log('El campo Fecha de Nacimiento es vacío o es mayor igual a la Fecha actual');
            alert('El campo Fecha de Nacimiento es vacío o es mayor igual a la Fecha actual');
            mensajeError.classList.add('d-block');
            formularioValido=false;
        } 
    }

function validarNumeroContacto(cadena) {
    //se manejará para validar el Número de Contacto una expresión regular RegEx que admita solo números, el espacio y el guión, de mínimo 10 y máximo 30
    const contactoRegEx=/^[0-9\s-]{10,30}$/gm;
    if (cadena ==='' || (!cadena.match(contactoRegEx))) {
        console.log('El Número de Contacto no es válido');
        alert('El Número de Contacto no es válido');
        mensajeError.classList.add('d-block');
        formularioValido=false;
    } 
}

    function validarPais(cadena) {
        if (cadena ==='') {
            console.log('Debe seleccionar un País');
            alert('Debe seleccionar un País');
            mensajeError.classList.add('d-block');
            formularioValido=false;
        } 
    }
});

    
