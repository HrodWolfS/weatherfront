// Insert your code here
const registerName = document.querySelector("#registerName");
const registerEmail = document.querySelector("#registerEmail");
const registerPassword = document.querySelector("#registerPassword");

document.querySelector("#register").addEventListener("click", () => {
  console.log(registerName.value, registerEmail.value, registerPassword.value);
  fetch("https://weatherback-smoky.vercel.app/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: registerName.value,
      email: registerEmail.value,
      password: registerPassword.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        window.location.assign("index.html");
      }
    });
});

const connectionEmail = document.querySelector("#connectionEmail");
const connectionPassword = document.querySelector("#connectionPassword");

document.querySelector("#connection").addEventListener("click", () => {
  console.log(connectionEmail.value, connectionPassword.value);
  fetch("https://weatherback-smoky.vercel.app/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: connectionEmail.value,
      password: connectionPassword.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        window.location.assign("index.html");
      }
    });
});
