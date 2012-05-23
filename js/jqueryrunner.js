var QM;
 
function runjQuery() {
            
    var selector = "#content " + $('#cssselector').val(),
    methodName = $('#methodName').val(),
    parameters = $('#methodParameters').val(),
    paramArray = [],
    length,
    paramIndex,
    returnValue,
    objStr,
    objArray,
    obj,
    funcArray,
    funcParam,
    func,
    param;
  
    
    while (parameters.length > 0)
    {
        if (parameters.match(/^\s*{(.*?)}/)){
            objArray = /{(.*?)}/.exec(parameters);
            objStr = objArray[0];
            try
            {
                obj = jQuery.parseJSON(objStr);
            }
            catch(e)
            {
                alert('Please use JSON format with objects: {"key": "value", "otherkey": 2}');
            }
            
      
            paramArray.push(obj);
            parameters = parameters.substr(objStr.length+1);
        }
        else if (parameters.match(/^\s*function\s*[(](.*?)[)]\s*{(.*?)}\s*/))
        {
             funcArray = /^\s*function\s*[(](.*?)[)]\s*{(.*?)}/.exec(parameters);
             funcParam = funcArray[1];
             if (funcParam.length > 0) {
                 func = new Function(funcParam, funcArray[2]);
             }
             else {
                 func = new Function(funcArray[2]);
             }
              
             paramArray.push(func);
             parameters = parameters.substr(funcArray[0].length+1);
        }
        else {
            var commaIndex = parameters.indexOf(',');
            if( commaIndex !== -1){
                param = parameters.substr(0, commaIndex);
                paramArray.push(param);
                parameters = parameters.substr(commaIndex+1);
                
            }
            else
            {
                paramArray.push(parameters);
                parameters = "";
            }
        }    
    }   
    length = paramArray.length;
    
    for (paramIndex = 0; paramIndex < length; paramIndex++) {
      
        if (isNaN(parseInt(paramArray[paramIndex], 10)) === false) {
            paramArray[paramIndex] = parseInt(paramArray[paramIndex], 10);
        }
    }
    //if (selector !== "#content ") {
    switch (length) {
        case 0: {returnValue = $(selector)[methodName]();break;}
        case 1: {returnValue = $(selector)[methodName](paramArray[0]);break;}
        case 2: {returnValue = $(selector)[methodName](paramArray[0], paramArray[1]);break;}
        case 3: {returnValue = $(selector)[methodName](paramArray[0], paramArray[1],
            paramArray[2]);break;}    
    }
    
    if (returnValue !== undefined && typeof returnValue !== "object") {
            alert('Function returns: ' + returnValue);
    }
    buildDOMTree();
    $(selector).removeAttr('chosen');
    QM.nextTask();
}
        
$(document).ready(function() {
    
    var tasks = [{task: 'Hide the jQuery header',
                 selector: 'h1',
                 category: 'Effects'},
                {task: "Add class named to 'browserList' to the Browser list (li elements)",
                selector: 'li',
                category: 'Attributes'},
                {task: "Add id attribute functionHeader to Function and methods header",
                selector: 'h2',
                category: 'Attributes'},
                {task: "Get id attribute of Function and methods header",
                selector: 'h2',
                category: 'Attributes'},
                {task: "Check if li elements have class named 'browserList'",
                 selector: 'li',
                 category: 'Attributes'},
                 {task: "Change 'Firefox 3.6+' in the browser list to 'Firefox 4+'",
                 selector: 'li:first',
                 category: 'Attributes'},
                 {task: "Get tagname for the header",
                  selector: 'h1',
                  category: 'Attributes'
                 }
                ];
                
    
    $("#gobutton").click(runjQuery);
    buildDOMTree();
    QM = new QuizManager(tasks);
    $('#methodParameters').autoResize();
    
     // Laitetaan etunimikenttään autocomplete
    $(function () {
        var availableTags = [
            "attr",
            "hide",
            "show",
            "slideUp",
            "slideDown",
            "css",
            "addClass",
            "click",
            "after",
            "html"
        ];
        
        $('#methodName').autocomplete({
            position: { my : "right top", at: "right top", collision: "fit", "offset": "150 0" },
            source: availableTags
        });
         $('#methodName').autocomplete("disable");
         $('#methodAutoComplete').click(function(e){
             if (this.checked){
                  $('#methodName').autocomplete("enable");  
             }
             else {
               $('#methodName').autocomplete("disable");
             }
         });     
                 
     });
        
});
    
    

       

