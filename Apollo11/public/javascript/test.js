$(document).ready(function() {
	
	
	//both of these work!!
	/**
	var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            var response = document.querySelector('#response');
            var img = new Image();
            var url = window.URL || window.webkitURL;
            img.src = url.createObjectURL(this.response);
            response.appendChild(img);
            }
        }
        xhr.open('POST', 'https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories&language=en');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "19cd939261b24688b8f482740f01c40c");
        xhr.responseType = 'blob';
        xhr.send('{"url": "http://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/orange-icon.png"}');
	**/
	
	
	
	
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
            console.log(data);
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
        })
        .fail(function() {
            console.log("error");
        });
    });

	
	
	

	
    
    
    
    
});