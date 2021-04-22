import { loadData,
         loadItem, 
         loadContent} from './content_loader.js';

$(document).ready(function() {
    
    $.getJSON('js/session.json',function(session){

        const data = loadData(session);

        loadContent(data["build"]);

        $('.navigation_tabs li').click( function() {

            $(this).addClass('active').after(function() {
                $('.active').not($(this)).removeClass('active')
            });

            loadContent(data[event.currentTarget.dataset.list]);
        });
        
    }).fail(function(){
        console.log("Error loading session file");
    });
    
});