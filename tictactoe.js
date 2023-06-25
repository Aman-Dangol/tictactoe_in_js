let ele="";
let playerCount=0;
let i="";
let check=true;
function clicked(index){
     i =index;
    ele=document.getElementById(i);
    if(check==true){
        if(playerCount%2==0){
            if(ele.style.backgroundColor!='blue'){
                if(ele.style.backgroundColor!="red"){
                    ele.style.backgroundColor="red";
                    playerCount++;                    
                }else{
                    alert("youve already occupied this place");
                }
            }
            else{
                alert("the space is already occupied");
            } 
        }
        else{
            if(ele.style.backgroundColor!='red'){
                if(ele.style.backgroundColor!="blue"){
                    ele.style.backgroundColor="blue";
                    playerCount++;
                }else{
                    alert("youve already occupied this place");
                }
            }
            else{
                alert("the space is already occupied");
            }

        }
        spaceLeft();
    }
    

}
spaceLeft=()=>{
    let count = 0;
    for(let i=1;i<=9;i++){
        if (document.getElementById(i).style.backgroundColor=='') {
            count++;
            check= true;
        }
    }
    if (count==0) {
        setTimeout(noSpace,100);
        check=false;
    }    

}
function noSpace(){
    alert("no spce resart");
}

