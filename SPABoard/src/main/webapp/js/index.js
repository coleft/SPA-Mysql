/**
 * index
 */
 
 (spa = function(){
    $('.board').on('click', function(ev){
        $('#content').load('board/board_main.jsp?job=select');
    });    
})()