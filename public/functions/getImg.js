

function getImg (wordstring) {

    const GSR = require('google-search-results-nodejs')
    let client = new GSR.GoogleSearchResults("AIzaSyBtkePfFNrBA3LH3H139gDfByqE7Y_rTa0")
    
    var parameter = {
        engine: "google",
        ijn: "0",
        q: "apple",
        google_domain: "google.com",
        tbs: "itp:photos,isz:l",
        tbm: "isch",
        device: "desktop",
    };
    
    var callback = function(data) {
      console.log(data)
    }
    
    // Show result as JSON
    client.json(parameter, callback)
}