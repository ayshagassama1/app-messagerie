function register() {
	let prenom = document.getElementById("prenom").value;
	let nom = document.getElementById("nom").value;
	let email = document.getElementById("email").value;
	let mdp = document.getElementById("mdp").value;
	// let cmdp =  document.getElementById('cmdp').value;
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			document.location.replace("home.html");
		} else {
			document.getElementById("ins").innerHTML = "Inscription echoué";
		}
	};

	xhr.open("post", "http://localhost/app-messagerie/backend/authentification.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(
		"prenom=" + prenom + "&nom=" + nom + "&email=" + email + "&mdp=" + mdp + "&inscrire=" + true
	);
}

function login() {
	let email = document.getElementById("email").value;
	let mdp = document.getElementById("mdp").value;

	xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			let result = xhr.response;
			if (result != 0) {
				document.location.replace("home.html");
			} else {
				//alert(result);
			}
		}
	};

	xhr.open("post", "http://localhost/app-messagerie/backend/authentification.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("email=" + email + "&mdp=" + mdp + "&connect=" + true);
}

function logout() {
	xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			let result = xhr.response;
			//alert(result);
			if (result == 1) {
				document.location.replace("index.html");
			}
		}
	};

	xhr.open("post", "http://localhost/app-messagerie/backend/authentification.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("deconnect=" + true);
}
