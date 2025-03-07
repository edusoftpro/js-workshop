let article = {
    journal: 'Math Journal',
    year: 2020,
    title: 'Linear function',
    getDescr: function () {
        return `${this.journal}, ${this.title}, ${this.year}`;//'Math Journal, Linear function, 2020'
    },
    displayYearInConsole() {
        console.log(this.year);
    }
};
