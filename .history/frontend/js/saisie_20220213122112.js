
function saisie(id){
  var d=Date();
  var contenue=document.getElementById("floatingInput").value;
  var httpr= new XMLHttpRequest();
  httpr.open("POST","http://localhost/app-messagerie/backend/saisie.php",true);
  httpr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  httpr.send("contenu="+contenue+"&destinataire="+id+"&datec="+d);
}