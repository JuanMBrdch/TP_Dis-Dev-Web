
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

=======
  
$(document).ready(function() {
    $("#tema_claro_oscuro").click(function() {
        $("body").toggleClass("tema_claro");
        let boton = document.getElementById("tema_claro_oscuro")
        if (boton.value == "☀️"){
            boton.value = "🌙"
        }
        else{
            boton.value = "☀️"
        }
    });
});


$(document).ready(function() {
    $('#boxSelect').on('change', function() {
        let order = $(this).val();
        let articles = $('section article').toArray();

        articles.sort(function(a, b) {
            let nameA = $(a).find('a').attr('href').toLowerCase();
            let nameB = $(b).find('a').attr('href').toLowerCase();
            return order === 'A' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });
        $('section').empty().append(articles);
    });
});
