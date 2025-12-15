const SectionUnFilm = document.createElement("section");
const mains = document.querySelector("main");
const params = new URLSearchParams(window.location.search);
const nom = params.get("nom");
SectionUnFilm.id = "FilmsUnique";
SectionFilmsTendances = SectionUnFilm

function formatDateFR(dateUS) {
    if (!dateUS || dateUS === "N/A") return "Date inconnue";

    const date = new Date(dateUS);
    return date.toLocaleDateString("fr-FR");
}

async function afficherFilmUnique() {
    let filmUnique = await initialiserFilms(nom, "t=")
    console.log(filmUnique);
    SectionUnFilm.innerHTML = `
        <div class="film-unique-card">
            <h2>${filmUnique.Title}</h2>
            <img src="${filmUnique.Poster !== "N/A" ? filmUnique.Poster : ''}" alt="Affiche du film ${filmUnique.Title}">
            <p>Année : ${filmUnique.Year}</p>
            <p>Genre : ${filmUnique.Genre}</p>
            <p>Acteurs : ${filmUnique.Actors}</p>
            <p>Note IMDb : ${filmUnique.imdbRating} / 10</p>
            <p>Synopsis : ${filmUnique.Plot}</p>
            <p>Date de sortie : ${formatDateFR(filmUnique.Released)}</p>
        </div>`;

    mains.appendChild(SectionUnFilm);
}

afficherFilmUnique();