var numberInput = [];
var textInput = [];
var resetField = function () {
	$('#theEntry').val('')};

$('#sumbit').click(function() {
    var inputValue = $( '#theEntry' ).val();
	
	var num = parseFloat( inputValue );
	if ( isNaN( num ) ) {
		resetField();
		textInput.push( inputValue );
		var textDisplay = textInput.join(" ");
		$('#textConcat').text( textDisplay );
		$('#textQuantity').text( textInput.length );
	} 
	else {
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
		resetField();
		$('#numberEntry').text( numbersDisplay );
		$('#numberQuantity').text( numberInput.length );
		$('#numberSum').text( total );
		$('#numberAverage').text( Math.round(avg * 100) / 100 );
		
	}
	}
});

// reset texarea button 
$('#resetInput').click(function() {
	resetField();
});

// reset all button
$('#resetValue').click(function() {
	 numberInput = [];
	 textInput = [];
	 $('.placeHolder').empty();
});
