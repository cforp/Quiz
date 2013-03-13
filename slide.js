function Slide(input, slideId, slideSuspendData){
	this.input = input;
	
	this.mixUpQuestionOption();
	
	this.slideId = slideId;
	this.slideSuspendData = slideSuspendData;
	
	this.questionSlide = input.questionSlide;
	this.maxAttempt = input.maxAttempt;
	this.weight = input.weight;
	
	
	this.slideDiv = document.createElement("div");
	$(this.slideDiv).css("display","none");
	
	this.interaction = new Array();
	this.userAnswer = new Array();
	this.mediaManagement = new Array();
	
	this.slideScore = 0;;
	
	this.completed = false;
	
	this.availableTime;
	
	if(this.slideSuspendData == null){
		this.canValidate = this.questionSlide;
		if(!this.questionSlide){
			this.completed = true;
		}
		else{
			this.completed = false;
		}
		this.currentAttempt = 0;
		this.passed = false;
	}
	else{
		this.completed = true;
		this.canValidate = false;
		this.passed = this.slideSuspendData.p; //passed
		this.slideScore = this.slideSuspendData.s; //score
	}
	
	this.maxMediaPreviewWidth = 300;
	this.maxMediaPreviewHeight = 300;
	
	this.formatSlide();
};

Slide.prototype.mixUpQuestionOption = function(){
 if( this.input.questionType!= "trueFalse" && this.input.questionType!= "hotSpot" && this.input.questionType != "texteTrouDD" && this.input.questionType != "texteTrouDrag"&& this.input.questionType != "crossword" && this.input.questionType !="RC"){
	  if(this.input.interactionArray.element != undefined){
		  var i = this.input.interactionArray.element.length;
		  while (--i) {
			  var j = Math.floor(Math.random() * (i + 1))
				var temp = this.input.interactionArray.element[i];
				this.input.interactionArray.element[i] = this.input.interactionArray.element[j];
				this.input.interactionArray.element[j] = temp;
			 }
		  }
	  }
  
  else if(this.input.questionType == "texteTrouDrag"){
  	var i = this.input.answerArray.length;
	while (--i) {
    	var j = Math.floor(Math.random() * (i + 1))
        var temp = this.input.answerArray[i];
        this.input.answerArray[i] = this.input.answerArray[j];
        this.input.answerArray[j] = temp;
     }
  }
};

Slide.prototype.formatSlide = function(){
	//parse the formatArray of the question
	for(var i=0; i<this.input.formatArray.length; i++){
		
		var blocDiv = document.createElement("div");
		$(blocDiv).addClass("standardBloc");
		
		//if special css class (like banner), this is optional in the formatArray.
		if(this.input.formatArray[i].css != undefined){
			$(blocDiv).addClass(this.input.formatArray[i].css);
		}
		
		//standard html bloc, no special parsing
		if(this.input.formatArray[i].type === "normal"){
			blocDiv.innerHTML += this.input.formatArray[i].value;
			$(blocDiv).addClass("standardHTMLBloc");
		}
		//media or other, need special code from utils.js
		else if(this.input.formatArray[i].type == "media"){
			if(this.input.formatArray[i].mediaArray != undefined){
				blocDiv = (this.formatMedia(this.input.formatArray[i].mediaArray, blocDiv));
				var clearBothDiv = document.createElement("div");
				$(clearBothDiv).css("clear", "both");
				blocDiv.appendChild(clearBothDiv);
			}
		}
		// ajouter les classes pour le banner du haut pour pouvoir l'Ã©tirer au besoin
		else if(this.input.formatArray[i].type == "banner"){
			var space = document.createTextNode("&nbsp;");
			
			var bannerHaut = document.createElement('div');			
			bannerHaut.className = "bannerHaut";
			
			var bannerMilieu = document.createElement('div');
			bannerMilieu.className = "bannerMilieu";
			
			var bannerText = document.createElement('div');
			bannerText.className = "bannerText";
			bannerText.innerHTML = this.input.formatArray[i].value;
			
			bannerMilieu.appendChild(bannerText);
						
			var bannerBas = document.createElement('div');
			bannerBas.className = "bannerBas";			
			
			var divBanner = document.createElement('div');
			divBanner.className = "divBanner";
			divBanner.appendChild(bannerHaut);
			divBanner.appendChild(bannerMilieu);
			divBanner.appendChild(bannerBas);
			
			
			blocDiv.appendChild(divBanner);
		}								
		//user interaction part of the question
		else if(this.input.formatArray[i].type == "interaction"){
			// vérifier si nous avons une question de textes à trous pour utiliser le tableau des réponses au lieu du interaction
			// à cause du Shuffle
			if(this.input.questionType != "texteTrouDrag" && this.input.questionType != "texteTrouDD" && this.input.questionType != "assMatch"){
				this.interaction = window[this.input.questionType].createInteraction(this.input.interactionArray, this.slideId);
			}else{
				this.interaction = window[this.input.questionType].createInteraction(this.input.interactionArray, this.slideId, this.input.answerArray);

			}			
			/*
			this.interaction = window[this.input.questionType].createInteraction(this.input.interactionArray, this.slideId, this.input.answerArray);
			//setInteractions...
*/
			window[this.input.questionType].setInteraction(this.interaction);
			if(this.interaction.component!= undefined && this.interaction.component.length > 0){
				blocDiv.appendChild(this.formatInteraction());
			}
		}
		this.slideDiv.appendChild(blocDiv);
	}
};

