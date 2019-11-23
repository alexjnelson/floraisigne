function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';

    

    recognition.onresult = function(event) {
        console.log(event); 
        var letterrecognized = event.results[0][0].transcript.split(" ")[0].charAt(0);
        var letterURL = getSign(letterrecognized);
        console.log(letterURL); 
        var imageToBeChanged = document.getElementById("text-input-img")
        imageToBeChanged.src = letterURL;
        document.getElementById('voice-accuracy').value = event.results[0][0].confidence.toFixed(2)*100;
    }

    recognition.start();
}   