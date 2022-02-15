<?php
// Get the contents of the JSON file 
/*$strJsonFileContents = file_get_contents("messages.json");

echo($strJsonFileContents);*/ // print array

header('Content-Type:application/json');

function connectionBD()
{
    try
    {
        $bdd = new PDO('mysql:host=localhost;dbname=message;charset=utf8', 'root', '');
    }
    catch (Exception $e)
    {
            die('Erreur : ' . $e->getMessage());
    }
    return $bdd;
}

$bdd = connectionBD();
$query = $bdd->prepare('SELECT * FROM message WHERE destinataire = 2 OR origine = 2');
$query->execute();
$messages = array();
while($reponse = $query->fetch())
{
    $user = array(
        "id" => $reponse["id"],
        "dest" => $reponse["destinataire"],
        "contenu" => $reponse["contenu"],
        "origine" => $reponse["origine"],
        "date" => $reponse["datec"]
    );
    array_push($messages, json_encode($user));
}

echo(json_encode(array("messages"=>$messages))); // print array



