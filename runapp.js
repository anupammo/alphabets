$(document).ready(function () {
    $.getJSON("alphabets.json", function (data) {
        var letters = '';
        $.each(data, function (key, value) {
            letters += '<div class="carousel-item">';
            letters += '<p class="text-center display-1"><strong class="caps-letter">';
            letters += value.capletters;
            letters += '</strong></p>';
            letters += '</div>';
            for (var i = 0; i < value.length; i++) {
                $('<div class="carousel-item">' + value[i] + '</div>').appendTo('.carousel-inner');
            }
            $('.item').first().addClass('active');
            $('#carouselLetter').carousel();

        });
        $('#letter_list').append(letters);
        $("#letter_list div:first").addClass("active");
        $('#carouselLetter').carousel({
            ride: false
        })
    });
});