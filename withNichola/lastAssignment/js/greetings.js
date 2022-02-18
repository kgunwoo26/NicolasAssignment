const userForm = document.querySelector("#username");
const userName = document.querySelector("#username input");

function onLoginSubmit(event){
    event.preventDefault();
    console.log(userName.value);

}

userForm.addEventListener("submit", onLoginSubmit);