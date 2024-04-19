$(document).ready(function() {
  $('#charRace').change(function(){
    if($(this).val() === "OtherRace"){
      $('#otherRaceInput').show();
    } else {
      $('#otherRaceInput').hide();
    }
  });

  function showMenu() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $('#character-form').submit(function(event) {
    event.preventDefault();
    let charName = $('#charName').val();
    let charClass = $('input[name="charClass"]:checked').val();
    let charRace = $('#charRace').val();
    let profession = $('#profession').val();


  // Clear the main content area
  function clearMainContent() {
    $('#creationPage').empty();
  }

  function showNewContent() {
    $('#adventurePage').show();
  }

  function makeBackgroundBlack() {
    $('body').addClass('secondBackground');
  }

  // Example: Clearing content and adding new content when a button is clicked
  $('#clearContent').click(function() {
    clearMainContent();
    showNewContent();
    makeBackgroundBlack();
  });
});
});





