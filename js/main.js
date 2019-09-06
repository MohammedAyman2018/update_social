
$(document).ready(function () {

    // like and dislike styling

    $('.like ,.dislike').click(function (e) {
        e.preventDefault();
        
        $(this).siblings().removeClass('active')

        $(this).toggleClass('active')

    });

    
    let posts_captions = $('.post .post-content p');
    
    for (let i of posts_captions) {
        // grap the element
        let el = i;
        // Check if the letters more then 200
        if( i.innerText.length > 200 ){
            // Convert it to Array
            i = i.innerText.split('');
            // but your truncate
            i.splice(150, 0 , '<span class="dots" style="display: inline">... </span><span class="badge badge-secondary truncate" style="cursor: pointer">اقرأ المزيد</span></span><span class="more">')
            // close the truncate
            i.push('</span><span class="badge badge-secondary truncate-close mr-3" style="cursor: pointer; display: none">اقرأ أقل</span>');
            // return to string
            i = i.join('');
            // inject the truncate in the element
            el.innerHTML = i;
        }
        
    }

    let open = $('.truncate');
    let close = $('.truncate-close');

    open.click(function (e) {
        console.log('dsadas')
        e.preventDefault();

        let dots = $(this).siblings('.dots');
        let moreText = $(this).siblings('.more');

        if(dots[0].style.display == "inline"){
            $(this).css({"display" : "none"});
            $(this).siblings('.truncate-close').css({"display" : "inline"})
            dots[0].style.display = "none";
            moreText[0].style.display = "inline";
        }
    })

    close.click(function (e) {
        console.log('dsadas');
        e.preventDefault();

        let dots = $(this).siblings('.dots');
        let moreText = $(this).siblings('.more');

        if(dots[0].style.display == "none"){
            $(this).css({"display" : "none"});
            $(this).siblings('.truncate').css({"display" : "inline"})
            dots[0].style.display = "inline";
            moreText[0].style.display = "none";
        }
    })    
    
});