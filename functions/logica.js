function sumar_carrito(){
    var suma = value1 + value2
}


window.onload = function() {
    if (!sessionStorage.getItem('blockShown')) 
    {
        document.getElementById("welcomeBlock").style.display = "block";
        
        sessionStorage.setItem('blockShown', 'true');
    }
};

function closeModal() 
{
    document.getElementById("welcomeBlock").style.display = "none";
}