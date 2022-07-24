

const reset = document.querySelector('.pick');
const ul = document.querySelector(".next");
const form = document.querySelector("form");
const input = document.querySelector("input");
const h2 = document.querySelector("h2 span");
const li = document.getElementsByClassName("task");
const input2 = document.querySelector(".wpis");



const clock = () => {

 const czas = new Date();

 const sek = czas.getSeconds();

 const min = czas.getMinutes();

 const godz = czas.getHours();

 document.querySelector(".clock span" ).textContent = `${godz}:${min}:${sek}`

}
 setInterval(clock,1000);

const wyszukane = (e)=>{

    const tekst = e.target.value.toLowerCase();

    const tablica  = [...li];
    
    console.log(tablica);
    
    const newLocal =  tablica.filter(element => element.textContent.toLowerCase()
    .includes(tekst));
    
    console.log(tablica);
    
    while (ul.firstChild){
        ul.removeChild(ul.lastChild);
    }
    
    newLocal.forEach(element => ul.appendChild(element));
    
}  
    



function remoEle(e) {
    e.target.parentElement.remove();
    h2.textContent = li.length;

}

const resetItem = ()=>{
 
ul.textContent = "";
h2.textContent = li.length;

}

const appendSupp = (e)=> {

e.preventDefault()

const listTask = input.value;

if (listTask===" ") return;
const task = document.createElement("li");
task.className = "task";
task.innerHTML = listTask + "<button>Usuń</button>";
ul.appendChild(task);
input.value = " ";
h2.textContent = li.length;
task.querySelector('button').addEventListener('click',remoEle);


const wyszukane = (e)=>{

    const tekst = e.target.value.toLowerCase();

    const tablica  = [...li];
    
    console.log(tablica);
    
    const newLocal =  tablica.filter(element => element.textContent.toLowerCase()
    .includes(tekst));
    
    console.log(tablica);
    
    ul.textContent = " ";
    
    newLocal.forEach(element => ul.appendChild(task));
    
}  

}


input2.addEventListener("input",wyszukane);
reset.addEventListener("click",resetItem);
form.addEventListener("submit", appendSupp);