

const date = document.querySelector ('.date')
var now=new Date();

date.innerText=now.toLocaleString()



const kurs='https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
fetch (kurs)
	.then (function(data) {
		 return data.json()
	}).then(function(data){
		
		const USDrate = Number(data[0].sale).toFixed(2);
		const EURrate = Number(data[1].sale).toFixed(2);
		const USDelement = document.querySelector('#usd');
		const EURelement = document.querySelector('#eur');
		USDelement.innerText = USDrate;
		EURelement.innerText = EURrate;
		
	})
