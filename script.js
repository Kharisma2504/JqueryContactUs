$(document).ready(function() {

  // 1) Animate the logo when the page loads (fadeIn + small slide down)
  $('#logo').hide().css({position: 'relative', top: '-10px'}).fadeIn(1500).animate({top: 0}, 400);

  // 2) Hover effect for nav buttons (change background)
  $('.nav-button').hover(function() {
    $(this).css('background-color', '#e6f0ff');
  }, function() {
    $(this).css('background-color', '');
  });

  // 3) Click to toggle contact details (show/hide)
  $('#toggle-contact').click(function() {
    $('#contact-details').slideToggle(400);
  });

  // 4) Animate social icons on hover (scale up)
  $('.social-btn').hover(function() {
    $(this).css('transform', 'scale(1.08)');
    $(this).css('transition', 'transform 0.15s');
  }, function() {
    $(this).css('transform', '');
  });

  // 5) Open email app when "Contact Us" button clicked
  $('.nav-button').click(function() {
    if ($(this).text().includes('Contact Us')) {
      window.location.href = 'mailto:nilaa123@gmail.com';
    }
  });

  // ✅ 6) Back to home button click function
  $("#backBtn").click(function() {
      window.location.href = "index.html";
  });

});
