//this function checks if it's a task or a project
//is sometimes used when looping through localStorage
//to make sure that the right kind of item appears when asked for
function checkIfTaskOrProject(item) {
    let typeOfItem = "";

    let objToCheck = JSON.parse(item[1]);

    if (objToCheck.hasOwnProperty("name")) {
        typeOfItem = "project";
    }
    else {
        typeOfItem = "task";
    }

    return typeOfItem;
}

export { checkIfTaskOrProject };