
function initButton(){
 $("#floatingInput").submit(function(){
     var message = $("#message").val();
     if (message!=""){
         // $.post("utils/save.php",{message: message},recuppererMessages); 
         $("#message").val("");
     }
      return false;
  })
}