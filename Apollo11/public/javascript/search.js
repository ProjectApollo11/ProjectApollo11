$(document).ready(function() {
	
	var microsoftSubscriptionKey = "92168c2441d7493395b53389db8b7844";
	
	var originalWord = "football gome";
	var correctedWord;
	
	var url = "https://api.cognitive.microsoft.com/bing/v5.0/spellcheck/?text=" + originalWord + "&mode=spell&mkt=en-us";
	console.log(url);
	
	
	$(function() {
       
      
        $.ajax({
            url: url,
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",microsoftSubscriptionKey);
            },
            type: "GET",
            // Request body
            //data: "{body}",
        })
        .done(function(data) {
			correctedWord = data;
            console.log(correctedWord);
        })
        .fail(function() {
            console.log("error"); 
        });
    });
	
	/**
	$.get("http://words.bighugelabs.com/api/2/5595cc268716dd1d0221f56011c81aa9/" + originalWord + "/json", function(data, status) {
		
		console.log(data);
		console.log(status);
			
		
	});**/
	
	
    
    
});