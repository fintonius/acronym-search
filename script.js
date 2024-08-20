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
    // connect to db.json
    try {
        const res = await fetch('./db.json');
        const data = await res.json();
        // confirm I'm actually connecting with db.json!
        console.table(data);
        if (data[acronym]) {
            // it works
            console.log('this is the acronym: ', data[acronym]);
        } else {
            console.log(`this didn't work`)
        }
    } catch (error) {
        console.error('There was an error fetching the data:', error);
    }
    // need to clear acronym before trying another search
    acronym = '';
};