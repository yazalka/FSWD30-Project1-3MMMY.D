//LONDON"S AVERAGE PRICE
var promedio_london = (function () {

	var london = [2500, 1500, 1000, 900];
	var sum_london =0;
	var london_average = 0;

	for (var i = 0; i < london.length; i++){		
		var sum_london = sum_london + london[i]; 
		var london_average = (sum_london/london.length)};
		return london_average;
}());

//AMSTERDAMS"S AVERAGE PRICE
var promedio_amsterdam = (function () {
	var amsterdam = [1500, 500, 1800, 700];
	var sum_amsterdam = 0;
	var amsterdam_average = 0;

	for (var i = 0; i <amsterdam.length; i++){		
		var sum_amsterdam = sum_amsterdam + amsterdam[i]; 
		var amsterdam_average = (sum_amsterdam/amsterdam.length)};
		return amsterdam_average;
}());

//AVERAGE DIFFERENCE
var difference  = (function () {
	return promedio_amsterdam - promedio_london;
}());

window.onload = function what(){
document.getElementById("result").innerHTML = Math.abs(difference);	
document.getElementById("amsterdam-price").innerHTML = promedio_amsterdam;	
document.getElementById("london-price").innerHTML = promedio_london;	

if (difference == 0) {
		document.getElementById("expensive").innerHTML = "Both have the same price";

} else if  (difference > 0) {
		document.getElementById("expensive").innerHTML = "Amsterdam";
		document.getElementById("cheaper").innerHTML = "London";

} else {
		document.getElementById("expensive").innerHTML = "London";
		document.getElementById("cheaper").innerHTML = "Amsterdam";}
};



