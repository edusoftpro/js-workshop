//
// napisz funkcję, która potrafi filtrować obrazki wg przesłanego parametru
//

function filter(alg) {
    let proc;
    switch(alg) {
        case "grayscale":
            proc = "grayscale(1)";
            break;
        case "blur":
            proc = "blur(10px)";
            break;
        case "contrast":
            proc = "contrast(200%)";
            break;
        case "sepia":
            proc = "sepia(100%)";
            break;
        default:
            console.error("Wrong input parameter");
            return;
    }

    const pics = document.querySelectorAll("img");
    for (let pic of pics) {
        pic.style.filter = proc;
    }
}

filter("grayscale");
filter("blur");
filter("contrast");
filter("sepia");
