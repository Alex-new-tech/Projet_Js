const SectionUnFilm = document.createElement("section");
const mains = document.querySelector("main");
const params = new URLSearchParams(window.location.search);
const nom = params.get("nom");
SectionUnFilm.id = "FilmsUnique";
mains.appendChild(SectionUnFilm);
SectionFilmsTendances = SectionUnFilm

async function afficherFilmUnique() {
    let filmUnique = await initialiserFilms(nom, "t=")
    console.log(filmUnique);

}
