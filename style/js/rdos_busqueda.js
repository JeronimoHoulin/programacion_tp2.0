window.addEventListener('load',function(){


    //RDOS DE LA BUSQUEDA/////////////////////////////////////////////////////

    //defino mi QS y la paso a OL
    let queryString = location.search;
    let qs2object = new URLSearchParams(queryString);
    //Busco el dato dentro di mi nuevo objeto
    console.log(qs2object);

    //defino la variable entrada por el usuario
    let abuscar = qs2object.get('busqueda');
    console.log(abuscar);

    //defino mi URL dinámica, dada las instrucciones de DEEZER
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/?q=${abuscar}`; 

    //Armo mi funcion
    fetch( url )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //acá el code
        console.log(data);
        let arrayInfo = data.data;
        console.log(arrayInfo);
        //armo el contenedor
        let listaderdos = document.querySelector(".rdoslista");

        for(let i=0; i<arrayInfo.length; i++){
            listaderdos.innerHTML +=`<li>${arrayInfo[i].name}</li>`; //podríamos ponerle foto tamb
          };

      })
      .catch(function(error){
        console.log("El error fue eeeeste:" + error);
      })






























    
})