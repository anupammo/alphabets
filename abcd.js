// $(document).ready(function () {
    function printAlphabets(option){
	
        var i = 65;
        var str =String.fromCharCode(i);
        document.getElementById("ascii-val").value = i;
        document.getElementById("capital-abcd").innerHTML = str;
    
        var ascnum = document.getElementById("ascii-val").value;
        $.getJSON("picurl.json", function (data) {
            $.each(data, function (key, value) {
    
                var ascval = value.asciinum;
                if (ascval === ascnum) {
                    $( "#piclink1" ).attr( "src", value.pic1 ).appendTo( "#piclink1" );
                    $( "#piclink2" ).attr( "src", value.pic2 ).appendTo( "#piclink2" );
                    $( "#piclink3" ).attr( "src", value.pic3 ).appendTo( "#piclink3" );
                    $( "#piclink4" ).attr( "src", value.pic4 ).appendTo( "#piclink4" );
                    $( "#piclink5" ).attr( "src", value.pic5 ).appendTo( "#piclink5" );
                    $( "#piclink6" ).attr( "src", value.pic6 ).appendTo( "#piclink6" );
                }
    
            });
        });
    }
    function nextChar() {
    
        var i = parseInt(document.getElementById("ascii-val").value);
        if ( i < 90 ) {
            var i = i + 1;
            document.getElementById("ascii-val").value = i;
            var str =String.fromCharCode(i);
            document.getElementById("capital-abcd").innerHTML = str;
    
            var ascnum = document.getElementById("ascii-val").value;
            $.getJSON("picurl.json", function (data) {
                $.each(data, function (key, value) {
    
                    var ascval = value.asciinum;    
                    if (ascval === ascnum) {
                        $( "#piclink1" ).attr( "src", value.pic1 ).appendTo( "#piclink1" );
                        $( "#piclink2" ).attr( "src", value.pic2 ).appendTo( "#piclink2" );
                        $( "#piclink3" ).attr( "src", value.pic3 ).appendTo( "#piclink3" );
                        $( "#piclink4" ).attr( "src", value.pic4 ).appendTo( "#piclink4" );
                        $( "#piclink5" ).attr( "src", value.pic5 ).appendTo( "#piclink5" );
                        $( "#piclink6" ).attr( "src", value.pic6 ).appendTo( "#piclink6" );
                    }
        
                });
            });
    
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
    
            var ascnum = document.getElementById("ascii-val").value;
            $.getJSON("picurl.json", function (data) {
                $.each(data, function (key, value) {
    
                    var ascval = value.asciinum;    
                    if (ascval === ascnum) {
                        $( "#piclink1" ).attr( "src", value.pic1 ).appendTo( "#piclink1" );
                        $( "#piclink2" ).attr( "src", value.pic2 ).appendTo( "#piclink2" );
                        $( "#piclink3" ).attr( "src", value.pic3 ).appendTo( "#piclink3" );
                        $( "#piclink4" ).attr( "src", value.pic4 ).appendTo( "#piclink4" );
                        $( "#piclink5" ).attr( "src", value.pic5 ).appendTo( "#piclink5" );
                        $( "#piclink6" ).attr( "src", value.pic6 ).appendTo( "#piclink6" );
                    }
        
                });
            });
    
        } else {
            var i = 90;
            document.getElementById("ascii-val").value = i;
            var str =String.fromCharCode(i);
            document.getElementById("capital-abcd").innerHTML = str;
            i = i - 1;
        }
        
    }
// });

