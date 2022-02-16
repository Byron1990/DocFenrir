const imagenes = document.querySelectorAll(".img-gallery");
const imagenesLight = document.querySelectorAll(".add-image");
const contenedorLight = document.querySelector(".image-light");

console.log("imagenesL");
console.log(imagenesLight);
console.log("contenedorL");
console.log(contenedorLight);

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", (e) => {
    alert(imagen.getAttribute("src"));
  });
});
