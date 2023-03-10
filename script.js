// je selectionne et je stock
const btnSucces = document.querySelector(".btn-succes"); // il fayt pas oublie le point de la class
console.log(btnSucces);
btnSucces.addEventListener("click", function () {
  console.log("bouton cliqué!");
  cookies.style.opacity = "0";
});
// DIV cookies
const cookies = document.querySelector(".cookies");
console.log(cookies);
