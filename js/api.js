const listado=document.getElementById("listPoke");
const fragmento=new DocumentFragment();
const tem = document.getElementById("template").content;

async function obtenerLista() {
    console.log('antes de invocar servicio');
    const resp= await axios.get("https://pokeapi.co/api/v2/pokemon")
                .then(response => {
                    const resultados = response.data.results;
                    console.log(resultados); 
                    let poke = [];
                    for (const i in resultados) {
                        poke.push(resultados[i].name);
                    }            
                    return poke;
                })
                .catch(error => {
                    console.log(error);
                    return 0;
                });           
    return resp;    

}

async function mostrarLista() {
    
    const data = await obtenerLista();
    
    if (data !== 0) {

      const comprobar = ('content' in document.createElement('template'));
      if (comprobar) {
            console.log("entró por template");
            data.forEach(element => {
                tem.querySelector("i").textContent = element;
                const miElemento = tem.cloneNode(true);
                fragmento.appendChild(miElemento);
            });

      } else {
            console.log("entró normal por la creación del elemento li");
            data.forEach(element => {
                const li = document.createElement("li");
                li.classList.add("list-group-item");
                li.textContent=element;
                fragmento.appendChild(li);
            });
    }
      listado.appendChild(fragmento);
    } else {
      console.log('No se pudo obtener la lista de Pokémon.');
    }
  }
  
  mostrarLista();