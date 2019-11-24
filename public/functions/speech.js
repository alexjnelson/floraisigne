function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';

    

    recognition.onresult = function(event) {
        console.log(event); 
        
        var wordrecognized = event.results[0][0].transcript.split(" ")[0];
        console.log(wordrecognized);
        
        generateWord(word=wordrecognized);
        
        
        
        var accuracy = document.getElementById('voice-accuracy');
        accuracy.innerHTML = "Accuracy of pronunciation: " + event.results[0][0].confidence.toFixed(2)*100 + '%';
    }

    recognition.start();
}   