function Table(){
    let n = document.getElementById("i1").value;
    let output="<table border='2'>"

   for(let i=1;i<10;i++){
           output =output+ `<tr><td> ${n} * ${i} =${ n*i }</tr><t/d>`;
   }

   output=output +"</table>";
   document.getElementById("d1").innerHTML=output;
}