// slider UI
var $element1 = $('input[type="range"]#householdRange');
var $element2 = $('input[type="range"]#incomeRange');
var $output1 = $('output#household');
var $output2 = $('output#income');

function updateOutput(el, val) {
  el.textContent = val;
 }

$element1
  .rangeslider({
    polyfill: true,
    onInit: function() {
      updateOutput($output1[0], this.value);
    }
  })
  .on('input', function() {
    updateOutput($output1[0], this.value);
	setIncome();
	rateGetter();
  });
  
$element2
  .rangeslider({
    polyfill: true,
    onInit: function() {
      updateOutput($output2[0], this.value);
    }
  })
  .on('input', function() {
    updateOutput($output2[0], this.value);
	rateGetter();
  });
  
function rateGetter() {
	var household = $( '#household' ).val();
	var income = $( '#income' ).val();
	getIncomeLevel( household , income );
	var commaNum = $('output#income').val();
	var updateNum = ( formatNumber ( commaNum ) );
	$('output#income').html( updateNum );
	var householdNum = $('output#household').val();
	if ( householdNum == 8 ) {
		$('output#household').addClass( 'orMore' );
	}
	else {
		$('output#household').removeClass( 'orMore' );
	}
};

// set min & max income based on household size
function setIncome() {
	var setHousehold = $( '#household' ).val();
	if ( setHousehold >= 1 && setHousehold < 2 ){
		$( '#income' ).val('11770');
		$( '#incomeRange' ).val('11770');
		$( '#incomeRange' ).attr( { 'min':11770, 'max':70620, 'value':11770 } );
	}; 
	if ( setHousehold >= 2 && setHousehold < 3 ){
		$( '#income' ).val('15930');
		$( '#incomeRange' ).val('15930');
		$( '#incomeRange' ).attr( { 'min':15930, 'max':95580, 'value':15930 } );
	}; 
	if ( setHousehold >= 3 && setHousehold < 4 ){
		$( '#income' ).val('20090');
		$( '#incomeRange' ).val('20090');
		$( '#incomeRange' ).attr( { 'min':20090, 'max':120540, 'value':20090 } );
	};
	if ( setHousehold >= 4 && setHousehold < 5 ){
		$( '#income' ).val('24250');
		$( '#incomeRange' ).val('24250');
		$( '#incomeRange' ).attr( { 'min':24250, 'max':145500, 'value':24250 } );
	};
	if ( setHousehold >= 5 && setHousehold < 6 ){
		$( '#income' ).val('28410');
		$( '#incomeRange' ).val('28410');
		$( '#incomeRange' ).attr( { 'min':28410, 'max':170460, 'value':28410 } );
	};
	if ( setHousehold >= 6 && setHousehold < 7 ){
		$( '#income' ).val('32570');
		$( '#incomeRange' ).val('32570');
		$( '#incomeRange' ).attr( { 'min':32570, 'max':195420, 'value':32570 } );
	};
	if ( setHousehold >= 7 && setHousehold < 8 ){
		$( '#income' ).val('36730');
		$( '#incomeRange' ).val('36730');
		$( '#incomeRange' ).attr( { 'min':36730, 'max':220380, 'value':36730 } );
	};
	if ( setHousehold >= 8 ){
		$( '#income' ).val('40890');
		$( '#incomeRange' ).val('40890');
		$( '#incomeRange' ).attr( { 'min':40890, 'max':245340, 'value':40890 } );
	};
	$( '.display .trans' ).removeClass( 'trans' );
};

// show hourly rate
function showRate( yourRate , incomeLevel ) {
	var incomePct = ( incomeLevel * 100 + '%');
	$( '#levelDisplay' ).text( incomePct );
	$( '#rateDisplay' ).text( '$' + yourRate );
};
// format income with commas - source: http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function formatNumber ( num ) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

// clear fields
$( '#clear' ).click( function( evt ) {
	evt.preventDefault();
	$( '#household' ).val("1");
	$( '#income' ).val("");
	$( '#rateDisplay' ).text("");
});