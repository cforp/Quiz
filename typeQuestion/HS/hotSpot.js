var hotspot = {};

hotspot.enableMultiColumn = false;
hotspot.enableOptionMedia = false;

hotspot.correctAnswerFeedback = "Bravo! Vous avez trouvé la bonne zone!";
hotspot.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne zone."
hotspot.notAnsweredFeedback = "Vous n'avez pas cliqué une zone.";

hotspot.createInteraction = function(interactionArray, questionId){

	var interaction = new Array();
	interaction.component = new Array();
	interaction.interactionParam = new Array();
	interaction.interactionParam.questionId = questionId;
	
	interaction.component[0] = new Array();
	interaction.component[0].componentParam = new Array();
	interaction.component[0].div = document.createElement("div");
	interaction.component[0].div.id = "hotSpotDiv"+questionId;
	
	var containerDiv = document.createElement("div");
	$(containerDiv).css("position","relative");
	
	//work around for IE7
	var dummy = document.createElement("div");
	dummy.innerHTML = "<map name =\"map"+questionId+"\" ></map>";
	var map = dummy.childNodes[0];
	//var map = document.createElement("map");
	//map.name = "map"+questionId;
	//$(map).attr("name","map"+questionId);
	$(map).css("outline","0");
	var img = document.createElement("img");
	//var status = document.createElement("div");
	//var status2 = document.createElement("div");
	//$(status).css("display","none");
	//$(status2).css("display","none");
	
	interaction.component[0].componentParam.containerDiv = containerDiv;
	interaction.component[0].componentParam.map = map;
	interaction.component[0].componentParam.img = img;
	//interaction.component[0].componentParam.status = status;
	//interaction.component[0].componentParam.status2 = status2;
	
	interaction.component[0].componentParam.media = interactionArray.setting.mediaArray[0];
	interaction.component[0].componentParam.currentMark = 0;
	interaction.component[0].componentParam.maxMark = interactionArray.setting.maxMark;
	interaction.component[0].componentParam.zoneArray = interactionArray.element;
	
	interaction.component[0].componentParam.markers = {};
	
	return interaction;
};

