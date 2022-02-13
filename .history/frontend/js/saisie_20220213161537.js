
function saisie(id){
  var contenue=document.getElementById("floatingInput").value;
  const event = new Date('05 October 2011 14:48 UTC');
  mydate = event.toString();
  var httpr= new XMLHttpRequest();
  httpr.open("POST","http://localhost/app-messagerie/backend/saisie.php",true);
  httpr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  httpr.send("contenu="+contenue+"&destinataire="+id+"&datec="+mydate);
}