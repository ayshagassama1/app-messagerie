let listeUtilisateurs;
let listeMsgs;
let idUser = 2;

function rechercheUtilisateur() {
	let datalist = document.getElementById("datalistOptions");
	let users = listeUtilisateurs;
	users.utilisateurs.forEach((element) => {
		element = JSON.parse(element);
		let option = document.createElement("option");
		option.setAttribute(
			"value",
			element.id + "," + element.email + "," + element.prenom + "," + element.nom
		);
		option.textContent = element.email;
		datalist.appendChild(option);
	});
}

function getInputData(val) {
	let params = val.value.split(",");
	//let tab =
	if (!document.getElementById("v-pills-" + params[0] + "-tab")) {
		ajouterUtilisateur(params[0], params[1], params[2], params[3]);
	}
}

function ajouterUtilisateur(id, email, prenom, nom) {
	let tabs = document.getElementById("v-pills-tab");
	let newTab = document.createElement("div");
	let imgContact = document.createElement("img");
	let nomContact = document.createElement("div");
	let dropdown = document.createElement("div");
	let dropdownButton = document.createElement("button");
	let dropdownUl = document.createElement("ul");
	let dropdownLi = document.createElement("li");
	let dropdownA = document.createElement("a");

	imgContact.setAttribute("class", "img-fluid avatar-img");
	imgContact.setAttribute("alt", "Profile");
	imgContact.setAttribute(
		"src",
		"https://avatars.dicebear.com/api/micah/" + prenom + nom + ".svg"
	);

	nomContact.setAttribute("class", "nom-contact");
	nomContact.textContent = prenom + " " + nom;

	dropdownA.textContent = "Supprimer Discussion";
	dropdownA.setAttribute("class", "dropdown-item");
	dropdownA.setAttribute("href", "#");
	dropdownA.setAttribute("onclick", "supprimerDiscussion(" + id + ")");
	dropdownLi.appendChild(dropdownA);

	dropdownUl.setAttribute("class", "dropdown-menu");
	dropdownUl.setAttribute("aria-labelledby", "dropdownMenuButton" + id);
	dropdownUl.appendChild(dropdownLi);

	dropdownButton.setAttribute("class", "btn text-secondary dropdown-toggle");
	dropdownButton.setAttribute("type", "button");
	dropdownButton.setAttribute("id", "dropdownMenuButton" + id);
	dropdownButton.setAttribute("data-bs-toggle", "dropdown");
	dropdownButton.setAttribute("aria-expanded", "false");

	dropdown.setAttribute("class", "dropdown");
	dropdown.appendChild(dropdownButton);
	dropdown.appendChild(dropdownUl);

	newTab.setAttribute("class", "nav-link tab-nav");
	newTab.setAttribute("id", "v-pills-" + id + "-tab");
	newTab.setAttribute("data-bs-toggle", "pill");
	newTab.setAttribute("data-bs-target", "#v-pills-" + id);
	newTab.setAttribute("type", "button");
	newTab.setAttribute("role", "tab");
	newTab.setAttribute("aria-controls", "v-pills-" + id);
	newTab.setAttribute("aria-selected", "false");
	newTab.appendChild(imgContact);
	newTab.appendChild(nomContact);
	newTab.appendChild(dropdown);

	tabs.appendChild(newTab);
}

function creerTabPane(id, email, nom, prenom) {
	let newTabPane = document.createElement("div");
	let infosDest = document.createElement("div");
	let blocMsgs = document.createElement("div");
	let blocForm = document.createElement("div");
	let form = document.createElement("form");
	let formFloating = document.createElement("div");
	let formControl = document.createElement("input");
	let formControlLabel = document.createElement("label");
	let formSubmitDiv = document.createElement("div");
	let formSubmit = document.createElement("input");

	//infos sur le destinataire preénom et email
	infosDest.setAttribute("class", "infos-dest");
	infosDest.textContent = prenom + "-" + email;

	//bloc qui va recevoir les messages du contact
	blocMsgs.setAttribute("class", "bloc-msgs");

	//début création formulaire envoie
	formControl.setAttribute("type", "text");
	formControl.setAttribute("class", "form-control");
	formControl.setAttribute("id", "floatingInput" + id);
	formControl.setAttribute("placeholder", "saisissez votre message ici");

	formControlLabel.setAttribute("for", "floatingInput" + id);
	formControlLabel.textContent = "Saisissez votre message ici";

	formFloating.setAttribute("class", "form-floating col-9");
	formFloating.appendChild(formControl);
	formFloating.appendChild(formControlLabel);

	formSubmit.setAttribute("type", "submit");
	formSubmit.setAttribute("class", "btn btn-primary");
	formSubmit.setAttribute("value", "Envoyer");

	formSubmitDiv.setAttribute("class", "col-3");
	formSubmitDiv.appendChild(formSubmit);

	form.setAttribute("class", "row");
	form.appendChild(formFloating);
	form.appendChild(formSubmitDiv);

	blocForm.setAttribute("class", "form-msg");
	blocForm.appendChild(form);
	//fin création formulaire envoi

	//on append les blocs infos destinataire, bloc messages et formulaire au "tab-pane"
	newTabPane.appendChild(infosDest);
	newTabPane.appendChild(blocMsgs);
	newTabPane.appendChild(blocForm);
	//attributs du tab-pane
	newTabPane.setAttribute("class", "tab-pane fade");
	newTabPane.setAttribute("id", "v-pills-" + id);
	newTabPane.setAttribute("role", "tabpanel");
	newTabPane.setAttribute("aria-labelledby", "v-pills-" + id + "-tab");

	return newTabPane;
}

