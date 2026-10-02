const inputActivity=document.getElementById("inputActivity");
const inputCategory=document.getElementById("inputCategory");
const inputDuration=document.getElementById("inputDuration");
const submit=document.getElementById("subt");
const youractivity= document.querySelector(".yourActivity");
const showactivity=document.querySelector(".showactivity");
const showcategory=document.querySelector(".showcategory");
const showduration=document.querySelector(".showduration");
const table = document.querySelector(".table");
const form = document.querySelector("form");
let inputActivityValue='';
let inputCategoryValue='';
let inputDurationValue='';
submit.addEventListener('click',function(e){
    e.preventDefault();
    inputActivityValue += `${inputActivity.value}`;
    inputCategoryValue += `${inputCategory.value}`;
    inputDurationValue += `${inputDuration.value}`;
    youractivityshow(inputActivityValue,inputCategoryValue,inputDurationValue);      
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    const json = JSON.stringify(obj);
    localStorage.setItem('form',json);
    window.location.href="confirm.html";

});
const p = document.createElement('tr');
const p1 = document.createElement('td');
const p2 = document.createElement('td');
const p3 = document.createElement('td');

function youractivityshow(inputActivityValue,inputCategoryValue,inputDurationValue){
    
    p1.innerHTML=`${inputActivityValue }`;
    p.appendChild(p1);
        p2.innerHTML=`${inputCategoryValue }`;
    p.appendChild(p2);
        p3.innerHTML=`${inputDurationValue }`;
    table.appendChild(p);
   
   
    clear();
}
function clear(){
    inputActivity.value='';
    inputDuration.value='';
    inputCategory.value='';
}
