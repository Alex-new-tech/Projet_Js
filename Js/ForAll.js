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