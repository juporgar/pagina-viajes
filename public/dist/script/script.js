(function() 
{
    'use strict';

    window.addEventListener('load', function() 
    {
      var forms = document.getElementsByClassName('needs-validation');

      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
           
            var pass1=$("#passw");
            var pass2=$("#passw2");

            if(pass1.val()!==pass2.val())
            {
                $('#advicePassDiferent').show();
            } 
            else
            {
                $('#advicePassDiferent').hide();
            }

            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);

      });

    }, false);
})();