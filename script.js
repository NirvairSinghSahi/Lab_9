$(document).ready(function() {
    // Filter images
    $('#filters button').click(function() {
      const filter = $(this).attr('data-filter');
      $('#filters button').removeClass('active'); // Remove active class from all buttons
      $(this).addClass('active'); // Add active class to the clicked button
      
      if (filter === 'all') {
        $('.gallery-item').fadeIn();
      } else {
        $('.gallery-item').hide();
        $(`.gallery-item[data-category="${filter}"]`).fadeIn();
      }
    });
  
    // Lightbox functionality
    $('.gallery-item img').click(function() {
      const src = $(this).attr('src');
      $('#lightbox .lightbox-content').attr('src', src);
      $('#lightbox').fadeIn();
    });
  
    // Close lightbox
    $('#lightbox .close, #lightbox').click(function() {
      $('#lightbox').fadeOut();
    });
  
    // Prevent accidental closing when clicking on the image itself
    $('#lightbox .lightbox-content').click(function(event) {
      event.stopPropagation();
    });
  });
  