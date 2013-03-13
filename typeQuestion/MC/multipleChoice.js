var multipleChoice = {};

//Paramètres d'affichage
multipleChoice.enableMultiColumn = true;
multipleChoice.enableOptionMedia = true;
multipleChoice.maxMediaPreviewWidth = 300;

//Feedback par défaut pour type de question  *optionel*
multipleChoice.correctAnswerFeedback = "Bravo! C'est la bonne réponse."
multipleChoice.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne réponse."
multipleChoice.notAnsweredFeedback = "Veuillez choisir l'une des options disponibles.";

multipleChoice.createInteraction = function(interactionArray, questionId){
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
		var radioBtn = document.createElement("input");
		var value = document.createElement("div");
		
		$(value).css("display","inline");

		radioBtn.type = "radio";
		radioBtn.checked = false;
		
		value.innerHTML = interactionArray.element[i].value;

		$(answerDiv).css("position","relative");
		$(answerDiv).css("float","left");
		//$(answerDiv).css("margin-left","30px");	

		answerDiv.innerHTML = "&nbsp;";
		
		interaction.component[i].componentParam.answerDiv = answerDiv;
		interaction.component[i].componentParam.radioBtn = radioBtn;
		interaction.component[i].componentParam.value = value;
		
		var selectOption = document.createElement("div");
		//$(selectOption).css("float","left");
		$(selectOption).css("padding","5px");
		$(selectOption).css("overflow","hidden");
		
		selectOption.appendChild(answerDiv);
		selectOption.appendChild(radioBtn);
		selectOption.appendChild(value);
		
		interaction.component[i].componentParam.selectOption = selectOption;
		
		interaction.component[i].div.appendChild(selectOption);
		
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
multipleChoice.setInteraction = function(interaction){
	for(var i =0; i < interaction.component.length; i++){
		
		if(interaction.interactionParam.nbColumn ==1){
			$(interaction.component[i].componentParam.selectOption).css("width","600px");
		}
		else{
			$(interaction.component[i].componentParam.selectOption).css("width","290px");
		}
		
		//hover
		$(interaction.component[i].componentParam.selectOption).hover(function(){

			playQuizSoundHover();
			/*if(rgb2hex(this.style.backgroundColor) != "#00aaff" && this.style.backgroundColor != "#00aaff"){
				$(this).css("backgroundColor","#CCE6FF");
				$(this).css("opacity",.7);
			}*/
			$(this).addClass('ui-state-hover');
		}, function(){
			/*$(this).css("opacity",1.0);	
			if(rgb2hex(this.style.backgroundColor) != "#00aaff" && this.style.backgroundColor != "#00aaff"){
				$(this).css("backgroundColor","transparent");
			}*/
			$(this).removeClass('ui-state-hover');
		});
		
		//click
		$(interaction.component[i].componentParam.selectOption).click(function() {
			//$(this).css("opacity",1.0);	
			//$(this).css("backgroundColor","#00aaff");
			playQuizSoundSelect();
			this.childNodes[1].checked = true;
			$(this).removeClass('ui-state-hover').addClass('ui-state-active');
			for(var j=0; j < interaction.component.length; j++){
				if(interaction.component[j].componentParam.selectOption != this){
					//$(interaction.component[j].componentParam.selectOption).css("backgroundColor","transparent");
					$(interaction.component[j].componentParam.selectOption).removeClass('ui-state-active').removeClass('ui-state-hover');
					interaction.component[j].componentParam.radioBtn.checked = false;
				}
			}		
		});	
	}
};

//remplir un tableau d'interaction avec les options sélectionnées par l'utlisateur
multipleChoice.fillUserAnswerArray = function(interaction){
	var userAnswerArray = {};
	for(var i =0; i < interaction.component.length; i++){
		userAnswerArray[i] = {};
		userAnswerArray[i].value = interaction.component[i].componentParam.radioBtn.checked;
		userAnswerArray[i].id = interaction.component[i].componentParam.id;
	}
	return userAnswerArray;
};


multipleChoice.getFeedback = function(answerArray, userAnswer){
	
	for(var i=0; i < getObjectLength(userAnswer); i++){
		for(var j=0; j < answerArray.length; j++){
			if(userAnswer[i].id == answerArray[j].id){					
				if(userAnswer[i].value){ // si l'utilisateur a coché cette réponse retourner le feedback correspondant
					return answerArray[j].customFeedback;		
				}				
								
			}
		}
	}
		
}

//Vérifier si la question a été répondu
multipleChoice.checkQuestionAnswered = function(interaction, userAnswerArray){
	var answered = false;
	for(var i =0; i < getObjectLength(userAnswerArray) && !answered; i++){
		if(userAnswerArray[i].value == true){
			answered = true;
		}
	}
	return answered;
};

//vérifier si bonne réponse
multipleChoice.validateAnswer = function(interaction, userAnswer, answerArray){
	var valid = true;
	var slideScore = 0;
	//var resume = {};
	
	if(getObjectLength(userAnswer) != answerArray.length){
		valid = false;
		slideScore = 0;
	}
	else{
	
		for(var i=0; i < getObjectLength(userAnswer); i++){
	
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
multipleChoice.disableQuestion = function(interaction){
	for(var i=0; i< interaction.component.length; i++){
		interaction.component[i].componentParam.radioBtn.disabled = true;
		
		$(interaction.component[i].componentParam.selectOption).off('click');
		$(interaction.component[i].componentParam.selectOption).off('hover');
	}
};

//Afficher la réponse
multipleChoice.displayAnswer = function(interaction, answerArray){
	for(var i=0; i < interaction.component.length; i++){
		for(var j=0; j < answerArray.length; j++){
			if(interaction.component[i].componentParam.id == answerArray[j].id){
				$(interaction.component[i].componentParam.selectOption).removeClass('ui-state-active');
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

multipleChoice.loadUserAnswer = function(interaction, suspendDataResume){
	for(var i=0; i< getObjectLength(suspendDataResume); i++){
		found = false;
		for(var j=0; j < interaction.component.length && !found; j++){
			if(suspendDataResume[i].id == interaction.component[j].componentParam.id){
				found = true;
				interaction.component[j].componentParam.radioBtn.checked = suspendDataResume[i].value;
			}
		}
	}
};

multipleChoice.studentResponseToString = function(userAnswer, element){
	var answerString ="";
	for(var i=0; i < getObjectLength(userAnswer); i++){
		if(userAnswer[i].value){
			for(var j=0; j < element.length; j++){
				if(userAnswer[i].id == element[j].id){
					answerString = element[j].value;
				}
			}
		}
	}
	return answerString;
}

multipleChoice.responsePatternToString = function(answerArray, element){
	var answerString ="";
	for(var i=0; i < answerArray.length; i++){
		if(answerArray[i].value){
			for(var j=0; j < element.length; j++){
				if(answerArray[i].id == element[j].id){
					answerString = element[j].value;
				}
			}
		}
	}
	return answerString;
}

multipleChoice.returnType = function(){
	return"fill-in";
}

multipleChoice.returnRealType = function(){
	return"ChoixMultiple";
}