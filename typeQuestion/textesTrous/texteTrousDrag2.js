var texteTrouDrag = {};

//Paramètres d'affichage
texteTrouDrag.enableMultiColumn = false;
texteTrouDrag.enableOptionMedia = true;

//Feedback par défaut pour type de question  *optionel*
texteTrouDrag.correctAnswerFeedback = "Bravo! C'est la bonne réponse."
texteTrouDrag.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne réponse."
texteTrouDrag.notAnsweredFeedback = "Vous n'avez pas répondu à la question.";

texteTrouDrag.questionAnswered = false;

//fonction d'initiation pour question *optionel*
texteTrouDrag.init = function(interaction){
	$(interaction.component[0].div).css("height", $(interaction.component[0].div).innerHeight());
}

//créer tableau délément "div" pour chaque option de la question
texteTrouDrag.createInteraction = function(interactionArray, questionId, answerArray){
	var interaction = new Array();
	interaction.component = new Array();
	interaction.interactionParam = new Array();
	interaction.interactionParam.questionId = questionId;
	interaction.component[0] = new Array(); 
	interaction.component[0].componentParam = new Array();			
	interaction.component[0].componentParam.draggable = new Array();	

	interaction.component[0].div = document.createElement("div");
	interaction.component[0].div.className = "divTexteTrouDrag";	
	
	var draggables = document.createElement('div');
	draggables.className = "divDraggables";
	
	var compteurTrou = 0;	
	for(var i=0; i< interactionArray.element.length; i++){
		interaction.component[0].componentParam[i] = new Array();
		
		interaction.component[0].componentParam[i].type = interactionArray.element[i].type;
		if(interaction.component[0].componentParam[i].type == "bp"){ // on a un bout de phrase
			var bp = document.createElement("div");
			bp.className = "boutPhrase";
			bp.innerHTML = interactionArray.element[i].value;
			//bp.appendChild(document.createTextNode(interactionArray.element[i].value));
			interaction.component[0].div.appendChild(bp);
		}else if(interaction.component[0].componentParam[i].type == "trou") { // on a un trou
			
			// créer la région droppable
			var droppable = document.createElement("div");	 
			var droppableText  = document.createTextNode('\u00a0');
			
			droppable.appendChild(droppableText);
			droppable.className = "droppable";
			droppable.id = "droppable" + compteurTrou;
			droppable.value = interactionArray.element[i].value;
			
			$(droppable).droppable({ 
				accept: '.draggable'
			});
			
			interaction.component[0].div.appendChild(droppable);		
			interaction.component[0].componentParam[i].droppable = droppable;					
			
			compteurTrou++;
			
		}		
	}

	// créer les éléments draggables
	for(var i=0;i<answerArray.length;i++){

			var unDraggable = document.createElement('div');
			unDraggable.innerHTML = answerArray[i].value;
			//var texteDraggable =  document.createTextNode(answerArray[i].value);
			//var texteDraggable;
			//texteDraggable.innerHTML = answerArray[i].value;
			
			//unDraggable.appendChild(texteDraggable);
			unDraggable.className = "draggable";
			unDraggable.id = "draggable" + answerArray[i].id;
			
		
				$(unDraggable).draggable({
				  cursor:"pointer",
				  helper:"clone",
				  snap:".droppable",
				  snapMode:"inner",
				  snapTolerance:"15",
				  revert:"invalid",
				  
				  containement: ".ui-droppable"		
			  });
			  
			  
			  
			var unDivDraggable = document.createElement('div');
			unDivDraggable.className = 'unDivDraggable';
			unDivDraggable.id =  answerArray[i].id;
			unDivDraggable.appendChild(unDraggable);
			
			draggables.appendChild(unDivDraggable);			

			interaction.component[0].componentParam.draggable[i] = unDraggable;		

	}
	interaction.component[0].div.appendChild(document.createElement("br"));
	interaction.component[0].div.appendChild(draggables);				
	return interaction;
};

//Définir le comportement des options de la question lors de l'interaction avec l'utilisateur
//ex: hover, onclick
texteTrouDrag.setInteraction = function(interaction){
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		
		// event pour les droppables
		$(interaction.component[0].componentParam[i].droppable).bind('dropover', function(event, ui){
			playQuizSoundHover();			
		});	
		
		$(interaction.component[0].componentParam[i].droppable).bind('dropout', function(event, ui){
			// quand on sort de la région dropable, il faut remettre la classe pour qu'il devienne visible 
			// vérifier si l'élément dragué est celui qui est dans le droppable
			// si oui remettre le droppable visible puisque que nous allons enlever la réponse de ce droppable
			
			if($(ui.draggable).attr('id') == $(this).find('> .draggable').attr('id')){
				
				$(this).removeClass('droppable-plein').addClass('droppable');
				$(this).append('\u00a0'); // remettre un espace pour que le droppable soit bien centré verticalement
			}						
		});
		
		$(interaction.component[0].componentParam[i].droppable).bind('drop', function(event, ui){	
			
			// vérifier s'il y a déjà une réponse dans le droppable
			if($(this).find('> .draggable').attr('id') != undefined){
				
				// trouver quel draggable est déjà entré comme réponse --> il faut l'enlever pour le remettre au bas de la liste
				var draggableID =  $(this).find('.draggable').attr('id');
				//var draggableObj = $("#" + draggableID);
				
				// il faut trouver le draggable object correspondant
				for(var j=0;j<interaction.component[0].componentParam.draggable.length;j++){
					if($(interaction.component[0].componentParam.draggable[j]).attr('id') == draggableID){						
						var draggableObj = $(interaction.component[0].componentParam.draggable[j]);
					}	
				}
				 				
				var divDraggable = $($(this).closest('.divTexteTrouDrag').find('#' + parseInt(draggableID.substr(9))));			
				
				
				// replacer ce draggable au bas de la liste
				divDraggable.append(draggableObj);				
				
				//draggableObj.draggable("option", "disabled", false); 
				
				// mettre ce dropable invisible
				$(this).removeClass('droppable').addClass('droppable-plein');
				
				// mettre le nouveau draggable
				$(this).html($(ui.draggable));
				
				
			}else{ // si la région où l'on dépose est vide nous ajoutons le 'draggable'				
				// test pour déterminer si on load les réponses de l'utilisateur (à partir de loadUserAnswer)
				if($(ui.draggable).html() == undefined){					
					$(this).html($(ui));					
				}
				else{										
					$(this).html($(ui.draggable));
					
				}				
				$(this).removeClass('droppable').addClass('droppable-plein');
			}
		});			
		
	}	
	 //event pour les draggables
	for(var i=0;i<interaction.component[0].componentParam.draggable.length;i++){	 
		$(interaction.component[0].componentParam.draggable[i]).hover(function(){
  			$(this).removeClass('draggable').addClass('hoverDraggableClass');
			
		},function(){			
			$(this).removeClass('hoverDraggableClass').addClass('draggable');			
		});	
	}
		
		
};

