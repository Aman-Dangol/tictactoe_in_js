let ele="";
let playerCount=0;
let i="";
let check=true;
let hasWon=false;
function clicked(index){
     i =index;
    ele=document.getElementById(i);
    if(hasWon==false){
        if(check==true){
            if(playerCount%2==0){
                if(ele.style.backgroundColor!='blue'){
                    if(ele.style.backgroundColor!="red"){
                        ele.style.backgroundColor="red";
                        setTimeout(() => {
                            checkWin("red")
                        }, 100);
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
    }   else{
        alert("game has ended")
    }
       
}
spaceLeft=()=>{
    let count = 0;
    if(hasWon==false){
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
    else{
        alert("game has ended ")
    } 

}
function noSpace(){
    alert("no space resart");
}
function checkWin(color){

    if(document.getElementById(1).style.backgroundColor==color&&document.getElementById(4).style.backgroundColor==color && document.getElementById(7).style.backgroundColor==color){
        alert(color+" wins");
        hasWon=true;
    }

}

