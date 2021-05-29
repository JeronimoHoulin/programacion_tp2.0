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

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27/top')
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        //console.log(data)
        let listaartistas = data;
        //console.log(listaartistas.data[1])
        //console.log(listaartistas.data[0].title);

        const searchbar = document.getElementById('searchbar');

        searchbar.addEventListener('keyup', function(e){
            const searchstring = e.target.value;
            //console.log(searchstring)
          for(let i= 0 ; i<listaartistas.data.length; i++){
            if(
              listaartistas.data[i].album.title.includes(searchstring)||
              listaartistas.data[i].artist.name.includes(searchstring)
            ){
                //console.log(listaartistas.data[i].album.title);
                //console.log(listaartistas.data[i].artist.name);
                let rdo_album = listaartistas.data[i].album.title;
                let rdo_artista = listaartistas.data[i].artist.name;
                document.getElementById("rdoslista").innerHTML = '<li>'+ rdo_album +'</li>';
                document.getElementById("rdoslista").innerHTML = '<li>'+ rdo_artista +'</li>';
            };
          };
        });
      })
      .catch(function(error){
        console.log("el error fue:" + error);
      })






})