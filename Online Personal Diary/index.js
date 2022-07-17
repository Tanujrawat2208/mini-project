/* eslint-disable */

// My Starter JavaScript Template

// Journal Entry Form

const entryForm = document.querySelector(`#entryForm`);
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
const getEntryText = document.getElementsByClassName(`entry-text-box`);

function addEntryToDom(event) {
    event.preventDefault();
    //const d = new Date();
    const month = new Array();
    month[0] = 'Jan';
    month[1] = 'Feb';
    month[2] = 'Mar';
    month[3] = 'Apr';
    month[4] = 'May';
    month[5] = 'Jun';
    month[6] = 'Jul';
    month[7] = 'Aug';
    month[8] = 'Sept';
    month[9] = 'Oct';
    month[10] = 'Nov';
    month[11] = 'Dec';
    const dayword = new Array();
    dayword[0] = 'Sun';
    dayword[1] = 'Mon';
    dayword[2] = 'Tue';
    dayword[3] = 'Wed';
    dayword[4] = 'Thur';
    dayword[5] = 'Fri';
    dayword[6] = 'Sat';
    //     const n = month[d.getMonth()];
    //     const day = d.getDay();
    //     const year = d.getFullYear();

    const date = new Date();
    const day = date.getDate();
    const mo = date.getMonth() + 1;
    const year = date.getFullYear();
    const d = date.getDay();
    const time = date.toLocaleTimeString();
    // const heading = document.createElement(`h2`);
    // heading.className = `heading-results`;
    // heading.textContent = `Journal Entries`;
    // entryResultRow.insertAdjacentElement(`beforebegin`, heading)

    // Adding Div
    const entryDiv = document.createElement(`div`);
    entryDiv.className = `single-entry-div`;
    entryResultRow.appendChild(entryDiv);

    // Adding Div Element h3
    const entryHeading = document.createElement(`h3`);
    entryHeading.className = `single-entry-heading`;
    entryHeading.textContent = getEntryTitle[0].value;
    entryDiv.appendChild(entryHeading);

    // Adding Div Element Date

    const entryDate = document.createElement(`p`);
    entryDate.className = `single-entry-date`;
    // eslint-disable-next-line no-cond-assign
    if ((getEntryTitle[0].value = getEntryTitle[0].value)) {
        entryDate.textContent = `Date Added: ${dayword[d]} ${month[mo-1]} ${day} ${year} ${time} `;
        entryDiv.appendChild(entryDate);
    }

    // Adding Div Element paragraph

    const entryParagraph = document.createElement(`p`);
    entryParagraph.className = `single-entry-text`;
    entryParagraph.textContent = getEntryText[0].value;
    entryDiv.appendChild(entryParagraph);
    getEntryText[0].value = ``;
}

entryForm.addEventListener(`submit`, addEntryToDom);