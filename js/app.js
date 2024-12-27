/*-- constants --*/

const mcuProjects = [
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
]

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
    mcuProjects.forEach((project) => {
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
    const percentage = (checkCount / totalCount) * 100;
    resultsMessage.innerText = `You have watched ${percentage}% of the MCU!`;
}; 

// event listner + math for results button 
// reset button 
// share results ??? 