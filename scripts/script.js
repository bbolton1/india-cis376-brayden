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
    // alert("Character Name: " + charName + "\nClass: " + charClass + "\nRace: " + charRace + "\nBackground: " + charBackground);
    // You can send this data to a server or perform any other action here

    // Clear the main content area
    function clearMainContent() {
      $('#main-content').empty();
    }

    // Example: Adding new content to the main content area
    function addNewContent() {
      $('#main-content').html('<h2>New Content Added</h2><p>This is some new content added dynamically.</p>');
    }

    // Example: Clearing content and adding new content when a button is clicked
    $('#clearContent').click(function() {
      clearMainContent();
      addNewContent();
  });
});




