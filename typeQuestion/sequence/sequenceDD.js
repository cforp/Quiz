var sequenceDD = {};

//Paramètres d'affichage
sequenceDD.enableMultiColumn = false;
sequenceDD.enableOptionMedia = true;

//Feedback par défaut pour type de question  *optionel*
sequenceDD.correctAnswerFeedback = "Bravo! C'est la bonne réponse."
sequenceDD.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne réponse."
sequenceDD.notAnsweredFeedback = "Vous n'avez pas répondu à la question.";

//fonction d'initiation pour question *optionel*
sequenceDD.init = function(interaction){
	$(interaction.component[0].div).css("height", $(interaction.component[0].div).innerHeight());
	refreshLineHeight(interaction);
}

//créer tableau délément "div" pour chaque option de la question
sequenceDD.createInteraction = function(interactionArray, questionId){
	var interaction = new Array();	
	interaction.component = new Array();	
	interaction.mediaId = 0;

	interaction.component[0] = new Array();
	interaction.component[0].componentParam = new Array();
	
	var colListNumber = document.createElement('div');
	colListNumber.className = 'colListNumber';
		
	interaction.sortable = document.createElement("ol");
	interaction.sortable.className = "sequenceDD";
	

	//parcourir le interaction Array de la question et de la réponse
	for(var i=0; i< interactionArray.element.length; i++){	
		interaction.component[0].componentParam[i] = new Array();
		interaction.component[0].questionAnswered = false;
		
		var value = document.createElement("div");
		value.innerHTML = interactionArray.element[i].value;
			
		value.className = "listItem";			
		
		var listItem = document.createElement("li");

		listItem.id = interactionArray.element[i].id;
		listItem.className = "sortableLI";		
		
		listItem.appendChild(value);		
	
		var divListNumber = document.createElement('div');
		divListNumber.className = 'divListNumber';
				
		var listNumber = document.createElement("div");		
		listNumber.className = "listNumber";
		listNumber.appendChild(document.createTextNode(i+1));
		
		divListNumber.appendChild(listNumber);
		
		colListNumber.appendChild(divListNumber);		
		
		interaction.sortable.appendChild(listItem);		
		
		interaction.component[0].componentParam[i].listItem = listItem;
		interaction.component[0].componentParam[i].id = interactionArray.element[i].id;				
	} 
	interaction.component[0].div = document.createElement('div');
	interaction.component[0].div.appendChild(colListNumber);

	// initialisation du sortable
	$(interaction.sortable).sortable({
		tolerance: "pointer",
		placeholder:"sortLine",		
		stop: function(){
			refreshLineHeight(interaction);	
		}
	});// ferme sortable

	interaction.component[0].div.appendChild(interaction.sortable);
	//refresh hauteur des lignes
	refreshLineHeight(interaction)
	return interaction;
};


function refreshLineHeight(interaction){

		var j=0;
		$(interaction.component[0].div).find('.divListNumber').each(function(){
			var hauteurLigne = $($(interaction.component[0].div).find('.sortableLI').get(j)).innerHeight();
			if(hauteurLigne!=0){
				$(this).css('height', hauteurLigne);
			}
			j++
		});

}
//Définir le comportement des options de la question lors de l'interaction avec l'utilisateur
//ex: hover, onclick
sequenceDD.setInteraction = function(interaction){
	$(interaction.sortable).find('.listItem').hover(function(e){	
		playQuizSoundHover();	
		$(this).addClass('ui-state-hover');
	}, function(){
		$(this).removeClass('ui-state-hover');		
	});

	$(interaction.sortable).find('.listItem').click(function(e){	
		playQuizSoundSelect();
	});

	$(interaction.sortable).bind("sortstart",function(e,ui){		
		interaction.component[0].questionAnswered = true;
	});
};

//remplir un tableau d'interaction avec les options sélectionnées par l'utlisateur
sequenceDD.fillUserAnswerArray = function(interaction){
	var userAnswerArray = {};
	var i=0;
	$(interaction.sortable).find('>li').each(function(index, element) {
		userAnswerArray[i] = $(this).attr('id');
		i++;
	});
	
	return userAnswerArray;
	
};

//Vérifier si la question a été répondu
sequenceDD.checkQuestionAnswered = function(interaction, userAnswer){	
	return(interaction.component[0].questionAnswered);
};

//vérifier si bonne réponse
sequenceDD.validateAnswer = function(interaction, userAnswer, answerArray){
	var valid = true;
	var slideScore = 0;
	
	for(var i=0; i < getObjectLength(userAnswer); i++){
		if(parseInt(userAnswer[i]) != parseInt(answerArray[i].value)){
			valid = false;
			slideScore = 0;
		}
		else{
			slideScore += answerArray[i].weight;
			
		}
	}
	var result = new Array();
	result[0] = valid;
	result[1] = slideScore;

	return result;
};

//enleve l'interactivité de la question, les comportement mis dans setComportment
sequenceDD.disableQuestion = function(interaction){
	for(var i=0; i< interaction.component[0].componentParam.length; i++){
		$($(interaction.sortable).find('.sortableLI > .listItem').get(i)).off('hover').off('click');
	}
	$(interaction.sortable).sortable("option","disabled", true);
};

//Afficher la réponse
sequenceDD.displayAnswer = function(interaction, answerArray){
	
	for(var i=0;i<interaction.component[0].componentParam.length;i++){		
		var listItem = $(interaction.sortable).find('.sortableLI').get(i);
		if( $(listItem).attr('id') == parseInt(answerArray[i].value)){	
			// mettre la classe pour la bonne réponse avec la bonne numérotation
			$($(interaction.component[0].div).find('.divListNumber > div').get(i)).html(parseInt(i+1)).removeClass('listNumber').addClass('sequenceDDGA');
		}else{			
			var listItemIndex = parseInt($(listItem).attr('id'))+1;
			// mettre la classe pour la mauvaise réponse avec la bonne numérotation			
			$($(interaction.component[0].div).find('.divListNumber > div').get(i)).html(listItemIndex).removeClass('listNumber').addClass('sequenceDDWA');
		}		
	}		
	
};

sequenceDD.loadUserAnswer = function(interaction, suspendDataResume){	
	for(var i=0; i < getObjectLength(suspendDataResume); i++){
		foundId = false;		
		for(var j=0; j < interaction.component[0].componentParam.length && !foundId; j++){	
			if($(interaction.component[0].componentParam[j].listItem).attr("id") == suspendDataResume[i]){						
				foundId = true;		
				$(interaction.component[0].componentParam[i].listItem).replaceWith($(interaction.component[0].componentParam[j].listItem).clone(true));				
			}
		}
	}
}

sequenceDD.answerToString = function(answerArray, interactionArray){
	var answerString ="";
	for(var i =0; i <interactionArray.length; i++){
		answerString+= interactionArray[i].value + " : " + answerArray[i] + " -- ";
	}
	return answerString;
}

sequenceDD.returnType = function(){
	return "fill-in";
}

sequenceDD.returnRealType = function(){
	return "sequenceDropDown";
};

sequenceDD.studentResponseToString = function(userAnswer, element){
	return "";
};

sequenceDD.responsePatternToString = function(answerArray, element){
	return "";
}
	