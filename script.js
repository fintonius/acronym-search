const submitButton = document.getElementById('submit-acronym');
const acronymInput = document.getElementById('acronym-input');
const acronymResult = document.getElementById('acronym-result');
const acronymSearchForm = document.getElementById('acronym-search-form');
let acronym = '';

// stop the form reloading the page when the submit button is clicked
acronymSearchForm.addEventListener('submit', (e) => e.preventDefault());

submitButton.addEventListener('click', searchAcronym);

// capturing user's input "live", might help with doing the autocomplete
// stretch goal!
acronymInput.addEventListener('input', function (e) {
    // passing the user's input to the acronym variable
    acronym += e.data;
    console.log(e.data)
})

function searchAcronym() {
    console.log('this is acronym', acronym);
};