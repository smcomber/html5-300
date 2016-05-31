//show list on pageload
$( document ).ready(function() {
    displayItems();
});


$( '#addNew' ).on ( 'click', showHide );
$( '#addItem' ).on ( 'click', addObject );
$( '#displayItems' ).on('click', displayItems );
$( '#addItem' ).click( function( evt ) {
	evt.preventDefault();
});
$( '#addNew' ).click( function( evt ) {
	evt.preventDefault();
});

var baseURL = 'https://shielded-sea-3725.herokuapp.com/data-api/';
var collection = 'smcomber';
var deleteBtn = ( '<input type="button" class="deleteItem" value="Delete">' );
var editBtn = ( '<input type="button" class="editItem" value="Edit">' );


// post item

function addObject( evt ) {
	
	var track = $('#inputText1').val();
	var artist = $('#inputText2').val();
	var album = $('#inputText3').val();
	var release = $('#inputText4').val();

	$.ajax( baseURL + collection, 
	{
		method: 'POST',
		data: {
			track: track,
			artist: artist,
			album: album,
			release: release,
		},
		success: createSuccessPost,
		error: createErrorPost
	});
	$('.inputTextAll').val("");
	displayItems();
	showHide();
};

function createSuccessPost ( data ) {
	console.log( 'Data PUT received:', data );
};

function createErrorPost ( jqXHR, textStatus, errorThrown ) {
	console.log( 'AJAX PUT error. Status:', textstatus, 'error:', errorThrown );
};


// get item
function displayItems() {
	//clear table each time before displaying
	$('#objectBody tr').remove();
	
	$.ajax( baseURL + collection, 
	{
		method: 'GET',
		success: createSuccessGet,
		error: createErrorGet
	});
};

function createSuccessGet ( data ) {
	console.log( 'Data GET retrieved:', data );
	buildTable ( data );
};

function createErrorGet ( jqXHR, textStatus, errorThrown ) {
	console.log( 'AJAX GET error. Status:', textstatus, 'error:', errorThrown );
};


// build table after get

function buildTable ( data ) {
	for (i = 0; i < data.length; i++) {
		$( '#objectBody' ).append( '<tr id="' + (data[i]._id) + '">' + '<td class="data" id="trackName">' + (data[i].track) + '</td>' + '<td class="data" id="artistName">' + (data[i].artist) + '</td>' + '<td class="data" id="albumName">' + (data[i].album) + '</td>' + '<td class="data" id="releaseName">' + (data[i].release) + '</td>' + '<td class="btn">' + deleteBtn + '</td>' + '<td class="btn">' + editBtn + '</td>' + '</tr>' );
	};
	$( '.deleteItem' ).on('click', deleteThis );
	$( '.editItem' ).on('click', editThis );
};


//edit item

function editThis () {
	var thisID = $(this).parent().parent().attr('id');
	var thisTrack = $(this).parent().siblings("#trackName").text();
	var thisArtist = $(this).parent().siblings("#artistName").text();
	var thisAlbum = $(this).parent().siblings("#albumName").text();
	var thisRelease = $(this).parent().siblings("#releaseName").text();
	showEdit();
	$('#editText1').val( thisTrack );
	$('#editText2').val( thisArtist );
	$('#editText3').val( thisAlbum );
	$('#editText4').val( thisRelease );
	

	$('#editItem').on( 'click', sendEdit );
	
	function sendEdit ( evt ) {
		evt.preventDefault();
		var editTrack = $('#editText1').val( );
		var editArtist = $('#editText2').val( );
		var editAlbum = $('#editText3').val( );
		var editRelease = $('#editText4').val( );
		
		
		$.ajax( baseURL + collection + '/' + thisID,
		{
			method: 'PUT',
			data: {
			track: editTrack,
			artist: editArtist,
			album: editAlbum,
			release: editRelease,
		},
		success: editSuccessPost,
		error: editErrorPost
		});
		
	};
};

function editSuccessPost ( data ) {
	console.log( 'Data EDIT received:', data );
	location.reload();
};

function editErrorPost ( jqXHR, textStatus, errorThrown ) {
	console.log( 'AJAX EDIT error. Status:', textstatus, 'error:', errorThrown );
};


// delete item

function deleteThis () {
	var thisID = $(this).parent().parent().attr('id');
	var thisTrack = $(this).parent().siblings("#trackName").text();
	var r = confirm('Delete ' + thisTrack + '?');
	if (r == true) {
		$.ajax( baseURL + collection + '/' + thisID,
		{
			method: 'DELETE',
			success: deleteSuccess,
			error: deleteError
		} );
		
	};
};

function deleteSuccess ( data ) {
	console.log( 'Data DELETED:', data );
	location.reload();
};

function deleteError ( jqXHR, textStatus, errorThrown ) {
	console.log( 'AJAX DELETE error. Status:', textstatus, 'error:', errorThrown );
};


//swap between input, edit and table views
function showHide() {
	$( '#formEntry' ).toggleClass( 'hideItem' ).toggleClass( 'showItem' );
	$( '#dataDisplay' ).toggleClass( 'showItem' ).toggleClass( 'hideItem' );
};
function showEdit() {
	$( '#formEdit' ).toggleClass( 'hideItem' ).toggleClass( 'showItem' );
	$( '#dataDisplay' ).toggleClass( 'showItem' ).toggleClass( 'hideItem' );
};
