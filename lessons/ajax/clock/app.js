
// const inervalId = setInterval(() => {
//     const clock = document.getElementById("clock-mounting-point");
//     const date = new Date;
//     const [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

//     clock.textContent = `${hours}:${minutes}:${seconds}`;
// }, 1000)

// setTimeout(() => clearInterval(inervalId), 10_000);

class Clock {
    constructor(mountingPoint, offset) {
        this.mountingPoint = mountingPoint;
        this.offset = offset;

        this.#run();
    }

    remove() {
        const clock = document.getElementById(this.mountingPoint);
        clock.textContent = "";

        clearInterval(this.intervalId);
    }

    #run() {
        const CLOCK_DELAY = 1000;
        this.intervalId = setInterval(() => this.#update(), CLOCK_DELAY);
    }

    #update() {
        const clock = document.getElementById(this.mountingPoint);
        const date = new Date;
        const [hours, minutes, seconds] = [(date.getHours() + this.offset) % 24, date.getMinutes(), date.getSeconds()];

        clock.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
}

const clock1 = new Clock("clock-poland-mounting-point", -2);

const btn = document.querySelector("button");
btn.addEventListener("click", () => clock1.remove());
