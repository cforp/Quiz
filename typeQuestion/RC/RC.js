var RC = {};

//Paramètres d'affichage
RC.enableMultiColumn = false;
RC.enableOptionMedia = true;

//Feedback par défaut pour type de question  *optionel*
RC.correctAnswerFeedback = "Bravo! C'est la bonne réponse."
RC.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne réponse.\n\n la bonne réponse est : \n\n"
RC.notAnsweredFeedback = "Vous n'avez pas répondu à la question.";
RC.ContinueAnsweredFeedback = "Poursuivre";

RC.questionAnswered = false;

//fonction d'initiation pour question *optionel*
RC.init = function(){}

//créer tableau délément "div" pour chaque option de la question
RC.createInteraction = function(interactionArray, questionId){
	$.alerts.okButton =  RC.ContinueAnsweredFeedback;
	var interaction = new Array();
	interaction.component = new Array();
	interaction.interactionParam = new Array();
	interaction.interactionParam.questionId = questionId;
	interaction.interactionParam.validate = interactionArray.validate;
	
	interaction.component[0] = new Array();
	interaction.component[0].div = document.createElement("div");
	interaction.component[0].div.className = "divRC";	
	
	interaction.component[0].componentParam = new Array();	
	var compteurTrou = 0; 
	for(var i=0; i< interactionArray.element.length; i++){
	
		interaction.component[0].componentParam[i] = new Array();	
		interaction.component[0].componentParam[i].type = interactionArray.element[i].type;
		interaction.component[0].componentParam[i].value = interactionArray.element[i].value;
		
		if(interaction.component[0].componentParam[i].type == "bp"){ // on a un bout de phrase
			var bp = document.createElement("div");
			bp.className = "boutPhrase";
			bp.innerHTML = interactionArray.element[i].value + "     ";
			//bp.appendChild(document.createTextNode(interactionArray.element[i].value + "     "));
			interaction.component[0].div.appendChild(bp);		
			
		}else { // on a un trou
			
			var formRC = document.createElement('form');	
			formRC.className = "formRC" + compteurTrou;	
			
			
			var inputRC = document.createElement('input');
			inputRC.type = 'text';
			inputRC.className = "inputRC" + compteurTrou;
			inputRC.size = 10;
			inputRC.value = "";
			
			formRC.appendChild(inputRC);
			// vérifier si on veut des boutons pour valider les réponses 'on the fly'
			if(interaction.interactionParam.validate){
				var buttonRC = document.createElement('input');
				buttonRC.type = 'button';
				buttonRC.value = 'valider';
				buttonRC.id = 'bouton' + i;			
			
				formRC.appendChild(buttonRC);
			}
			

			interaction.component[0].div.appendChild(formRC);			
			
			interaction.component[0].componentParam[i].formRC = formRC;					
			
			rep = document.createElement("div");
			rep.className = "RCWA";
			interaction.component[0].div.appendChild(rep);		
			compteurTrou++;		
			
		}		  
	}
	return interaction;
};

//Définir le comportement des options de la question lors de l'interaction avec l'utilisateur
//ex: hover, onclick
RC.setInteraction = function(interaction){

	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		
		if(	interaction.component[0].componentParam[i].type == "trou"){	
			// si on a les boutons pour valider 'on the fly'	
			if(interaction.interactionParam.validate){
				$(interaction.component[0].componentParam[i].formRC).find(':button').click(function(){	
					playQuizSoundSelect();
					bonneRep = interaction.component[0].componentParam[$(this).attr('id').substr(6)].value;	
					if($(this).prev(':text').val() == ""){		
						// l'utilisateur n'a pas répondu
						jAlert(RC.notAnsweredFeedback, "Bonne réponse");						
					}else if($(this).prev(':text').val() == bonneRep){ // on a une bonne réponse					
						// on la met en vert et on la met inaccessible
						$(this).prev(':text').attr('readonly',true).css('color','#006600');				
											
						jAlert(RC.correctAnswerFeedback, "Réponse non valide");				
						// on enlève le bouton valider
						$(this).remove();	
					}else{	// mauvaise réponse
						$(this).prev(':text').attr('readonly',true).css('color','#e4353a');
						// on affiche la bonne réponse
						//$($(interaction.component[0].componentParam[i].formRC).next('.RCWA')).html(answerArray[compteurTrou].value);
						$($(this).parents('form').next()).html(bonneRep);
						//console.log("on cherche RCWA" + $($(this).parents('form').next()).html());
											
						jAlert(RC.incorrectAnswerFeeback + bonneRep, "Mauvaise réponse");
						// on enlève le bouton valider
						$(this).remove();				
					}
				});
			}
		}
		
	}
		
};