Slide.prototype.formatInteraction = function(){
	var interactionDiv = document.createElement("div");
	interactionDiv.id = "interactionDiv"+this.slideId;
	$(interactionDiv).addClass("interactionDiv");
	
	var nbColumn = 1;
	if(window[this.input.questionType].enableMultiColumn && this.input.interactionArray.setting.nbColumn != undefined){
		nbColumn = this.input.interactionArray.setting.nbColumn;
	}
	
	var columnDivArray = new Array();
	
	for(var i = 0; i < nbColumn; i++){
		var columnDiv = document.createElement("div");
		$(columnDiv).addClass("questionColumn");
		if(nbColumn >1){
			$(columnDiv).css("float","left"); //mettre dans css
		}
		if(nbColumn ==2){
			$(columnDiv).css("width","295");
			$(interactionDiv).css("marginLeft","35px");
		}
		columnDivArray[i] = columnDiv;
	}

	var columnCount = 0;
	
	for(var i=0; i < this.interaction.component.length; i++){
		
		currentColumn = columnCount % nbColumn;
		columnCount++;
		if(currentColumn === nbColumn){
			currentColumn = 0;
		}
		
		columnDivArray[currentColumn].appendChild(this.interaction.component[i].div);

		if(window[this.input.questionType].enableOptionMedia && this.interaction.component[i].componentMedia !=undefined){
				for(var j = 0; j < this.interaction.component[i].componentMedia.length; j++){
					this.interaction.component[i].componentMedia[j].container = this.formatMedia(this.interaction.component[i].componentMedia[j].media, this.interaction.component[i].componentMedia[j].container );
				}
		}
			var clearBothDiv = document.createElement("div");
			$(clearBothDiv).css("clear","both");
			columnDivArray[currentColumn].appendChild(clearBothDiv);
	}
	
	for(var i = 0; i<columnDivArray.length; i++){
		interactionDiv.appendChild(columnDivArray[i]);
	}
	
	var clearBothDiv = document.createElement("div");
	$(clearBothDiv).css("clear","both");
	interactionDiv.appendChild(clearBothDiv);
	return interactionDiv;
};

