//para el ejemplo 3 del cargue del archivo (hay dos ejemplo 1 carga de 1 solo archivo y 2 cargue varios)

//ejemplo cargue 1 solo archivo
const archivo=document.getElementById('archivo');

//para saber si se ha cargado el archivo (ejemplo con uno solo)se usa el evento change
archivo.addEventListener('change', (event) => {
  //1 se verifica si existen archivos
  if (event.target.files && event.target.files[0]) {
    //2 se selecciona el elemento img por su id
    const imagen=document.getElementById('imagen');
    //3 se crea un nuevo objeto fileReader
    const reader=new FileReader();
    //4 se lee el archivo como url
    reader.readAsDataURL(event.target.files[0]);
    //5 se identifica cuando carga
    reader.onload = ((image) => {
      //6 con la propiedad result obtenemos el fichero como url
      const imagenUrl = image.target.result;
      //7 se asigna la url al atributo src del elemento img
      imagen.setAttribute('src',imagenUrl);
    });
  }
});

//ejemplo cargue varios archivos
const archivos=document.getElementById('archivos');

//se usa fragment para evitar el reflow al ir agregando dinámicamente las etiquetas img src para mostrarlas
const fragment = new DocumentFragment();
const images = document.getElementById('images');

archivos.addEventListener('change', (event) => {
  //1 se verifica si existen archivos
  if (event.target.files) {
      //2 se guaardan los archivos en una variable tipo arreglo que se llamará files
      const files=event.target.files;
      console.log(files);
      //recorremos ese arreglo
      for (let file of files) {
          //3 se crea un nuevo objeto fileReader
          const reader=new FileReader();
          //creo dinámcamente la etiqueta img
          const imagen = document.createElement('img');
          //4 se lee el archivo como url
          reader.readAsDataURL(file);
          reader.addEventListener('load', (e) => {
              const resultado = e.target.result;
              imagen.setAttribute('src', resultado);
              imagen.classList.add('imagen');
          });
          fragment.appendChild(imagen);
      }
      images.appendChild(fragment);
    }    
});