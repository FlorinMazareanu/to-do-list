import { checkIfTaskOrProject } from "./checkIfTaskOrProject";
import { loadTasks } from "./loadTasks";
import { allTasksElem } from "../domVariables";
import { generateTaskElements } from "./generateTaskElements";

function deleteTask(item) {

    //checkIfTaskOrProject(item);
    console.log(JSON.parse(item[1]));

    let type = checkIfTaskOrProject(item);
    //console.log(type);
    //console.log(JSON.parse(item[1]).id);
    if (type == "task") {
        localStorage.removeItem(JSON.parse(item[1]).id);
        //removed all projects from the page
        allTasksElem.innerHTML = "";
    //reload the projects
        loadTasks(1, JSON.parse(item[1]).inProject); 
    }
}

export { deleteTask };