hotspot.setInteraction = function(interaction){$(interaction.component[0].componentParam.status).html("Vous pouvez marquer l'image un total de " + interaction.component[0].componentParam.maxMark + "fois.");
	//

	$(interaction.component[0].componentParam.img).attr("src",interaction.component[0].componentParam.media.location+"/"+interaction.component[0].componentParam.media.value);
	$(interaction.component[0].componentParam.img).attr("usemap","#"+$(interaction.component[0].componentParam.map).attr("name"));
	$(interaction.component[0].componentParam.img).toggleClass("mapImage");
	
	//todo: manage image size
	newWidth = interaction.component[0].componentParam.media.mediaSetting.width;
	if (newWidth > 600){
		newWidth = 600;
	}
	
	$(interaction.component[0].componentParam.img).css({"width":newWidth+"px", "height":interaction.component[0].componentParam.media.mediaSetting.height+"px"});
	
	$(interaction.component[0].componentParam.img).click(function(e) {
		//alert(JSON.stringify(interaction.component[0].componentParam.markers));
		playQuizSoundSelect();
		e.stopPropagation();
		e.preventDefault();
		if(interaction.component[0].componentParam.currentMark < interaction.component[0].componentParam.maxMark || 
			(interaction.component[0].componentParam.maxMark == 1 && interaction.component[0].componentParam.currentMark == 1)){
			
			if(interaction.component[0].componentParam.maxMark == 1 && interaction.component[0].componentParam.currentMark ==1){
				interaction.component[0].componentParam.currentMark--;
				//$(interaction.component[0].componentParam.status2).html("");
				
				for(marker in interaction.component[0].componentParam.markers){
					if(interaction.component[0].componentParam.markers[marker]!= null){
						$(interaction.component[0].componentParam.markers[marker].marker).remove();
						interaction.component[0].componentParam.markers[marker] = null;
					}
				}
			}
			/*
			var offset = $(interaction.component[0].componentParam.img).offset();

			var x = e.pageX-10; //10 = mark.width / 2
			var y = e.pageY-10; //10 = mark.height / 2
			*/
			
			//all the way to image
			var offset = $(this).parent().offset(); 
		    var x = e.pageX - offset.left-10;
		    var y = e.pageY - offset.top-10;
					
			//Arrondi à 2 décimales pour alleger suspendData
			//var xPercent = Math.round((x-offset.left) / $(interaction.component[0].componentParam.containerDiv).css("width") * 100 *100) /100;
			//var yPercent = Math.round((y-offset.top) / $(interaction.component[0].componentParam.containerDiv).css("height") * 100 * 100) /100;
			
		
			
			var img = $('<img>');
			img.toggleClass("marker");
			img.css('top', y);
			img.css('left', x);
			img.attr('src', 'typeQuestion/HS/image/mark.png');
			img.appendTo(interaction.component[0].componentParam.containerDiv);
			
			$(img).click({posX : x, posY: y},function (e) {
				e.stopPropagation();
				e.preventDefault();
				/*for(var i=0; i < getObjectLength(interaction.component[0].componentParam.markers); i++){
					if(interaction.component[0].componentParam.markers[i] != null && interaction.component[0].componentParam.markers[i]!= undefined)
					{
						if(interaction.component[0].componentParam.markers[i].x == e.data.posX && interaction.component[0].componentParam.markers[i].y == e.data.posY){
							alert(i);
							$(interaction.component[0].componentParam.markers[i].marker).remove();
							delete interaction.component[0].componentParam.markers[i];
						}
					}
				}*/
				for(marker in interaction.component[0].componentParam.markers){
					if(interaction.component[0].componentParam.markers[marker] != null && interaction.component[0].componentParam.markers[marker]!= undefined)
					{
						if(interaction.component[0].componentParam.markers[marker].x == e.data.posX && interaction.component[0].componentParam.markers[marker].y == e.data.posY){
							interaction.component[0].componentParam.markers[marker] = null;
							$(this).remove();
							interaction.component[0].componentParam.currentMark--;
						}
					}
				}
				
				//$(interaction.component[0].componentParam.status2).html("");
			});
			
			var newMarker = {};
			newMarker.x = x;
			newMarker.y = y;
			//newMarker.xPercent = xPercent;
			//newMarker.yPercent = yPercent;
			newMarker.areaName = "";
			newMarker.marker = img;

			var length = getObjectLength(interaction.component[0].componentParam.markers);
			interaction.component[0].componentParam.markers[length] = newMarker;
			
			//$.extend(interaction.component[0].componentParam.markers,newMarker);
			//alert(JSON.stringify(interaction.component[0].componentParam.markers));

			interaction.component[0].componentParam.currentMark++;

		}
	});
	
	for(var i=0; i<interaction.component[0].componentParam.zoneArray.length; i++){
		
		
		var area = document.createElement("area");
		
		$(area).attr("name",interaction.component[0].componentParam.zoneArray[i].name);
		$(area).attr("shape","poly");
		$(area).attr("coords",interaction.component[0].componentParam.zoneArray[i].coords);
		$(area).attr("href","#");
		$(area).css("cursor","pointer");

		$(area).click(function(e){
			e.stopPropagation();
			e.preventDefault();
			playQuizSoundSelect();
			
			$(this).blur();
			if(interaction.component[0].componentParam.currentMark < interaction.component[0].componentParam.maxMark 
				|| (interaction.component[0].componentParam.maxMark == 1 && interaction.component[0].componentParam.currentMark == 1)){
			
				if(interaction.component[0].componentParam.maxMark == 1 && interaction.component[0].componentParam.currentMark ==1){
					interaction.component[0].componentParam.currentMark--;
					//$(interaction.component[0].componentParam.status2).html("");
					
						for(marker in interaction.component[0].componentParam.markers){
						if(interaction.component[0].componentParam.markers[marker]!= null){
							$(interaction.component[0].componentParam.markers[marker].marker).remove();
							interaction.component[0].componentParam.markers[marker] = null;
						}
					}
				}
				
				
				//all the way back to image
				var offset = $(this).parent().parent().offset(); 
			    var x = e.pageX - offset.left-10;
			    var y = e.pageY - offset.top-10;
						
				//Arrondi à 2 décimales pour alleger suspendData
				//var xPercent = Math.round((x-offset.left) / $(interaction.component[0].componentParam.containerDiv).css("width") * 100 *100) /100;
				//var yPercent = Math.round((y-offset.top) / $(interaction.component[0].componentParam.containerDiv).css("height") * 100 * 100) /100;
				
				//alert(x + " " + y + " " + " ")
				
				var img = new $('<img>');
				img.toggleClass("marker");
				img.css('top', y);
				img.css('left', x);
				img.attr('src', 'typeQuestion/HS/image/mark.png');
				img.attr('name', $(this).attr("name"));
				img.appendTo(interaction.component[0].componentParam.containerDiv);
				
				$(img).click({posX : x, posY: y},function (e) {
					e.stopPropagation();
					e.preventDefault();
					
				for(marker in interaction.component[0].componentParam.markers){
					if(interaction.component[0].componentParam.markers[marker] != null && interaction.component[0].componentParam.markers[marker]!= undefined)
					{
						if(interaction.component[0].componentParam.markers[marker].x == e.data.posX && interaction.component[0].componentParam.markers[marker].y == e.data.posY){
							interaction.component[0].componentParam.markers[marker] = null;
							$(this).remove();
							interaction.component[0].componentParam.currentMark--;
						}
					}
				}
	
				});
				
				var newMarker = {};
				newMarker.x = x;
				newMarker.y = y;
				newMarker.areaName = $(this).attr("name");
				newMarker.marker = img;
				
				var length = getObjectLength(interaction.component[0].componentParam.markers);
				interaction.component[0].componentParam.markers[length] = newMarker;

				interaction.component[0].componentParam.currentMark++;

			}

		});
	
		$(area).appendTo($(interaction.component[0].componentParam.map));
	}
	$(interaction.component[0].componentParam.containerDiv).css("textAlign","center");
	$(interaction.component[0].componentParam.containerDiv).css("margin","0 auto");
	interaction.component[0].componentParam.containerDiv.appendChild(interaction.component[0].componentParam.img);
	interaction.component[0].componentParam.containerDiv.appendChild(interaction.component[0].componentParam.map);
	interaction.component[0].div.appendChild(interaction.component[0].componentParam.containerDiv);
	
};

