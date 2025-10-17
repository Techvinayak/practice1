function table(){
    let name = document.getElementById("i1").value;
    let phone=document.getElementById("i2").value;

    
  if(name==="" || phone===""){
    alert("Please fill input fields");
  }
  
  let table= document.getElementById("table");
  let row =table.insertRow();

  let cell1=row.insertCell(0);
  let cell2=row.insertCell(1);

  cell1.textContent=name;
  cell2.textContent=phone;

  document.getElementById("i1")="";
  document.getElementById("i2")="";
  

}