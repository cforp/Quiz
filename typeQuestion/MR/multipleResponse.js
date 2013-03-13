var multipleResponse = {};

//Paramètres d'affichage
multipleResponse.enableMultiColumn = true;
multipleResponse.enableOptionMedia = true;
multipleResponse.maxMediaPreviewWidth = 300;

//Feedback par défaut pour type de question  *optionel*
multipleResponse.correctAnswerFeedback = "Bravo! C'est la bonne réponse."
multipleResponse.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne réponse."
multipleResponse.notAnsweredFeedback = "Veuillez choisir l'une des options disponibles.";

multipleResponse.createInteraction = function(interactionArray, questionId){
	var interaction = new Array();
	interaction.component = new Array();
	interaction.interactionParam = new Array();
	interaction.interactionParam.questionId = questionId;
	interaction.interactionParam.nbColumn = interactionArray.setting.nbColumn;
	//parcourir le interation Array de la question
	for(var i=0; i< interactionArray.element.length; i++){
		interaction.component[i] = new Array();
		interaction.component[i].componentParam = new Array();
		interaction.component[i].div = document.createElement("div");
		
		interaction.component[i].componentParam.id = interactionArray.element[i].id;
		
		//$(interaction.component[i].div).css("position","relative");
		//$(interaction.component[i].div).css("float","left");
		
		$(interaction.component[i].div).css("margin-top","10px");
		$(interaction.component[i].div).css("margin-bottom","10px");
		
		var answerDiv = document.createElement("div");
		var chkBox = document.createElement("input");
		var value = document.createElement("div");
		
		$(value).css("display","inline");
		$(value).css("padding","5px");
		$(value).css("overflow","hidden");

		chkBox.type = "checkbox";
		chkBox.checked = false;
		
		$(chkBox).click(function(e) {
			$(this.parentNode).css("opacity",1.0);	
			if(rgb2hex(this.parentNode.style.backgroundColor) != "#00aaff" && this.parentNode.style.backgroundColor != "#00aaff"){
				$(this.parentNode).css("backgroundColor","#00aaff");
			}
			else{
				$(this.parentNode).css("backgroundColor","transparent");
			}
		});
		
		$(chkBox).hover(function(){
			playQuizSoundHover();
			if(!this.checked){
				$(this.parentNode).css("backgroundColor","#CCE6FF");
				$(this.parentNode).css("opacity",.7);
			}
		}, function(){
			if(!this.checked){
				$(this.parentNode).css("opacity",1.0);
				if(rgb2hex(this.parentNode.style.backgroundColor) != "#00aaff" && this.style.backgroundColor != "#00aaff"){
					$(this.parentNode).css("backgroundColor","transparent");
				}
			}
		});
		
		//$(chkBox).css("display","inline");
		
		value.innerHTML = interactionArray.element[i].value;

		$(answerDiv).css("position","relative");
		$(answerDiv).css("float","left");
		//$(answerDiv).css("margin-left","30px");	

		answerDiv.innerHTML = "&nbsp;";
		
		interaction.component[i].componentParam.answerDiv = answerDiv;
		interaction.component[i].componentParam.chkBox = chkBox;
		interaction.component[i].componentParam.value = value;
		
		interaction.component[i].componentParam.checked = false;
		
		var container = document.createElement("div");
		
		$(container).css("overflow","hidden");
		
		var selectOption = document.createElement("div");
		$(selectOption).css("display","inline");
		
		container.appendChild(answerDiv);
		container.appendChild(chkBox);
		selectOption.appendChild(value);
		container.appendChild(selectOption);
		
		interaction.component[i].componentParam.selectOption = selectOption;
		interaction.component[i].componentParam.container = container;
		
		interaction.component[i].div.appendChild(container);
		
		//media
		if(interactionArray.element[i].mediaArray != undefined && interactionArray.element[i].mediaArray.length >0){
			interaction.component[i].componentMedia = new Array();
			interaction.component[i].componentMedia[0] = new Array();
			//interaction.component[i].componentMedia[0] = new Array();
			
			var mediaContainer = document.createElement("div");
			interaction.component[i].componentMedia[0].media = interactionArray.element[i].mediaArray;
			interaction.component[i].componentMedia[0].container = mediaContainer;
			interaction.component[i].div.appendChild(mediaContainer);
		}		
	}
	return interaction;
};

