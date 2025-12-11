let ChargerFilms = document.getElementById("ButtonChargerFilms");
const SectionFilmsTendances = document.getElementById("FilmsTendances");
const SectionFilms = document.getElementById("Films");

function ajoutFilmHtml(filmImage, filmTitre, tendances = false) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div>
        <img src=${filmImage} alt="Poster du film ${filmTitre}">
        <h3>${filmTitre}</h3>
        <a href=pages/movie.html> En Savoir plus </a>
    </div>`;
    if (tendances) {
        SectionFilmsTendances.appendChild(div);
    }
    else {
        SectionFilms.appendChild(div);
    }
};

document.addEventListener("films-prets", () => {
    for (i = 0; i < meilleursFilms.length; i++) {
        ajoutFilmHtml(meilleursFilms[i].Poster, meilleursFilms[i].Title, true);
    }

    ChargerFilms.addEventListener("click", () => {
    for (i = 0; i < 6; i++){
        ajoutFilmHtml();
    }
});
});