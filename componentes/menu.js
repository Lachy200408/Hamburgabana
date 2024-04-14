const header = document.createElement('header');

header.innerHTML = `
	<figure class="logotipo"></figure>
	<nav class="menu-principal">
		<ul class="menu-izquierda">
			<li><a href="/">Inicio</a></li>
			<li><a href="/about">Quienes somos?</a></li>
		</ul>
		<ul class="menu-derecha">
			<li><a href="/contacto">Contactanos</a></li>
			<li><a href="/menus">Menu</a></li>
		</ul>
	</nav>
`;

document.body.prepend(header);