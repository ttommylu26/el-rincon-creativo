let body = document.getElementById("body");
let button = document.getElementById("organizar-pedido_button");
let buttonClose = document.getElementById("organizar-pedido_button-close");
let organizarPedido = document.getElementById("organizar-pedido");

button.addEventListener("click", () => organizarPedido.classList.remove("display--none"));
buttonClose.addEventListener("click", () => organizarPedido.classList.add("display--none"));
body.addEventListener("click", () => organizarPedido.classList.add("display--none"));