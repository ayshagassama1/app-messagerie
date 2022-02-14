
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
  var message1=document.getElementById("name").value;
  var message2=document.getElementById("conte").value;
  var httpr= new XMLHttpRequest();
  httpr.open("POST","./backend/saisie.php",true);
  httpr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  httpr.send("name=name&const=conte");
}