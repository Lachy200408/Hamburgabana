const footer = document.createElement('footer');

footer.innerHTML = `
	<figure class="logotipo-footer"></figure>
	<nav class="menu-footer">
		<ul class="menu-arriba">
			<li><a href="tel:+53299466">Contactanos</a></li>
		</ul>
		<ul class="menu-abajo">
			<li><a href="">Facebook</a></li>
			<li><a href="">Twitter</a></li>
			<li><a href="">Instagram</a></li>
			<li><a href="">LikendIn</a></li>
			<li><a href="">Gmail</a></li>
		</ul>
	</nav>
`

document.body.append(footer);