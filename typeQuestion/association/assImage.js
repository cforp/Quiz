var assImage = {};

//Paramètres d'affichage
assImage.enableMultiColumn = false;
assImage.enableOptionMedia = true;

//Feedback par défaut pour type de question  *optionel*
assImage.correctAnswerFeedback = "Bravo! C'est la bonne réponse."
assImage.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne réponse."
assImage.notAnsweredFeedback = "Vous n'avez pas répondu à la question.";

assImage.questionAnswered = false;

//fonction d'initiation pour question *optionel*
assImage.init = function(){}

//créer tableau délément "div" pour chaque option de la question
assImage.createInteraction = function(interactionArray, questionId){
	var interaction = new Array();
	interaction.component = new Array();
	interaction.component[0] = new Array();
	interaction.component[0].componentParam = new Array()
	
	interaction.interactionParam = new Array();
	interaction.interactionParam.questionId = questionId;
	
	
	interaction.component[0].div = document.createElement("div");
	interaction.component[0].div.className = "divSequenceListe";
	
	//parcourir le interation Array de la question on crée tous les drop downs
	for(var i=0; i< interactionArray.element.length; i++){
	
		interaction.component[0].componentParam[i] = new Array();
		
		var divUneSequenceList = document.createElement("div");
		divUneSequenceList.className = "divUneSequenceList";
		
		var dropDown = document.createElement("select");	
		dropDown.className = "assImage";
		dropDown.selectedIndex = 0;
		
	//	divUneSequenceList.appendChild(dropDown);
		
		// créer l'option 0 de chaque Drop
		var option = document.createElement('option');
		var optionValue = "-- sélectionner --";
		option.text = optionValue;
		option.id = "vide";
		option.selected = "selected";
		
		try {
			  // for IE earlier than version 8
			  dropDown.add(option,dropDown.options[null]);
			  }	catch (e) {
			  dropDown.add(option,null);
			  }
		
	
		
		// on créé les options pour chaque drop down et on les ajoute à interaction	div et componentParam
		for(var j=0; j< interactionArray.element.length; j++){		
			option = document.createElement('option');	
			optionValue = interactionArray.element[j].value;				
			
			option.text = optionValue;
			option.id = "SL" + interactionArray.element[j].id;

			try {
			  // for IE earlier than version 8
			  dropDown.add(option,dropDown.options[null]);
			  }	catch (e) {
			  dropDown.add(option,null);
			  }
		}
		divUneSequenceList.appendChild(dropDown);		
		
		interaction.component[0].componentParam[i].dropDown = dropDown;				
		
		rep = document.createElement("div");
		rep.className = "sequenceListeGA";
		
		divUneSequenceList.appendChild(rep);		
		interaction.component[0].div.appendChild(divUneSequenceList);
	}
	return interaction;
};

//Définir le comportement des options de la question lors de l'interaction avec l'utilisateur
//ex: hover, onclick
assImage.setInteraction = function(interaction){
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		$(interaction.component[0].componentParam[i].dropDown).hover (function(){
			playQuizSoundHover();
		});	
	}
};

//remplir un tableau d'interaction avec les options sélectionnées par l'utlisateur
assImage.fillUserAnswerArray = function(interaction){
	var userAnswerArray = {};
	
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		userAnswerArray[i] = {};
		
		if( $(interaction.component[0].componentParam[i].dropDown).prop('selectedIndex')!=0){
			userAnswerArray[i].value = $(interaction.component[0].componentParam[i].dropDown).prop('selectedIndex')-1;		
			userAnswerArray[i].id = $(interaction.component[0].componentParam[i].dropDown).children(':selected').attr('id').substring(2);			
		}
	}
		
	return userAnswerArray;
	
};

//Vérifier si la question a été répondu
assImage.checkQuestionAnswered = function(interaction, userAnswer){	
	var checkQuestionAnswered = true;
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if( $(interaction.component[0].componentParam[i].dropDown).prop('selectedIndex')==0){
			return false;			
		}		
	}
	return checkQuestionAnswered;
};

//vérifier si bonne réponse
assImage.validateAnswer = function(interaction, userAnswer, answerArray){
	var valid = true;
	var slideScore = 0;
	for(var i=0; i < getObjectLength(userAnswer); i++){
		if(userAnswer[i].id == answerArray[i].id){
	      	slideScore += answerArray[i].weight;			  
		}else{
			valid = false;
			slideScore = 0;	
		}
	}	
	
	var result = new Array();
	result[0] = valid;
	result[1] = slideScore;
	return result;
	
};

//enleve l'interactivité de la question, les comportement mis dans setComportment
assImage.disableQuestion = function(interaction){
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		$(interaction.component[0].componentParam[i].dropDown).attr('disabled',true);		
	}
};

//Afficher la réponse
assImage.displayAnswer = function(interaction, answerArray){
	
	for(var i=0;i<interaction.component[0].componentParam.length;i++){		

		// parcourir chaque dropDown
		$(interaction.component[0].componentParam[i].dropDown).find(':selected').each(function(index, element) {
			// vérifier si l'utilisateur a mit la bonne réponse
            if($(this).attr('id').substr(2) == parseInt(answerArray[i].id)){ // si oui
				// trouver le div pour afficher la bonne réponse
				$(this).parents('.assImage').next('.sequenceListeGA').html('&nbsp;&nbsp;' + $(interaction.component[0].componentParam[i].dropDown).find('#SL'+i).html()).css('opacity',1);
			}
			else{ // mauvaise réponse
				for(var j=0;j<answerArray.length;j++){
					// trouver la bonne réponse pour ce drop dans le answerArray					
				  if(i == answerArray[j].id)	{
					  $(this).parents('.assImage').next('.sequenceListeGA').html('&nbsp;&nbsp;' + $(interaction.component[0].componentParam[i].dropDown).find('#SL'+i).html()).removeClass('sequenceListeGA').addClass('sequenceListeWA');

				  }
				}
			}
        });
	}
};

assImage.loadUserAnswer = function(interaction, suspendDataResume){
	for(var i=0; i < getObjectLength(suspendDataResume); i++){
		foundId = false;
		// parcourir chaque dropdown
		// parcourir chaque option du dropdown i
		$(interaction.component[0].componentParam[i].dropDown).find('option').each(function(index){				
			// si on a pas trouvé encore le bon id de la réponse de l'utilisateur
			if(!foundId){
				// si on n'est pas sur l'option "sélectionner"
			  if($(this).attr('id') != 'vide'){
				  // trouver l'option qu'il faut sélectionner
				  if(suspendDataResume[i].id == $(this).attr('id').substr(2)){		
					  foundId = true;
						$(this).attr('selected','selected');
				  }
				  
			  }	
			  
			}
		});
	}
};

assImage.answerToString = function(answerArray, interactionArray){
	var answerString ="";
	for(var i =0; i <interactionArray.length; i++){
		answerString+= interactionArray[i].value + " : " + answerArray[i] + " -- ";
	}
	return answerString;
}

assImage.returnType = function(){
	return "assImage";
}