let nav = document.getElementsByClassName("navhover");
const cleapi = "your_api_key_here";

if (nav.length > 0){
    for (let i = 0; i < nav.length; i++) {
        nav[i].addEventListener("pointerover", function(){
            if (this.id !== "active")
                this.style.backgroundColor = "hsla(0, 0%, 78%, 1.00)";
        });
        nav[i].addEventListener("pointerout", function(){
            this.style.backgroundColor = "";
        });
    }
}

function ajoutFilmHtml(filmImage, filmTitre, tendances = false, pages ="") {
    let div = document.createElement("div");
    div.classList.add("film-card");
    console.log(filmImage);
    if (filmImage === "N/A") {
        div.innerHTML = `
            <div class="poster-placeholder">
                Poster indisponible
            </div>
            <h3>${filmTitre}</h3>
            <a href="${pages}movie.html?nom=${filmTitre}">En savoir plus</a>
        `;
    } else {
        div.innerHTML = `
            <img src="${filmImage}" alt="Poster du film ${filmTitre}">
            <h3>${filmTitre}</h3>
            <a href="${pages}movie.html?nom=${filmTitre}">En savoir plus</a>
        `;
    }
    
    if (tendances) {
        SectionFilmsTendances.appendChild(div);
    }
    else {
        const SectionFilms = document.getElementById("Films");
        SectionFilms.appendChild(div);
    }
};

async function DonneeFilms(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        throw error;
    }
}

let spiderManFilms = [];
let avengerFilms = [];
let marvelFilms = [];
let batmanFilms = [];
let starWarsFilms = [];
let harryPotterFilms = [];
let fastAndFuriousFilms = [];
let missionImpossible = [];
let meilleursFilms = [];
let toutFilms = [];

async function initialiserFilms(film,premierParametre = "s=",deuxiemeParametre = "short") {
    console.log("Initialisation des films pour le terme de recherche :", film);
    try {
        let films = await DonneeFilms(`https://www.omdbapi.com/?apikey=${cleapi}&${premierParametre}${film}&plot=${deuxiemeParametre}`);
        if (premierParametre === "s=") {
            films = films.Search.filter(film => film.Type === "movie");
        }
        return films;
    }   
    catch (error) {
        console.error("Erreur lors de l'initialisation des films :", error);
        return [];  
    }
}

async function main() {
    spiderManFilms = await initialiserFilms("spider-man");
    avengerFilms = await initialiserFilms("avengers");
    marvelFilms = await initialiserFilms("marvel");
    batmanFilms = await initialiserFilms("batman");
    starWarsFilms = await initialiserFilms("Star Wars");
    harryPotterFilms = await initialiserFilms("Harry Potter");
    fastAndFuriousFilms = await initialiserFilms("Fast and Furious");
    missionImpossible = await initialiserFilms("Mission Impossible");
    meilleursFilms.push (spiderManFilms.find(film => film.Title == "Spider-Man: No Way Home"));
    meilleursFilms.push (starWarsFilms.find(film => film.Title == "Rogue One: A Star Wars Story"));
    meilleursFilms.push (fastAndFuriousFilms.find(film => film.Title == "Fast and the Furious: Tokyo Drift - The Japanese Way"));
    meilleursFilms.push (missionImpossible.find(film => film.Title == "Mission: Impossible - Ghost Protocol"));
    meilleursFilms.push (harryPotterFilms.find(film => film.Title == "Harry Potter and the Prisoner of Azkaban"));
    meilleursFilms.push (batmanFilms.find(film => film.Title == "The Batman"));
    toutFilms = spiderManFilms.concat(avengerFilms, marvelFilms, batmanFilms, starWarsFilms, harryPotterFilms, fastAndFuriousFilms, missionImpossible);
    toutFilms = toutFilms.filter(
    film => !meilleursFilms.some(m => m?.imdbID === film.imdbID)
    );
    document.dispatchEvent(new Event("films-prets"));
}