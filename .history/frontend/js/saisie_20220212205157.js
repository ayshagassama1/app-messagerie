
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
    xhr=new XMLHttpRequest();
    xhr.open("post","saisie.php",true);
    xhr.setRequestHeader("Content-Type","application/x-www")
    xhr.send("null");

}