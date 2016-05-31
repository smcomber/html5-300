var numberInput = [];
var textInput = [];

$("#sumbit").click(function() {
    var inputValue = $( "#theEntry" ).val();
	
	
	
	var num = parseFloat( inputValue );
	if ( isNaN( num ) ) {
		$('#theEntry').val('');
		textInput.push( inputValue );
		var textDisplay = textInput.join(" ");
		$('#textConcat').text( textDisplay );
	} else {
		
	
	
  	numberInput.push( inputValue );
	var numbersDisplay = numberInput.join(", ");
	var total = 0;
	for (var i = 0; i < numberInput.length; i++) {
		total += numberInput[i] << 0;
	}

	var qty = numberInput.length;
	var avg = total / qty;

	clearAndShow();

	function clearAndShow () {
		$('#theEntry').val('');
		$('#numberEntry').text( numbersDisplay );
		$('#numberQuantity').text( numberInput.length );
		$('#numberSum').text( total );
		$('#numberAverage').text( Math.round(avg * 100) / 100 );
		
	}
	}
	console.log( numberInput );
});

//reset texarea button 
$("#resetInput").click(function() {
    $('#theEntry').val('');
});

// reset all button
$("#resetValue").click(function() {
	 numberInput = [];
	 $('.placeHolder').empty();
});
