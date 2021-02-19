// $(document).ready(function () {
function printNumbers(option) {

    var i = 0;
    document.getElementById("ascii-val").value = i;
    document.getElementById("capital-abcd").innerHTML = parseInt(i);
}


function nextNum() {
    var i = parseInt(document.getElementById("ascii-val").value);
    if (i >= 0 && i < 100) {
        var i = i + 1;
        document.getElementById("ascii-val").value = i;
        document.getElementById("capital-abcd").innerHTML = parseInt(i);
    } else {
        var i = 0;
        document.getElementById("ascii-val").value = i;
        document.getElementById("capital-abcd").innerHTML = parseInt(i);
    }
}

function prevNum() {
    var i = parseInt(document.getElementById("ascii-val").value);
    if (i > 1 && i <= 100) {
        var i = i - 1;
        document.getElementById("ascii-val").value = i;
        document.getElementById("capital-abcd").innerHTML = parseInt(i);
    } else {
        var i = 100;
        document.getElementById("ascii-val").value = i;
        document.getElementById("capital-abcd").innerHTML = parseInt(i);
    }
}

