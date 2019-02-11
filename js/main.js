/**
 * main.js
 *
 * Contains template specific js scripts.
 */

(function ($) {
    "use strict";
    
    $(function () {
        $('#e24-contact-form').validate({
            errorElement: "em",
            rules: {
                e24_contact_name: {
                    required: true
                },
                e24_contact_email: {
                    required: true,
                    email: true
                },
                e24_contact_message: {
                    required: true
                }
            },
            messages: {
                e24_contact_name: {
                    required: "Please enter your name"
                },
                e24_contact_email: {
                    required: "Please enter a email"
                },
                e24_contact_message: {
                    required: "Please enter a message"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "inc/form-process.php",

                    success: function () {
                        $('#e24-success-sent').fadeIn('slow', function () {
                            setTimeout("$('#e24-success-sent').fadeOut('slow');", 2000);
                            $('#e24-contact-form :input').val('');
                        });
                    },

                    error: function () {
                        $('#e24-contact-form').fadeTo("slow", 0.15, function () {
                            $('#e24-error-sent').fadeIn();
                        });
                    }
                });
            }
        });
    });
    
    // Isotope for Porfolio Items
    var $grid = $('.e24-portfolio-grid').isotope({
        itemSelector: '.e24-portfolio-item',
        percentPosition: true
    });
    
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });
    
    // Filter Items on Click
    $('.e24-portfolio-filter').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    
    // Isotope for Blog Items
    var $blogGrid = $('.e24-blog-grid').isotope({
        itemSelector: '.e24-blog-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.col-md-6'
        }
    });
    
    $blogGrid.imagesLoaded().progress(function () {
        $blogGrid.isotope('layout');
    });
    
    // Init halkaBox
    halkaBox.run("gallery1");
    
    //Init Swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
})(jQuery);