Slide.prototype.formatMedia = function(mediaArray, mediaContainer){
	$(mediaContainer).addClass("mediaBloc");
	//$(mediaContainer).css("width","auto");
	var list = document.createElement("div");
	$(list).css("textAlign","center");
	$(list).css("margin","auto");
	$(list).css("display","inline-block");
	
	for(var i=0; i< mediaArray.length; i++){
		var newMedia = mediaArray[i];
		newMedia.id = "q"+this.slideId+"_media"+this.mediaManagement.length+"_"+mediaArray[i].type;
		
		if(this.input.questionType != "content"){
			if(newMedia.type == "image" || newMedia.type =="video"){
				if(newMedia.mediaSetting.width >= newMedia.mediaSetting.height){
					
					if(window[this.input.questionType].maxMediaPreviewWidth != undefined && newMedia.mediaSetting.width > window[this.input.questionType].maxMediaPreviewWidth){						
						
						newMedia.mediaSetting.width = window[this.input.questionType].maxMediaPreviewWidth;
						newMedia.mediaSetting.height = newMedia.mediaSetting.width * newMedia.mediaSetting.heightRatio;
					}
					else{
						
						if(newMedia.mediaSetting.width > this.maxMediaPreviewWidth){
							newMedia.mediaSetting.width = this.maxMediaPreviewWidth;
							newMedia.mediaSetting.height = newMedia.mediaSetting.width * newMedia.mediaSetting.heightRatio;
						}
					}
				}
				else{
					
					if(window[this.input.questionType].maxMediaPreviewHeight != undefined && newMedia.mediaSetting.height > window[this.input.questionType].maxMediaPreviewHeight){
						newMedia.mediaSetting.height = window[this.input.questionType].maxMediaPreviewHeight;
						newMedia.mediaSetting.width = newMedia.mediaSetting.width * newMedia.mediaSetting.widthRatio;
					}
					else{
						if(newMedia.mediaSetting.height > this.maxMediaPreviewHeight){
							newMedia.mediaSetting.height = this.maxMediaPreviewHeight;
							newMedia.mediaSetting.width = newMedia.mediaSetting.height * newMedia.mediaSetting.widthRatio;
						}
					}
				}
			}
		}
		this.mediaManagement.push(newMedia);
			
		var html = "";
		switch(newMedia.type){
			case "image":
				var id = newMedia.id;
				var value = newMedia.value;
				var location = newMedia.location;
				var width = newMedia.mediaSetting.width;
				var height = newMedia.mediaSetting.height;
				var fancy = newMedia.mediaSetting.fancy;
				var imagePreview = newMedia.mediaSetting.imagePreview;
				
				
				if(fancy){
					html += "<a rel=\"fancybox\" href=\""+location+"/"+value+"\">";
					
					if(imagePreview != undefined && imagePreview != null){						
						var imagePreviewLocation = newMedia.mediaSetting.imagePreviewLocation;						
						html+="<img  id=\"" + id +"\" src=\""+imagePreviewLocation +"/"+imagePreview+"\" "+ "style=\"height:"+height+"px; width:"+width+"px;\" />";		
					}else{						
						html+="<img  id=\"" + id +"\" src=\""+location+"/"+value+"\" "+ "style=\"height:"+height+"px; width:"+width+"px;\" />";		
					}
					
					html+="</a>";
				}
				else{
					html+="<img  id=\"" + id +"\" src=\""+location+"/"+value+"\" "+ "style=\"height:"+height+"px; width:"+width+"px;\" />";
				}
				break;
			
			case "video" :
				var id = newMedia.id;				
				var fancy = newMedia.mediaSetting.fancy;								
				if(fancy){
					var imagePreview = newMedia.mediaSetting.imagePreview;					
					var browserIE = $.browser.msie;
					
					html += "<div style=\"display:none\"><div id =\"fancy_" + id + "\" > <div id=\""+id+"\"> Chargement en cours...</div></div></div>";
					html += "<a id=\"link"+ id +"\" style=\"position:relative;\" href=\"#fancy_"+id+"\" class=\"video\">";
					
					if(imagePreview!=undefined && imagePreview!=null){
						var imagePreviewLocation = newMedia.mediaSetting.imagePreviewLocation;
						if(imagePreviewLocation == undefined || imagePreviewLocation == null) {
							html+="<img width='100px' height='100px' src='"+ imagePreview +"' />";	
						}else{
							html+="<img width='100px' height='100px' src='"+ imagePreviewLocation + "/" + imagePreview +"' />";
						}
						
							
					}else{
						html+="<img width='100px' height='100px' src='image/videoImagePreviewDef.jpg' />";
					}
					
					if(browserIE){
						html+="<div style=\"top:-100px; \" class=\"videoImagePreview\"></div>";
					}
					else{
						html+="<div style=\"top:-85px; \" class=\"videoImagePreview\"></div>";
					}
						
					//html+="play movie";
					//html+="<img width='100px' height='100px' src='image/Koala.jpg' /><div class=\"videoImagePreview\"></div>";
					html+="</a>";
					
				}
				else{
					html += "<div id=\""+id+"\"> Chargement en cours...</div>";
				}
				
				/*html += "<div style=\"display:none\"><div id =\"fancy_" + id + "\" > <div id=\""+id+"\"> Chargement en cours...</div></div></div>";
				if(fancy){
					html += "<a href=\"#fancy_"+id+"\" class=\"video\">";
				}
				html+="play movie";
				if(fancy){
					html+="</a>";
				}*/
			 	
			break;
			
			case "audio" :
				var id = newMedia.id;
			 	html += "<div  id =\"" + id + "\" >Chargement en cours...</div>";
			break;
		}
		var mediaElem = document.createElement("div");
		//$(mediaElem).toggleClass("mediaElem");
		//$(mediaElem).css("float","left");
		mediaElem.innerHTML = html;
		
		var listItem = document.createElement("div");
		//$(listItem).css("listStyle","none");
		$(listItem).css("margin","auto");
		$(listItem).css("textAlign","center");
		$(listItem).css("padding","5");
		$(listItem).css("float","left");
		listItem.appendChild(mediaElem)
		list.appendChild(listItem);
		
	}
	mediaContainer.appendChild(list);
	//var clearBothDiv = document.createElement("div");
	//clearBothDiv.style.clear ="both";
	//mediaContainer.appendChild(clearBothDiv);
	return mediaContainer;
};

