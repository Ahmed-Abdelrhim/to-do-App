let inputBox = document.querySelector('.inputField input');
let addBtn = document.querySelector('.inputField button');
let todoList = document.querySelector('.todoList ');
let listLi = document.querySelectorAll('.todoList li');
let trash = document.querySelectorAll('.fa-trash');
let clearAll = document.querySelector('.clear-all');
let spann = document.querySelector('.kk')

let tasks = [];
let inc = 0;
let delItems = 0;


let back = ``;



inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
};


addBtn.addEventListener('click', function () {
    tasks.push(inputBox.value);
    if (tasks.length === 0) {
        spann.innerHTML = `you have no pending tasks`;
    } else {
        spann.innerHTML = `you have ${tasks.length} pending  tasks`;
    }
    let li = ``;
    li = `<li> ${inputBox.value}<span onclick="del(${inc})"><i class="fas fa-trash " ></i></span> </li>`;
    inc++;
    todoList.innerHTML += li;
    inputBox.value = ``;
});

function showTasks() {
    let li = ``;
    for (let i = 0; i < tasks.length; i++) {
        li += `<li> ${tasks[i]}<span onclick="del(${i})"><i class="fas fa-trash trash" ></i></span> </li>`;
    }
    todoList.innerHTML = li;
    if (tasks.length === 0) {
        spann.innerHTML = `you have no pending tasks`;
    } else {
        spann.innerHTML = `you have ${tasks.length} pending  tasks`;
    }
}

function del(index) {
    tasks.splice(index, 1);
    inc--;
    delItems++;
    showTasks();
}

document.body.onload = function () {
    console.log('loaded');
    inputBox.value = `leaning Full Stack Tools`;
    tasks.push(inputBox.value);
    inputBox.value = ``;
    showTasks();
}
let clearAlll = document.querySelector('.clear-all');
clearAlll.addEventListener('click', delAll);

function delAll() {
    tasks = [];
    showTasks();
}