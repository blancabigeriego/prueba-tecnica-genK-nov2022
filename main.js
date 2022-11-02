const button = document.createElement('button'); 
 button.innerText = '1 botón'; 
document.body.appendChild(button);

function handleMouseOver(){
    button.innerText = "1 botóN";
}
function handleMouseOut(){
    button.innerText = "1 botón";
}

button.addEventListener("mouseover", handleMouseOver);
button.addEventListener("mouseout", handleMouseOut);
