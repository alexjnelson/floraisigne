function unclass(x) {


    x.className = "";
    x.className = '';

}

function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';

    

    recognition.onresult = function(event) {
        console.log(event); 
        
        var wordrecognized = event.results[0][0].transcript.split(" ")[0];

        
        generateWord(word=wordrecognized);
        


    recognition.start();
}   