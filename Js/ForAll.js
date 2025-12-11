let nav = document.getElementsByClassName("navhover");

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

async function initialiserFilms(film,premierParametre = "s=") {
    try {
        let films = await DonneeFilms(`https://www.omdbapi.com/?apikey=5e37588e&${premierParametre}${film}`);
        films = films.Search.filter(film => film.Type === "movie");
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
    console.log(spiderManFilms);
    console.log(starWarsFilms);
    console.log(fastAndFuriousFilms);
    meilleursFilms.push (spiderManFilms.find(film => film.Title == "Spider-Man: No Way Home"));
    meilleursFilms.push (starWarsFilms.find(film => film.Title == "Rogue One: A Star Wars Story"));
    meilleursFilms.push (fastAndFuriousFilms.find(film => film.Title == "Fast and the Furious: Tokyo Drift - The Japanese Way"));
    console.log(meilleursFilms);
    document.dispatchEvent(new Event("films-prets"));
}

main();
