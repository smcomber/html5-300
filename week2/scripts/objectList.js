$( '#addNew' ).on ( 'click', swapView );
$( '#addItem' ).on ( 'click', addObject );
$( '#addItem' ).click( function( evt ) {
	evt.preventDefault();
});
$( '#addNew' ).click( function( evt ) {
	evt.preventDefault();
});


var i = 1;

// add new object
function addObject() {
	var newInput = [$( '#inputText1' ).val(),$( '#inputText2' ).val(),$( '#inputText3' ).val()];
	var inputID = i++;
	var editBtn = ( '<input type="button" class="editItem" value="Edit">' );
	var deleteBtn = ( '<input type="button" class="deleteItem" value="Delete">' );
	
	
	$( '#objectBody' ).append( '<tr ' + 'id=#object' + inputID + '>' + '<td class="data">' + newInput[0] + '</td>' + '<td class="data">' + newInput[1] + '</td>' + '<td class="data">' + newInput[2] + '</td>' + '<td>' + editBtn + '</td>' + '<td>' + deleteBtn + '</td>' + '</tr>' );
	
	//clear input fields
	$('.inputTextAll').val("");
	
	showHide();
	
	//delete button
	$( '.deleteItem' ).on ( 'click', deleteItem );
	
	function deleteItem() {
	$( this ).parent().parent().remove();
	};
	
	//edit button
	$( '.editItem' ).on ( 'click', editItem );
	function editItem() {
		var editThis = $(this).parent().parent().attr("id");
		
		
		
	console.log ( editThis );
	};


};




// button to swap form/table views
function swapView() {
	showHide();
};

// swap form/table views
function showHide() {
	$( '#formEntry' ).toggleClass( 'hideItem' ).toggleClass( 'showItem' );
	$( '#dataDisplay' ).toggleClass( 'showItem' ).toggleClass( 'hideItem' );
};