$(document).ready(function() {

  $('#charRace').change(function(){
    if($(this).val() === "OtherRace"){
      $('#otherRaceInput').show();
    } else {
      $('#otherRaceInput').hide();
    }
  });

  $('#character-form').submit(function(event) {
    event.preventDefault();
    let charName = $('#charName').val();
    let charClass = $('input[name="charClass"]:checked').val();
    let charRace = $('#charRace').val();
    let charBackground = $('#charBackground').val();
  });
    // Do something with the character data, like displaying it

    // Clear the main content area
    function clearMainContent() {
      $('#creationPage').empty();
    }

    // Example: Adding new content to the main content area
    function showNewContent() {
      $('#adventurePage').show();
    }

    // Example: Clearing content and adding new content when a button is clicked
    $('#clearContent').click(function() {
      clearMainContent();
      showNewContent();
  });
});




