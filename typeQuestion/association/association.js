var association = {};

//ParamÃ¨tres d'affichage
association.enableMultiColumn = false;
association.enableOptionMedia = true;

//Feedback par dÃ©faut pour type de question  *optionel*
association.correctAnswerFeedback = "Bravo! C'est la bonne réponse."
association.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne réponse."
association.notAnsweredFeedback = "Vous devez associer chaque item de la colonne gauche à un item de la colonne de droite";


association.init = function(interaction){	
	$(interaction.component[0].div).css("height", $(interaction.component[0].div).innerHeight()+50);
	findHeight(interaction);
}
function findHeight(interaction){
	//$(interaction.component[0].div).css("height", $(interaction.component[0].div).innerHeight());
	var maxHeight =0;
	// trouver la hauteur max de contenu
	$('div.assListItem').each(function(index, element) {
		if($(this).height()>maxHeight){
			maxHeight = $(this).height();
		}
	});

	var fill = (maxHeight-81)/2;

	$(".divAssociation .fillHaut").css("height", fill);
	$(".divAssociation .fillBas").css("height", fill);
}

//fonction d'initiation pour question *optionel*


//crÃ©er tableau dÃ©lÃ©ment "div" pour chaque option de la question
association.createInteraction = function(interactionArray, questionId){
	var interaction = new Array();
	
	interaction.component = new Array();
	interaction.component[0] = new Array();
	interaction.component[0].componentParam = new Array();	
	interaction.component[0].componentMedia = new Array();		
	
	interaction.interactionParam = new Array();
	interaction.interactionParam.questionId = questionId;
		
	interaction.component[0].componentParam.length = interactionArray.element.length;
	
	interaction.mediaId = 0;
	
	var assoc = document.createElement("div");
	assoc.className = "divAssociation";
	
	var assocQuestion = document.createElement("div");
	
	assocQuestion.className = "divAssociationQuestions";
	
	var assocReponse = document.createElement("div");

	assocReponse.className = "divAssociationReponses";
	
	var listeQuestions = document.createElement("ul");
	listeQuestions.className = "questionsAssoc";
	
	interaction.interactionParam.sortable = document.createElement("ul"); // liste de rÃ©ponses (un Ã©lÃ©ment JQuery sortable)
	interaction.interactionParam.sortable.className = "reponsesAssoc";
	
	
	$(interaction.interactionParam.sortable).sortable({
			tolerance: "pointer",
			placeholder: 'ui-state-highlight',		
			start: function(e,ui){
				association.questionAnswered = true;
				$(this).find('.ui-state-highlight').css('height',ui.item.css('height'));
			}	
			
		});// ferme sortable
	
	$(interaction.interactionParam.sortable).disableSelection();
	
	
	interaction.component[0].div = document.createElement("div");
	
	//parcourir le interaction Array de la question et de la rÃ©ponse
	for(var i=0; i< interactionArray.element.length; i++){	
		//initialiser les colonnes 
		interaction.component[0].componentParam[i] = new Array();
		interaction.component[0].componentParam[i].elementFixe = new Array();
		interaction.component[0].componentParam[i].elementSortable = new Array();
		interaction.component[0].componentParam[i].elementAnswered = false;
		interaction.component[0].componentParam[i].elementFixe.value = interactionArray.element[i].elementFixe.value;
		interaction.component[0].componentParam[i].elementFixe.id = interactionArray.element[i].elementFixe.id;
		interaction.component[0].componentParam[i].elementSortable.value = interactionArray.element[i].elementSortable.value;
		interaction.component[0].componentParam[i].elementSortable.id = interactionArray.element[i].elementSortable.id;
		
		interaction.component[0].componentParam[i].elementFixe.listItem = this.creerListItem(interaction, interactionArray.element[i].elementFixe.value, interactionArray.element[i].elementFixe);		
		listeQuestions.appendChild(interaction.component[0].componentParam[i].elementFixe.listItem);	
		
		interaction.component[0].componentParam[i].elementSortable.listItem = this.creerListItem(interaction, interactionArray.element[i].elementSortable.value, interactionArray.element[i].elementSortable);		
		interaction.interactionParam.sortable.appendChild(interaction.component[0].componentParam[i].elementSortable.listItem);
	}
	
	//vu que Slide mixe dÃ©ja les Ã©lÃ©ments de la question, on a juste a mixer une liste d'item, ici c'est Ã©lÃ©ment sortable.
	var i = interactionArray.element.length;
	while (--i) {
    	var j = Math.floor(Math.random() * (i + 1));
      	var temp = interaction.component[0].componentParam[i].elementSortable;
      	interaction.component[0].componentParam[i].elementSortable = interaction.component[0].componentParam[j].elementSortable;
      	interaction.component[0].componentParam[j].elementSortable = temp;
    }	
	

    
	//append les 2 listes
    for(var i=0; i < interactionArray.element.length; i++){
    	listeQuestions.appendChild(interaction.component[0].componentParam[i].elementFixe.listItem);
    	interaction.interactionParam.sortable.appendChild(interaction.component[0].componentParam[i].elementSortable.listItem);
    }
	
	interaction.interactionParam.listeQuestions = listeQuestions;
	
	assocQuestion.appendChild(listeQuestions);
	assocReponse.appendChild(interaction.interactionParam.sortable);	
	assoc.appendChild(assocQuestion);
	assoc.appendChild(assocReponse);	

	interaction.component[0].div.appendChild(assoc);
	$(".questionsAssoc").disableSelection();
	
	// Ajuster la hauteur des morceaux par rapport au contenu le plus grand
	findHeight(interaction);
	
	return interaction;
};

