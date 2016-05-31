var googleMap;
var zoomInput;
// ------------ Location vars ------------
var uw = { 
	lat: 47.6553387,
	long: -122.3057139,
	name: "University of Washington"
	};
var bosworth = { 
	lat: 48.04837871,
	long: -121.9732975,
	name: "Bosworth Lake"
	};
var margaret = { 
	lat: 47.76724186,
	long: -121.9022371,
	name: "Lake Margaret"
	};
var benHoward = { 
	lat: 47.84498573,
	long: -121.929015,
	name: "Ben Howard"
	};
var salmonDrive = { 
	lat: 48.02278315,
	long: -124.3846527,
	name: "Salmon Drive"
	};
var blackCreek = { 
	lat: 47.01049855,
	long: -123.6535043,
	name: "Black Creek"
	};
var edgewater = { 
	lat: 48.4181071,
	long: -122.3418155,
	name: "Edgewater Park"
	};
var bonney = { 
	lat: 47.19063739,
	long: -122.1871352,
	name: "Bonney Lake"
	};
var point = { 
	lat: 47.9114075,
	long: -122.5324043,
	name: "Point No Point"
	};

// ------------ Establish the map  ------------
function initMap() {
	googleMap = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: (uw.lat), lng: (uw.long)},
	  zoom: 7
	});
	$( '#zoom' ).val('7');

// ------------ Location markers ------------ 
// UW (default)	
var markerUW = new google.maps.Marker( {
		position: {lat: (uw.lat), lng: (uw.long)}
	} );
markerUW.setMap( googleMap );

var infoWindowUW = new google.maps.InfoWindow( {
		content: (uw.name)
	} );
markerUW.addListener( 'click', function( ) {
		infoWindowUW.open( googleMap, markerUW );
	} );
	

// Bosworth Lake	
var markerBosworth = new google.maps.Marker( {
		position: {lat: (bosworth.lat), lng: (bosworth.long)}
	} );
markerBosworth.setMap( googleMap );

var infoWindowBosworth = new google.maps.InfoWindow( {
		content: (bosworth.name)
	} );
markerBosworth.addListener( 'click', function( ) {
		infoWindowBosworth.open( googleMap, markerBosworth );
	} );
	
// lake Margaret	
var markerMargaret = new google.maps.Marker( {
		position: {lat: (margaret.lat), lng: (margaret.long)}
	} );
markerMargaret.setMap( googleMap );

var infoWindowMargaret = new google.maps.InfoWindow( {
		content: (margaret.name)
	} );
markerMargaret.addListener( 'click', function( ) {
		infoWindowMargaret.open( googleMap, markerMargaret );
	} );
	
// Ben Howard	
var markerBenHoward = new google.maps.Marker( {
		position: {lat: (benHoward.lat), lng: (benHoward.long)}
	} );
markerBenHoward.setMap( googleMap );

var infoWindowBenHoward = new google.maps.InfoWindow( {
		content: (benHoward.name)
	} );
markerBenHoward.addListener( 'click', function( ) {
		infoWindowBenHoward.open( googleMap, markerBenHoward );
	} );
	
// Salmon Drive	
var markerSalmonDrive = new google.maps.Marker( {
		position: {lat: (salmonDrive.lat), lng: (salmonDrive.long)}
	} );
markerSalmonDrive.setMap( googleMap );

var infoWindowSalmonDrive = new google.maps.InfoWindow( {
		content: (salmonDrive.name)
	} );
markerSalmonDrive.addListener( 'click', function( ) {
		infoWindowSalmonDrive.open( googleMap, markerSalmonDrive );
	} );
	
// Black Creek	
var markerBlackCreek = new google.maps.Marker( {
		position: {lat: (blackCreek.lat), lng: (blackCreek.long)}
	} );
markerBlackCreek.setMap( googleMap );

var infoWindowBlackCreek = new google.maps.InfoWindow( {
		content: (blackCreek.name)
	} );
markerBlackCreek.addListener( 'click', function( ) {
		infoWindowBlackCreek.open( googleMap, markerBlackCreek );
	} );

// Edgewater Park	
var markerEdgewater = new google.maps.Marker( {
		position: {lat: (edgewater.lat), lng: (edgewater.long)}
	} );
