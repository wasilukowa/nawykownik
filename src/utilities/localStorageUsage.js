export function takeArrayFromLocalStorage(itemNameInLocalStorage) {
    return (JSON.parse(localStorage.getItem(itemNameInLocalStorage)) || []);
}

export function saveArrayToLocalStorage(itemNameInLocalStorage, whatToSave) {
    localStorage.setItem(itemNameInLocalStorage, JSON.stringify(whatToSave));
}

export function returnArrayWithoutATask(taskToBeDeletedFromArray, array) {
    return array.filter(item => item.key !== taskToBeDeletedFromArray.key);
}

export function addTaskToAnArrayFromLocalStorage(itemNameInLocalStorage, taskToBeAdded) {
    let array = takeArrayFromLocalStorage(itemNameInLocalStorage);
    array.push(taskToBeAdded);
    saveArrayToLocalStorage(itemNameInLocalStorage, array);
}

export function saveEditedTaskInArrayInLocalStorage(itemNameInLocalStorage, taskEdited, indexOfTaskToBeEdited) {
    let array = takeArrayFromLocalStorage(itemNameInLocalStorage);
    array[indexOfTaskToBeEdited] = taskEdited;
    saveArrayToLocalStorage(itemNameInLocalStorage, array);
}

export function removeAnItemFromArrayFromLocalStorage(itemNameInLocalStorage, taskToBeDeleted) {
    let array = takeArrayFromLocalStorage(itemNameInLocalStorage);
    let arrayAfterDelete = returnArrayWithoutATask(taskToBeDeleted, array);
    saveArrayToLocalStorage(itemNameInLocalStorage, arrayAfterDelete);
}