import { Selector } from 'testcafe';

fixture `Suit de Pruebas`

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
		console.log('Resultados: ' + resultadobuscartexto.length)
		
		
    });