Slide.prototype.checkUserAnswer = function(){
	var result = new Array();
	result.feedback = "";
	result.success;
	result.slideScore;	
	

	this.userAnswer = window[this.input.questionType].fillUserAnswerArray(this.interaction);
	var questionAnswered = window[this.input.questionType].checkQuestionAnswered(this.interaction, this.userAnswer);
	//si pas répondu a la question
	if(!questionAnswered){
		//trouver feedback, avec fallback
		result.feedback = this.getFeedback("notAnsweredFeedback");
		result.slideScore = 0;
	}
	else{//validate answer
		var resultArray = window[this.input.questionType].validateAnswer(this.interaction, this.userAnswer, this.input.answerArray);
		result.success = resultArray[0];
		
		this.slideSuspendData = {};
		this.slideSuspendData.p = resultArray[0];
		this.slideSuspendData.s = resultArray[1].toFixed(2);
		this.slideSuspendData.resume = this.userAnswer;
		
		if(this.input.partialPoints){
			result.slideScore = resultArray[1].toFixed(2);
			this.slideSuspendData.s = resultArray[1].toFixed(2);
		}
		else{
			if(!result.success){
				result.slideScore = 0;
				this.slideSuspendData.s = 0;
			}
			else{
				result.slideScore = this.input.weight;
				this.slideSuspendData.s = this.input.weight;
			}
		}

		if(!result.success){//mauvaise réponse
			this.currentAttempt++;
			//this.slideSuspendData.currentAttempt++;
			if(this.currentAttempt >= this.maxAttempt){
				this.canValidate = false;
			}
			if(!this.canValidate){
				//desactivé question
				this.slideScore = result.slideScore;
				window[this.input.questionType].disableQuestion(this.interaction);
			}
			result.feedback = this.getFeedback("incorrectAnswerFeedback", this.userAnswer);
			this.passed = false;			
			
		}
		else{//bonne réponse
			this.canValidate = false;
			//this.slideSuspendData.completed = true;
			this.slideScore = result.slideScore;
			window[this.input.questionType].disableQuestion(this.interaction);
			result.feedback = this.getFeedback("correctAnswerFeedback", this.userAnswer);
			this.passed = true;
		}
		this.completed = true;
	}
	return result;//returns success, feedback and userScore for this question
};

