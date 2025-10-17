let output = document.getElementById("output1");

function Addition(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    output.innerText = n1 + n2;
}

function Subtraction(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    output.innerText = n1 - n2; 
}

function Multiplcation(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    output.innerText = n1 * n2; 
}

function Divison(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    if(n2 == 0){
        output.innerText = "Error";
    }
    else{
        output.innerText = n1 / n2;
    }
}
