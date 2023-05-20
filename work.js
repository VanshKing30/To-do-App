const inputbox = document.getElementById('input-box');
const listCont  = document.getElementById('list-container');

function addtask(){
    if(inputbox.value === ''){
        alert("You must add some text to add task!!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listCont.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    savedata();

}

listCont.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        savedata();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
} , false);

function savedata(){
    localStorage.setItem('data' , listCont.innerHTML);
}
function showtask(){
    listCont.innerHTML = localStorage.getItem('data');
}
showtask();


