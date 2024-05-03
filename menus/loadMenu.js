const main = document.querySelector('main')

window.addEventListener('load', loadPrimaryMenu, false)

function loadPrimaryMenu () {
	main.innerHTML = '<h1>Cargando...</h1>'

	fetch('https://api-hamburgabana.onrender.com/menu/kinds')
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

		main.innerHTML = `<section class="primary-menu-body">${primaryCards}</section>`

		//* Se colocan los event listeners
		document.querySelectorAll('.primary-menu-card').forEach(card => {
			card.addEventListener('click', primaryMenuCardHandler, false)
		})
	})
}

function primaryMenuCardHandler (event) {
	const cardTextKind = event.target.parentElement.firstElementChild.innerHTML
	main.innerHTML = ''

	fetch('https://api-hamburgabana.onrender.com/menu/'+cardTextKind)
	.then(result => result.json())
	.then(specificMenu => {
		const specificMenuHtml = specificMenu.products.sort((a,b) => a.rate - b.rate).map(platillo => {
			//* Se utiliza un for para transformar la informacion del rate en estrellas
			let ratingProduct = ''
			for (let index = 1; index <= 5; index++) {
				const starSvg = (index <= platillo.rate)? '/design/whole-star.svg' :
								(index-1 < platillo.rate && index > platillo.rate)?  '/design/half-star.svg' : '/design/void-star.svg' 
				ratingProduct += `<img src="${starSvg}" alt="star"/>`
			}

			return `
				<article data-id="${platillo.id}">
					<h1>${platillo.nombre}</h1>
					<img src="${platillo.imagen}" alt="${platillo.nombre}">
					<p>${platillo.descripcion}</p>
					<figure>${ratingProduct}</figure>
					<span>${platillo.precio}</span>
				</article>
			`
		}).join('')
		const menuHtml = `<header><h1>${specificMenu.kind}</h1></header>
						  <section class="specific-menu-body">${specificMenuHtml}</section>
						  <button><img src="/design/boton-return-menu.svg" alt="return"/></button>`

		main.innerHTML = menuHtml

		//* Colocar el event listener del boton de regresar
		document.querySelector('main>button').addEventListener('mouseup', loadPrimaryMenu, false)
	})
}
