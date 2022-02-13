<?php

header('Content-Type:application/json');

function connectionBD()
{
    try
    {
        $bdd = new PDO('mysql:host=localhost;dbname=messagerie;charset=utf8', 'root', '');
    }
    catch (Exception $e)
    {
            die('Erreur : ' . $e->getMessage());
    }
    return $bdd;
}

$bdd = connectionBD();
$query = $bdd->prepare('SELECT * FROM utilisateur WHERE id != 1');
$query->execute();
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

echo(json_encode(array("utilisateurs"=>$utilisateur))); // print array



