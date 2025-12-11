let ChargerFilms = document.getElementById("ButtonChargerFilms");
const SectionFilmsTendances = document.getElementById("FilmsTendances");

function ajoutFilmHtml(filmImage, filmTitre) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div>
        <img src=${filmImage} alt="Poster du film ${filmTitre}">
        <h3>${filmTitre}</h3>
        <a href=pages/movie.html> En Savoir plus </a>
    </div>`;
    SectionFilmsTendances.appendChild(div);
};

document.addEventListener("films-prets", () => {
    let filmImage = meilleursFilms[0].Poster;
    let filmTitre = meilleursFilms[0].Title;
    ajoutFilmHtml(filmImage, filmTitre);

    filmImage = meilleursFilms[1].Poster;
    filmTitre = meilleursFilms[1].Title;
    ajoutFilmHtml(filmImage, filmTitre);

    filmImage = meilleursFilms[2].Poster;
    filmTitre = meilleursFilms[2].Title;
    ajoutFilmHtml(filmImage, filmTitre);
});

ChargerFilms.addEventListener("click", () => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div>
        <img src=${filmImage} alt="Poster du film ${filmTitre}">
        <h3>${filmTitre}</h3>
        <a href=pages/movie.html> En Savoir plus </a>
    </div>`;
    SectionFilmsTendances.appendChild(div);
});