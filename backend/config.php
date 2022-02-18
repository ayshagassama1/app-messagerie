<?php
function connexionBD() {
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=messagerie;charset=utf8', 'root', '');
   // echo 'connexion reussie';
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}
return $bdd;
}

function inscription($prenom, $nom, $email, $pass) {
    $bdd = connexionBD();
    $req = $bdd->prepare('SELECT * FROM utilisateur WHERE  email=?');
    $req->execute(array(htmlspecialchars($email)));
    $reponse = $req->fetch();
    if($reponse){
        return 2;
    }else{
        $req = $bdd->prepare('INSERT INTO utilisateur (prenom,nom,email,pass) VALUES(?,?,?,?)');
        $req->execute(array(htmlspecialchars($prenom),htmlspecialchars($nom),htmlspecialchars($email),htmlspecialchars($pass))); 
        //$reponse = $req->fetch();
        if($req)
        {
            return 1;
        } else{
            return 0;
        }
    }
}

function connexion($email, $pass){
    $bdd = connexionBD();
    $req = $bdd->prepare('SELECT * FROM utilisateur WHERE email=? AND pass=?');
    $req->execute(array(htmlspecialchars($email),htmlspecialchars($pass)));
    $reponse = $req->fetch();
   // echo $reponse;
    if($reponse){
        $result  = $reponse['id'];
       // echo 'bet'.$result;
        return $result;
    } else {
       // echo 'connexion echoué';
        return 0;
    }
}


?>
  