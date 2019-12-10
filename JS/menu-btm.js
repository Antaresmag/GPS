$(function(){
    $('.menu-btm').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('menu-btm_active');
        
        $('#show_menu_content').toggle();//('.menu_active');
    
    });
});


// document.querySelector('.menu-btm').onclick = function (){
//     this.classList.toggle('menu-btm_active');
// }