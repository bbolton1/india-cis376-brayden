$(document).ready(function() {

  // displays the other race input box only if the user selects it
  $('#charRaceSelect').change(function(){
    if($(this).val() === "OtherRace"){
      $('#otherRaceInput').show();
    } else {
      $('#otherRaceInput').hide();
    }
  });

  // stores the character info put in by the user
  $('#characterForm').submit(function(event) {
    event.preventDefault();
    let charName = $('#charName').val();
    let charClass = $('input[name="charClass"]:checked').val();
    let charRace = $('#charRaceSelect').val();
    let profession = $('#profession').val();

    console.log(`Character Name: ${charName}, Class: ${charClass}, Race: ${charRace}, Profession: ${profession}`);
  });

  // clears the page and replaces it with a new set of pictures and inputs as well as making the background black
  $('#clearPage').click(function() {
    clearMainContent();
    showNewContent();
    makeBackgroundBlack();
  });


  // clears the input fields by setting their values to an empty string
  $('#clearFields').click(function() {
    $('#charName').val('');
    $('input[name="charClass"]').prop('checked', false);
    $('#charRaceSelect').val('');
    $('#otherRace').val('');
    $('#charProfession').val('');
  });

  // loads default values into the character create screen
  $('#loadDefaultCharacter').click(function() {
    $('#charName').val(defaultCharacter.characterName);
    $('#' + defaultCharacter.characterClass).prop('checked', true);
    $('#charRaceSelect').val(defaultCharacter.characterRace);
    $('#charProfession').val(defaultCharacter.characterProfession);
  });

  // stores credit card info
  $('#paymentForm').submit(function(event) {
    event.preventDefault(); 
    let fullName = $('#fullName').val();
    let cardNumber = $('#cardNumber').val();
    let expiryDate = $('#expiryDate').val();
    let cvv = $('#cvv').val();
    $('.result').show();
  });

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
});