Slide.prototype.displayAnswer = function(){
	if(this.input.questionSlide){
		window[this.input.questionType].displayAnswer(this.interaction,this.input.answerArray);
	}
};

Slide.prototype.getFeedback = function(feedbackType, userAnswer){
	var feedback="";
	
	if(feedbackType == "notAnsweredFeedback"){
		if(this.input.feedbackType == undefined){
			if(window[this.input.questionType][feedbackType] == undefined){
				feedback = quiz.staticElement.feedbackType;
			}
			else{
				feedback = window[this.input.questionType][feedbackType];
			}
		}
		else{
			feedback = this.input[feedbackType];
		}
	}
	else{
		if(window[this.input.questionType].getFeedback == undefined || this.input.customFeedback == undefined || !this.input.customFeedback){
			if(this.input[feedbackType] == undefined){
				if(window[this.input.questionType][feedbackType] == undefined){
					feedback = quizSource[feedbackType];
				}
				else{
					feedback = window[this.input.questionType][feedbackType];
				}
			}
			else{
				feedback = this.input[feedbackType];
			}
		}
		else{
			//custom feedback
			feedback = window[this.input.questionType].getFeedback(this.input.answerArray, userAnswer);
		}
	}
	
	return feedback;
};

Slide.prototype.getInteractionsResponsePattern = function(){
	//alert("ResponsePattern: "+window[this.input.questionType].responsePatternToString(this.input.answerArray, this.input.interactionArray.element));
	return window[this.input.questionType].responsePatternToString(this.input.answerArray, this.input.interactionArray.element);
}

Slide.prototype.getInteractionsStudentResponse = function(){
	//alert("StudentResponse: "+window[this.input.questionType].studentResponseToString(this.userAnswer, this.input.interactionArray.element));
	return window[this.input.questionType].studentResponseToString(this.userAnswer, this.input.interactionArray.element);
}

Slide.prototype.loadMedia = function(){
	
	for(var j=0; j< this.mediaManagement.length; j++){
		
		if(this.mediaManagement[j].type =="video"){
			config = jQuery.extend(true,{},jwconfigVideo);
			if((this.mediaManagement[j].value).indexOf('http')){
				config['file'] =  "video/" + this.mediaManagement[j].value;
			}else {
				config['file'] =  this.mediaManagement[j].value;								
			}			
			config['modes'][0]['config']['height'] = this.mediaManagement[j].mediaSetting.height;
		    config['modes'][1]['config']['height'] = this.mediaManagement[j].mediaSetting.height;
			config['modes'][0]['config']['width'] = this.mediaManagement[j].mediaSetting.width;
			config['modes'][1]['config']['width'] = this.mediaManagement[j].mediaSetting.width;
			//config['image'] = 'images.jpg';
            jwplayer(this.mediaManagement[j].id).setup(config);
        }
        
        else if(this.mediaManagement[j].type =="audio"){
			config = jQuery.extend(true,{},jwconfigAudio);
			config['file'] = "audio/"+this.mediaManagement[j].value;
            jwplayer(this.mediaManagement[j].id).setup(config);
        }
	}	
};

Slide.prototype.stopAllSlidePlayer = function(){
	for(var i =0; i < this.mediaManagement.length; i++){		
		if(this.mediaManagement[i].type =="audio" || this.mediaManagement[i].type =="video"){					
			if(!this.mediaManagement[i].mediaSetting.fancy){				
				jwplayer(this.mediaManagement[i].id).stop();
			}			
		}			
	}
};