function setParams(){
	document.getElementById("minParam").innerHTML = document.getElementById("myRange").min;
	document.getElementById("maxParam").innerHTML = document.getElementById("myRange").max;
}

function changeImage(){
	var mainImageChildren = document.getElementById("mainImage").children;
	var numImages = document.getElementById("mainImage").childElementCount;
	var minValue = document.getElementById("myRange").min;
	var maxValue = document.getElementById("myRange").max;
	var interval = (maxValue - minValue) / numImages;
	var currentValue = document.getElementById("myRange").value;
	
	document.getElementById("currentValue").innerHTML = currentValue;
	
	var minArray = [];
	var maxArray = [];
	for(var i = 0; i < mainImageChildren.length; i++){
		minArray.push(i * interval);
		maxArray.push((i + 1) * interval);
	}
	
	for(var j = 0; j < mainImageChildren.length; j++){
		if(currentValue >= minArray[j] && currentValue < maxArray[j])
			mainImageChildren[j].style.display = "block";
		else
			mainImageChildren[j].style.display = "none";
			
		if(currentValue == maxValue)
			mainImageChildren[mainImageChildren.length - 1].style.display = "block";
	}
}
		
function alignCurrentValue(){
	if(document.getElementById("myRange").value < 10)
		document.getElementById("currentValue").style.right = "293px";
	else if(document.getElementById("myRange").value >= 10 && document.getElementById("myRange").value < 100)
		document.getElementById("currentValue").style.right = "273px";
	else
		document.getElementById("currentValue").style.right = "250px";
}

function changeAge(){
	var currentAge = document.getElementById("myRange").value;
	
	document.getElementById("currentAge").innerHTML = currentAge + " years";
}

function alignAge(){
	if(document.getElementById("myRange").value < 10)
		document.getElementById("currentAge").style.right = "320px";
	else
		document.getElementById("currentAge").style.right = "285px"
}

function changeWeight(){
	var currentWeight = document.getElementById("myRange").value;
	
	document.getElementById("currentWeight").innerHTML = currentWeight + " lbs";
}

function alignWeight(){
	if(document.getElementById("myRange").value < 10)
		document.getElementById("currentWeight").style.right = "390px";
	else if(document.getElementById("myRange").value >= 10 && document.getElementById("myRange").value < 100)
		document.getElementById("currentWeight").style.right = "365px";
	else
		document.getElementById("currentWeight").style.right = "335px";
}
function changeHeight(){
	var currentHeight = document.getElementById("myRange").value;
	
	document.getElementById("currentHeight").innerHTML = currentHeight + " \"";
}

function alignHeight(){
	if(document.getElementById("myRange").value < 10)
		document.getElementById("currentHeight").style.right = "400px";
	else if(document.getElementById("myRange").value >= 10 && document.getElementById("myRange").value < 100)
		document.getElementById("currentHeight").style.right = "365px";
	else
		document.getElementById("currentHeight").style.right = "355px";
}

function load_age(){
	
}