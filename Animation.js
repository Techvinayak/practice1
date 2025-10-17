function Animated(){
              
    const elem1= document.getElementById("d1");
    const elem2=document.getElementById("d2");

    const pagewidth= window.innerWidth;
    const boxwidth=100;
    const centerX= pagewidth / 2;
    let pos1=0;
    let pos2=pagewidth - boxwidth ;

    const centerGap =10;

    let id=setInterval(frame,5);

    function frame(){
        if(pos1+boxwidth+centerGap>=pos2){
            clearInterval(id);
        }
        else{
            pos1+=2;
            elem1.style.left=pos1+"px";
            pos2-=2;
            elem2.style.left=pos2+"px"

            const centerY =window.innerHeight / 2 - boxwidth / 2;
            elem1.style.top=centerY+"px";
            elem2.style.top=centerY+"px";
        }
    }
}