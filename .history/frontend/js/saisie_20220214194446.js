function saisie(id){
  var contenue=document.getElementById("floatingInput").value;
  const event = new Date();
  let mydate = event.toISOString();
  console.log(mydate);
  var httpr= new XMLHttpRequest();
  httpr.open("POST","http://localhost/app-messagerie/backend/saisie.php",true);
  httpr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  httpr.send("contenu="+contenue+"&destinataire="+id+"&date="+mydate);
}
function supprimer(id){
  var httpre= new XMLHttpRequest();
  httpre.open("POST","http://localhost/app-messagerie/backend/saisie.php",true);
  httpre.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  httpre.send("id="+id);

}
