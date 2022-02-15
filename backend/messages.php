<?php
// Get the contents of the JSON file 
/*$strJsonFileContents = file_get_contents("messages.json");

echo($strJsonFileContents);*/ // print array

require "configMsgs.php";

//les messages où l'utilisateur connecté est l'origine ou le destinataire ou ceux envoyés dans le groupe
$query = $bdd->prepare('SELECT destinataire, message.id, contenu, origine, nom, prenom, date FROM message, utilisateur WHERE utilisateur.id = message.origine and (destinataire = ? OR origine = ? OR destinataire = 1)');
$query->execute(array($idUser, $idUser));
$messages = array();
while($reponse = $query->fetch())
{
    $user = array(
        "id" => $reponse["id"],
        "dest" => $reponse["destinataire"],
        "contenu" => $reponse["contenu"],
        "origine" => $reponse["origine"],
        "date" => $reponse["date"],
        "nom" => $reponse["nom"],
        "prenom" => $reponse["prenom"],
    );
    array_push($messages, json_encode($user));
}

echo(json_encode(array("messages"=>$messages))); 



