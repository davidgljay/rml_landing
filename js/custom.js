(function($) {
    "use strict"; // Start of use strict

	const path = window.location.pathname;
    const link = document.querySelector( `.navbar-default li a[href="${path}"]` );

    $(link).addClass('active');

    $('#contactForm').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: 'https://hooks.zapier.com/hooks/catch/14500435/36xu44q/',
            type: 'post',
            data:$('#contactForm').serialize(),
            success:function(){
                $('#contactArea').hide()
                $('#contactThanks').show()
                console.log('success')
            }
        });
    });

    $('#newsletterForm').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: 'https://hooks.zapier.com/hooks/catch/14500435/36ehu98/',
            type: 'post',
            data:$('#newsletterForm').serialize(),
            success:function(){
                $('#newsletterForm').hide()
                $('#newsletterThanks').show()
            }
        });
    });

})(jQuery); // End of use strict
