let ChargerFilms = document.getElementById("ButtonChargerFilms");
let ChargerFilmsPlus = true;
let SectionFilmsTendances;

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
        const SectionFilms = document.getElementById("Films");
        SectionFilms.appendChild(div);
    }
};

document.addEventListener("films-prets", () => {
    const SectionTendances = document.createElement("section");
    SectionTendances.id = "FilmsTendances";
    ChargerFilms.before(SectionTendances);
    SectionFilmsTendances = SectionTendances

    for (let i = 0; i < meilleursFilms.length; i++) {
        ajoutFilmHtml(meilleursFilms[i].Poster, meilleursFilms[i].Title, true);
    }

    ChargerFilms.addEventListener("click", () => {
        if (ChargerFilmsPlus){
            const SectionFilmsCreation = document.createElement("section");
            SectionFilmsCreation.id = "Films";
            ChargerFilms.before(SectionFilmsCreation);
            ChargerFilmsPlus = false;
        }
        for (let i = 0; i < 6; i++){
            ajoutFilmHtml();
        }
    });
});