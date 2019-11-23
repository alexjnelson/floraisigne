function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        console.log(event); 
        document.getElementById('speechText').value = event.results[0][0].transcript.split()[0];
        console.log(document.getElementById('speechText').value = event.results[0][0].transcript.split(" ")[0]);
    }

    recognition.start();
}