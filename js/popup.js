
(function(){

    $.fn.popupTrigger = function() {
        console.log('running popupTrigger');

        this.click(function() {
            console.log('clicked from popupTrigger');
            var dialog = $('dialog.popup-modal-wrap');
            // input the correct content 
            // Show modal
            $('.modal-overlay, .popup-modal-wrap').removeClass('hidden').attr('open', 'true');
            // Store the trigger button
            // Focus close 
            // Keyboard loop?
        });
    }

    $.fn.popupClose = function() {

    }

  })( jQuery );
  