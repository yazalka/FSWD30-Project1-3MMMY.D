
function calculateInsurance () {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var country = document.getElementById("country").value;
	var hp	= document.getElementById("hp").value;
	nameFinal = String(name.toUpperCase()[0] + name.substring(1,name.length));

	var resultado = ((Number(hp) * 200) / (Number(age) + 150));

	if (nameFinal == "undefined") {
		document.getElementById("result_p").innerHTML = "Your insurance costs is € " + Math.floor(resultado);

	} else {
		document.getElementById("result_p").innerHTML = nameFinal + "," + "<br>" + "your insurance costs is € " + Math.floor(resultado);
	};

	return resultado;

};