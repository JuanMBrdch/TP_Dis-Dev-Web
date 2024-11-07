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

        // Reinsertar los artículos en el DOM en orden
        $('section').empty().append(articles);
    });
});
