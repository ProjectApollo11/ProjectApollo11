$(document).ready(function() {
	
	var microsoftSubscriptionKey = "92168c2441d7493395b53389db8b7844";
	
	var originalWord = "football gome";
	var correctedWord = [];
	
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
			console.log(data);
			correctedWord = originalWord.split(" ");
			
			for (var i = 0; i < data['flaggedTokens'].length; i++) {
				var replaceWord = data['flaggedTokens'][i]['token'];
				correctedWord[correctedWord.indexOf(replaceWord)] = (data['flaggedTokens'][i]['suggestions']['0']['suggestion']);
				
			}
			console.log(correctedWord);
			
			//for each word in the search query, see if it equals any of the tags for all posts. Record which tags point to the lost item, and then order them in most to least order.
			var object;
			for (var i = 0; i < correctedWord.length; i++) {
				for (var j = 0; j < /*all objects*/; j++) {
					for (var k = 0; k < /*all tags*/; k++) {
						if (correctedWord[i] == "objects[tags]") {
							object = "";
						}
					}
				}
				
			}


			
			
        })
        .fail(function() {
            console.log("error"); 
        });
    });

	
    
    
});