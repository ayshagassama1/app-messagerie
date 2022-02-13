
function initButton(){
 $("#floatingInput").submit(function(){
     var saisie = $("floatingInput").val();
     if (saisie!=""){
        JSON.stringify(saisie,null,'\t')
     }
      return false;
  })

}