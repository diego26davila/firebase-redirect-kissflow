function activateUser() {
	var name = document.getElementById("firstname").value;
	var address = document.getElementById("address").value;
	alert(name + "lives at" + address);
}

function callKissflow() {

    const url = 'https://pucp.kissflow.com/dataset/2/AcUgoqK4pdde/Lista_de_Usuarios/list'
	const options = {
	  method: 'GET',
      mode: 'no-cors',
	  headers: {
	    'Accept': 'application/json',
	    'X-Access-Key-Id': 'Ak6f46b168-7f96-491c-9b5c-1a169733181b',
	    'X-Access-Key-Secret': 'urPVCLGeSiDT2DU-NGsGoGr4EUumCACbcW4It6KnPYepnvCSieWVIvyFPWhY0os-Jv4BMDBBFFNiHp3NQpHo7Q'
	  }
	};

	fetch(url, options)
	  .then(response => response.json())
	  .then(response => console.log(response))
	  .catch(err => console.error(err))

}

function otherMethod(){

	let xhr = new XMLHttpRequest();
	const url = 'https://pucp.kissflow.com/dataset/2/AcUgoqK4pdde/Lista_de_Usuarios/list';
	xhr.open("GET", url);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.setRequestHeader('X-Access-Key-Id', 'Ak6f46b168-7f96-491c-9b5c-1a169733181b');
	xhr.setRequestHeader('X-Access-Key-Secret', 'urPVCLGeSiDT2DU-NGsGoGr4EUumCACbcW4It6KnPYepnvCSieWVIvyFPWhY0os-Jv4BMDBBFFNiHp3NQpHo7Q');

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(xhr.responseText);
		}
	};

	xhr.send();

}



// 'https://api.getgeoapi.com/v2/currency/list?api_key=9a5e89b5761ddc7b6d1b9cc93908acce81c59b7d&format=json'
// 