<?php

require "authentification.php";

$bdd = connexionBD();

//$_POST["idUser"] = 2;
if(isset($_SESSION["id"]))
    $idUser = $_SESSION["id"];

//renvoie l'id de l'utilisateur
if(isset($_POST["getIdUser"]))
{
    
    if(isset($_SESSION["id"]))
        echo($_SESSION["id"]);
    else
        echo 0;
}

//renvoie les informations sur l'utilisateur
if(isset($_POST["getInfosUser"]))
{
    $query = $bdd->prepare('SELECT id, prenom, nom, email from utilisateur WHERE id=?');
    $query->execute(array($idUser));
    
    $reponse = $query->fetch();
  
    $user = array(
        "id" => $reponse["id"],
        "nom" => $reponse["nom"],
        "prenom" => $reponse["prenom"],
        "email" => $reponse["email"]
    );

    echo(json_encode($user));
}

//renvoie la liste des contacts de l'utilisateur connecté càd les personnes avec qui il a déjà échangé
if(isset($_POST["getListContacts"]))
{
    $query = $bdd->prepare('SELECT DISTINCT utilisateur.* from utilisateur, message where destinataire!=1 and ((destinataire = ? and origine=utilisateur.id) or (origine = ? and destinataire=utilisateur.id))');
    $query->execute(array($idUser, $idUser));
    $utilisateur = array();
    while($reponse = $query->fetch())
    {
        $user = array(
            "id" => $reponse["id"],
            "nom" => $reponse["nom"],
            "prenom" => $reponse["prenom"],
            "email" => $reponse["email"]
        );
        array_push($utilisateur, json_encode($user));
    }

    echo(json_encode(array("utilisateurs"=>$utilisateur)));
}

//renvoie les derniers messages càd ceux envoyés après lastMsg. On récupère ensuite l'id du dernier message
//récupéré et celui-ci sera utilisé comme repère pour connaître les messages qu'on a pas encore chargé sur 
//la page... pour éviter d'afficher un message qu'on a déjà affiché
 
/*if(isset($_POST["getLatestMsgs"]) and isset($_POST["lastMsg"]))
{
    $query = $bdd->prepare('SELECT destinataire, message.id, contenu, origine, nom, prenom, date FROM message, utilisateur WHERE utilisateur.id = message.origine and (destinataire = ? OR origine = ? OR destinataire = 1) and message.id>?');
    $query->execute(array($idUser, $idUser, ));
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
        $lastMsg = $reponse["id"];
    }

    echo(json_encode(array("messages"=>$messages, "lastMsg"=>$lastMsg)));
}*/