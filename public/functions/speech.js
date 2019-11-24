function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';

    

    recognition.onresult = function(event) {
        console.log(event); 
        
        var wordrecognized = event.results[0][0].transcript.split(" ")[0];

        var accuracy =  event.results[0][0].confidence.toFixed(2) * 100;
        console.log(accuracy)

        var closeFar = document.getElementById("closeFar");
        generateWord(word=wordrecognized);
        
        if (accuracy <= 0.70){
            closeFar.innerHTML = "Getting close! Keep practicing!";
        }
        else if (accuracy <= 0.80){
            closeFar.innerHTML = "Very good!";
        }
        else if (accuracy <= 0.90){
            closeFar.innerHTML = "Excellent pronounciation!";
        }
        else{
            closeFar.innerHTML = "Perfect! Way to go!";
        }

    }

    recognition.start();
}   