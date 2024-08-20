const submitButton = document.getElementById('submit-acronym');
const acronymInput = document.getElementById('acronym-input');
const acronymResult = document.getElementById('acronym-result');
const acronymSearchForm = document.getElementById('acronym-search-form');
let acronym = '';

// stop the form reloading the page when the submit button is clicked
acronymSearchForm.addEventListener('submit', (e) => e.preventDefault());

submitButton.addEventListener('click', searchAcronym);

// capturing user's input "live", might help with doing the autocomplete stretch goal?
acronymInput.addEventListener('input', function (e) {
    console.log(e.data);
    // passing the user's input to the acronym variable
    // this isn't working with saved autocomplete text! Maybe just disable autocomplete
    // for now and try to solve it later?!
    acronym += e.data;
})

async function searchAcronym() {
    console.log('this is acronym', acronym);
    try {
        // connect to db.json
        const res = await fetch('./db.json');
        const data = await res.json();
        // confirm I'm actually connecting with db.json!
        console.table(data);

        // need to make search case insensitive!
        acronym = acronym.toLowerCase();
        console.log('lowercase acro ', acronym);

        // the if...else was returning every result so using match to act as first validation
        let match = false;
        // org needs to hold the value of a matched result so it can be passed to the user
        let org = '';
        // just to make the user message nicer :)
        let correctAcronym = ''

        for (let key in data) {
            if (key.toLowerCase() === acronym) {
                // it works!
                console.log('this is the acronym: ', data[key]);
                match = true;
                org = data[key];
                correctAcronym = key;
            } 
            
        if (match) {
            acronymResult.textContent = `The organisation name with the acronym ${correctAcronym} is ${org}.`;
        }
            else {
                acronymResult.textContent = `There is no organisation matching ${correctAcronym}, please try again.`;
                }
        }        
    } catch (error) {
        console.error('There was an error fetching the data:', error);
    }
    // need to clear acronym before trying another search
    acronym = '';
};

// guff
// this is not case insensitive...
// if (data[acronym]) {
//     // it works
//     console.log('this is the acronym: ', data[acronym]);
//     acronymResult.textContent = `The organisation name that matches
//     this acronym is ${data[acronym]}.`;
// } else {
//     acronymResult.textContent = 'There is no organisation matching that acronym, please try again.'
//     console.log(`this didn't work`)
// }