markerEdgewater.setMap( googleMap );

var infoWindowEdgewater = new google.maps.InfoWindow( {
		content: (edgewater.name)
	} );
markerEdgewater.addListener( 'click', function( ) {
		infoWindowEdgewater.open( googleMap, markerEdgewater );
	} );
	
// Bonney Lake	
var markerBonney = new google.maps.Marker( {
		position: {lat: (bonney.lat), lng: (bonney.long)}
	} );
markerBonney.setMap( googleMap );

var infoWindowBonney = new google.maps.InfoWindow( {
		content: (bonney.name)
	} );
markerBonney.addListener( 'click', function( ) {
		infoWindowBonney.open( googleMap, markerBonney );
	} );
	
// Point No Point	
var markerPoint = new google.maps.Marker( {
		position: {lat: (point.lat), lng: (point.long)}
	} );
markerPoint.setMap( googleMap );

var infoWindowPoint = new google.maps.InfoWindow( {
		content: (point.name)
	} );
markerPoint.addListener( 'click', function( ) {
		infoWindowPoint.open( googleMap, markerPoint );
	} );


}

//  ------------ Change zoom based on selection  ------------

function innerSelect () {
	googleMap.setZoom( 9 );
	$( '#zoom' ).val('9');
	clearSelect ();
}

//  ------------ Clear our selected class  ------------

function clearSelect () {
	$('.fishBtn').removeClass('selected');
}

// ------------ Zoom buttons   ------------
$('#submitZoom').click(function() {
    var zoomInput = $( '#zoom' ).val();
	googleMap.setZoom( parseInt(zoomInput) );
	clearSelect ();
});
$('#plusZoom').click(function() {
    var zoomInput = $( '#zoom' ).val();
	var currentZoom = parseInt(zoomInput);
	var newZoom = currentZoom+1
	googleMap.setZoom( newZoom );
	$( '#zoom' ).val(newZoom);
});
$('#minusZoom').click(function() {
    var zoomInput = $( '#zoom' ).val();
	var currentZoom = parseInt(zoomInput);
	var newZoom = currentZoom-1
	googleMap.setZoom( newZoom );
	$( '#zoom' ).val(newZoom);
	clearSelect ();
});
$('#resetZoom').click(function() {
	googleMap.setZoom( 7 );
	$( '#zoom' ).val('7');
	clearSelect ();
});

// ------------ Reset button   ------------
$('#goCenter').click(function() {
	googleMap.setCenter( {lat: (uw.lat), lng: (uw.long)} );
	googleMap.setZoom( 7 );
	$( '#zoom' ).val('7');
	clearSelect ();
});

// ------------ Location buttons   ------------
$('#goBosworth').click(function() {
	googleMap.setCenter( {lat: (bosworth.lat), lng: (bosworth.long)} );
	innerSelect ();
	$(this).addClass('selected');
});
$('#goMargaret').click(function() {
	googleMap.setCenter( {lat: (margaret.lat), lng: (margaret.long)} );
	innerSelect ();
	$(this).addClass('selected');
});
$('#goBenHoward').click(function() {
	googleMap.setCenter( {lat: (benHoward.lat), lng: (benHoward.long)} );
	innerSelect ();
	$(this).addClass('selected');
});
$('#goSalmonDrive').click(function() {
	googleMap.setCenter( {lat: (salmonDrive.lat), lng: (salmonDrive.long)} );
	innerSelect ();
	$(this).addClass('selected');
});
$('#goBlackCreek').click(function() {
	googleMap.setCenter( {lat: (blackCreek.lat), lng: (blackCreek.long)} );
	innerSelect ();
	$(this).addClass('selected');
});
$('#goEdgewater').click(function() {
	googleMap.setCenter( {lat: (edgewater.lat), lng: (edgewater.long)} );
	innerSelect ();
	$(this).addClass('selected');
});
$('#goBonney').click(function() {
	googleMap.setCenter( {lat: (bonney.lat), lng: (bonney.long)} );
	innerSelect ();
	$(this).addClass('selected');
});
$('#goPoint').click(function() {
	googleMap.setCenter( {lat: (point.lat), lng: (point.long)} );
	innerSelect ();
	$(this).addClass('selected');
});