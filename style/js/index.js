window.addEventListener('load',function(){

    //Acá vá el code posterior al Onload

    const listOfInput = document.querySelectorAll('.headerblock')
    //Tester
    for (let input of listOfInput) {
      input.addEventListener('mouseover', function(){
        input.style.color = "black";
      });
      input.addEventListener('mouseout', function(){
        input.style.color = "#21252954"
      });
    }

    //DATA DE ARTISTAS////////////////////////////////////////////////////////////

    let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27/related'; 

    fetch( url )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //acá el code
        console.log(data);
        let arrayInfo = data.data;
        //console.log(arrayInfo[1].name);

        /*NOMBRES DE LOS ARTISTAS*/
        let nombresdeart = document.querySelectorAll('.nombreblock.artistas');
        /*FOTOS DE LOS ARTISTAS*/
        let fotosdeartistas = document.querySelectorAll('.imagenesblock.artistas');

        for(let i=0; i<nombresdeart.length; i++){
          nombresdeart[i].innerHTML=`${arrayInfo[i].name}`;
          fotosdeartistas[i].src = `${arrayInfo[i].picture_big}`;
        };


        /*GUARDO IDS DE ARTISTAS PARA EL DETALLE DE SUS CANCIONES*/
        let cancion_artista_boton = document.querySelector('.unacancione')
        let lista_canciones_artistas = [];

        for(let i=0; i<nombresdeart.length; i++){
          cancion_artista_boton.addEventListener("click", function(e){
            e.preventDefault();
            lista_canciones_artistas.push(arrayInfo[i].id); //QUE ESTE CLICK SEA EL DE LA POSICION TAL...
            //armo un str
            let cancion_para_storage = JSON.stringify(lista_canciones_artistas);
            //guardo en mi LS
            localStorage.setItem('id_canciones', cancion_para_storage);
          })
        };
        console.log(localStorage);
      })
      .catch(function(error){
        console.log("El error fue eeeeste:" + error);
      })


      //DATA DE CANCIONES////////////////////////////////////////////////////////////

      let url_canciones = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"; 
      fetch( url_canciones )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //acá el code
        console.log(data);
        let arrayInfo1 = data.data;
        //console.log(arrayInfo1[1].name);

        /*TITULOS DE LOS CANCIONES*/
        let nombrescanciones = document.querySelectorAll('.nombreblock.canciones');
        /*FOTOS DE LOS CANCIONES*/
        let fotoscanciones = document.querySelectorAll('.imagenesblock.canciones')

        for(let i=0; i<nombrescanciones.length; i++){
          nombrescanciones[i].innerHTML=`${arrayInfo1[i].title}`;
          fotoscanciones[i].src = `${arrayInfo1[i].album.cover_big}`;
        };

      })
      .catch(function(error){
        console.log("El error fue eeeeste:" + error);
      })


      //DATA DE ALBUMES////////////////////////////////////////////////////////////

      let url_album = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums";
      fetch( url_album )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //acá el code
        console.log(data);
        let arrayInfo2 = data.data;
        //console.log(arrayInfo1[1].name);

        /*TITULOS DE LOS ALBUMS*/
        let nombresdealbum = document.querySelectorAll('.nombreblock.albums');
        /*FOTOS DE LOS ALBUMS*/
        let fotosdealbums = document.querySelectorAll('.imagenesblock.albums')

        for(let i=0; i<nombresdealbum.length; i++){
          nombresdealbum[i].innerHTML=`${arrayInfo2[i].title}`;
          fotosdealbums[i].src = `${arrayInfo2[i].cover_big}`;
        };

      })
      .catch(function(error){
        console.log("El error fue eeeeste:" + error);
      })

      

      // Agregar a favs////////////////////////////////////////////////////////////

      let lista_favs = [];
      let favsong = document.querySelectorAll(".favsong")
      favsong.addEventListener('click', function(e){
        e.preventDefault();

        //agregoal array
        


      })



























    // Buscador sin QS.. de gede
    /*
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27')
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data)
        let listaartistas = data;
        //console.log(listaartistas.data);
        //console.log(listaartistas.data[0]);
        //console.log(listaartistas.data[0].title);

        const searchbutton = document.getElementById('botonto');

        searchbutton.addEventListener('click', function(e){
            const searchstring = e.target.value;
            //console.log(searchstring);
            //console.log(typeof listaartistas.data.length);
            let contenedor_rdos = '';

          for(let i= 0 ; i<listaartistas.data.length; i++){
            if(
              listaartistas.data[i].album.title.includes(searchstring)||
              listaartistas.data[i].artist.name.includes(searchstring)
            ){
                //console.log(listaartistas.data[i].album.title);
                //console.log(typeof listaartistas.data[i].artist.name);
                let rdo_album = listaartistas.data[i].album.title;
                let rdo_artista = listaartistas.data[i].artist.name;
                contenedor_rdos += `<li>${rdo_album}</li>
                                    <li>${rdo_artista}</li>`
                //document.getElementById("rdoslista").innerHTML += '<li>'+ rdo_album +'</li>';
                //document.getElementById("rdoslista").innerHTML += '<li>'+ rdo_artista +'</li>';
            }
            document.getElementById("rdoslista").innerHTML = contenedor_rdos;
          };
        });
      })
      .catch(function(error){
        //console.log("el error fue:" + error);
      });
*/





});