
function saisie(id){
  var contenue=document.getElementById("floatingInput").value;
  const event = new Date();
  mydate = event.toString();
  console.log(mydate);
  var httpr= new XMLHttpRequest();
  httpr.open("POST","http://localhost/app-messagerie/backend/saisie.php",true);
  httpr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  httpr.send("contenu="+contenue+"&destinataire="+id+"&datec="+mydate);
}