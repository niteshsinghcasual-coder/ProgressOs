const inputActivity=document.getElementById("inputActivity");
const inputCategory=document.getElementById("inputCategory");
const inputDuration=document.getElementById("inputDuration");
const submit=document.getElementById("subt");
const youractivity= document.querySelector(".yourActivity");
const showactivity=document.querySelector(".showactivity");
const showcategory=document.querySelector(".showcategory");
const showduration=document.querySelector(".showduration");
let inputActivityValue='';
let inputCategoryValue='';
let inputDurationValue='';
submit.addEventListener('click',function(e){
    e.preventDefault();
    inputActivityValue += `${inputActivity.value}`;
    inputCategoryValue += `${inputCategory.value}`;
    inputDurationValue += `${inputDuration.value}`;
    youractivityshow(inputActivityValue,inputCategoryValue,inputDurationValue);     
});
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');

function youractivityshow(inputActivityValue,inputCategoryValue,inputDurationValue){
    
    p1.innerHTML="Your Activity Value is " + `${inputActivityValue}`;
    showactivity.appendChild(p1);
        p2.innerHTML="Your Activity Value is " + `${inputCategoryValue}`;
    showcategory.appendChild(p2);
        p3.innerHTML="Your Activity Value is " + `${inputDurationValue}`;
    showduration.appendChild(p3);
}
