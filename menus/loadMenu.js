const main = document.querySelector('main')

window.addEventListener('load', () => {
	fetch('http://localhost:3000/menu/kinds')
	.then(result => result.json())
	.then(highLevelMenu => {
		//* Cuando tomo los datos del json los escribo en html
		const primaryCards = highLevelMenu.map(menuData => {
			return `
				<article class="primary-menu-card">
					<h1>${menuData.kind}</h1>
					<img src="${menuData.thumbnail}" alt="${menuData.kind}" />
				</article>
			`
		}).join('')

		main.innerHTML = primaryCards

		//* Se coloca los event listeners
		document.querySelectorAll('.primary-menu-card').forEach(card => {
			card.addEventListener('click', primaryMenuHandler, false)
		})
	})
}, false)

function primaryMenuHandler (event) {
	const cardTextKind = event.target.parentElement.firstElementChild.innerHTML
	main.innerHTML = ''

	fetch('http://localhost:3000/menu/'+cardTextKind)
	.then(result => result.json())
	.then(specificMenu => {
		const specificMenuHtml = specificMenu.products.sort((a,b) => a.rate - b.rate).map(platillo => {
			return `
				<article data-id="${platillo.id}">
					<h1>${platillo.nombre}</h1>
					<img src="${platillo.imagen}" alt="${platillo.nombre}">
					<p>${platillo.descripcion}</p>
					<figure>${platillo.rate}</figure>
					<span>${platillo.precio}</span>
				</article>
			`
		}).join('')
		const menuHtml = `<header>${specificMenu.kind}</header>
						  <section class="menu-body">${specificMenuHtml}</section>`

		main.innerHTML = menuHtml
	})
}
