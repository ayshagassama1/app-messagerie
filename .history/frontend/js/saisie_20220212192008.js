
function initButton(){
 $("#floatingInput").submit(function(){
     var message = $("floatingInput").val();
     if (message!=""){
         $.post("utils/save.php",{message: message},recuppererMessages); 
         $("floatingInput").val("");
     }
      return false;
  })
}