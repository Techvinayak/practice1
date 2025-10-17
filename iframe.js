function time(){

let i1=document.getElementById("i1");
let current= new Date();

let time = current.toLocaleTimeString();
    
    i1.contentDocument.body.innerHTML=time;
}