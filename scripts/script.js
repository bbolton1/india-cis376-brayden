$(document).ready(function() {

  $('#charRace').change(function(){
    if($(this).val() === "Other"){
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

    // Do something with the character data, like displaying it
    alert("Character Name: " + charName + "\nClass: " + charClass + "\nRace: " + charRace + "\nBackground: " + charBackground);

    // You can send this data to a server or perform any other action here
  });
});


