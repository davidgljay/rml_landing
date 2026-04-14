(function($) {
    "use strict"; // Start of use strict

    const path = window.location.pathname.replace(/\/$/, "") || "/";
    const links = document.querySelectorAll(".navbar-default a[href]");
    let activeLink = null;

    for (const link of links) {
        const href = link.getAttribute("href");
        if (!href || href === "#" || href.startsWith("http")) {
            continue;
        }

        const normalizedHref = href.split("#")[0].replace(/\/$/, "") || "/";
        if (normalizedHref === path) {
            activeLink = link;
            break;
        }
    }

    if (activeLink) {
        activeLink.classList.add("active");
        const navItem = activeLink.closest(".nav-item.dropdown");
        if (navItem) {
            const toggle = navItem.querySelector(".dropdown-toggle");
            if (toggle) {
                toggle.classList.add("active");
            }
        }
    }

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
