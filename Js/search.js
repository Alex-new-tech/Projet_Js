const input = document.getElementById("recherche");
const results = document.getElementById("resultas");

input.addEventListener("input", async () => {
    
    filmsRecherche = initialiserFilms(input.textContent)
    for (i = 0; i < filmsRecherche.length; i++) { 
        ajoutFilmHtml(meilleursFilms[i].Poster, meilleursFilms[i].Title);
    }

});