function creerTabs() {
	let tabContent = document.getElementById("v-pills-tabContent");
	let users = listeUtilisateurs;

	users.utilisateurs.forEach((element) => {
		element = JSON.parse(element);
		let newTab = creerTabPane(element.id, element.email, element.nom, element.prenom);

		tabContent.appendChild(newTab);
	});
}

function creerBlocMsg(id, contenu, date, idTab, type) {
	console.log("v-pills-" + idTab);
	let tabPane = document.getElementById("v-pills-" + idTab);
	let blocMsgs = tabPane.getElementsByClassName("bloc-msgs")[0];
	let blocMsg = document.createElement("div");
	let msg = document.createElement("div");
	let sub = document.createElement("sub");
	let dropdown = document.createElement("div");
	let dropdownButton = document.createElement("button");
	let ddUl = document.createElement("ul");
	let ddLiSup = document.createElement("li");
	let ddLiModif = document.createElement("li");
	let supLink = document.createElement("a");
	let modifLink = document.createElement("a");

	//date du message
	sub.textContent = date;

	//bouton dropdown pour afficher les actions à faire avec le message
	dropdownButton.setAttribute("class", "btn text-secondary dropdown-toggle");
	dropdownButton.setAttribute("type", "button");
	dropdownButton.setAttribute("id", "dropdownMenuButton" + id);
	dropdownButton.setAttribute("data-bs-toggle", "dropdown");
	dropdownButton.setAttribute("aria-expanded", "false");

	//lien de suppression du message
	supLink.setAttribute("class", "dropdown-item");
	supLink.setAttribute("href", "#");
	supLink.textContent = "Supprimer message";

	//lien de modification du message
	modifLink.setAttribute("class", "dropdown-item");
	modifLink.setAttribute("href", "#");
	modifLink.textContent = "Modifier message";

	//on append les liens de supression et de modification à des list items
	ddLiSup.appendChild(supLink);
	ddLiModif.appendChild(modifLink);

	//liste des actions à faire avec le message
	ddUl.setAttribute("class", "dropdown-menu");
	ddUl.setAttribute("aria-labelledby", "dropdownMenuButton" + id);
	ddUl.appendChild(ddLiSup);
	ddUl.appendChild(ddLiModif);

	//regroupe le bouton et la liste pour créer un "dropdown"
	dropdown.appendChild(dropdownButton);
	dropdown.appendChild(ddUl);

	//message proprement dit. regroupe le contenu du msg, la date et le dropdown
	msg.textContent = contenu;
	msg.setAttribute("class", type + " msg d-flex align-content-center");
	msg.appendChild(sub);
	msg.appendChild(dropdown);

	//conteneur du msg
	blocMsg.setAttribute("class", "bloc-msg");
	blocMsg.appendChild(msg);

	//met le conteneur du msg dans le conteneur des conteneurs de messages
	blocMsgs.appendChild(blocMsg);
}

function afficherMessages() {
	let msgs = listeMsgs;

	console.log(msgs);
	msgs.messages.forEach((msg) => {
		msg = JSON.parse(msg);
		console.log(msg);
		let idTab;
		let type;
		if (msg.dest == 1) {
			idTab = "groupe";
			if (msg.origine == idUser) {
				type = "msg-sent";
			} else {
				type = "msg-recu";
			}
		} else {
			if (msg.dest == idUser) {
				idTab = msg.origine;
				type = "msg-recu";
			} else {
				idTab = msg.dest;
				type = "msg-sent";
			}
		}

		console.log(msg.id, msg.contenu, msg.date, idTab, type);
		creerBlocMsg(msg.id, msg.contenu, msg.date, idTab, type);
	});
}

fetch("http://localhost/app-messagerie/backend/utilisateurs.php")
	.then((res) => res.json())
	.then((res) => {
		listeUtilisateurs = res;
		rechercheUtilisateur();
		creerTabs();
		fetch("http://localhost/app-messagerie/backend/messages.php")
			.then((res) => res.json())
			.then((res) => {
				listeMsgs = res;
				afficherMessages();
			});
	});
