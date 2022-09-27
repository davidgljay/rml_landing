(function($) {
    "use strict"; // Start of use strict

	   const path = window.location.pathname;
     const link = document.querySelector( `.navbar-default li a[href="${path}"]` );
     console.log(link)
     $(link).addClass('active');

})(jQuery); // End of use strict
