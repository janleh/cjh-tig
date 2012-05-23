/* QuizManager */

function QuizManager (tasks) {
    
    var task_index = 0,
        quiz_on = false;
    
    function toggleQuiz() {
        if (!quiz_on) {
            quiz_on = true;
            $(this).html("Stop quiz");
            $('#quizline').show();
            continueQuiz();
        }
        else {
            $(this).html = "Start quiz";
            quiz_on = false;
            stopQuiz();
        }
        
    }
    
    function continueQuiz() {
        var task = tasks[task_index];
        $('#quiztask').html('Task: ' + task.task + '.');
        $('#quizcategory').html('Category: ' + task.category);
        $('#content ' + task.selector).attr('chosen','chosen');
        buildDOMTree();
    }
    function stopQuiz() {
        
    }
    this.checkTask = function (selector) {
        alert(selector);
        alert(tasks[task_index].selector);
        if ($(selector) == $(tasks[task_index].selector)){
            alert('same selectors');
        }
        else {
             alert ('different selectors');
        }
    };
    
    
    this.nextTask = function() {
        if (quiz_on) {
            task_index++;
            continueQuiz();
        }
        
    };
    
    
    $('#quizbutton').click(toggleQuiz);
    
    
    
    
}

