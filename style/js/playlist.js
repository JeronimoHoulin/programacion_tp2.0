window.addEventListener('load', function(){
    //your playlist
    
    let recuperoStorage = localStorage.getItem('favoritos');
    
    let favoritos = JSON.parse(recuperoStorage);
    
    let listaplay = document.querySelector('.listaplay');
    
    if(favoritos != null){
    console.log(favoritos);
    
    for (let i=0; i<favoritos.length; i++){
        let mostrarFavs = favoritos[i];
    
        let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${mostrarFavs}`; 
    
        fetch(url)
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            
            let info = data;
            
            console.log(info);
            
            let resultados = '';
    
            listaplay.innerHTML += ` <div class = "contenedorplay">
                                            <img src="${info.album.cover}" class = "imagenesplay" alt="genericman">
                                            <h1 class = "nombreplay">${info.artist.name}</h1>
                                        <div>
                                            <ul class = "playname">
                                                <li class = "playsong">${info.title}</li>
                                            </ul>
                                        </div>
                                    </div> ` ;
        
    
        //console.log('hola'); no me funciona
        console.log('hola');
        })
        .catch( function(e){
            console.log(e);
        })
    
    
    };
    }else{
        listaplay.innerHTML = '<p class="pl">Your Playlist is empty</p> <p><a href="./index.html" class="pwyl">Play what you love</a></p>'
    } 










    // EN REALIDAD NO ESTÁ VACÍO HAY UN ARRAY EN FORMATO STRING... if(favoritos = "[]")
    
    })