// crÃ©er chaque item des questions et rÃ©ponses
association.creerListItem = function(interaction, valeur, element){
	var listItem;
	listItem = document.createElement("li");
	listItem.id = element.id;
	listItem.className = "draggable";
	
	var imageBackgroundContainer = document.createElement('div');
	imageBackgroundContainer.className = 'imageBackgroundContainer';
	
	var haut = document.createElement('div');
	haut.className = 'haut';
	
		
	var fillHaut = document.createElement('div');
	fillHaut.className = 'fillHaut';
	
	var milieu = document.createElement('div');
	milieu.className = 'milieu';
	
	var fillBas = document.createElement('div');
	fillBas.className = 'fillBas';
	
	var bas = document.createElement('div');
	bas.className = 'bas';
	
	imageBackgroundContainer.appendChild(haut);
	imageBackgroundContainer.appendChild(fillHaut);
	imageBackgroundContainer.appendChild(milieu);
	imageBackgroundContainer.appendChild(fillBas);
	imageBackgroundContainer.appendChild(bas);				
	
	listItem.appendChild(imageBackgroundContainer);
	
	
	span = document.createElement("div");
	span.className = "associationGA";
	listItem.appendChild(span);	
	
	var conteneurListItem = document.createElement('div');
	conteneurListItem.className = "assListItem";			
	
	//media
	if(element.mediaArray != undefined && element.mediaArray.length >0){	
		var mediaContainer = document.createElement("div");
		interaction.component[0].componentMedia[interaction.mediaId] = new Array();
		interaction.component[0].componentMedia[interaction.mediaId].media = element.mediaArray;
		interaction.component[0].componentMedia[interaction.mediaId].container = mediaContainer;
		interaction.mediaId++;
		conteneurListItem.appendChild(mediaContainer);
	}		
	
	par = document.createElement("p");
	par.className = "texte";
	par.innerHTML = valeur;
	conteneurListItem.appendChild(par);
	
	listItem.appendChild(conteneurListItem);
	return listItem;
	
}
//DÃ©finir le comportement des options de la question lors de l'interaction avec l'utilisateur
//ex: hover, onclick
association.setInteraction = function(interaction){
	
	for(var i=0; i < interaction.component[0].componentParam.length; i++){
		// mettre les classes par défaut pour les éléments fixes (colonne gauche)
		$(interaction.component[0].componentParam[i].elementFixe.listItem).find('.haut').addClass('ui-state-default');
		$(interaction.component[0].componentParam[i].elementFixe.listItem).find('.fillHaut').addClass('ui-state-default');
		$(interaction.component[0].componentParam[i].elementFixe.listItem).find('.milieu').addClass('ui-state-default');
		$(interaction.component[0].componentParam[i].elementFixe.listItem).find('.fillBas').addClass('ui-state-default');
		$(interaction.component[0].componentParam[i].elementFixe.listItem).find('.bas').addClass('ui-state-default');
		
		// mettre les classes par défaut pour les éléments fixes (colonne gauche)
		$(interaction.component[0].componentParam[i].elementSortable.listItem).find('.haut').addClass('ui-state-default');
		$(interaction.component[0].componentParam[i].elementSortable.listItem).find('.fillHaut').addClass('ui-state-default');
		$(interaction.component[0].componentParam[i].elementSortable.listItem).find('.milieu').addClass('ui-state-default');
		$(interaction.component[0].componentParam[i].elementSortable.listItem).find('.fillBas').addClass('ui-state-default');
		$(interaction.component[0].componentParam[i].elementSortable.listItem).find('.bas').addClass('ui-state-default');
		// Hover des questions (gauche)
		$(interaction.component[0].componentParam[i].elementFixe.listItem).hover(function(){
			playQuizSoundHover();
			$(this).find('.haut').removeClass('ui-state-default').addClass('ui-state-hover');
			$(this).find('.fillHaut').removeClass('ui-state-default').addClass('ui-state-hover');
			$(this).find('.milieu').removeClass('ui-state-default').addClass('ui-state-hover');
			$(this).find('.fillBas').removeClass('ui-state-default').addClass('ui-state-hover');
			$(this).find('.bas').removeClass('ui-state-default').addClass('ui-state-hover');

			
		}, function(){
			$(this).find('.haut').removeClass('ui-state-hover').addClass('ui-state-default');
			$(this).find('.fillHaut').removeClass('ui-state-hover').addClass('ui-state-default');
			$(this).find('.milieu').removeClass('ui-state-hover').addClass('ui-state-default');
			$(this).find('.fillBas').removeClass('ui-state-hover').addClass('ui-state-default');
			$(this).find('.bas').removeClass('ui-state-hover').addClass('ui-state-default');
			
			
		
		});
		// hover des réponses (droite)
		$(interaction.component[0].componentParam[i].elementSortable.listItem).hover(function(){			
			playQuizSoundHover();
			$(this).find('.haut').removeClass('ui-state-default').addClass('ui-state-hover');
			$(this).find('.fillHaut').removeClass('ui-state-default').addClass('ui-state-hover');
			$(this).find('.milieu').removeClass('ui-state-default').addClass('ui-state-hover');
			$(this).find('.fillBas').removeClass('ui-state-default').addClass('ui-state-hover');
			$(this).find('.bas').removeClass('ui-state-default').addClass('ui-state-hover');
			
		}, function(){
			$(this).find('.haut').removeClass('ui-state-hover').addClass('ui-state-default');
			$(this).find('.fillHaut').removeClass('ui-state-hover').addClass('ui-state-default');
			$(this).find('.milieu').removeClass('ui-state-hover').addClass('ui-state-default');
			$(this).find('.fillBas').removeClass('ui-state-hover').addClass('ui-state-default');
			$(this).find('.bas').removeClass('ui-state-hover').addClass('ui-state-default');
			
		});
		
	}//for
	
	
	$(interaction.interactionParam.sortable).bind('sortstop', function(e, ui){
		playQuizSoundSelect();		
		for(var i=0; i< interaction.component[0].componentParam.length; i++){
			if(interaction.component[0].componentParam[i].elementSortable.id == ui.item.attr('id')){
				interaction.component[0].componentParam[i].elementAnswered = true;
				ui.item.css('left','-40px');			
			}
		}			
	});	
	
	
	
	
};

