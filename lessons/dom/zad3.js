"use strict"
// Zaimplementuj funkcję, która potrafi filtrować obrazki wg przesłanego parametru

// function filter(alg) {
//     //...
// }

// filter("grayscale");
// filter("blur");
// filter("contrast");

function filter(alg) {
    if(!["grayscale", "blur", "contrast"].includes(alg)) {
        console.error("Not supported alg !");
        return;
    }

    const imgArr = document.querySelectorAll("img");
    imgArr.forEach(img =>  {
        switch(alg) {
            case "grayscale":
                img.style.filter = "grayscale(1)";
                break;
            case "blur":
                img.style.filter = "blur(10px)";
                break;
            case "contrast":
                img.style.filter = "contrast(200%)";
                break;
        }
    });
}
