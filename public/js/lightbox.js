const hamburguer1 = document.querySelector("#main-menu");
const imagenes = document.querySelectorAll(".img-gallery");
const imagenesLight = document.querySelector(".add-image");
const contenedorLight = document.querySelector(".image-light");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", (e) => {
    aparecerImagen(imagen.getAttribute("src"));
    console.log(imagenesLight.src);
  });
});

contenedorLight.addEventListener("click", (e) => {
  if (e.target !== imagenesLight) {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
    hamburguer1.style.opacity = "1";
  }
});

const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle("show");
  imagenesLight.classList.toggle("showImage");
  console.log(hamburguer1.style.opacity);
  hamburguer1.style.opacity = "0";
};
