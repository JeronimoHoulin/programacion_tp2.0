window.addEventListener('load',function(){

    //CONVIERTO EL NUMERO DE ID A INTEGER
    let id_artista = localStorage.getItem('id_artista');
    id_artista = JSON.parse(id_artista);
    console.log(typeof(id_artista));
    id_artista = id_artista[0];
    console.log(id_artista);




    url_detalle = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id_artista}/top?limit=50`;

    fetch( url_detalle )
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //acá el code
        console.log(data);
        let detalleInfo = data.data;
        console.log(detalleInfo);

      })
      .catch(function(error){
        console.log("El error fue eeeeste:" + error);
      })






































})