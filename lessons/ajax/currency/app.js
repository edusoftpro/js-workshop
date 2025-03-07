//
// Wyswietl informacje w konsoli ile to jest X złotych w USD, EUR, CHF, GBP
// curl -s https://api.frankfurter.dev/v1/latest?base=PLN
//
// async function go() {
//     async function getCurrencyStat(plnAmount) {
//         const neededCurrencies = ["USD", "EUR", "CHF", "GBP"];
//         const currencyUrlInPLN = 'https://api.frankfurter.dev/v1/latest?base=PLN'
//         return fetch(currencyUrlInPLN)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`Sth went wrong: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 const currenciesAmount = {};
//                 neededCurrencies.forEach(currency => {
//                     const currencyAmount = data.rates[currency] * plnAmount;
//                     currenciesAmount[currency] = currencyAmount.toFixed(2);
//                 });

//                 return currenciesAmount;
//             });
//     }

//     const currentyStat = await getCurrencyStat(1000);
//     console.log(currentyStat);
// }

// go();


async function go2() {
    async function getCurrencyStat(plnAmount) {
        const neededCurrencies = ["USD", "EUR", "CHF", "GBP"];
        const currencyUrlInPLN = 'https://api.frankfurter.dev/v1/latest?base=PLN';

        const response = await fetch(currencyUrlInPLN);
        if (!response.ok) {
            throw new Error(`Sth went wrong: ${response.status}`);
        }
        const data = await response.json();
        const currenciesAmount = {};
        neededCurrencies.forEach(currency => {
            const currencyAmount = data.rates[currency] * plnAmount;
            currenciesAmount[currency] = currencyAmount.toFixed(2);
        });

        return currenciesAmount;
    }

    const currentyStat = await getCurrencyStat(1000);
    console.log(currentyStat);
}
go2();


// TESTING
// Happy scenario
// const currStat = compute(1000);
// currStat === { USD: 40, CHF: 50, EUR: 60, GBP: 60 }

// Unhappy scenario
// const currStat = compute();
// sprawdz czy funkcja rzuca wyjatkiem
