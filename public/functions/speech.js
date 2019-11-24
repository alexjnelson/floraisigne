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
        
        
        closeFar.innerHTML = accuracy + "%"; 

    }

    recognition.start();
}   