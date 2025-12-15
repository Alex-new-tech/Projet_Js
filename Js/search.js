const input = document.getElementById("recherche");
const results = document.getElementById("resultas");
const mains = document.querySelector("main");
const SectionFilmsCreation = document.createElement("section");
SectionFilmsCreation.id = "Films";
const section = document.getElementById("Films");

input.addEventListener("input", async () => {
    SectionFilmsCreation.innerHTML = "";
    mains.appendChild(SectionFilmsCreation);
    
    filmsRecherche = await initialiserFilms(input.value)
    for (i = 0; i < filmsRecherche.length; i++) { 
        ajoutFilmHtml(filmsRecherche[i].Poster, filmsRecherche[i].Title);
    }

    if (filmsRecherche.length === 0) {
        SectionFilmsCreation.innerHTML = "<h3>Aucun résultat trouvé</h3>";
    }


});