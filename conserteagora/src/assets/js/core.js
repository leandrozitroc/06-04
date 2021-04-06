$(document).ready(function(){
    
    // Profissional -> Header
    $('#header span.toggle').click(function(){
        $(this).toggleClass('on');
    })

    // Profissional -> Article
    $('#servico section article').click(function(){
        $('#servico section article').removeClass('on');
        $(this).addClass('on');
        $('#servico section article .details').slideUp();
        $(this).find('.details').slideDown();
    })

    // Servico -> Accordion
    $('#profile .servico header').click(function(){
        $(this).toggleClass('on');
        $(this).parent().find('section').slideToggle();
    })

});