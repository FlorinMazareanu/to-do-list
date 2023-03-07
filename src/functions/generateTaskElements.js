import { allTasksElem } from "../domVariables";
//this function generates the elements of the tasks
//it's used by loadTasks.js

function generateTaskElements(item) {
    //defining DOM elements that will be added later
    //the main container for the item:
    let itemContainer = document.createElement("div");
    //the two containers to separate the item in 2
    let leftContainer = document.createElement("div");
    let rightContainer = document.createElement("div");

    //element containers
    let checkboxContainer = document.createElement("div");
    let titleContainer = document.createElement("div");
    let detailsContainer = document.createElement("div");
    let dueDateContainer = document.createElement("div");
    let editContainer = document.createElement("div");
    let deleteContainer = document.createElement("div");

    //elements:
    let checkBoxE = document.createElement("input");
    let titleE = document.createElement("p");
    let detailsE = document.createElement("button");
    let dueDateE = document.createElement("p");
    let editE = document.createElement("i");
    let deleteE = document.createElement("i");

    //adding the containers
    allTasksElem.appendChild(itemContainer);
    itemContainer.appendChild(leftContainer);
    itemContainer.appendChild(rightContainer);
    leftContainer.appendChild(checkboxContainer);
    leftContainer.appendChild(titleContainer);
    rightContainer.appendChild(detailsContainer);
    rightContainer.appendChild(dueDateContainer);
    rightContainer.appendChild(editContainer);
    rightContainer.appendChild(deleteContainer);

    //appending elements into their containers
    checkboxContainer.appendChild(checkBoxE);
    titleContainer.appendChild(titleE);
    detailsContainer.appendChild(detailsE);
    dueDateContainer.appendChild(dueDateE);
    editContainer.appendChild(editE);
    deleteContainer.appendChild(deleteE);

    //adding into into the elemnts
    titleE.innerHTML = JSON.parse(item[1]).title;
    detailsE.innerHTML = "DETAILS";
    dueDateE.innerHTML = JSON.parse(item[1]).dueDate;

    //adding id's to the elemnts
    checkBoxE.id = `checkbox-${JSON.parse(item[1]).id}`;
    titleE.id = `title-${JSON.parse(item[1]).id}`;
    detailsE.id = `details-${JSON.parse(item[1]).id}`;
    dueDateE.id = `duedate-${JSON.parse(item[1]).id}`;
    editE.id = `edit-${JSON.parse(item[1]).id}`;
    deleteE.id = `delete-${JSON.parse(item[1]).id}`;

    //adding input types and classes
    checkBoxE.type = "checkbox";
    editE.classList.add("fa-regular");
    editE.classList.add("fa-pen-to-square");
    deleteE.classList.add("fa-solid");
    deleteE.classList.add("fa-trash-can");
    itemContainer.classList.add("item-container");
    leftContainer.classList.add("left-container");
    rightContainer.classList.add("right-container");
    checkboxContainer.classList.add("checkbox-container");
    titleContainer.classList.add("title-container");
    detailsContainer.classList.add("details-container");
    dueDateContainer.classList.add("duedate-container");
    editContainer.classList.add("edit-container");
    deleteContainer.classList.add("delete-container");
    checkBoxE.classList.add("item-element");
    titleE.classList.add("item-element");
    detailsE.classList.add("item-element");
    dueDateE.classList.add("item-element");
    editE.classList.add("item-element");
    deleteE.classList.add("item-element");

    //adding event listeners to the checkbox

    //adding event listeners to the details button

    //adding event listeners to the edit icon

    //adding event listeners to the delete icon
}

export { generateTaskElements };