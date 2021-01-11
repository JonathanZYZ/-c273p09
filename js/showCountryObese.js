$(document).ready(function () {
    $("#idCountry").change(function () {
        var id = $(this).val();
        $.ajax({
            type: "GET",
            url: "getCountryDetails.php",
            data: "id=" + id,
            dataType: "JSON",
            success: function (response) {
                var message = "<tbody><tr><td>" + response[0].population + "</td><td>" + response[0].obese + "</td></tr></tbody>";

                $("#obeseTable").append(message);
            }

        });
    });
});