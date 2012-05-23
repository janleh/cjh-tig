
var INTERACTIVEMODE = ( function () {
   
    var mode = 'normal';

    function checkInteractiveMode() {
      
        if (localStorage) {
            if (localStorage.getItem('interactivemode')){
                mode = localStorage.getItem('interactivemode');
            }
        }
    
        if (mode === 'interactive') {
            $('#wrapper').css('margin-left', '30px');
            $('#quiz').css('display', 'block');
            $('#tree').css('display', 'block');
            $('#interactiveModeButton').html('Stop');
            
        }
        else {
            $('#tree').css('display', 'none');
        }
    }
    
    function toggleInteractiveMode(e) {
        if (mode === 'normal') {
            startInteractiveMode();
            mode = 'interactive';
            $(this).html('Stop');
        }
        else {
            stopInteractiveMode();
            mode = 'normal';
            $(this).html('Start');
        }
    }
    

    function startInteractiveMode() {
        $('#quiz').slideDown(2000);
        $('#tree').slideDown(2000);
        $('#wrapper').css('margin-left', '30px');
          
        if (localStorage) {
            localStorage.setItem('interactivemode', 'interactive')
        }
    }

    function stopInteractiveMode () {
        $('#quiz').slideUp(2000);
        $('#tree').slideUp(2000, function() { 
            $('#wrapper').css('margin-left', 'auto');
            });
           
        // $('#tree').css('display', 'none');
        if (localStorage) {
            localStorage.setItem('interactivemode', 'normal')
        }
    }
    
    function displayAtControlSelector () {
        var selector = $(this).children().first().html();
        $('#cssselector').val(selector);
        selector = '#content ' + selector;
        $(selector).effect('pulsate');
        
    }
    
    return {
        toggleInteractiveMode: toggleInteractiveMode,
        checkInteractiveMode: checkInteractiveMode,
        displayAtControlSelector: displayAtControlSelector
    };
})();
    

$(document).ready(function() {
    var IM = INTERACTIVEMODE;
    $('#interactiveModeButton').click(IM.toggleInteractiveMode);
    IM.checkInteractiveMode();
});


