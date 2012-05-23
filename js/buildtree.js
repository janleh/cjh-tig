/* Adapted from http://jsfiddle.net/elclanrs/UHbMa/ */

$.fn.buildTree = function (initialDepth) {
    var tree = {};
    this.find('*').andSelf().each(function (i, v) {
        var parents = $(this).parents().length - 1,
        depth = 1;
        
        if (initialDepth !== undefined) {
            depth = initialDepth;
            initialDepth = undefined;
        }
        else {
            while (depth < parents) {
                depth++;
            }
        }
        tree[v.tagName.toLowerCase() + '(' + i + ')'] = {
            id : (v.id) ? '#' + v.id : '',
            klass : (v.className) ? '.' + v.className.replace(' ', '.') : '',
            depth : depth,
            chosen: $(v).attr('chosen') ? ' chosen="chosen" ' : ''
            
         };
    });
    return tree;
};

function buildDOMTree () {
    $('#tree').html('');
    var tree = $('#content').buildTree(1),
    html = '';
    for (var tag in tree) {
        html += '<li class="tag depth' + tree[tag].depth + tree[tag].chosen + 
            //'"><a href="#">' + tag.match(/\w+/) + tree[tag].klass + tree[tag].id + '</a></li>';
        '"><span>' + tag.match(/\w+/) + tree[tag].klass + tree[tag].id + '</span></li>';
    }
    $('#tree').append('<ul id="domtreelist">' + html + '</ul>');

    // Set width
    var setMinWidth = function (el) {
        var minWidth = 0;
        el
        .each(function () {
            var width = $(this).width();
            $(this).click(INTERACTIVEMODE.displayAtControlSelector);
            if (width > minWidth) {
                minWidth = width;
            }
        })
        .width(minWidth);
    };
    setMinWidth($('.tag')); 
    
    $('#domtreebutton').click(toggleTree);
}

function toggleTree() {
    if ($('#tree').css('display') === 'none') {
        $('#tree').slideDown(1000);
        $(this).html('Hide');
    }
    else {
        $('#tree').slideUp(1000);
        $(this).html('View');
    }
    
        

}
