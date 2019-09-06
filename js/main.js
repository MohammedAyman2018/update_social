
$(document).ready(function () {
    $('.share').click(function (e) {
        e.preventDefault();

        $('.toast').toast('show');

    });

    $('[data-toggle="tooltip"]').tooltip();

    // like and dislike styling

    $('.like ,.dislike').click(function (e) {
        e.preventDefault();
        
        $(this).siblings().removeClass('active');

        $(this).toggleClass('active');

    });

    var posts_captions = $('.post .post-content p , .tags p , .group .group-content p');
    
    for (var i of posts_captions) {
        // grap the element
        var el = i;
        // Check if the varters more then 200
        if( i.innerText.length > 200 ){
            // Convert it to Array
            i = i.innerText.split('');
            // but your truncate
            i.splice(150, 0 , '<span class="dots" style="display: inline">... </span><span class="badge badge-secondary truncate" style="cursor: pointer">اقرأ المزيد</span></span><span class="more">');
            // close the truncate
            i.push('</span><span class="badge badge-secondary truncate-close mr-3" style="cursor: pointer; display: none">اقرأ أقل</span>');
            // return to string
            i = i.join('');
            // inject the truncate in the element
            el.innerHTML = i;
        }
        
    }

    // Truncate
    var open = $('.truncate');
    var close = $('.truncate-close');

    open.click(function (e) {
        e.preventDefault();

        var dots = $(this).siblings('.dots');
        var moreText = $(this).siblings('.more');

        if(dots[0].style.display == "inline"){
            $(this).css({"display" : "none"});
            $(this).siblings('.truncate-close').css({"display" : "inline"});
            dots[0].style.display = "none";
            moreText[0].style.display = "inline";
        }
    });

    close.click(function (e) {
        console.log('dsadas');
        e.preventDefault();

        var dots = $(this).siblings('.dots');
        var moreText = $(this).siblings('.more');

        if(dots[0].style.display == "none"){
            $(this).css({"display" : "none"});
            $(this).siblings('.truncate').css({"display" : "inline"});
            dots[0].style.display = "inline";
            moreText[0].style.display = "none";
        }
    }); 

    $('#summernote').summernote({
        popover: {
            image: [],
            link: [],
            air: []
        }
    });

    

});