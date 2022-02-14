
function initButton(){
 $("#floatingInput").submit(function(){
     var message = $("floatingInput").val();
     if (message!=""){
         $.post("utils/save.php",{message: message},recuppererMessages); 
         $("floatingInput").val("");
     }
      return false;
  })
  function recuppererMessages(){
    $.post("utils/getMessages.php",{},function(reponse){
            $("#console").append(reponse).scrollTop(100000);
    });
}
}