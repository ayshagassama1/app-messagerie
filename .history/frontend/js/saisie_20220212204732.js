
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
    xhr.open("get","saisie.php",true);
    xhr.send("null");

}