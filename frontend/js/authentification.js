let formu = document.getElementById("formId");
formu.addEventListener("submit", (e) => {
	e.preventDefault();
	let mdp = document.getElementById("mdp").value;
	let cmdp = document.getElementById("cmdp").value;
	if (mdp != cmdp) {
		document.getElementById("ins").innerHTML = "mot de passe non conforme !";
	} else {
		if (!$("#nom").val() || !$("#prenom").val() || !$("#mdp").val()) {
			document.getElementById("ins").innerHTML = "Veuillez remplir tous les champs !";
		} else {
			let prenom = document.getElementById("prenom").value;
			let nom = document.getElementById("nom").value;
			let email = document.getElementById("email").value;
			let mdp = document.getElementById("mdp").value;

			xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					let result = xhr.response;
					//alert(result);
					if (result == 2) {
						document.getElementById("ins").innerHTML = "Le mail existe déja";
					} else if (result == 0) {
						document.getElementById("ins").innerHTML = "Inscription echoué";
					} else {
						document.location.replace("home.html");
					}
				}
			};

			xhr.open("post", "http://localhost/app-messagerie/backend/authentification.php", true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(
				"prenom=" +
					prenom +
					"&nom=" +
					nom +
					"&email=" +
					email +
					"&mdp=" +
					mdp +
					"&inscrire=" +
					true
			);
		}
	}
});
function register(e) {
	e.preventdDefault();
	alert("hello");
	let prenom = document.getElementById("prenom").value;
	let nom = document.getElementById("nom").value;
	let email = document.getElementById("email").value;
	let mdp = document.getElementById("mdp").value;
	let cmdp = document.getElementById("cmdp").value;

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

/*$(document).ready(function(){
	//alert('hello');
	$("#cmdp").change( function() {
        if($(this).val() != $("#mdp").val()){
          // $(this).addClass("form-control is-invalid");
		  document.getElementById("ins").innerHTML = "bonjour madame";
        }
	  // alert('hello');
    });
	
});*/
