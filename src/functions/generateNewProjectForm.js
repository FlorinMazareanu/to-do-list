import { addProjectInLocalStorage } from "./addProjectInLocalStorage";
import { createProjectObject } from "./createProjectObject";
import { checkMaxId } from "./checkMaxId";
import { addItemDialogElem } from "../domVariables";
import { closeAddItemDialog } from "./closeAddItemDialog";
import { loadProjects } from "./loadProjects";
import { allProjectsElem } from "../domVariables";

//this function generated the "New project" form in the "add item" dialog
function generateNewProjectForm(form) {

    //DOM elements variables

    //groups (label + input)
    let nameGroup = document.createElement("div");
    let buttonGroup = document.createElement("div");

    //labels, inputs and button
    let nameLabel = document.createElement("p");
    let nameInput = document.createElement("input");
    let addButton = document.createElement("button");

    //adding groups into the form
    form.appendChild(nameGroup);
    form.appendChild(buttonGroup);

    //adding labels and inputs into the groups
    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);
    buttonGroup.appendChild(addButton);

    //adding text to the labels and button
    nameLabel.innerHTML = "Project name:";
    addButton.innerHTML = "ADD PROJECT";

    //changing input type
    nameInput.type = "text";

    //adding placeholder text to the inputs
    nameInput.placeholder = "Name your project...";

    //adding id's and classes to the elements
    nameGroup.classList.add("form-group");
    buttonGroup.classList.add("form-group");
    nameLabel.classList.add("form-label");
    nameInput.classList.add("form-input");
    addButton.classList.add("form-input");
    addButton.classList = "form-button-choice";
    form.classList.add = "add-task-project-form";

    //adding event listener on the "ADD PROJECT" button
    addButton.addEventListener("pointerdown", () => {
        //checking max id in localStorage (so the next item will not use a used id)
        let maxId = checkMaxId();
        let idToInsert = maxId + 1;
        
        //creating a new Project and adding it into localStorage
        let newTask = createProjectObject(idToInsert, nameInput.value);
        addProjectInLocalStorage(idToInsert, newTask);
        
        //closing the dialog, reloading projects
        closeAddItemDialog(addItemDialogElem);
        allProjectsElem.innerHTML = "";
        loadProjects();
    });
}

export { generateNewProjectForm };