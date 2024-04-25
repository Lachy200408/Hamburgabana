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
			<li><a href="https://www.facebook.com/lazaro.parra.583">Facebook</a></li>
			<li><a href="https://twitter.com/Lachy9716929882">Twitter</a></li>
			<li><a href="https://www.instagram.com/lazaroparraj/">Instagram</a></li>
			<li><a href="https://www.linkedin.com/in/lazaro-parra-gonzalez-47b55628a">LikendIn</a></li>
			<li><a href="mailto:hamburgabana@gmail.com">Gmail</a></li>
		</ul>
	</nav>
`

document.body.append(footer);