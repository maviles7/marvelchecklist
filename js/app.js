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


/*-- event listeners --*/


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