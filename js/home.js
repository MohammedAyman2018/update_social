$(document).ready(function () {

    var editor = new MediumEditor('.editable',{
        placeholder: {
            /* This example includes the default options for placeholder,
                if nothing is passed this is what it used */
            text: 'أكتب شيئاً مفيداً',
        }
    });

    var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if( screenWidth < 575 ){
      $('.add-post').html('<i class="fas fa-plus"></i');
    }

    $('#summernote').summernote({
        lang: 'ar-AR' ,
        height: 300,
        popover: {
            image: [],
            link: [],
            air: []
        },
        hint: {
            mentions: ["محمد", "أبوحميد", "تير_متير"],
            match: /\B#(\w*)$/,
            search: function (keyword, callback) {
              callback($.grep(this.mentions, function (item) {
                return item.indexOf(keyword) == 0;
              }));
            },
            content: function (item) {
              return '#' + item;
            }    
          }
    });


    
    });