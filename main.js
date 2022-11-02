
function createThousandButtons(){

    
    for(let i= 1; i<1001; i++){
        function handleMouseOver(){
            button.innerText = `${i} BotóN`;
        }
        function handleMouseOut(){
            button.innerText = `${i} Botón`;
        }
        let button = document.createElement('button'); 
        button.innerText = `${i} Botón`; 
        document.body.appendChild(button);
        button.addEventListener('mouseover', handleMouseOver);
        button.addEventListener('mouseout', handleMouseOut);
    }
};

createThousandButtons();

