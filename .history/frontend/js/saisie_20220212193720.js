
function initButton(){
 $("#floatingInput").submit(function(){
     var message = $("floatingInput").val();
     if (message!=""){
        var js=JSON.stringify(saisie.json,null,'\t')
     }
      return false;
  })
  function recuppererMessages(){
    $.post("utils/getMessages.php",{},function(reponse){
            $("#console").append(reponse).scrollTop(100000);
    });
}
}