hotspot.fillUserAnswerArray = function(interaction){
	var userAnswerArray = {};
	
	var j = 0;
	
	
	for(marker in interaction.component[0].componentParam.markers){
		if(interaction.component[0].componentParam.markers[marker]!= null && interaction.component[0].componentParam.markers[marker]!=undefined){
			
			userAnswerArray[j]={};
			userAnswerArray[j].x = interaction.component[0].componentParam.markers[marker].x;
			userAnswerArray[j].y = interaction.component[0].componentParam.markers[marker].y;
			userAnswerArray[j].aN = interaction.component[0].componentParam.markers[marker].areaName;
			j++;
			
		}
		
	}
	return userAnswerArray;
};

hotspot.checkQuestionAnswered = function(interaction, userAnswerArray){
	var answered = false;
	if(getObjectLength(userAnswerArray) == interaction.component[0].componentParam.maxMark){
		answered = true;
	}
	return answered;
};

hotspot.validateAnswer = function(interaction, userAnswerArray, answerArray){
	var valid = true;
	var found = false;
	var slideScore = 0;
	
	
	var areaNames = new Array();
	for(var i =0; i < answerArray.length; i++){
		areaNames[i] = new Array();
		areaNames[i].name = answerArray[i].name;
		areaNames[i].weight = answerArray[i].weight;
	}
	
	for(var i=0; i< areaNames.length; i++){
		found = false;
		for(var j=0; j < getObjectLength(userAnswerArray); j++){
			// si on trouve une bonne réponse
			if(userAnswerArray[j].aN == areaNames[i].name){				
				found = true;
				slideScore += areaNames[i].weight;			
			}
		}
		if(!found){
			valid = false;
		}
	}	
			
	var result = new Array();
	result[0] = valid;
	result[1] = slideScore;	
	
	return result;
};

hotspot.disableQuestion = function(interaction){
	interaction.component[0].componentParam.currentMark = interaction.component[0].componentParam.maxMark;
	$(interaction.component[0].componentParam.map).find("area").each(function(){
		$(this).off("click");
		$(this).css("cursor","default");
	});
	$(interaction.component[0].componentParam.map).css("cursor","default");
	$(interaction.component[0].componentParam.img).off("click");
	$(interaction.component[0].componentParam.img).css("cursor","default");
	for(markers in interaction.component[0].componentParam.markers){
		if(interaction.component[0].componentParam.markers[marker] != null){
			$(interaction.component[0].componentParam.markers[marker].marker).off("click");
			$(interaction.component[0].componentParam.markers[marker].marker).css("cursor","default");
		}
	}
	
};

hotspot.displayAnswer = function(interaction, answerArray){
	var areas = new Array();
	//alert("in display");
	for(var i=0; i < interaction.component[0].componentParam.zoneArray.length; i++){
		areas[i] = {};
		areas[i].key = interaction.component[0].componentParam.zoneArray[i].name;
		areas[i].fillColor = interaction.component[0].componentParam.zoneArray[i].color;
		areas[i].selected = true;
		areas[i].toolTip = interaction.component[0].componentParam.zoneArray[i].desc;
	}
	
	//alert("area lenght : " + areas.length);
	
	if(areas.length > 0){
		$(interaction.component[0].componentParam.img).mapster(
	    {
			fillOpacity: 0.4,
	   		fillColor: "d42e16",
	   		strokeColor: "000000",
	   		strokeOpacity: 0.8,
	   		strokeWidth: 2,
	   		stroke: true,
	        isSelectable: false,
			singleSelect: false,
	        mapKey: 'name',
	        listKey: 'name',
	        showToolTip: true,
	        toolTipClose: ["area-mouseout"],
		    areas: areas,
		    scaleMap: false
	    });
	}
};

