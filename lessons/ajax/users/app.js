import cfg from "./cfg.js";

const btn = document.querySelector("button");
btn.addEventListener("click", renderData);

// const controller = new AbortController;
// const signal  = controller.signal;

function fetchUserData() {
    const endPointURL = `https://random-data-api.com/api/v2/users/?response_type=json&size=${cfg.userNo}`;

    return fetch(endPointURL, {
        // signal,
    })
    .then(resp => resp.json());
}

function render (users) {
    // rendering
    const userData = document.getElementById("user-data");
    userData.innerHTML = users.map(user => {
        const firstName = user.first_name;
        let avatarURL = user.avatar;
        avatarURL = avatarURL.replace("set1", "set5");
        return `<div>` + 
            `${firstName}` + 
            `<img src="${avatarURL}">` +
            `</div>`
    }).join("");
}

function renderData() {
    fetchUserData()
        .then(render)
        .catch(console.error);
}

