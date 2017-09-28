$(document).ready(function () {
    
    $("form").submit(function() { 
        $('input[id="first_name"]').val();
        var first_name = $('input[id="first_name"]').val();
        $('input[id="last_name"]').val();
        var last_name = $('input[id="last_name"]').val();
        $('input[id="email"]').val();
        var email = $('input[id="email"]').val();
        $('input[id="phone"]').val();
        var phone = $('input[id="phone"]').val();

        var formattedStr =  "<tr><td>" + first_name + "</td><td>" + last_name + "</td><td>" + email + "</td><td>" + phone + "</td></tr>"
            
        $("#users").append(formattedStr);
        return false;
    });

});