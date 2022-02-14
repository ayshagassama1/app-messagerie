
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
function saisie(id,event){
    event.preventDefault();
  fetch(
      "http://localhost/app-messagerie/backend/saisie.json",
      {
          method:"POST",
          headers:{"Content-Type":"application"}
      }
  )

}