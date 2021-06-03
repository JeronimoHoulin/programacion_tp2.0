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
      })
    }

    //Search Results
    // with QS
    /*
    let queryString = this.location.search;
    let queryStringObj = new URLSearchParams(queryString);

    let abuscar = queryStringObj.get('busqueda'); //acá va el name del campo

    let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27/top';

    fetch( url )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //acá el code
        console.log(data);
        let arrayInfo = data.data;
        let lista = document.querySelector('rdoslista')
        let contenedor_rdos = '';

        for(let i=0; 1<arrayInfo.length; i++){
          contenedor_rdos += `<li>
                                <a href = "detalle_cancion.html?id=${
                                  arrayInfo[i].album.title}">
                                  ${arrayInfo[i].artist.name}
                                  </a>
                            </li>`
        }
        lista.innerHTML = contenedor_rdos;
      })
      .catch(function(error){
        console.log("el error fue:" + error);
      });
*/





    // without QS
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27/top')
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //console.log(data)
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






});