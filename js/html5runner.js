//var QM;
 
function insertHTML() {
            
    var selector = $('#cssselector').val(),
    html5markup = $('#html5markup').val();
    
    $(selector).html(html5markup);
    buildDOMTree();
}
        
$(document).ready(function() {
    
    $("#gobutton").click(insertHTML);
    buildDOMTree();
});
       

