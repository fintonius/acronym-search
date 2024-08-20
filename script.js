const submitButton = document.getElementById('submit-acronym');
const acronymInput = document.getElementById('acronym-input');
const acronymResult = document.getElementById('acronym-result');
const acronymSearchForm = document.getElementById('acronym-search-form');
let acronym = '';

// Need to refactor capturing user input, capturing user's input "live" was causing 
// issues with the search acronym, everything was being caught! 
acronymSearchForm.addEventListener('submit', (e) => {
    // stop the form reloading the page when the submit button is clicked
    e.preventDefault()
    // pass the input value to acronym
    acronym = acronymInput.value;
    console.log('user input ', acronym);
});

submitButton.addEventListener('click', searchAcronym);


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
            // clear the search box
            acronymInput.value = '';
        } else {
            acronymResult.textContent = `There is no organisation matching ${acronym}, please try again.`;
            acronymInput.value = '';
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

// acronymInput.addEventListener('submit', function (e) {
//     console.log(e.data);
//     // non-character keys like 'delete' were being picked up as 
//     if(e.data) {
//         acronym += e.data;
//     }
// })