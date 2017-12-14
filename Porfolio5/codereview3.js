 	function calculateInsurance() {

 	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var country = document.getElementById("country").value;
	var horse_power = document.getElementById("horsepower").value;

	var page = "Our Team";
	var link = page.link("codereview3.html");

	var insurance = horse_power * 100 / age + 150;
	var price = Math.floor(insurance);

	document.getElementById("price").innerHTML = ("Dear "+name+" the insurance for this car would cost approximately " 
		+ price + " $ yearly. For further informations please contact one of our members from " + link + ".");
} 