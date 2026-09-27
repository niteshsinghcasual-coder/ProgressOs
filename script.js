const inputActivity=document.getElementById("inputActivity");
const inputCategory=document.getElementById("inputCategory");
const inputDuration=document.getElementById("inputDuration");
const submit=document.getElementById("subt");
const youractivity= document.querySelector(".yourActivity");
let inputActivityValue='';
let inputCategoryValue='';
let inputDurationValue='';
submit.addEventListener('click',function(e){
    e.preventDefault();
    inputActivityValue += `${inputActivity.value}`;
    inputCategoryValue += `${inputCategory.value}`;
    inputDurationValue += `${inputDuration.value}`;     
});
const p = document.createElement('p');
function youractivityshow(){

}
