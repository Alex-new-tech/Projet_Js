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

const ToutFilm = DonneeFilms("https://www.omdbapi.com/?apikey=5e37588e&s=*");


