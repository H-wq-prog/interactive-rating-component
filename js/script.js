let submit = document.getElementById('submit');
let card = document.getElementById('main-card');
let button = document.getElementById('but5');
let final = document.getElementById('final-card');
let masage = document.getElementById('masage');
let but = document.getElementsByClassName('but');



let contant;
let about = false;


for(let i=0; i< but.length; i++)
{
    but[i].addEventListener('click',function(event){  
    but[i].style.backgroundColor="white";
    but[i].style.color=" hsl(216, 12%, 8%)";
    about = true;

    
    contant = event.target.innerHTML;
    return contant;
    })
    
}
submit.onclick = function(){
    if(about === true){
        card.style.left="-100%";
        final.style.position="inherit";
        masage.innerHTML=`You selected ${contant} out of 5 `;
        
    }else{
        console.error("your data not corect");
    }
}

