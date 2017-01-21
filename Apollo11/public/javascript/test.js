$(document).ready(function() {
	
	var subscriptionKey = "19cd939261b24688b8f482740f01c40c";
	
	var tags, category, caption, description;
	
	var imageURL = 'http://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/orange-icon.png';
	
	var imageSource = '{\"url\":\"' + imageURL + '\"}';
		
	
	$(function() {
       	
		var visualFeatures = "Categories";
      
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=" + visualFeatures + "&language=en",
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",subscriptionKey);
            },
            type: "POST",
            // Request body
            data: imageSource,
        })
        .done(function(data) {
			category = data['categories']['0'];
			console.log(category);
        })
        .fail(function() {
            console.log("error");
        });
    });
	
	
	$(function() {
      
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/describe",
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",subscriptionKey);
            },
            type: "POST",
            // Request body
            data: imageSource,
        })
        .done(function(data) {
			tags = data['description']['tags'];
			caption = data['description']['captions']['0'];
            console.log(tags);
			console.log(caption);
        })
        .fail(function() {
            console.log("error");
        });
    });
	
	$(function() {
      
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/tag",
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",subscriptionKey);
            },
            type: "POST",
            // Request body
            data: imageSource,
        })
        .done(function(data) {
			description = data["tags"];
            console.log(description);
        })
        .fail(function() {
            console.log("error");
        });
    });

	
	
	

	
    
    
    
    
});