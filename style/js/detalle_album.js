window.addEventListener('load',function(){

    //CONVIERTO EL NUMERO DE ID A INTEGER... esto fué por que agregué el id en un array en ves de como un valor... me parece
    let id_album = localStorage.getItem('id_album');
    id_album = JSON.parse(id_album);
    console.log(id_album);
    id_album = id_album[0];
    console.log(id_album);



    // BUSCO LA INFO BASICA DEL ARTISTA
    url_detalle_alb = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id_album}`;

    fetch( url_detalle_alb )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //acá el code
        let detalleInfo = data;
        console.log(detalleInfo);

        let nombre_artii = document.querySelector('.name_artista_det');
        nombre_artii.innerHTML = `${detalleInfo.artist.name}`;

        let genero_album = document.querySelector('.album_nombb');
        genero_album.innerHTML=`${detalleInfo.title}`;

        let detall_genero = document.querySelector('.gener_dett');
        detall_genero.innerHTML=`${detalleInfo.genres.data[1].name}`;
        
        let fecha_pub = document.querySelector('.fechita_det');
        fecha_pub.innerHTML=`${detalleInfo.release_date}`;

        let imagensita = document.querySelector('.detallesin');
        imagensita.src=`${detalleInfo.cover_big}`;

        let temas_detalle = document.querySelectorAll('.temita_detalle');
        for(let i=0; i<temas_detalle.length; i++){
            temas_detalle[i].innerHTML=`${detalleInfo.tracks.data[i].title}`;
        };
      })
      .catch(function(error){
        console.log("El error fue eeeeste:" + error);
      })





































})