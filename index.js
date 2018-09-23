//javascript for index.html

//declaring array	
	var imageList = new Array();
	
//adding elements to the array
	imageList[0] = "images/koala.jpg"
	imageList[1] = "images/lion.jpg"
	imageList[2] = "images/polarbear.jpg"
	imageList[3] = "images/deer.jpg"
	imageList[4] = "images/duck.jpg"
	imageList[5] = "images/elephant.jpg"
	imageList[6] = "images/dog.jpg"
	imageList[7] = "images/seal.jpg"
	imageList[8] = "images/opposum.jpg"
	imageList[9] = "images/oranguttan.jpg"
	
	
	window.onload = function(){

//event listener for button	
    document.getElementById("clicker").addEventListener("click", function() {
	
	var num = Math.floor((Math.random() * 10));
	document.getElementById("image").setAttribute('src', imageList[num]);
	});
	
	}
	