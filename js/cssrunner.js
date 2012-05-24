var QM;         
        
        
function runCSS() {
            
    var selector = '#content ' + $('#cssselector').val(),
    propertyName = $('#csspropertyname').val(),
    propertyValue = $('#csspropertyvalue').val();
                        
    changeCSS(selector, propertyName, propertyValue);
    $(selector).removeAttr('chosen');
    QM.nextTask();
}
        
function changeCSS (selector, property, value) {
      
    $(selector).css(property, value);
}
        
        
$(document).ready(function() {
             
    var tasks = [{
        task: 'Change the color of the header to red',
        selector: 'h1',
        category: 'Text'
    },

    {
        task: 'Change the color of the paragraphs to blue',
        selector: 'p,',
        category: 'text'
    },

    {
        task: 'Add solid yellow border around Css selector list',
        selector: '#cssselectorlist',
        category: 'Padding, borders, and margins'
    }
    ];
           
                 
    buildDOMTree();
    QM = new QuizManager(tasks); 
    $("#gobutton").click(runCSS)
           

});
       
        


