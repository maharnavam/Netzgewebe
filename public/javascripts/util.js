function makeDialog(title, message) {
	$('#dialog').html(message)
    $('#dialog').dialog({
                         title: title,
                         model: true,
                         draggable: false,
                         show: {
                                effect: "blind",
                                duration: 1000
                              },
                          buttons : {
                                Ok: function() {
                                  $(this).dialog('close')
                                }
                          }
    });
}