//remplir un tableau d'interaction avec les options sÃ©lectionnÃ©es par l'utlisateur
association.fillUserAnswerArray = function(interaction){
	var userAnswerArray = {};
	
	for(var i=0; i<interaction.interactionParam.listeQuestions.childNodes.length; i++ ){
		userAnswerArray[i] = {};
		userAnswerArray[i].id = $(interaction.interactionParam.listeQuestions.childNodes[i]).attr('id');
		userAnswerArray[i].value = $(interaction.interactionParam.sortable.childNodes[i]).attr('id');
	}
	
	return userAnswerArray;
};

//VÃ©rifier si la question a Ã©tÃ© rÃ©pondu
association.checkQuestionAnswered = function(interaction, userAnswer){
	var elementAnswered = true;
		for(var i=0;i<interaction.component[0].componentParam.length;i++){
			elementAnswered = interaction.component[0].componentParam[i].elementAnswered;			
			// dÃ¨s qu'on a un item non associÃ© on sort puisque la question n'est pas rÃ©pondue au complet
			if(!elementAnswered){
				return(elementAnswered);
			}
		}
		return(elementAnswered);	
};

//vÃ©rifier si bonne rÃ©ponse
association.validateAnswer = function(interaction, userAnswer, answerArray){
	var valid = true;
	var slideScore = 0;
	for(var i=0; i < getObjectLength(userAnswer); i++){
		
		for(var j =0; j < answerArray.length; j++){
			
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
	var result = new Array();
	result[0] = valid;
	result[1] = slideScore;
	
	return result;
};

//enleve l'interactivitÃ© de la question, les comportement mis dans setComportment
association.disableQuestion = function(interaction){
	for(var i=0; i< interaction.component[0].componentParam.length; i++){
		// enlever les hover
		//$(interaction.component[0].componentParam[i].elementSortable.listItem).off('hover');
		$(interaction.interactionParam.sortable.childNodes[i]).off('hover');	
		$(interaction.component[0].componentParam[i].elementFixe.listItem).off('hover');
	}
	// enlever le Drag & Drop
	$(interaction.interactionParam.sortable).sortable("option","disabled", true); // enlever les drag
};

//Afficher la rÃ©ponse
association.displayAnswer = function(interaction, answerArray){
	for(var i=0; i < answerArray.length; i++){
		
		found = false;
		for(var j=0; j <interaction.interactionParam.listeQuestions.childNodes.length && !found; j++ ){
			if($(interaction.interactionParam.listeQuestions.childNodes[j]).attr('id') == answerArray[i].id){
				$(interaction.interactionParam.listeQuestions.childNodes[j]).find('div.associationGA').html(i+1).css('visibility','visible').fadeTo(1,.7);
				found = true;
			}
		}
		
		found = false;
		for(var j=0; j <interaction.interactionParam.sortable.childNodes.length && !found; j++ ){
			if($(interaction.interactionParam.sortable.childNodes[j]).attr('id') == answerArray[i].value){
				$(interaction.interactionParam.sortable).css('z-index',6);
				$(interaction.interactionParam.sortable.childNodes[j]).css('left','-40px');
				$(interaction.interactionParam.sortable.childNodes[j]).find('div.associationGA').html(i+1).css('visibility','visible').fadeTo(1,.7);
				found = true;
			}
				
		}
		
		found = false;
		for(var j=0; j <interaction.interactionParam.listeQuestions.childNodes.length && !found; j++){
			if($(interaction.interactionParam.listeQuestions.childNodes[j]).attr('id') == answerArray[i].id){
				found = true;
				if($(interaction.interactionParam.sortable.childNodes[j]).attr('id') != answerArray[i].value){
					$(interaction.interactionParam.sortable.childNodes[j]).find('div.associationGA').addClass('associationWA').css('visibility','visible').fadeTo(1,.7);					
				}
			}
		}
		
	}
};

association.loadUserAnswer = function(interaction, suspendDataResume){	
	for(var i=0; i < getObjectLength(suspendDataResume); i++){
		foundId = false;
		
		for(var j=0; j < interaction.interactionParam.listeQuestions.childNodes.length && !foundId; j++){			
			if($(interaction.interactionParam.listeQuestions.childNodes[j]).attr("id") == suspendDataResume[i].id){						
				foundId = true;
				foundValue = false;
				for(k=0; k < interaction.interactionParam.sortable.childNodes.length && !foundValue; k++){
					if($(interaction.interactionParam.sortable.childNodes[k]).attr("id") == suspendDataResume[i].value){						
						foundValue = true;
						temp = $(interaction.interactionParam.sortable.childNodes[j]).clone(true);
						$(interaction.interactionParam.sortable.childNodes[j]).replaceWith($(interaction.interactionParam.sortable.childNodes[k]).clone(true));
						$(interaction.interactionParam.sortable.childNodes[k]).replaceWith(temp);
					}
				}
			}
		}
	}
};


association.studentResponseToString = function(userAnswer, element){
	return "";
};

association.responsePatternToString = function(answerArray, element){
	return "";
}

association.returnType = function(){
	return "fill-in";
}

association.returnRealType = function(){
	return"association";
}
