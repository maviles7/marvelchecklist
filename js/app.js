/*-- constants --*/

const mcuMovies = [
    "Ironman",
    "The Incredible Hulk",
    "Ironman 2",
    "Thor",
    "Captain America: The First Avenger",
    "The Avengers",
    "Ironman 3",
    "Thor: The Dark World",
    "Captain America: The Winter Soldier",
    "Guardians of the Galaxy",
    "Avengers: Age of Ultron",
    "Antman",
    "Captain America: Civil War",
    "Doctor Strange",
    "Guardians of the Galaxy Vol. 2",
    "Spiderman: Homecoming",
    "Thor: Ragnarok",
    "Black Panther",
    "Avengers: Infinity War",
    "Antman and The Wasp",
    "Captain Marvel",
    "Avengers: Endgame",
    "Spiderman: Far From Home", 
    "Black Widow",
    "Eternals",
    "Shang-Chi and the Legend of the Ten Rings",
    "Eternals",
    "Spiderman: No Way Home",
    "Doctor Strange in the Multiverse of Madness",
    "Thor: Love and Thunder",
    "Black Panther: Wakanda Forever",
    "Antman and The Wasp: Quantumania",
    "Guardians of the Galaxy Vol. 3",
    "The Marvels",
    "Deadpool & Wolverine",
];

/*-- cached elements --*/

const checkboxes = document.querySelector('.checkboxes'); 
const resultsButton = document.getElementById('results');
const resultsMessage = document.getElementById('results-message');


/*-- event listeners --*/

resultsButton.addEventListener('click', () => {
    calculateResults();
});
/*-- functions --*/

render();

function render() {
    listProjects();
};

function listProjects() {
    mcuMovies.forEach((project) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkboxes.appendChild(checkbox);

        const label = document.createElement('label');
        label.htmlFor = project;
        label.appendChild(document.createTextNode(project));
        checkboxes.appendChild(label);

        const br = document.createElement('br');
        checkboxes.appendChild(br);
    });
}

function calculateResults() {
    const totalCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkCount = Array.from(totalCheckboxes).filter((checkbox) => checkbox.checked).length;
    const totalCount = totalCheckboxes.length;
    const percentage = Math.ceil((checkCount / totalCount) * 100);
    resultsMessage.innerText = `You have watched ${percentage}% of the MCU!`;
}; 

// reset button 
// MARVEL API w/full archive 
// share results ??? 