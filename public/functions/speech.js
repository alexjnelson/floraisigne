function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';

    

    recognition.onresult = function(event) {
        console.log(event); 
        var letterrecognized = event.results[0][0].transcript.split(" ")[0].charAt(0);
        var letterURL = getSign(letterrecognized);
        console.log(letterURL); 
        var imageToBeChanged = document.getElementById("text-input-img");
        imageToBeChanged.src = letterURL;
        var accuracy = document.getElementById('voice-accuracy');
        accuracy.innerHTML = "Accuracy of pronunciation: " + event.results[0][0].confidence.toFixed(2)*100 + '%';
    }

    recognition.start();
}   