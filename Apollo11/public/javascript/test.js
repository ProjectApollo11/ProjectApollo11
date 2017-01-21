$(document).ready(function() {
	

	
	
	$(function() {
       	
		var visualFeatures = "Categories";
      
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=" + visualFeatures + "&language=en",
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","19cd939261b24688b8f482740f01c40c");
            },
            type: "POST",
            // Request body
            data: '{"url":"http://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/orange-icon.png"}',
        })
        .done(function(data) {
            console.log(data);
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
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","19cd939261b24688b8f482740f01c40c");
            },
            type: "POST",
            // Request body
            data: '{"url":"http://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/orange-icon.png"}',
        })
        .done(function(data) {
            console.log(data['description']['tags']);
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
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","19cd939261b24688b8f482740f01c40c");
            },
            type: "POST",
            // Request body
            data: '{"url":"http://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/orange-icon.png"}',
        })
        .done(function(data) {
			console.log(data);
            console.log(data["tags"])
        })
        .fail(function() {
            console.log("error");
        });
    });

	
	
	

	
    
    
    
    
});