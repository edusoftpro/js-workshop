// Przefiltruj wszystkie obrazki ze strony

// - uzyj odpowiedniego gettera
//   -  document.querySelectorAll(???)
//   -  document.getElementsByTagName(???
// - efektem jest tablica
// - iteracja po tablicy
// - dla kazdego elementu zawołaj pic.style.filter="???"
// (źródło https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
//

function blurAllPics(energy = "normal") {
    let kernel;
    switch(energy) {
        case "weak":
            kernel = "5px";
            break;
        case "normal":
            kernel = "10px";
            break;
        case hard:
            kernel = "20px";
            break;
        default:
            console.error("Wrong input parameter");
            return;
    }

    const pics = document.querySelectorAll("img");
    for (let pic of pics) {
        pic.style.filter = `blur(${kernel})`;
    }
}

blurAllPics();