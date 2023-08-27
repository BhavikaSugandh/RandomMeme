const url ='https://api.dictionaryapi.dev/api/v2/entries/en/';
    var word = document.getElementById('enteredWord').value;
    var btn = document.getElementById('btn');
    var sound = document.getElementById('sound');
    btn.addEventListener('click',function(){
      var word = document.getElementById('enteredWord').value;
      var main = document.getElementById('main');
   
      fetch(`${url}${word}`)
      .then((res)=> res.json())
      .then((data)=>{
         console.log(data);
       main.innerHTML = `
     <div id="result">
              <p id="word">${word}</p>
     <button onclick="playSound()">
      <i class="fas fa-volume-up"></i>
      </button>
            
                </div>
                <div id="details">
                    <p class="pos">${data[0].meanings[0].partOfSpeech}</p>
                    <p>${data[0].phonetic}</p>
                   
                </div>
                <p class="word-meaning">
                  ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                 
                ${data[0].meanings[0].definitions[0].example };
                </p>`;
    sound.setAttribute("src",`${data[0].phonetics[0].audio}`);
       console.log(sound);
});

   });
function playSound(){
  sound.play();
}