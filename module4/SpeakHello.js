(function(window){
	var speakWord = "Hello";
	var hello = new Object();
	hello.speak = function speak(name) {
	console.log(speakWord + " " + name);
	}
	window.hello = hello;
	
})(window)




