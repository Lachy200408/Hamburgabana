const header = document.createElement("header");
header.className = "header-principal";

header.innerHTML = `
	<figure class="logotipo">
		<img src="./design/Hamburguesa_branding.webp" alt="Logotipo"/>
	</figure>
	<nav class="menu-principal">
		<ul class="menu-izquierda">
			<li class="active"><a href="/">Inicio</a></li>
			<li><a href="/about">¿Quiénes somos?</a></li>
		</ul>
		<ul class="menu-derecha">
			<li><a href="/contacto">Contáctanos</a></li>
			<li><a href="/menus">Menú</a></li>
		</ul>
	</nav>
`;

document.body.prepend(header);

window.addEventListener("load", () => {
	const arrayItems = document.querySelectorAll(".menu-principal ul li");
	let arrayPatron = [];

	if (localStorage.length == 0) arrayPatron = ["1", "0", "0", "0"];
	else arrayPatron = String(localStorage.getItem("patron")).split("");

	arrayItems.forEach((list, index) => {
		list.className = arrayPatron[index] === "1" ? "active" : "";

		list.addEventListener("click", (event) => {
			arrayItems.forEach((list, index) => {
				if (event.target.parentElement.innerHTML == list.innerHTML) {
					arrayPatron[index] = "1";
				} else {
					arrayPatron[index] = "0";
				}
			});

			localStorage.setItem("patron", arrayPatron.join(""));
		}, false);
	});
}, false);
