// javascript functions

function loadHomePage(dir){
	$(document).ready(function(){
  			// Load Home Screen
		$("#next_screen").load("home.html .loadable");
	});
	swapScreens(dir);
}

function loadGenderPage(dir){
	$(document).ready(function(){
		// Load Gender Screen
		$("#next_screen").load("gender.html .loadable");
	});
	swapScreens(dir);
}

function loadAgePage(dir){
	$(document).ready(function(){
  			// Load Body Parts Screen
		$("#next_screen").load("age.html .loadable");
	});
	swapScreens(dir);
}
function loadWeightPage(dir){
	$(document).ready(function(){
  			// Load Body Parts Screen
		$("#next_screen").load("weight.html .loadable");
	});
	swapScreens(dir);
}
function loadHeightPage(dir){
	$(document).ready(function(){
  			// Load Body Parts Screen
		$("#next_screen").load("height.html .loadable");
	});
	swapScreens(dir);
}


function loadAreYouDiabeticPage(dir){
	$(document).ready(function(){
		// Load Gender Screen
		$("#next_screen").load("are_you_diabetic.html .loadable");
	});
	swapScreens(dir);
}

function loadDiabetesInfoPage(dir){
	$(document).ready(function(){
		// Load Gender Screen
		$("#next_screen").load("diabetes_info.html .loadable");
	});
	swapScreens(dir);
}

function loadDiabetesHabitsPage(dir){
	$(document).ready(function(){
		// Load Gender Screen
		$("#next_screen").load("diabetes_habits.html .loadable");
	});
	swapScreens(dir);
}

function loadBodyPartsPage(dir){
	$(document).ready(function(){
  			// Load Body Parts Screen
		$("#next_screen").load("bodyparts.html .loadable");
	});
	swapScreens(dir);
}
function loadSliderPage(dir){
	$(document).ready(function(){
  			// Load Body Parts Screen
		$("#next_screen").load("sliderPage.html .loadable");
	});
	swapScreens(dir);
}

function swapScreens(dir){
	if (dir == "down"){
		$("#next_screen").detach().appendTo("#centerpiece");
	}
	$("#current_screen").slideUp("slow");
	$("#next_screen").slideDown("slow");
	$("#next_screen").attr("id", "tmp");
	$("#current_screen").attr("id", "next_screen");
	$("#tmp").attr("id", "current_screen");
}