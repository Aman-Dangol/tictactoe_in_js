let ele="";
let playerCount=0;
function clicked(index){
    let i =index;
    ele=document.getElementById(i);
    if(playerCount%2==0){
        if(ele.style.backgroundColor!="red"){
            ele.style.backgroundColor="red";
            playerCount++;
        }else{
            console.log("not available");
        }
    }
    else{
        if(ele.style.backgroundColor!="blue"){
            ele.style.backgroundColor="blue";
            playerCount++;
        }else{
            console.log("not available");
        }
    }
}

