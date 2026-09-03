const buttons=document.querySelectorAll(".botton");
const body=document.querySelector("body");

buttons.forEach(function(button)
{
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
    });
})