let ChargerFilms = document.getElementById("ButtonChargerFilms");
const SectionFilmsTendances = document.getElementById("FilmsTendances");

document.addEventListener("films-prets", () => {
    let filmImage = meilleursFilms[0].Poster;
    let filmTitre = meilleursFilms[0].Title;
    let filmDescription = meilleursFilms[0].Title;
    let div = document.createElement("div");
    div.innerHTML = `
    <div>
        <img src=${filmImage} alt="Poster du film ${filmTitre}">
        <h3>${filmTitre}</h3>
        <a href=pages/movie.html> En Savoir plus </a>
    </div>`;
    SectionFilmsTendances.appendChild(div);
    filmImage = meilleursFilms[1].Poster;
    filmTitre = meilleursFilms[1].Title;
    filmDescription = meilleursFilms[1].Title;
    div = document.createElement("div");
    div.innerHTML = `
    <div>
        <img src=${filmImage} alt="Poster du film ${filmTitre}">
        <h3>${filmTitre}</h3>
        <a href=pages/movie.html> En Savoir plus </a>
    </div>`;
    SectionFilmsTendances.appendChild(div);
    filmImage = meilleursFilms[2].Poster;
    filmTitre = meilleursFilms[2].Title;
    filmDescription = meilleursFilms[2].Title;
    div = document.createElement("div");
    div.innerHTML = `
    <div>
        <img src=${filmImage} alt="Poster du film ${filmTitre}">
        <h3>${filmTitre}</h3>
        <a href=pages/movie.html> En Savoir plus </a>
    </div>`;
    SectionFilmsTendances.appendChild(div);
});

ChargerFilms.addEventListener("click", () => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div>
        <img src=${filmImage} alt="Film 3">
        <h3>${filmTitre}</h3>
        <p>${filmDescription}</p>
    </div>`;
    SectionFilmsTendances.appendChild(div);
});

