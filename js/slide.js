;
(function($) {
    $.ajax({
        url: 'js/data.json',
        success: function(data) {
            render(data);
        }
    });

    function render(data) {
        var str = '';
        $.each(data, function(i, val) {
            //  console.log(val.url)
            str += '<div class="list"><h5>' + val.text + '</h5><span>';
            $.each(val.url, function(x, xl) {
                str += '<img src="' + xl + '" alt="">';
            });
            str += '</span></div>';
        });
        $('.section').append(str);
    }
})(jQuery)