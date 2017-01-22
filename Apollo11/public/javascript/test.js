$(document).ready(function() {
	
	
	
	
	
	
	$("#update").click(function(){
		
		
	
		var subscriptionKey = "19cd939261b24688b8f482740f01c40c";

		var tags, category, caption, description;

		var synonymsTags = [];

		var image0 = 'http://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/orange-icon.png';

		var image1 = 'http://www.clipartkid.com/images/2/clipartbest-com-aTyhwz-clipart.jpeg';	

		var image2 = 'http://beaverradionetwork.com/wp/wp-content/uploads/2016/03/Baseball.jpg';

		var image3 = 'https://assets.pcmag.com/media/images/396774-the-10-best-ultraportables.jpg?width=475&height=268';

		var image4 = 'https://www.genstockphoto.com/wp-content/uploads/2014/08/nancy-levan-coffee-mug-stock.jpg';

		var imageSource = '{\"url\":\"' + image3 + '\"}';

		if ($("#imageFile").val().includes("0")) {
			var imageSource = '{\"url\":\"' + image0 + '\"}';
		} else if ($("#imageFile").val().includes("1")) {
			var imageSource = '{\"url\":\"' + image1 + '\"}';
		} else if ($("#imageFile").val().includes("2")) {
			var imageSource = '{\"url\":\"' + image2 + '\"}';
		} else if ($("#imageFile").val().includes("3")) {
			var imageSource = '{\"url\":\"' + image3 + '\"}';
		} else if ($("#imageFile").val().includes("4")) {
			var imageSource = '{\"url\":\"' + image4 + '\"}';
		}




			function createSynonyms(word, i) {

				var api1 = "5595cc268716dd1d0221f56011c81aa9";
				var api2 = "6147dfb93a338f59e02afb9d6c5a7f85";

				$.ajax({
					url: "***http://words.bighugelabs.com/api/2/" + api2 + "/" + word + "/json",
					type: "GET",
					success: function(data, status) {
						//console.log(data);
						synonymsTags[i] = data;
						console.log(synonymsTags[i]);
					}
				});
				/**
				$.get("http://words.bighugelabs.com/api/2/5595cc268716dd1d0221f56011c81aa9/" + word + "/json", function(data, status){
					synonymsTags[i] = data;
					console.log(data);


				});

				**/


			}


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
					$("#item").val(caption['text']);
					var text;
					for (var i = 0; i < tags.length; i++) {
						console.log(createSynonyms(tags[i], i));
						text += tags[i] + ", ";
					}

					$("#description").val(text);


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
					description = data['tags'];
					console.log(description);
				})
				.fail(function() {
					console.log("error");
				});
			});





	

	});
	$("#submit").click(function(){
		
		if ($("#imageFile").val().includes("0")) {
			location.href='../views/main0.ejs';	
		} else if ($("#imageFile").val().includes("1")) {
			location.href='../views/main1.ejs';
		} else if ($("#imageFile").val().includes("2")) {
			location.href='../views/main2.ejs';
		} else if ($("#imageFile").val().includes("3")) {
			location.href='../views/main3.ejs';
		} else if ($("#imageFile").val().includes("4")) {
			location.href='../views/main4.ejs';
		}
		
	});
    
    
    
    
});