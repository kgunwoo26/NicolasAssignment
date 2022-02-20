const userForm = document.querySelector("#username");
const userName = document.querySelector("#name");
const printName = document.querySelector("#printName");
const savedUsername = localStorage.getItem("username");

function onLoginSubmit(event){
    event.preventDefault();
    const username = userName.value;
    localStorage.setItem("username",username)
    userForm.classList.add("hidden");
    printName.innerText = `Hi, ${username}`;
    printName.classList.remove("hidden");
}
if(savedUsername === null){
    userForm.addEventListener("submit", onLoginSubmit);
}
else {
    userForm.classList.add("hidden");
    printName.innerText = `Hi, ${savedUsername}`;
    printName.classList.remove("hidden");
}



