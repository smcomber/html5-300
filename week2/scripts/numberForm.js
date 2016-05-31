// JavaScript Document

document.getElementById("theNumber").value = "";
var numberInput = [];
var numbersDisplay =[];
var displayBox1 = document.getElementById("numberEntry");
var displayBox2 = document.getElementById("numberQuantity");
var displayBox3 = document.getElementById("numberSum");
var displayBox4 = document.getElementById("numberAverage");

// .val reference: http://api.jquery.com/val/
$("#sumbit").click(function() {
    var numberValue = $( "#theNumber" ).val();
	numberInput.push( numberValue );
  
//push reference: http://jsbin.com/ufanep/2/edit?html,js,output


//sum of array reference: http://stackoverflow.com/questions/8550183/sum-of-values-in-an-array-using-jquery

var numbersDisplay = numberInput.join(", ");
var total = 0;
for (var i = 0; i < numberInput.length; i++) {
    total += numberInput[i] << 0;
}


var qty = numberInput.length;
var totalSum = total;
var avg = totalSum / qty;



 clearAndShow();

  function clearAndShow () {
	  document.getElementById("theNumber").value = "";
	  
	  
displayBox1.innerHTML = numbersDisplay;
displayBox2.innerHTML = qty;
displayBox3.innerHTML = totalSum;
//Math.round refernce: http://stackoverflow.com/questions/15762768/javascript-math-round-to-two-decimal-places
displayBox4.innerHTML = Math.round(avg * 100) / 100;
  }
    });
$("#resetValue").click(function() {
 numberInput = [];
 displayBox1.innerHTML = ("&nbsp;");
displayBox2.innerHTML = ("&nbsp;");
displayBox3.innerHTML = ("&nbsp;");
displayBox4.innerHTML = ("&nbsp;");
});
