var texteTrouDD = {};

//Paramètres d'affichage
texteTrouDD.enableMultiColumn = false;
texteTrouDD.enableOptionMedia = true;

//Feedback par défaut pour type de question  *optionel*
texteTrouDD.correctAnswerFeedback = "Bravo! C'est la bonne réponse."
texteTrouDD.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne réponse."
texteTrouDD.notAnsweredFeedback = "Vous n'avez pas répondu à la question.";

texteTrouDD.questionAnswered = false;

//fonction d'initiation pour question *optionel*
texteTrouDD.init = function(){}

//créer tableau délément "div" pour chaque option de la question
texteTrouDD.createInteraction = function(interactionArray, questionId){
	var interaction = new Array();
	interaction.component = new Array();
	interaction.interactionParam = new Array();
	interaction.interactionParam.questionId = questionId;
	
	interaction.component[0] = new Array();
	interaction.component[0].div = document.createElement("div");
	interaction.component[0].div.className = "divTexteTrouDrop";	
	
	interaction.component[0].componentParam = new Array();	

	for(var i=0; i< interactionArray.element.length; i++){
	
		interaction.component[0].componentParam[i] = new Array();
		interaction.component[0].componentParam[i].optionsDrop = new Array();			
		
		interaction.component[0].componentParam[i].type = interactionArray.element[i].type;
		
		if(interaction.component[0].componentParam[i].type == "bp"){ // on a un bout de phrase
			var bp = document.createElement("div");
			bp.className = "boutPhrase";
			bp.innerHTML = interactionArray.element[i].value + "     ";
			//bp.appendChild(document.createTextNode(interactionArray.element[i].value + "     "));
			interaction.component[0].div.appendChild(bp);
		}else { // on a un trou
			
			/*var dropDown = document.createElement("ul");
			dropDown.className = "menu";
			
			// créer l'option 0 de chaque Drop
			var optionSel = document.createElement('li');
			var optionValue = "-- sélectionner --";
			optionSel.innerHTML = optionValue;
			optionSel.id = "vide";
			
			dropDown.appendChild(optionSel);
			$(dropDown).menu({ 
				
			});
			var newOptions = new Array();
			//faire la loop pour créer les options, ne pas les ajouter tout de suite, seuelement créer un tableau d'options
			for(var j=0; j< interactionArray.element[i].trou.length; j++){	
				option = document.createElement('li');	
				optionValue = interactionArray.element[i].trou[j].value;
				option.innerHTML = optionValue;	
				
				option.id = interactionArray.element[i].trou[j].id;
				
				newOptions[j] = option;
			}
			
			//Faire le Shuffle sur ce tableau
			var j = newOptions.length;

			while (--j>-1) {
			  var k = Math.floor(Math.random() * (j + 1));
			  var temp = newOptions[j];
			  newOptions[j] = newOptions[k];
			  newOptions[k] = temp;
		  	}	
			//Ajouter au dropDown
			
			for(var j=0; j<newOptions.length;j++){
				dropDown.appendChild(newOptions[j]);
			}			
			*/
			
			var dropDown = document.createElement("select");	
			dropDown.className = "trouDrop";
			dropDown.selectedIndex = 0;
			interaction.component[0].div.appendChild(dropDown);
		
			// créer l'option 0 de chaque Drop
			var optionSel = document.createElement('option');
			var optionValue = "-- sélectionner --";
			optionSel.text = optionValue;
			optionSel.id = "vide";
			optionSel.selected = "selected";			
			
			try {
				  // for IE earlier than version 8
				  dropDown.add(optionSel,dropDown.options[null]);
				  }	catch (e) {
				  dropDown.add(optionSel,null);
				  }

			var newOptions = new Array();	
			
			//faire la loop pour créer les options, ne pas les ajouter tout de suite, seuelement créer un tableau d'options
			for(var j=0; j< interactionArray.element[i].trou.length; j++){	
				option = document.createElement('option');	
				optionValue = interactionArray.element[i].trou[j].value;
				option.text = optionValue;	
				
				option.id = interactionArray.element[i].trou[j].id;
				
				newOptions[j] = option;
			}
			
			//Faire le Shuffle sur ce tableau
			var j = newOptions.length;

			while (--j>-1) {
			  var k = Math.floor(Math.random() * (j + 1));
			  var temp = newOptions[j];
			  newOptions[j] = newOptions[k];
			  newOptions[k] = temp;
		  	}	
			//Ajouter au dropDown
			for(var j=0; j<newOptions.length;j++){
				try {
				  // for IE earlier than version 8
				  dropDown.add(newOptions[j],dropDown.options[null]);
				  }	catch (e) {
				  dropDown.add(newOptions[j],null);
				  }	
			}	
			
			interaction.component[0].div.appendChild(dropDown);	
			interaction.component[0].componentParam[i].dropDown = dropDown;		
			
			
			rep = document.createElement("div");
			rep.className = "texteTrouDDGA";
			interaction.component[0].div.appendChild(rep);				

			
		}		  
	}
	
	return interaction;
};

