function printAlphabets(option){
	
	var i = 65;
    var str =String.fromCharCode(i);
    document.getElementById("ascii-val").value = i;
    document.getElementById("capital-abcd").innerHTML = str;
}
function nextChar() {

    var i = parseInt(document.getElementById("ascii-val").value);
    if ( i < 90 ) {
        var i = i + 1;
        document.getElementById("ascii-val").value = i;
        var str =String.fromCharCode(i);
        document.getElementById("capital-abcd").innerHTML = str;
    } else {
        var i = 65;
        document.getElementById("ascii-val").value = i;
        var str =String.fromCharCode(i);
        document.getElementById("capital-abcd").innerHTML = str;
        i = i + 1;
    }
    
}
function prevChar() {

    var i = parseInt(document.getElementById("ascii-val").value);
    if ( i > 65 ) {
        var i = i - 1;
        document.getElementById("ascii-val").value = i;
        var str =String.fromCharCode(i);
        document.getElementById("capital-abcd").innerHTML = str;
    } else {
        var i = 90;
        document.getElementById("ascii-val").value = i;
        var str =String.fromCharCode(i);
        document.getElementById("capital-abcd").innerHTML = str;
        i = i - 1;
    }
    
}
$(document).ready(function () {
    $.getJSON("alphabets.json", function (data) {
        var letters = '';
        $.each(data, function (key, value) {
            // letters += '<div class="carousel-item">';
            // letters += '<p class="text-center display-1"><strong class="caps-letter">';
            letters += value.capletters;
            // letters += '</strong></p>';
            // letters += '</div>';
            // for (var i = 0; i < value.length; i++) {
            //     $('<div class="carousel-item">' + value[i] + '</div>').appendTo('.carousel-inner');
            // }
            // $('.item').first().addClass('active');
            // $('#carouselLetter').carousel();

        });
        // $('#letter_list').append(letters);
        // $("#letter_list div:first").addClass("active");
        // $('.carousel').carousel('pause');
        // $('.carousel').carousel({
        //     interval: 500
        //   })
    });
});