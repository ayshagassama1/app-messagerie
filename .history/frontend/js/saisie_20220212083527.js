

 $("#messageForm").submit(function(){
     //on récupère le message
     var message = $("#message").val();
     if (message!=""){// si le message est non vide
         //on le stocke puis on récupère les nouveaux messages
         $.post("utils/save.php",{message: message},recuppererMessages); 
         // on efface la zone de message
         $("#message").val("");
     }
      return false;//pour ne pas soumettre formulaire
  })
}