//remplir un tableau d'interaction avec les options sélectionnées par l'utlisateur
texteTrouDrag.fillUserAnswerArray = function(interaction){
	var userAnswerArray = {};
	var j=0;
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		//parcourir les droppable "trou" et voir ce que l'utlisateur a répondu
		if(interaction.component[0].componentParam[i].type == "trou"){	
			var rep = $(interaction.component[0].componentParam[i].droppable).find('.draggable').attr('id');
			if(rep != undefined){
				userAnswerArray[j] = $(interaction.component[0].componentParam[i].droppable).find('.draggable').attr('id').substr(9);
			}
			
			j++;			
		}			
	}		
	return userAnswerArray;	
};

//Vérifier si la question a été répondu
texteTrouDrag.checkQuestionAnswered = function(interaction, userAnswer){	
	var checkQuestionAnswered = true;
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		//parcourir les droppable "trou" et voir si l'utilisateur a répondu
		if(interaction.component[0].componentParam[i].type == "trou"){	
			if($(interaction.component[0].componentParam[i].droppable).hasClass('droppable')){
				checkQuestionAnswered = false;	
				return checkQuestionAnswered;
			}		
			
		}		
	}		
	return checkQuestionAnswered;	
};

//vérifier si bonne réponse
texteTrouDrag.validateAnswer = function(interaction, userAnswer, answerArray){
	var valid = true;
	var slideScore = 0;
	var j=0;

	for(var i=0; i < interaction.component[0].componentParam.length; i++){		
		if(interaction.component[0].componentParam[i].type == "trou"){	
			if(interaction.component[0].componentParam[i].droppable.value == $($(interaction.component[0].componentParam[i].droppable).find('.draggable')).attr('id').substr(9)){				
				slideScore += answerArray[j].weight;	
			}else{
				valid = false;
				slideScore = 0;
			}
			j++;			
		}
    }
	
	var result = new Array();
	result[0] = valid;
	result[1] = slideScore;
	return result;
};

//enleve l'interactivité de la question, les comportement mis dans setComportment
texteTrouDrag.disableQuestion = function(interaction){	
	for(var i=0;i<interaction.component[0].componentParam.draggable.length;i++){
			$(interaction.component[0].componentParam.draggable[i]).draggable("option", "disabled", true).off('hover');				
	}
};

//Afficher la réponse
texteTrouDrag.displayAnswer = function(interaction, answerArray){	
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if(interaction.component[0].componentParam[i].type == "trou"){			
			
			var trouveDraggable =  $($(interaction.component[0].componentParam[i].droppable).find('.draggable'));
			
			// vérifier si l'utilisateur a entré la bonne réponse
			if(interaction.component[0].componentParam[i].droppable.value == trouveDraggable.attr('id').substr(9)){					
				trouveDraggable.css('color','#006600');
				trouveDraggable.css('opacity',1);
			}else{
			
				trouveDraggable.css('color','#993300');
				trouveDraggable.css('opacity',1);
				
				// trouver le id du droppable et aller trouver la valeur dans le answerArray
				idReponse = interaction.component[0].componentParam[i].droppable.value;
				
				for(var j=0; j<answerArray.length;j++){
					if(answerArray[j].id == idReponse){
						$(interaction.component[0].componentParam[i].droppable).append("<div class='texteTrouDragWA'>" + answerArray[j].value + "</div>");										
					}
				}
			}
			
		}		
	}
};


texteTrouDrag.loadUserAnswer = function(interaction, suspendDataResume){
	
	var compteurRep=0;
	// on parcours les droppable pour leur attacher le bon draggable (qui se trouve à être la réponse de l'utilisateur)
	for(var i=0;i<interaction.component[0].componentParam.length;i++){
		if(interaction.component[0].componentParam[i].type == "trou"){			
			// trouver le bon draggable avec le id du suspendDataResume
			$(interaction.component[0].componentParam[i].droppable).trigger('drop',$('#draggable'+ suspendDataResume[compteurRep]));
			compteurRep++;	
		}
	}

	
};

texteTrouDrag.studentResponseToString = function(userAnswer, element){
return "";
};

texteTrouDrag.responsePatternToString = function(answerArray, element){
return "";
}

texteTrouDrag.returnType = function(){
	return "fill-in";
}

texteTrouDrag.returnRealType = function(){
	return"texteTrouDrag";
}