(function(window){
	
	var goodBye = new Object();
	var speakWord = "Good Bye";
	goodBye.speak = function speak(name) {
  	console.log(speakWord + " " + name);
	}
	window.goodBye = goodBye;

})(window);



