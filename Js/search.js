const input = document.getElementById("recherche");
const results = document.getElementById("resultas");
const mains = document.querySelector("main");
const ChargerFilms = document.getElementById("ButtonChargerFilms");
const SectionFilmsCreation = document.createElement("section");
SectionFilmsCreation.id = "Films";
const section = document.getElementById("Films");
let i = 0;
let filmsRecherche = [];

input.addEventListener("input", async () => {
    i = 0;
    SectionFilmsCreation.innerHTML = "";
    mains.appendChild(SectionFilmsCreation);    
    ChargerFilms.before(SectionFilmsCreation);
    
    filmsRecherche = await initialiserFilms(input.value)
    for (let j = i; j < i + 6 && j < filmsRecherche.length ; j++) {
        ajoutFilmHtml(filmsRecherche[j].Poster, filmsRecherche[j].Title, false);
    }

    i += 6;

    if (filmsRecherche.length === 0) {
        SectionFilmsCreation.innerHTML = "<h3>Aucun résultat trouvé</h3>";
    }


});

ChargerFilms.addEventListener("click", () => {

        for (let j = i; j < i + 6 && j < filmsRecherche.length; j++) {
            ajoutFilmHtml(filmsRecherche[j].Poster, filmsRecherche[j].Title, false);
        }

        i += 6;
    });