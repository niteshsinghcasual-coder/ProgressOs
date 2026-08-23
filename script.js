const text=document.getElementById("inputText");
const input=document.getElementById("input");
const thetext=document.getElementById("thetext");

function myinput()
{

    thetext.innerHTML=text.value;
}
input.addEventListener('click',myinput);