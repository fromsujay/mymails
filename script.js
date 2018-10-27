$("#count").text($("p").length);

$(".trash").click(
  function() {
    $(this).parent().remove();
    $("#count").text($("p").length);
  });



$("#btn-add").click(
  function() {

    var inputText = $('#iocapture').val();

    $('<div class="row last-row"></div>').appendTo($("body"));

    $('<img class="avatar" src="avatar-1.jpg" >').appendTo($(".last-row").last());

    $('<div class="innerblock"> </div>').appendTo($(".last-row").last());

    $("<h6></h6>").text('Sujay PATIL').appendTo($(".innerblock").last());

    $("<p></p>").text(inputText).appendTo($(".innerblock").last());

    $('<img src="trash.png" class="trash">').appendTo($(".last-row").last());

    $("#count").text($("p").length);

    $(".trash").click(
      function() {
        $(this).parent().remove();
        $("#count").text($("p").length);
      });

    $("#iocapture").val("");

  }
)



$("#btn-find").click(

  function() {

    $('.row').show();

    $('h6').each(

      function() {


        if ($('#search-field').val().length && $(this).text() != $('#search-field').val()) {
          $(this).parent().parent().fadeOut();
        }

      }
    );
    $('#search-field').val("");    
  }
);
