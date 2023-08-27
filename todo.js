var inputText = document.getElementById('input1');
var myList = document.getElementById('list');

inputText.addEventListener('keyup',function(event){
    console.log(event.key);
    if(event.key == 'Enter'){
      var list = document.createElement('li');
    
       list.innerHTML = `${inputText.value}<i class="fa-solid fa-xmark"></i>`
       console.log(list);
       myList.appendChild(list)
    }
   
list.addEventListener('click' ,function(){
    list.classList.toggle('done');
    
    })
list.querySelector('i').addEventListener('click',function(){
    list.remove();
})

    myList.appendChild(list);

l
})
