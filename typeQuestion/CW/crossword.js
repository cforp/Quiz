var crossword = {};

crossword.enableMultiColumn = false;
crossword.enableOptionMedia = false;

crossword.correctAnswerFeedback = "Bravo! Vous avez trouvé tous les mots!"
//trueFalse.incorrectAnswerFeeback = "Désolé, ce n'est pas la bonne réponse."
crossword.notAnsweredFeedback = "Vous n'avez pas rempli tous les mots.";

crossword.init = function(crossword){
	if(crossword != null){
		oygBind(crossword);
	}
}

crossword.createInteraction = function(interactionArray, questionId){
	var interaction = new Array();
	interaction.component = new Array();
	interaction.component[0] = new Array();
	interaction.component[0].componentParam = new Array();
	
	interaction.interactionParam = new Array();
	interaction.interactionParam.questionId = questionId;
	
	interaction.component[0].componentParam.crossword = null;
	
	interaction.component[0].componentParam.wordsArray = new Array();
	interaction.component[0].componentParam.allWordSetting = new Array();
	interaction.component[0].componentParam.clues = new Array();
	
	interaction.component[0].componentParam.validCrossword = false;
	interaction.component[0].componentParam.verticalCheck = false;
	interaction.component[0].componentParam.horizontalCheck = false;
	
	interaction.component[0].div = document.createElement("div");
	var id = questionId;
	
	for(var i=0; i< interactionArray.element.length; i++){
		interaction.component[0].componentParam.wordsArray[i] = interactionArray.element[i].value;
		interaction.component[0].componentParam.clues[i] = new oyCrosswordClue(interactionArray.element[i].value.length, interactionArray.element[i].indice, interactionArray.element[i].value, interactionArray.element[i].orientation, interactionArray.element[i].x, interactionArray.element[i].y);
	}
	
	if(interaction.component[0].componentParam.wordsArray.length > 1){
		/*
		while(!interaction.component[0].componentParam.verticalCheck && !interaction.component[0].componentParam.horizontalCheck){
			interaction.component[0].componentParam.allWordSetting = getWordPositionning(interaction.component[0].componentParam.wordsArray);
			interaction.component[0].componentParam.verticalCheck = false;
			interaction.component[0].componentParam.horizontalCheck = false;
			for(var i=0; i< interaction.component[0].componentParam.allWordSetting.length; i++){
				if(interaction.component[0].componentParam.allWordSetting[i].orientation === 0){
					interaction.component[0].componentParam.horizontalCheck = true;
				}
				else if(interaction.component[0].componentParam.allWordSetting[i].orientation ===1){
					interaction.component[0].componentParam.verticalCheck = true;
				}
			}
		}
		
		*/
		interaction.component[0].div.innerHTML = ("<div id=\""+id+"oygContext\" align=\"center\" style=\"width:100%;\">"+
				"<table class=\"oyOuterFrame\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
					"<tr><td align=\"center\">"+
						"<table class=\"oyFrame\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
							"<tr>"+  
								"<td rowspan=\"3\" class=\"oyPuzzleCell\" align=\"center\" valign=\"top\">"+ 
									
									"<div class=\"oyPuzzle\" id=\""+id+"oygPuzzle\"></div>"+
											
								"</td>"+  
								"<td class=\"oyListCellDot\">.</td>"+    
								"<td class=\"oyListCell\" valign=\"top\" id=\""+id+"oygListH\"></td>"+
							"</tr>"+
							"<tr style=\"height: 4px;\">"+
								"<td colspan=\"4\"></td>"+
							"</tr>"+
							"<tr>"+  
								"<td class=\"oyListCellDot\">.</td>"+
								"<td class=\"oyListCell\" valign=\"top\" id=\""+id+"oygListV\"></td>"+					
							"</tr>"+
							"<tr style=\"height: 4px;\">"+
								"<td colspan=\"5\"></td>"+
							"</tr>"+					
						"</table>"+
					"</td></tr>"+
				"</table>"+
				"<div id=\""+id+"oygStatic\" align=\"center\" style=\"font-size: 10px; color: #4282B5; font-family: Arial;\"></div>"+
			"</div>"
		);
		
		//interaction.component[0].componentParam.clues = new Array();
		/*
		for(var i=0; i< interaction.component[0].componentParam.allWordSetting.length; i++){
			interaction.component[0].componentParam.clues[i] = new oyCrosswordClue(interaction.component[0].componentParam.allWordSetting[i].word.length, 
				interactionArray.element[i].indice, interaction.component[0].componentParam.allWordSetting[i].word, interaction.component[0].componentParam.allWordSetting[i].orientation, 
				interaction.component[0].componentParam.allWordSetting[i].posx, interaction.component[0].componentParam.allWordSetting[i].posy);
		}
		*/
		
		interaction.component[0].componentParam.oygCrosswordPuzzle = new oyCrosswordPuzzle (id, "typeQuestion/CW/oy-cword-1.0", interaction.component[0].componentParam.clues, 15, 15);
		
		interaction.component[0].componentParam.crossword = interaction.component[0].componentParam.oygCrosswordPuzzle;
	}

	return interaction;
};

crossword.setInteraction = function(interaction){
};

crossword.fillUserAnswerArray = function(interaction){
	var userAnswerArray = {};
	for(var i=0; i < interaction.component[0].componentParam.clues.length; i++){
		if(interaction.component[0].componentParam.crossword.menu.getWordForClue(interaction.component[0].componentParam.clues[i]).toUpperCase() == interaction.component[0].componentParam.wordsArray[i].toUpperCase()){
			userAnswerArray[i] = "1";
		}
		else{
			userAnswerArray[i] = "2";
		};
	}
	return userAnswerArray;
};

crossword.checkQuestionAnswered = function(interaction, userAnswerArray){
	return (interaction.component[0].componentParam.crossword.menu.checkQuestionAnswered());
};

crossword.validateAnswer = function(interaction, userAnswerArray, answerArray){
	var valid = interaction.component[0].componentParam.crossword.menu.checkAll();
	var slideScore = 0;
	for(var i=0;i < answerArray.length; i++){
		slideScore += answerArray[i].weight;
	}
	if(!valid){
		slideScore = 0;
	}
	var result = new Array();
	result[0] = valid;
	result[1] = slideScore;
	return result;
};

crossword.disableQuestion = function(interaction){
	//interaction.component[0].componentParam.crossword.menu.addRevealAllWordAction();
};

crossword.displayAnswer = function(interaction,questionId){
	interaction.component[0].componentParam.crossword.menu.addRevealAllWordAction();
};

crossword.loadUserAnswer = function(interaction, suspendDataResume){
	for(var i=0; i < interaction.component[0].componentParam.clues.length; i++){
		if(suspendDataResume[i] != undefined){
			interaction.component[0].componentParam.crossword.menu.showAnswer(interaction.component[0].componentParam.clues[i], parseInt(suspendDataResume[i]));
		}
	}
};

crossword.studentResponseToString = function(userAnswer, element){
	var answerString ="";
	
	return answerString;
}

crossword.responsePatternToString = function(answerArray, element){
	var answerString ="";
	
	return answerString;
}


crossword.returnType = function(){
	return"fill-in";
}

crossword.returnRealType = function(){
	return"MotCroisé";
}
