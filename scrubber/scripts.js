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
			
			/*hardcoded for now*/
			/*if(document.getElementById("myRange").value < 10){
				document.getElementById("image1").style.display = "block";
				for(var i = 0; i < mainImageChildren.length; i++){
					if(mainImageChildren[i].id == "image1")
						;
					else
						mainImageChildren[i].style.display = "none";
				}
			}
			else if(document.getElementById("myRange").value >= 10 && document.getElementById("myRange").value < 20){
				document.getElementById("image2").style.display = "block";
				for(var i = 0; i < mainImageChildren.length; i++){
					if(mainImageChildren[i].id == "image2")
						;
					else
						mainImageChildren[i].style.display = "none";
				}
			}
			else if(document.getElementById("myRange").value >= 20 && document.getElementById("myRange").value < 30){
				document.getElementById("image3").style.display = "block";
				for(var i = 0; i < mainImageChildren.length; i++){
					if(mainImageChildren[i].id == "image3")
						;
					else
						mainImageChildren[i].style.display = "none";
				}
			}
			else if(document.getElementById("myRange").value >= 30 && document.getElementById("myRange").value < 40){
				document.getElementById("image4").style.display = "block";
				for(var i = 0; i < mainImageChildren.length; i++){
					if(mainImageChildren[i].id == "image4")
						;
					else
						mainImageChildren[i].style.display = "none";
				}
			}
			else if(document.getElementById("myRange").value >= 40 && document.getElementById("myRange").value < 50){
				document.getElementById("image5").style.display = "block";
				for(var i = 0; i < mainImageChildren.length; i++){
					if(mainImageChildren[i].id == "image5")
						;
					else
						mainImageChildren[i].style.display = "none";
				}
			}
			else if(document.getElementById("myRange").value >= 50 && document.getElementById("myRange").value < 60){
				document.getElementById("image6").style.display = "block";
				for(var i = 0; i < mainImageChildren.length; i++){
					if(mainImageChildren[i].id == "image6")
						;
					else
						mainImageChildren[i].style.display = "none";
				}
			}
			else if(document.getElementById("myRange").value >= 60 && document.getElementById("myRange").value < 70){
				document.getElementById("image7").style.display = "block";
				for(var i = 0; i < mainImageChildren.length; i++){
					if(mainImageChildren[i].id == "image7")
						;
					else
						mainImageChildren[i].style.display = "none";
				}
			}
			else if(document.getElementById("myRange").value >= 70 && document.getElementById("myRange").value < 80){
				document.getElementById("image8").style.display = "block";
				for(var i = 0; i < mainImageChildren.length; i++){
					if(mainImageChildren[i].id == "image8")
						;
					else
						mainImageChildren[i].style.display = "none";
				}
			}
			else if(document.getElementById("myRange").value >= 80 && document.getElementById("myRange").value < 90){
				document.getElementById("image9").style.display = "block";
				for(var i = 0; i < mainImageChildren.length; i++){
					if(mainImageChildren[i].id == "image9")
						;
					else
						mainImageChildren[i].style.display = "none";
				}
			}
			else{
				document.getElementById("image10").style.display = "block";
				for(var i = 0; i < mainImageChildren.length; i++){
					if(mainImageChildren[i].id == "image10")
						;
					else
						mainImageChildren[i].style.display = "none";
				}
			}*/
		}