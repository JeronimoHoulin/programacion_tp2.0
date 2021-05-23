window.addEventListener('load',function(){
    //Acá vá el code posterior al Onload}
    const listOfInput = document.querySelectorAll('.headerblock')

    for (let input of listOfInput) {
      input.addEventListener('mouseover', function(){
        input.style.color = "black";
      });
      input.addEventListener('mouseout', function(){
        input.style.color = "#21252954"
      })
    }











})