var trueFalse = {};

//Paramètres d'affichage
trueFalse.enableMultiColumn = true;
trueFalse.enableOptionMedia = true;
trueFalse.maxMediaPreviewWidth = 300;

//Feedback par défaut pour type de question  *optionel*
trueFalse.correctAnswerFeedback = "Bravo! C'est la bonne réponse."
trueFalse.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne réponse."
trueFalse.notAnsweredFeedback = "Veuillez choisir l'une des deux options.";

trueFalse.createInteraction = function(interactionArray, questionId){
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
		
		answerDiv.innerHTML = "&nbsp;";
		
		interaction.component[i].componentParam.answerDiv = answerDiv;
		interaction.component[i].componentParam.radioBtn = radioBtn;
		interaction.component[i].componentParam.value = value;
		
		var selectOption = document.createElement("div");
				
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
trueFalse.setInteraction = function(interaction){
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
			$(this).addClass('ui-state-hover');
			
		}, function(){
			$(this).removeClass('ui-state-hover');			
		});
		
		//click
		$(interaction.component[i].componentParam.selectOption).click(function() {
				
			playQuizSoundSelect();
			this.childNodes[1].checked = true;
			
			$(this).removeClass('ui-state-hover').addClass('ui-state-active');
			
			for(var j=0; j < interaction.component.length; j++){
				if(interaction.component[j].componentParam.selectOption != this){			
					$(interaction.component[j].componentParam.selectOption).removeClass('ui-state-active').removeClass('ui-state-hover');
					interaction.component[j].componentParam.radioBtn.checked = false;
				}
			}
		});	
	}
};

//remplir un tableau d'interaction avec les options sélectionnées par l'utlisateur
trueFalse.fillUserAnswerArray = function(interaction){
	var userAnswerArray = {};
	for(var i =0; i < interaction.component.length; i++){
		userAnswerArray[i] = {};
		userAnswerArray[i].value = interaction.component[i].componentParam.radioBtn.checked;
		userAnswerArray[i].id = interaction.component[i].componentParam.id;
	}
	return userAnswerArray;
};

//Vérifier si la question a été répondu
trueFalse.checkQuestionAnswered = function(interaction, userAnswerArray){
	var answered = false;
	for(var i =0; i < getObjectLength(userAnswerArray) && !answered; i++){
		if(userAnswerArray[i].value == true){	
			answered = true;
		}
	}
	return answered;
};

//vérifier si bonne réponse
trueFalse.validateAnswer = function(interaction, userAnswer, answerArray){
	var valid = true;
	var slideScore = 0;

	if(getObjectLength(userAnswer) != answerArray.length){
		valid = false;
		slideScore = 0;
	}
	else{
		for(var i=0; i < getObjectLength(userAnswer); i++){
			for(var j=0; j < answerArray.length; j++){
				if(userAnswer[i].id == answerArray[j].id){
					var id = userAnswer[i].id;
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
trueFalse.disableQuestion = function(interaction){
	for(var i=0; i< interaction.component.length; i++){
		interaction.component[i].componentParam.radioBtn.disabled = true;
		
		$(interaction.component[i].componentParam.selectOption).off('click');
		$(interaction.component[i].componentParam.selectOption).off('hover');
	}
};

//Afficher la réponse
trueFalse.displayAnswer = function(interaction, answerArray){
	for(var i=0; i < interaction.component.length; i++){		
		$(interaction.component[i].componentParam.selectOption).removeClass('ui-state-active');
		if(answerArray[i].value){
			$(interaction.component[i].componentParam.answerDiv).addClass("ui-icon ui-icon-check");
		}
		else{
			$(interaction.component[i].componentParam.answerDiv).addClass("ui-icon ui-icon-closethick");
		}
	}
};

trueFalse.loadUserAnswer = function(interaction, suspendDataResume){
	for(var i=0; i < interaction.component.length; i++){
		interaction.component[i].componentParam.radioBtn.checked = suspendDataResume[i].value;
	}
};

trueFalse.studentResponseToString = function(userAnswer, element){

	if(userAnswer[0].value == true){
		answerString = "t";
	}
	else{
		userAnswer ="f";
	}
	return answerString;
}

trueFalse.responsePatternToString = function(answerArray, element){

	if(answerArray[0].value == true){
		answerString = "t";
	}
	else{
		answerString ="f";
	}
	return answerString;
}

trueFalse.returnType = function(){
	return"true-false";
}

trueFalse.returnRealType = function(){
	return"Vrai/Faux";
}