hotspot.loadUserAnswer = function(interaction, suspendDataResume){

	/*
	userAnswerArray[j].xP = interaction.component[0].componentParam.markers[marker].xPercent;
	userAnswerArray[j].yP = interaction.component[0].componentParam.markers[marker].yPercent;
	userAnswerArray[j].aN = interaction.component[0].componentParam.markers[marker].areaName;
	*/
	
	for(marker in suspendDataResume){
		//var newX = $(interaction.component[0].componentParam.containerDiv).offset().left + suspendDataResume[marker].xP*$(interaction.component[0].componentParam.containerDiv).css("width")/100;
		//var newY = $(interaction.component[0].componentParam.containerDiv).offset().top + suspendDataResume[marker].yP*$(interaction.component[0].componentParam.containerDiv).css("height")/100;
		var img = $('<img>');
		img.toggleClass("marker");
		img.css('top', suspendDataResume[marker].y);
		img.css('left', suspendDataResume[marker].x);
		img.attr('src', 'typeQuestion/HS/image/mark.png');
		img.appendTo(interaction.component[0].componentParam.containerDiv);
		$(img).css("cursor","default");
	}
	
	//var newX = $(interaction.component[0].componentParam.img).offset().left + x2*interaction.component[0].componentParam.media.mediaSetting.width/100;
	/*
	interaction.zoneDiv = zoneDiv;
	interaction.map = map;
	interaction.img = img;
	interaction.imageMap = questionSource[questionId].mapImage;
	interaction.currentMark = 0;
	interaction.maxMark = questionSource[questionId].maxMark;
	interaction.questionId = questionId;
	interaction.mapsArray = questionSource[questionId].interactionArray;
	interaction.interactionDivArray = targetDiv;
	interaction.status = status;
	interaction.status2 = status2;
	interaction.answer = answer;
	interaction.markers = userAnswerArray;
	*/
	/*
	for(var i =0; i<getObjectLength(userAnswerArray); i++){
		var offset = $(interaction.zoneDiv).offset();
		var x = userAnswerArray[i].x;
		var y = userAnswerArray[i].y;
		var img = new $('<img>');
		//img.id = "map"+interaction.questionId+"marker"+interaction.markerPos.length;
		img.css('position','absolute');
		img.css('top', y);
		img.css('left', x);
		img.css('zIndex',9999);
		img.attr('src', 'typeQuestion/HS/image/mark.png');
		img.attr('name', $(this).attr("name"));
		img.css("cursor","pointer");
		img.appendTo(interaction.zoneDiv);
	}
	*/
};

hotspot.studentResponseToString = function(userAnswer, element){
	var studentResponse = {};
	var responseString= "";
	
	for(var i=0; i < element.length; i++){
		if(studentResponse[element[i].name] == undefined || studentResponse[element[i].name] == null){
			studentResponse[element[i].name] = {};
			studentResponse[element[i].name].count = 0;
			for(var j=i; j < getObjectLength(userAnswer); j++){
				if(userAnswer[j].aN == element[i].name){
					studentResponse[element[i].name].count++;
				}
			}
		}
	}
	for(x in studentResponse){
		responseString += "Marqueur dans '" + x + "' : '" + studentResponse[x].count + "'  ";
	}
	
	//return JSON.stringify(response).toString().replace(/"/gi, "'");
	return responseString;
};

hotspot.responsePatternToString = function(answerArray, element){
	var response = {};
	var responseString= "";
	
	for(var i=0; i < answerArray.length; i++){
		if(response[answerArray[i].name] == undefined || response[answerArray[i].name] == null){
			response[answerArray[i].name] = {};
			response[answerArray[i].name].count = 0;
			
			for(var j=i; j < answerArray.length; j++){
				if(answerArray[i].name == answerArray[j].name){
					response[answerArray[i].name].count++;
				}
			}
		}
	}
	
	for(x in response){
		responseString += "Marqueur dans '" + x + "' : '" + response[x].count + "'  ";
	}
	
	//return JSON.stringify(response).toString().replace(/"/gi, "'");
	return responseString;
	
	/*
	for(var i=0; i < answerArray.length; i++){
		if(response[i] != null){
			response[i] = {};
			response[i].name = answerArray[i].name
			response[i].count = 0;
			for(var j=0; j < answerArray.length; j++){
				if(answerArray[j].name == answerArray[i].name){
					response[i].count++;
				}
			}
		}
	}

	return JSON.stringify(response).toString().replace(/"/gi, "'");
	*/
};

hotspot.returnType = function(){
	return"fill-in";
};

hotspot.returnRealType = function(){
	return"hotSpot";
};
