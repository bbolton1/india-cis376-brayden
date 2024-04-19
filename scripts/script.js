$(document).ready(function() {

  // displays the other race input box only if the user selects it
  $('#charRace').change(function(){
    if($(this).val() === "OtherRace"){
      $('#otherRaceInput').show();
    } else {
      $('#otherRaceInput').hide();
    }
  });

  // stores the character info put in by the user
  $('#character-form').submit(function(event) {
    event.preventDefault();
    let charName = $('#charName').val();
    let charClass = $('input[name="charClass"]:checked').val();
    let charRace = $('#charRace').val();
    let profession = $('#profession').val();


  // clears the main content area
  function clearMainContent() {
    $('#creationPage').empty();
  }

  // displays new info on the page
  function showNewContent() {
    $('#adventurePage').show();
  }

  function makeBackgroundBlack() {
    $('body').addClass('secondBackground');
  }

  // clears the page and replaces it with a new set of pictures and inputs as well as making the background black
  $('#clearPage').click(function() {
    clearMainContent();
    showNewContent();
    makeBackgroundBlack();
    });
  });

  // clears the input fields by setting their values to an empty string
  $('#clearFields').click(function() {
    $('#charName').val('');
    $('input[name="charClass"]').prop('checked', false);
    $('#charRace').val('');
    $('#otherRace').val('');
    $('#profession').val('');
  });

});





