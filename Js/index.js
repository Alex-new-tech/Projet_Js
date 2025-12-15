let ChargerFilms = document.getElementById("ButtonChargerFilms");
let ChargerFilmsPlus = true;
let SectionFilmsTendances;
let i = 0

main();

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

        for (let j = i; j < i + 6 && j < toutFilms.length; j++) {
            ajoutFilmHtml(toutFilms[j].Poster, toutFilms[j].Title);
        }

        i += 6;
    });
});

