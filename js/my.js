let form = document.getElementById("form");
let item = [];
displayLocalStorage();
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let todoInput=document.getElementById('todo-input').nodeValue;
  if(todoInput===""){
      alert('Please enter valid input');

  }
  else{
      displayItem(todoInput);
      storeItem(todoInput);
      document.getElementById('todo-input'),this.nodeValue='';
      addDeleteFunction(todoinput);
  
  }

});
function storeItem(item){
    items.push(item){
        localStorage.setItem('item',JSON,stringify(items));
    };

    function displayItems(todoInput){
        let todoItem= document.createElement('li');
        
        todoItem,innerHTML=`${todoInput}<div class ="delete-item">Delete</div`>

        let todoList= document.querySelector('ul');
        todolist.appendChild(todoItem);
    };
    function displayLocalStorage(){
        let storage= localStorage.getItem('item');

        if(storage ===null){
            item=[];

        }
        else {
            let storageParsad = JSON.parse(storage);
            storageParsad.foreach(function(storageItem){
                displayItem(StoargeItem);

            })
        };
    };
    function addDeleteFunction(codeInput){
        let deleteButton = document.querySelectorAll('.delete-Item');
        deleteButton.forEach(function(button,index){

            button.addEventListener('click',function(e){
                console.log(e.path[1]).childNode);
            
            let deletedStorage= localStorage.getItem('item');
            let deletedStorageParsad=JSON.parse(deleteStroage);

            deletedStorageParsad.splice(index,1);
            console.log(deletedStorageParsad);
            localStorage.setItem('item',JSON.stringify(deletedStorageParsad));
            if(deletedStorageParsad.length ===0){
                let todolist= document.querySelector('ul');
                todolist.innerHTML='No more todos!';
                 todolist.appendChild(todoItem);
                 displayLocalStoarge();}


        else{
            localStorage.setItem('item',JSON.stringly(deletedStorageParsad));
        }
        })
    }



    }
