$(document).ready(function () {

    console.log("jquery is ready");
    $('#btn').click(function() {
        $(location).attr('href',"home.html");
    });

});