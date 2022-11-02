

function createTenButtons(){
    for(let i= 1; i<11; i++){
        let button = document.createElement('button'); 
        button.innerText = `${i} Botón`; 
        document.body.appendChild(button);
    }
};

createTenButtons();