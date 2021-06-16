window.addEventListener('load',function(){
    //CONVIERTO EL NUMERO DE ID A INTEGER... esto fué por que agregué el id en un array en ves de como un valor... me parece
    let id_cancion = localStorage.getItem('id_cancion');
    id_cancion = JSON.parse(id_cancion);
    console.log(typeof(id_cancion));
    id_cancion = id_cancion[0];
    console.log(typeof(id_cancion));


    //Busco la info de esa cancion
    url_detalle_cancion = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id_cancion}`;

    fetch( url_detalle_cancion )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //acá el code
        let detalleInfo_canc = data;
        console.log(detalleInfo_canc);

        nombresito = document.querySelector('.h1cancion');
        nombresito.innerHTML=`${detalleInfo_canc.title}`;
        
        nombre_art = document.querySelector('.nombre_artista');
        nombre_art.innerHTML = `${detalleInfo_canc.artist.name}`;

        fotito = document.querySelector('.detallesito_cancion');
        fotito.src=`${detalleInfo_canc.album.cover_big}`;

        titulo_album = document.querySelector('.nombre_album');
        titulo_album.innerHTML = `${detalleInfo_canc.album.title}`;


      })
      .catch(function(error){
        console.log("El error fue eeeeste:" + error);
      })




































})