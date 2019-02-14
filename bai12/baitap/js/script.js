$(document).ready(function() {
    // Get the modal
    var modal = $('#myModal');

    $('.myImg').click(function() {
        captionText = $(this).attr('alt');
        modal.css("display", "block");
        var modalImg = $(this).attr('src');
        $('#img01').attr('src', modalImg);
        $('#caption').html("<p>" + captionText +"</p>");
    });

    // When the user clicks on <span> (x), close the modal
    $('.close').click(function() { 
        modal.css("display", "none");
    });
});
