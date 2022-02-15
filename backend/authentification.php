<?php
session_start();

require 'config.php';

if(isset($_POST['inscrire']))
{

    inscription($_POST['prenom'], $_POST['nom'], $_POST['email'], $_POST['mdp']);
}

//login
//var_dump('hello');
if(isset($_POST['connect']))
{
   // var_dump($_POST['connect']);
   
    if((isset($_POST['email'])) && (isset($_POST['mdp'])));
       {       
            $reponse = connexion($_POST['email'], $_POST['mdp']);
           // echo' '.'abou'.$reponse;
            
            if($reponse != 0){

                $_SESSION['id'] = $reponse;
                echo $reponse;

            } else{
                echo $reponse;
             }
       }
}

 if(isset($_POST['deconnect'])){
    $des = session_destroy();
    if($des){
     echo 1;
    }
 }



?>