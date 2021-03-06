// web/js/general.js

// Remove curve
$(".remove-button-default").click(function(){

	$(this).parent().css("display","none");

	$(".add-default-curve").html('<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Rétablir les courbes par défauts');

	// Remove default series from the graph
    $('#container').highcharts().get(parseInt($(this).attr('id'))).remove();

    redrawSum();
});

// Re-establish default curve
$(".add-default-curve").click(function(){

	$('.default-curve li').css("display","block");
	$(this).empty();

	// Remove all the default curve
	removeDefault();

	// Add default series on the graph
    $('#container').highcharts().addSeries({id: 1, name: $('#1').parent().find('>.curve-title-input').val(), color: '#2ecc71', data: gaussian($('#1').parent().find('>.sigmaChange').val(), $('#1').parent().find('>.tcChange').val(), x)});
    $('#container').highcharts().addSeries({id: 2, name: $('#2').parent().find('>.curve-title-input').val(), color: '#f1c40f', data: gaussian($('#2').parent().find('>.sigmaChange').val(), $('#2').parent().find('>.tcChange').val(), x)});
    $('#container').highcharts().addSeries({id: 3, name: $('#3').parent().find('>.curve-title-input').val(), color: '#e67e22', data: gaussian($('#3').parent().find('>.sigmaChange').val(), $('#3').parent().find('>.tcChange').val(), x)});

    redrawSum();

});

// Remove custom curve
$(document).on('click', '.remove-button', function() {

	$(this).parent().css("display","none");

	$(".add-default-curve").html('<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Rétablir les courbes par défauts');

	// Remove default series from the graph
    $('#container').highcharts().get(parseInt($(this).attr('id'))).remove();

    redrawSum();
});

// Add custom curve
$("#add-curve-button").click(function(){
	var id = random(5, 99999999999);

	$(".user-curve").append('<li id="67"> <button type="button" id="'+ id +'" class="remove-button"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button> <input type="text" class="curve-title-input" value="'+ $("#curveName").val() +'"> σ <input type="number" min="0" step="0.1" class="curve-parameter-input sigmaChange"  value="'+ $("#curveSigma").val() +'"> tc <input type="number" min="0" step="0.1" class="curve-parameter-input tcChange" value="'+ $("#curveTc").val() +'"> </li>');

    $('#container').highcharts().addSeries({ id: id, name: $("#curveName").val(), data: gaussian($("#curveSigma").val(), $("#curveTc").val(), x) });

	$("#curveName").val('');
	$("#curveSigma").val('');
	$("#curveTc").val('');

    redrawSum();		
});


// Change curve data
$(document).on('input', '.curve-title-input', function() {
    $('#container').highcharts().get(parseInt($(this).parent().children(":first").attr('id'))).update({ name: $(this).val() });
    redrawSum();
});
$(document).on('input', '.sigmaChange', function() {
    $('#container').highcharts().get(parseInt($(this).parent().children(":first").attr('id'))).setData(gaussian($(this).val(), $(this).parent().find('>.tcChange').val(), x));
    redrawSum();
});
$(document).on('input', '.tcChange', function() {
    $('#container').highcharts().get(parseInt($(this).parent().children(":first").attr('id'))).setData(gaussian($(this).parent().find('>.sigmaChange').val(), $(this).val(), x));
    redrawSum();
});
	

// Show/Hide the curve sum 
$(".curvesum-input").click(function(){

	redrawSum();

	if($(this).is(':checked'))
	{
		$('#container').highcharts().get(4).show();
	}
	else
	{
		$('#container').highcharts().get(4).hide();
	}

});










