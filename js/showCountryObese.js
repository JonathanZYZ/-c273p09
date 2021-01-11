$(document).ready(function () {
    $("#idCountry").change(function () {
        var id = $(this).val();
        $.ajax({
            type: "GET",
            url: "http://localhost/C273_L09CloudNine/getCountryDetails.php",
            data: "id=" + id,
            cache: false,
            dataType: "JSON",
            success: function (response) {
                var message = "<tbody><tr><td>" + response[0].population + "</td><td>" + response[0].obese + "</td></tr></tbody>";

                $("#obeseTable").html(message);
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }

        });
    });
});