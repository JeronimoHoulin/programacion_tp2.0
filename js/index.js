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
        console.log(listaartistas);

        const searchbar = document.getElementById('searchbar');

        searchbar.addEventListener('keyup', function(e){
            const searchstring = e.target.value;
            let filtered_search = function(searchstring){
              return(
                listaartistas.artist.name.includes(searchstring)||
                listaartistas.artist.album.includes(searchstring)
              );
              console.log(filtered_search);
            };
        });
      })
      .catch(function(error){
        console.log("el error fue:" + error);
      })






})