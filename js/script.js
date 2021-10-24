let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document.querySelector(".home").onmousemove = (e) => {
  let x = (window.innerWidth - e.pageX * 2) / 90;
  let y = (window.innerHeight - e.pageY * 2) / 90;

  document.querySelector(
    ".home .home-parallax-img"
  ).style.transform = `translateX(${y}px) translateY(${x}px)`;
};

document.querySelector(".home").onmouseleave = () => {
  document.querySelector(
    ".home .home-parallax-img"
  ).style.transform = `translateX(0px) translateY(0px)`;
};

const loadClients = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => setClient(data))
    .catch((error) => {
      alert("Ocorreu um erro ao acessar a api, tente novamente mais tarde.");
      console.log(error);
    });
};

function setClient(clients) {
  for (let index = 0; index < clients.results.length; index++) {
    const client = clients.results[index];
    document.getElementById(
      `nameUsuario${index}`
    ).innerHTML = `${client.name.first} ${client.name.last}, ${client.dob.age}`;
    document.getElementById(`descUsuario${index}`).innerHTML =
      client.location.timezone.description;
    document.getElementById(`imgUsuario${index}`).src = client.picture.large;
  }
}