//remplir un tableau d'interaction avec les options sélectionnées par l'utlisateur
RC.fillUserAnswerArray = function(interaction){
	var userAnswerArray = {};
	var j=0;
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if(interaction.component[0].componentParam[i].type == "trou"){
			userAnswerArray[j] =  $(interaction.component[0].componentParam[i].formRC).find(':text').val();		
			j++;

		}
	
	}
	
	return userAnswerArray;
	
};

//Vérifier si la question a été répondu
RC.checkQuestionAnswered = function(interaction, userAnswer){	
	var checkQuestionAnswered = true;
	
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if(interaction.component[0].componentParam[i].type == "trou"){
			if( $(interaction.component[0].componentParam[i].formRC).find(':text').val() == ""){
				return false;
			}		
		}
	}
	return checkQuestionAnswered;
};

//vérifier si bonne réponse
RC.validateAnswer = function(interaction, userAnswer, answerArray){
	var valid = true;
	var slideScore = 0;	
	
	// parcourir chaque drop
	for(var i=0; i < getObjectLength(userAnswer); i++){
		if(userAnswer[i] == answerArray[i].value){
			slideScore += answerArray[i].weight;	
			//console.log("bonne réponse");
		}
		else{
			//console.log("mauvaise reéponse");
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
RC.disableQuestion = function(interaction){
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if(interaction.component[0].componentParam[i].type == "trou"){
			$(interaction.component[0].componentParam[i].formRC).find(':text').attr('readonly',true);		
			$(interaction.component[0].componentParam[i].formRC).find(':button').hide();		
		}
	}
};

//Afficher la réponse
RC.displayAnswer = function(interaction, answerArray){
 	var compteurTrou=0; // pour le answer array
	// passer chaque élément (bout phrases + trous)
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		
		// si on trouve un trou ()
		if(interaction.component[0].componentParam[i].type == "trou"){				
			var rep = $(interaction.component[0].componentParam[i].formRC).find(':text');
			// si l'utilisateur a entré la bonne réponse
			
			if(answerArray[compteurTrou].value == $(rep).val()){
				//afficher cette réponse en vert
				$(rep).css('color','#006600');	
			}
			
			else{ 	//mauvaise réponse afficher en rouge la mauvaise réponse
					//et afficher la bonne réponse 
				$(rep).css('color','#e4353a');				
				$($(interaction.component[0].componentParam[i].formRC).next('.RCWA')).html(answerArray[compteurTrou].value);
			}			
			compteurTrou++;
		}
	} 
};

RC.loadUserAnswer = function(interaction, suspendDataResume){	
	var compteurTrou=0; // pour associer au bon indice du suspendDataResume

	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if(interaction.component[0].componentParam[i].type == "trou"){							
			// trouver la réponse de l'utilisateur et l'afficher 				
			$(interaction.component[0].componentParam[i].formRC).find(':text').val(suspendDataResume[compteurTrou]);			
			compteurTrou++;
		}
	}
};

RC.answerToString = function(answerArray, interactionArray){
	/*var answerString ="";
	for(var i =0; i <interactionArray.length; i++){
		answerString+= interactionArray[i].value + " : " + answerArray[i] + " -- ";
	}*/
	return answerString;
}

RC.returnType = function(){
	return "fill-in";
}

RC.returnRealType = function(){
	return "RC";
}

RC.studentResponseToString = function(userAnswer, element){
	return "";
};

RC.responsePatternToString = function(answerArray, element){
	return "";
}