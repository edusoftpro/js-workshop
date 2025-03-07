import cfg from "./cfg.js";

const btn = document.querySelector("button");
btn.addEventListener("click", renderData);

function fetchUserData() {
    const endPointURL = `https://random-data-api.com/api/v2/users/?response_type=json&size=${cfg.userNo}`;

    return axios.get(endPointURL);
}


function render (users) {
    // rendering
    const userData = document.getElementById("user-data");
    userData.innerHTML = users.map(user => {
        const firstName = user.first_name;
        const lastName = user.last_name;
        return `<div>` + 
                `<div class="card" style="width: 12rem;">
                    <img src="https://ui-avatars.com/api/?name=${firstName}+${lastName}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${firstName} ${lastName}</h5>
                    </div>
                </div>` +
            `</div>`
    }).join("");
}

function renderData() {
    fetchUserData()
        .then(resp => render(resp.data))
        .catch(console.error);
}

