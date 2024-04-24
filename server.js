const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer((request, response)=>{
	let resourceName = '.' + request.url;
	if(resourceName==='./') resourceName='./main.html';
	
	//Filtrar las diferentes direcciones de recursos
	resourceName = filtrarDirecciones(resourceName);

	const extName = String(path.extname(resourceName)).toLowerCase();
	const contentType = {
		'.html' : 'text/html',
		'.js' : 'text/javascript',
		'.mjs' : 'text/javascript',
		'.css' : 'text/css',
		'.png' : 'image/png',
		'.jpg' : 'image/jpg',
		'.webp' : 'image/webp',
		'.svg' : 'image/svg+xml',
		'.gif' : 'image/gif'
	}[extName] || 'applications/octet-stream';

	fs.readFile(resourceName, (err, data)=>{
		if(err){
			fs.readFile('./not_found.html', (err, _data)=>{
				if(err) throw err;
				
				response.writeHead(404, {'Content-Type' : contentType});
				response.end(_data, 'utf-8');
			});
			
			return;
		}

		response.writeHead(200, {'Content-Type' : contentType});
		response.end(data, 'utf-8');
	});
});

server.listen(8080,()=>{
	console.log(`Server is running on http://localhost:${server.address().port}`);
});

function filtrarDirecciones(direccion){
	const nombreAbsoluto = direccion.slice(2);
	if(nombreAbsoluto.includes('.')) return direccion;
	else return `${direccion}/${nombreAbsoluto}.html`;
}