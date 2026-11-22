

function getTextByID(id){
    const element = document.getElementById(id);
    const elementText = element.innerText;

    return elementText;
}

function setTextByID(id, value){
    const element = document.getElementById(id);
    element.innerText = value;
}

function addClassByID(id, className){
    const element = document.getElementById(id);
    // console.log(element);
    element.classList.add(className);
}

function removeClassByID(id, className){
    const element = document.getElementById(id);
    // console.log(element);
    element.classList.remove(className);
}