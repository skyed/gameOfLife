$(function ()
{
    $("#still-life-btn, #oscillator-btn, #spaceship-btn").click(function ()
    {
        var selector = $(this).attr("id");
        selector = "#" + selector.replace("btn", "select");

        alert($(selector).val());
    });
});