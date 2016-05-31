(function() {
'use strict';
//------------------------
var locBox = $('#outerBox').position();
var boxX = (parseInt(locBox.left));
var boxY = (parseInt(locBox.top));
var objLoc1 = $('#object1').position();
var objLoc2 = $('#object2').position();


$(document).mouseup(function() {
    $(document).off("mousemove");
	$('.object').removeClass('grabby');
});
$('#object1').mousedown(function(grab){
	$('.object1').addClass('grabby');
	var objectX = (parseInt(objLoc1.left));
	var objectY = (parseInt(objLoc1.top));
	var posX = boxX + objectX;
	var posY = boxY + objectY;
	var mouseX = (grab.pageX);
	var mouseY = (grab.pageY);
	var diffX = mouseX - posX;
	var diffY = mouseY - posY;
	var sameDiff = [diffX, diffY];

	console.log (locBox.left, locBox.top);
	console.log ('outer-box', boxX, boxY);
	console.log ('object', objectX, objectY);
	console.log ('pos', posX, posY);
	console.log ('mouse', mouseX, mouseY);
	console.log ('diff', diffX, diffY);
	console.log ('same diff', sameDiff);
	
	
	$(document).mousemove(function(move){
		var newMouseX = (move.pageX) + (diffX);
		var newMouseY = (move.pageY) + (diffY);
		var newObjX = newMouseX - mouseX;
		var newObjY = newMouseY - mouseY;
		$('#object1').css({'left':newObjX, 'top':newObjY});
		console.log (newMouseX, newObjX);
		console.log (objectX, objectY);
		
		
	});
});

	
$('#object2').mousedown(function(grab){
	$('.object2').addClass('grabby');
	var objectX = (parseInt(objLoc1.left));
	var objectY = (parseInt(objLoc1.top));
	var posX = boxX + objectX;
	var posY = boxY + objectY;
	var mouseX = (grab.pageX);
	var mouseY = (grab.pageY);
	var diffX = mouseX - posX;
	var diffY = mouseY - posY;
	var sameDiff = [diffX, diffY];

	console.log (locBox.left, locBox.top);
	console.log ('outer-box', boxX, boxY);
	console.log ('object', objectX, objectY);
	console.log ('pos', posX, posY);
	console.log ('mouse', mouseX, mouseY);
	console.log ('diff', diffX, diffY);
	console.log ('same diff', sameDiff);
	
	
	$(document).mousemove(function(move){
		var newMouseX = (move.pageX);
		var newMouseY = (move.pageY);
		var newObjX = newMouseX - (sameDiff[0]);
		var newObjY = newMouseY - (sameDiff[1]);
		$('#object2').css({'left':newObjX, 'top':newObjY});
		console.log (newMouseX, newObjX);
		console.log (objectX, objectY);
		
		
	});
});

//------------------------
})();
