var assMatch = {};

//Paramètres d'affichage
assMatch.enableMultiColumn = false;
assMatch.enableOptionMedia = true;

//Feedback par défaut pour type de question  *optionel*
assMatch.correctAnswerFeedback = "Bravo! C'est la bonne réponse."
assMatch.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne réponse."
assMatch.notAnsweredFeedback = "Vous n'avez pas répondu à la question.";

assMatch.questionAnswered = false;

//fonction d'initiation pour question *optionel*
assMatch.init = function(){}

//créer tableau délément "div" pour chaque option de la question
assMatch.createInteraction = function(interactionArray, questionId, answerArray){
	
	var interaction = new Array();
	interaction.component = new Array();
	interaction.component[0] = new Array();
	interaction.component[0].componentParam = new Array()
	
	interaction.interactionParam = new Array();
	
	interaction.interactionParam.questionId = questionId;
	interaction.interactionParam.typeAssociation = interactionArray.setting.typeAssociation;	
	
	interaction.component[0].div = document.createElement('div');
	interaction.component[0].div.className = "divAssMatch";	
	
	// si nous avons le type de question où il faut associer une des descriptions à un média
	if(interaction.interactionParam.typeAssociation == "description"){
		
		// Créer les div pour les descriptions				
		for(var i=0;i<interactionArray.element[0].description.length;i++){
			var divDescription = document.createElement('div');			
			divDescription.className = "divDescription";
			
			var par = document.createElement('p');			
			par.innerHTML = interactionArray.element[0].description[i].value;			
			
			divDescription.appendChild(par);			
			
			// ajouter une référence au tableau d'interaction
			interaction.component[0].componentParam[i] = new Array();
			interaction.component[0].componentParam[i].id = interactionArray.element[0].description[i].id;			
			interaction.component[0].componentParam[i].description = divDescription;		
		}
		// Créer le div pour le média
		//media
		var divMediaContainer = document.createElement("div");
		divMediaContainer.className = "assMatchMedia";
		
		if(interactionArray.element[0].mediaArray != undefined && interactionArray.element[0].mediaArray.length >0){
			interaction.component[0].componentMedia = new Array();
			interaction.component[0].componentMedia[0] = new Array();			
			
			var mediaContainer = document.createElement("div");			
			interaction.component[0].componentMedia[0].media = interactionArray.element[0].mediaArray;
			interaction.component[0].componentMedia[0].container = mediaContainer;
			divMediaContainer.appendChild(mediaContainer);			
		}		
		
		// Placer les description et le media au milieu
		interaction.component[0].div.appendChild(interaction.component[0].componentParam[0].description);
		interaction.component[0].div.appendChild(interaction.component[0].componentParam[1].description);
		interaction.component[0].div.appendChild(interaction.component[0].componentParam[2].description);
		interaction.component[0].div.appendChild(interaction.component[0].componentParam[3].description);
		interaction.component[0].div.appendChild(divMediaContainer);
		interaction.component[0].div.appendChild(interaction.component[0].componentParam[4].description);
		interaction.component[0].div.appendChild(interaction.component[0].componentParam[5].description);
		interaction.component[0].div.appendChild(interaction.component[0].componentParam[6].description);
		interaction.component[0].div.appendChild(interaction.component[0].componentParam[7].description);			
		
				
	}else{	
		//Placer les médias et la description au milieu	
		
	}	
	return interaction;
};

//Définir le comportement des options de la question lors de l'interaction avec l'utilisateur
//ex: hover, onclick
assMatch.setInteraction = function(interaction){
	for(var i=0;i<interaction.component[0].componentParam.length;i++){	
		
		if(interaction.interactionParam.typeAssociation =="description"){ 
			
			// il faut faire la gestion des descriptions comme boutons			
			$(interaction.component[0].componentParam[i].description).click(function(){
				// vérifier si l'utilisateur a choisi la bonne réponse
				$(this).addClass("AssMatchClick");
			});
			
			// gérer les hover des descriptions
			$(interaction.component[0].componentParam[i].description).hover(function(){
				$(this).addClass("AssMatchOver");
			},function(){
				$(this).removeClass("AssMatchOver");
			});
							
		}else{
			 // il faut mettre les médias comme bouton
		
		}
		
		$(interaction.component[0].componentParam[i].dropDown).hover (function(){
			playQuizSoundHover();
		});	
	}
};

//remplir un tableau d'interaction avec les options sélectionnées par l'utlisateur
assMatch.fillUserAnswerArray = function(interaction){
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
assMatch.checkQuestionAnswered = function(interaction, userAnswer){	
	var checkQuestionAnswered = true;
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if( $(interaction.component[0].componentParam[i].dropDown).prop('selectedIndex')==0){
			return false;			
		}		
	}
	return checkQuestionAnswered;
};

//vérifier si bonne réponse
assMatch.validateAnswer = function(interaction, userAnswer, answerArray){
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
assMatch.disableQuestion = function(interaction){
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		$(interaction.component[0].componentParam[i].dropDown).attr('disabled',true);		
	}
};

//Afficher la réponse
assMatch.displayAnswer = function(interaction, answerArray){
	
	for(var i=0;i<interaction.component[0].componentParam.length;i++){		

		// parcourir chaque dropDown
		$(interaction.component[0].componentParam[i].dropDown).find(':selected').each(function(index, element) {
			// vérifier si l'utilisateur a mit la bonne réponse
            if($(this).attr('id').substr(2) == parseInt(answerArray[i].id)){ // si oui
				// trouver le div pour afficher la bonne réponse
				$(this).parents('.assMatch').next('.sequenceListeGA').html('&nbsp;&nbsp;' + $(interaction.component[0].componentParam[i].dropDown).find('#SL'+i).html()).css('opacity',1);
			}
			else{ // mauvaise réponse
				for(var j=0;j<answerArray.length;j++){
					// trouver la bonne réponse pour ce drop dans le answerArray					
				  if(i == answerArray[j].id)	{
					  $(this).parents('.assMatch').next('.sequenceListeGA').html('&nbsp;&nbsp;' + $(interaction.component[0].componentParam[i].dropDown).find('#SL'+i).html()).removeClass('sequenceListeGA').addClass('sequenceListeWA');

				  }
				}
			}
        });
	}
};

assMatch.loadUserAnswer = function(interaction, suspendDataResume){
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

assMatch.answerToString = function(answerArray, interactionArray){
	var answerString ="";
	for(var i =0; i <interactionArray.length; i++){
		answerString+= interactionArray[i].value + " : " + answerArray[i] + " -- ";
	}
	return answerString;
}

assMatch.returnType = function(){
	return "assMatch";
}