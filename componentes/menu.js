const header = document.createElement("header");
header.className = "header-principal";

header.innerHTML = `
	<figure class="logotipo">
		<img src="./design/Hamburguesa_branding.webp" alt="Logotipo"/>
	</figure>
	<nav class="menu-principal">
		<ul class="menu-izquierda">
			<li><a href="/">Inicio</a></li>
			<li><a href="/about/">¿Quiénes somos?</a></li>
		</ul>
		<ul class="menu-derecha">
			<li><a href="/contacto/">Contáctanos</a></li>
			<li><a href="/menus/">Menú</a></li>
		</ul>
	</nav>
`;

document.body.prepend(header);

window.addEventListener("load", () => {
	const arrayItems = document.querySelectorAll(".menu-principal ul li");
	const titulo = document.title.slice(0, document.title.indexOf(' '));
	
	switch (titulo) {
		case 'Contáctanos':
			arrayItems[2].className = 'active';
			break;
		case 'Menús':
			arrayItems[3].className = 'active';
			break;
		case '¿Quiénes':
			arrayItems[1].className = 'active';
			break;
		default:
			arrayItems[0].className = 'active';
			break;
	}
}, false);
