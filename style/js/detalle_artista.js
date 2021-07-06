window.addEventListener('load',function(){
    //Busco el id del artista en el QS
    let querystringg = location.search;
    let queryobj = new URLSearchParams(querystringg);
    let id_artista_qs = queryobj.get("id");
    console.log(`holaaa, tu id es = ${id_artista_qs}`);


    url_detalle_artqs = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id_artista_qs}`;

    fetch( url_detalle_artqs )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //acá el code
        let detalleIntel = data;
        console.log(detalleIntel);
        //relleno los datos con el ID hallado en la URL
        let lista_contenedor_art = document.querySelector(".art");
        let loqueagrego = '';

        datos =`<h1 class="artista_head" id="tituloartista">${detalleIntel.name}</h1>
                <img src="${detalleIntel.picture_big}" class="adetailimg" id="imgar">
                <h4 class="artista">Top 5 Songs:</h4>
                <ul type="none">
                  <li class="artista_alt" id="artis"></li>
                  <li class="artista_alt" id="artis"></li>
                  <li class="artista_alt" id="artis"></li>
                  <li class="artista_alt" id="artis"></li>
                  <li class="artista_alt" id="artis"></li>
                </ul>`;
        lista_contenedor_art.innerHTML = datos;

      })
      .catch(function(error){
        console.log("El error fue eeeeste:" + error);
      })





    //CONVIERTO EL NUMERO DE ID A INTEGER... esto fué por que agregué el id en un array en ves de como un valor... me parece
    if(localStorage.length>0){
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
          //nombre_art.innerHTML = `${detalleInfo.name}`;
          console.log(detalleInfo.name)
          nombre_art.innerHTML = `<h1 class="artista_head" id="tituloartista">${detalleInfo.name}</h1>`;
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



    }else{console.log("LS is empty.")};


































})