//Définir le comportement des options de la question lors de l'interaction avec l'utilisateur
//ex: hover, onclick
multipleResponse.setInteraction = function(interaction){
	for(var i =0; i < interaction.component.length; i++){	
		
		if(interaction.interactionParam.nbColumn == 1){
			$(interaction.component[i].componentParam.selectOption).css("width","600px");
		}
		else{
			$(interaction.component[i].componentParam.selectOption).css("width","290px");
		}

		//hover
		$(interaction.component[i].componentParam.selectOption).hover(function(){

			playQuizSoundHover();
			if(rgb2hex(this.parentNode.style.backgroundColor) != "#00aaff" && this.parentNode.style.backgroundColor != "#00aaff"){
				$(this.parentNode).css("backgroundColor","#CCE6FF");
				$(this.parentNode).css("opacity",.7);
			}
		}, function(){
			$(this.parentNode).css("opacity",1.0);	
			if(rgb2hex(this.parentNode.style.backgroundColor) != "#00aaff" && this.parentNode.style.backgroundColor != "#00aaff"){
				$(this.parentNode).css("backgroundColor","transparent");
			}
		});

		//click​
		$(interaction.component[i].componentParam.selectOption).click(function(e) {
			$(this.parentNode).css("opacity",1.0);	
			if(!this.parentNode.childNodes[1].checked){
				playQuizSoundSelect();
				$(this.parentNode).css("backgroundColor","#00aaff");
				this.parentNode.childNodes[1].checked = true;
			}
			else
			{
				//playQuizSoundDeselect();
				$(this.parentNode).css("backgroundColor","transparent");
				this.parentNode.childNodes[1].checked = false;
			}
		});	
	}
};

//remplir un tableau d'interaction avec les options sélectionnées par l'utlisateur
multipleResponse.fillUserAnswerArray = function(interaction){
	var userAnswerArray = {};
	for(var i =0; i < interaction.component.length; i++){
		userAnswerArray[i] = {};
		userAnswerArray[i].value = interaction.component[i].componentParam.chkBox.checked;
		userAnswerArray[i].id = interaction.component[i].componentParam.id;
	}
	return userAnswerArray;
};

//Vérifier si la question a été répondu
multipleResponse.checkQuestionAnswered = function(interaction, userAnswerArray){
	var answered = false;
	for(var i =0; i < getObjectLength(userAnswerArray) && !answered; i++){
		if(userAnswerArray[i].value == true){
			answered = true;
		}
	}
	return answered;
};

//vérifier si bonne réponse
multipleResponse.validateAnswer = function(interaction, userAnswer, answerArray){
	var valid = true;
	var slideScore = 0;
	//var resume = {};
	
	if(getObjectLength(userAnswer) != answerArray.length){
		valid = false;
		slideScore = 0;
	}
	else{
	//var slideScore = questionSource[questionId].weight;
		for(var i=0; i < getObjectLength(userAnswer); i++){
			//resume[i] = {};
			for(var j=0; j < answerArray.length; j++){
				if(userAnswer[i].id == answerArray[j].id){
					if(userAnswer[i].value != answerArray[j].value){
						valid = false;
						slideScore = 0;
					}
					else{
						slideScore += answerArray[j].weight;
					}
				}
			}
		}
	}
	var result = new Array();
	result[0] = valid;
	result[1] = slideScore;
	
	return result;
};

//enleve l'interactivité de la question, les comportement mis dans setComportment
multipleResponse.disableQuestion = function(interaction){
	for(var i=0; i< interaction.component.length; i++){
		interaction.component[i].componentParam.chkBox.disabled = true;
		$(interaction.component[i].componentParam.selectOption).off('click');
		$(interaction.component[i].componentParam.selectOption).off('hover');
	}
};

//Afficher la réponse
multipleResponse.displayAnswer = function(interaction, answerArray){
	for(var i=0; i < interaction.component.length; i++){
		for(var j=0; j < answerArray.length; j++){
			if(interaction.component[i].componentParam.id == answerArray[j].id){
				$(interaction.component[i].componentParam.container).css("backgroundColor", "transparent");
				if(answerArray[j].value){
					$(interaction.component[i].componentParam.answerDiv).addClass("ui-icon ui-icon-check");
				}
				else{
					$(interaction.component[i].componentParam.answerDiv).addClass("ui-icon ui-icon-closethick");
				}
			}
		}
		
	}
};

multipleResponse.loadUserAnswer = function(interaction, suspendDataResume){
	for(var i=0; i< getObjectLength(suspendDataResume); i++){
		found = false;
		for(var j=0; j < interaction.component.length && !found; j++){
			if(suspendDataResume[i].id == interaction.component[j].componentParam.id){
				found = true;
				interaction.component[j].componentParam.chkBox.checked = suspendDataResume[i].value;
			}
		}
	}
};

multipleResponse.studentResponseToString = function(userAnswer, element){
	var answerString ="";
	for(var i=0; i < getObjectLength(userAnswer); i++){
		if(userAnswer[i].value){
			/*
			for(var j=0; j < element.length; j++){
				if(userAnswer[i].id == element[j].id){
					answerString = element[j].value;
				}
			}
			*/
			answerString = element[i].id;
		}
	}
	return answerString;
}

multipleResponse.responsePatternToString = function(answerArray, element){
	var answerString ="";
	for(var i=0; i < answerArray.length; i++){
		if(answerArray[i].value){			
			answerString = element[i].id;
		}
	}
	return answerString;
}

multipleResponse.returnType = function(){
	return"fill-in";
}

multipleResponse.returnRealType = function(){
	return"RéponseMultiple";
}