//Définir le comportement des options de la question lors de l'interaction avec l'utilisateur
//ex: hover, onclick
texteTrouDD.setInteraction = function(interaction){
		
};

//remplir un tableau d'interaction avec les options sélectionnées par l'utlisateur
texteTrouDD.fillUserAnswerArray = function(interaction){
	var userAnswerArray = {};
	var j=0;
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if(interaction.component[0].componentParam[i].type == "trou"){
			userAnswerArray[j] =  $(interaction.component[0].componentParam[i].dropDown).children(":selected").attr('id');		
			j++;

		}
	}
	return userAnswerArray;
	
};

//Vérifier si la question a été répondu
texteTrouDD.checkQuestionAnswered = function(interaction, userAnswer){	
	var checkQuestionAnswered = true;
	
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if(interaction.component[0].componentParam[i].type == "trou"){
			if( $(interaction.component[0].componentParam[i].dropDown).prop('selectedIndex')==0){
				checkQuestionAnswered = false;
				break;
			}		
		}
	}
	return checkQuestionAnswered;
};

//vérifier si bonne réponse
texteTrouDD.validateAnswer = function(interaction, userAnswer, answerArray){
	var valid = true;
	var slideScore = 0;	
	
	// parcourir chaque drop
	for(var i=0; i < getObjectLength(userAnswer); i++){
		if(userAnswer[i] == answerArray[i].value){
			slideScore += answerArray[i].weight;	
		}
		else{
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
texteTrouDD.disableQuestion = function(interaction){
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if(interaction.component[0].componentParam[i].type == "trou"){
			$(interaction.component[0].componentParam[i].dropDown).attr('disabled',true);		
		}
	}
};

//Afficher la réponse
texteTrouDD.displayAnswer = function(interaction, answerArray){
 	var compteurTrou=0; // pour le answer array
	// passer chaque élément (bout phrases + trous)
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		
		// si on trouve un trou (dropDown)
		if(interaction.component[0].componentParam[i].type == "trou"){				
		
			// trouver la réponse correspondant au ID du trou
			// si l'utilisateur a entré la bonne réponse

			if(answerArray[compteurTrou].value == $(interaction.component[0].componentParam[i].dropDown).find('option:selected').attr('id')){
				//afficher cette réponse
				$(interaction.component[0].componentParam[i].dropDown).next('.texteTrouDDGA').html('&nbsp;&nbsp;' + $($(interaction.component[0].componentParam[i].dropDown).find('option:selected')).html()).css('opacity',1);
			}
			
			else{ 	//mauvaise réponse il faut trouver la valeur de l'option ID de la bonne réponse
				$(interaction.component[0].componentParam[i].dropDown).find('option').each(function(index, element) {
					// on a trouvé l'id de la bonne réponse
					if($(this).attr('id') == answerArray[compteurTrou].value ){
						$(interaction.component[0].componentParam[i].dropDown).next('.texteTrouDDGA').html('&nbsp;&nbsp;' +  $(this).html()).removeClass('texteTrouDDGA').addClass('texteTrouDDWA');				
					}
                });
			}			
			compteurTrou++;
		}
	} 
};

texteTrouDD.loadUserAnswer = function(interaction, suspendDataResume){	
	var compteurTrou=0; // pour associer au bon indice du suspendDataResume
	
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if(interaction.component[0].componentParam[i].type == "trou"){							
			// trouver la réponse correspondant au ID du trou
			// trouver l'option qui correspond à l'ID de la réponse de l'utilisateur
			$(interaction.component[0].componentParam[i].dropDown).find('option').each(function(index, element) {
					// on a trouvé l'id de la bonne réponse
					if($(this).attr('id') == suspendDataResume[compteurTrou] ){
						$(this).attr('selected', 'selected');
					}
             });				
			compteurTrou++;
		}
	}
};

texteTrouDD.answerToString = function(answerArray, interactionArray){
	var answerString ="";
	for(var i =0; i <interactionArray.length; i++){
		answerString+= interactionArray[i].value + " : " + answerArray[i] + " -- ";
	}
	return answerString;
}

texteTrouDD.returnType = function(){
	return "fill-in";
}

texteTrouDD.returnRealType = function(){
	return "texteTrouDD";
}

texteTrouDD.studentResponseToString = function(userAnswer, element){
	return "";
};

texteTrouDD.responsePatternToString = function(answerArray, element){
	return "";
}