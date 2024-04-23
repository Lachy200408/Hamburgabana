const footer = document.createElement('footer');

footer.innerHTML = `
	<figure class="logotipo-footer">
		<img src="./design/logotipo-footer-2.webp" alt="Logotipo footer"/>
	</figure>
	<nav class="menu-footer">
		<ul class="menu-arriba">
			<li><a href="tel:+53299466">Contáctanos</a></li>
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