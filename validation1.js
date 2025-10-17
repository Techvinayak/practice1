function validate(){

   let name= document.forms["f1"]["Name"].value;
   let age=parseInt(document.forms["f1"]["Age"].value);


    document.getElementById("p1").style.visibility="hidden";
    document.getElementById("p2").style.visibility="hidden"

    let valid=true; 

   if(name.trim()===""){
    // alert("Please enter name");
    document.getElementById("p1").style.visibility="visible";
    valid =false;
   }

   
   if(isNaN(age) || age<10){
    // alert("Age should not be less than 10")
     document.getElementById("p2").style.visibility="visible";
     valid= false;
   }

    if(valid){
       let table = document.getElementById("output1");
       let row= table.insertRow();
       row.insertCell(0).innerText=name;
       row.insertCell(1).innerText=age;
       
       document.forms["f1"]["Name"].value="";
       document.forms["f1"]["Age"].value="";

    }

  return false;

}