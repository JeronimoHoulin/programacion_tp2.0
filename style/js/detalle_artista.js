window.addEventListener('load',function(){

    //CONVIERTO EL NUMERO DE ID A INTEGER... esto fué por que agregué el id en un array en ves de como un valor... me parece
    let id_artista = localStorage.getItem('id_artista');
    id_artista = JSON.parse(id_artista);
    console.log(typeof(id_artista));
    id_artista = id_artista[0];
    console.log(id_artista);



    // BUSCO LA INFO BASICA DEL ARTISTA
    url_detalle_art = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id_artista}`;

    fetch( url_detalle_art )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //acá el code
        let detalleInfo = data;
        console.log(detalleInfo);

        nombre_art = document.querySelector('.artista_head');
        nombre_art.innerHTML = `${detalleInfo.name}`;
        cuadro_art = document.querySelector('.adetailimg');
        cuadro_art.src = `${detalleInfo.picture_big}`;


      })
      .catch(function(error){
        console.log("El error fue eeeeste:" + error);
      })





      //BUSCO LA INFO ESPECÍFICA DEL TRACKLIST DE ESE ARTISTA    --     top?limit=50
      url_detalle_track_art = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id_artista}/top?limit=50`;

      fetch( url_detalle_track_art )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //acá el code
        console.log(data);
        let detalleInfo = data.data;
        console.log(detalleInfo);

        let top_5_canciones = document.querySelectorAll('.artista_alt');
        for (let i=0; i<top_5_canciones.length; i++){
          top_5_canciones[i].innerHTML=`${detalleInfo[i].title}`;
        };


      })
      .catch(function(error){
        console.log("El error fue eeeeste:" + error);
      })


































})