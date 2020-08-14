import { Selector } from 'testcafe';

fixture `Suit de Pruebas`

test
    .page `http://www.google.com/`
    ('Test 1', async t => {
        console.log('Ingreso a pagina 1')
		
		const botonsuerte = Selector('#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.RNmpXc');
		
		await t
		.click(botonsuerte)
		//.wait(5000)
		
		const resultado = Selector('#latest-title');
		const resultadotexto = await resultado.innerText;
		
		console.log('Evento del día: ' + resultadotexto);
		
    });

test
    .page `http://www.google.com/`
    ('Busqueda en Google', async t => {
        console.log('Ingreso a Google')
		
		const campoBuscar = Selector('input.gLFyf')
		const botonBuscar = Selector('input.gNO89b')
		const resultadobuscar = Selector('h3.LC20lb')
		
		await t
		.typeText(campoBuscar, 'test')
		.pressKey('enter')
		//.click(botonBuscar)
		.expect(resultadobuscar.innerText).contains('Speedtest')
		const resultadobuscartexto = await resultadobuscar.innerText
		console.log('Primer resultado: ' + resultadobuscartexto)
		
		
    });
	
	//testcafe -c 2 chrome,ie first-test.js
	//testcafe -c 2 chrome:headless first-test.js
	//testcafe remote chrome first.test.js --qr-code
