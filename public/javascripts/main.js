$(function() {
    $('#send-blog').click(function() {
    	$("#dialog").load("./blog").dialog({
          autoOpen: false,
          modal: true,
          bgiframe: true,
          width: 350
        })
        .on('keydown', function(evt) {
        	if (evt.keyCode === $.ui.keyCode.ESCAPE) {
            	dialog.dialog('close');
        	}                
        	evt.stopPropagation();
    	});
        $(".ui-dialog-titlebar").hide();
		$("#dialog").dialog('open');
		$('#dialog').dialog('option', 'position', 'center');
    })
});