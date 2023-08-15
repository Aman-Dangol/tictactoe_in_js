let ele="";
let playerCount=0;
let i="";
let check=true;
let hasWon=false;
let turnIndicator=document.getElementById("turn_indicator");
function clicked(index){


     i =index;
    ele=document.getElementById(i);
    if(hasWon==false){
        if(check==true){

            if(playerCount%2==0){
                if(ele.style.backgroundColor!='blue'){
                    if(ele.style.backgroundColor!="red"){
                        ele.style.backgroundColor="red";
                        playerCount++;   
                        turn();
                        setTimeout(() => {
                            checkWin("red")
                        }, 100);
                       
                 
                    }else{
                        alert("youve already occupied this place");
                    }
                }
                else{
                    alert("this  space has already been occupied");
                } 
            }
            else{
                if(ele.style.backgroundColor!='red'){
                    if(ele.style.backgroundColor!="blue"){
                        ele.style.backgroundColor="blue";
                        playerCount++;
                        turn();
                        setTimeout(() => {
                           checkWin("blue")
                        }, 100);  
                    }else{
                        alert("youve already occupied this place");
                    }
                }
                else{
                    alert("the space is already occupied");
                }
    
            }
        }     
        setTimeout(spaceLeft,100);
    }
}

function spaceLeft(){
    let count = 0;
    if(hasWon==false){
        for(let i=1;i<=9;i++){

            if (document.getElementById(i).style.backgroundColor=='') {
                console.log("inside loop of inside spaceleft")
                count++;
                check= true;
            }
        }
        if (count==0) {
            setTimeout(noSpace,100);
            check=false;
        } 
    }
}
function noSpace(){
    alert("no space resart");
}
function checkWin(color){

    if(document.getElementById(1).style.backgroundColor==color&&document.getElementById(4).style.backgroundColor==color && document.getElementById(7).style.backgroundColor==color){
        gameWon(color);
    }
    else if (document.getElementById(2).style.backgroundColor==color && document.getElementById(5).style.backgroundColor==color && document.getElementById(8).style.backgroundColor==color) {
        gameWon(color);
    }
    else if (document.getElementById(3).style.backgroundColor==color && document.getElementById(6).style.backgroundColor==color && document.getElementById(9).style.backgroundColor==color) {
        gameWon(color);
    }
    else if (document.getElementById(1).style.backgroundColor==color && document.getElementById(2).style.backgroundColor==color && document.getElementById(3).style.backgroundColor==color) {
        gameWon(color);
    }
    else if (document.getElementById(4).style.backgroundColor==color && document.getElementById(5).style.backgroundColor==color && document.getElementById(6).style.backgroundColor==color) {
        gameWon(color);
    }
    else if (document.getElementById(7).style.backgroundColor==color && document.getElementById(8).style.backgroundColor==color && document.getElementById(9).style.backgroundColor==color) {
        gameWon(color);
    }
    else if (document.getElementById(1).style.backgroundColor==color && document.getElementById(2).style.backgroundColor==color && document.getElementById(3).style.backgroundColor==color) {
        gameWon(color);
    }
    else if (document.getElementById(1).style.backgroundColor==color && document.getElementById(5).style.backgroundColor==color && document.getElementById(9).style.backgroundColor==color) {
        gameWon(color);
    }
    else if (document.getElementById(3).style.backgroundColor==color && document.getElementById(5).style.backgroundColor==color && document.getElementById(7).style.backgroundColor==color) {
        gameWon(color);
    }
}
function turn(){
   
    if(playerCount%2==0){
        turnIndicator.innerHTML="red's turn";
    }
    else{
        turnIndicator.innerHTML="blue's turn";
    }
}
function gameWon(color){
 hasWon=true;
    alert(color+=" wins.\n press ok for new game");
        window.location.reload();
}


