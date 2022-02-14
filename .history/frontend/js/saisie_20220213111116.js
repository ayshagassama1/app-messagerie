
function initButton(){
 $("#floatingInput").submit(function(){
     var saisie = $("floatingInput").val();
     if (saisie!=""){
        var tojson=JSON.stringify(saisie,null,'\t');
        localStorage.setItem("message",tojson);
     }
      return false;
  })

}
function saisie(){
  var id=document.getElementById("floatingInput").val();
  var contenu=document.getElementById("floatingInput").val();
  var httpr= new XMLHttpRequest();
  httpr.open("POST","http://localhost/app-messagerie/backend/saisie.php",true);
  httpr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  httpr.send("id=id&contenu=contenu");
}