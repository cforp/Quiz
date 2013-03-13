var questionSource = new Array();

/***********************************************/
/*                 CONTENU                  */
/***********************************************/

questionSource[0] = new Array();
               
questionSource[0].playerIdArray = new Array();
questionSource[0].formatArray = new Array();
questionSource[0].interactionArray = new Array();
               
questionSource[0].answerArray = new Array();
               
questionSource[0].questionType = "content";
questionSource[0].weight = 0;
questionSource[0].maxAttempt = 1;
questionSource[0].questionSlide = false;
questionSource[0].partialPoints = false;
               
questionSource[0].formatArray[0] = new Array();
questionSource[0].formatArray[0].type = "banner";
questionSource[0].formatArray[0].value = "Le vocabulaire de la grossesse";
               
questionSource[0].formatArray[1] = new Array();
questionSource[0].formatArray[1].type = "normal";
questionSource[0].formatArray[1].value = "";
               
questionSource[0].formatArray[2] = new Array();
questionSource[0].formatArray[2].type = "normal";
questionSource[0].formatArray[2].value = "Dans cet exercice, vous vérifierez votre compréhension du vocabulaire de la grossesse. Vous apprendrez également d’autres mots et expressions. Vous apprendrez les mots et les expressions qu’Anika va utiliser. <br /><br />"
questionSource[0].formatArray[2].value +="<br /><br />Anika parlera de <strong>suivi prénatal</strong> et <strong>postnatal</strong>.<br />Elle parlera aussi de <strong>maison de naissance</strong> et de <strong>péridurale</strong>.<br /><br /> Connaissez-vous ces mots?<br /><br /> Un conseil : prenez en note les nouveaux mots et les nouvelles expressions pendant l’exercice."
questionSource[0].formatArray[2].value += "N’hésitez pas à utiliser le dictionnaire.";
questionSource[0].formatArray[2].css = "intro";


questionSource[0].formatArray[3] = new Array();
questionSource[0].formatArray[3].type = "normal";
questionSource[0].formatArray[3].value="<br /><br />";


/***********************************************/
/*                CHOIX MULTIPLES              */
/***********************************************/


questionSource[1] = new Array();
questionSource[1].formatArray = new Array();
questionSource[1].interactionArray = new Array();
questionSource[1].answerArray = new Array();

questionSource[1].incorrectAnswerFeedback  = "<br />Désolé. Ce n’est pas la bonne réponse.<br /><br />";
questionSource[1].incorrectAnswerFeedback += "Les <strong>soins postnataux</strong> sont donnés après la naissance du bébé.<br /><br />";
questionSource[1].incorrectAnswerFeedback += "Jolene reçoit des soins prénataux pendant sa grossesse. Prénataux veut dire « avant la naissance ».";

questionSource[1].correctAnswerFeedback  = "<br />C’est exact! <br /><br />Jolene reçoit des <strong>soins prénataux</strong> pendant sa grossesse. Prénataux veut dire « avant la naissance ».<br /><br />"; 
questionSource[1].correctAnswerFeedback  += "Les <strong>soins postnataux</strong> sont donnés après la naissance du bébé.";

               
questionSource[1].questionType = "multipleChoice";
questionSource[1].weight = 1;
questionSource[1].maxAttempt = 1;
questionSource[1].questionSlide = true;
questionSource[1].partialPoints = false;
               
questionSource[1].formatArray[0] = new Array();
questionSource[1].formatArray[0].type = "banner";
questionSource[1].formatArray[0].value = "Lisez la question et choisissez la bonne réponse.<br />";
questionSource[1].formatArray[0].value += "Jolene reçoit des soins pendant sa grossesse. Quel type de soins reçoit-elle?";
    
questionSource[1].formatArray[1] = new Array();
questionSource[1].formatArray[1].type = "interaction";
               
questionSource[1].formatArray[2] = new Array();
questionSource[1].formatArray[2].type = "normal";
questionSource[1].formatArray[2].value="<br /><br />";
               
               
questionSource[1].interactionArray.setting = new Array();
questionSource[1].interactionArray.setting.nbColumn = 1;      
         
questionSource[1].interactionArray.element = new Array();
questionSource[1].interactionArray.element[0] = new Array();

questionSource[1].interactionArray.element[0].id = 0;               
questionSource[1].interactionArray.element[0].value = "des soins postnataux";

questionSource[1].interactionArray.element[1] = new Array();
questionSource[1].interactionArray.element[1].value = "des soins prénataux";
questionSource[1].interactionArray.element[1].id = 1;               


questionSource[1].answerArray[0] = new Array();
questionSource[1].answerArray[0].id = 0;
questionSource[1].answerArray[0].value = false;
questionSource[1].answerArray[0].weight = 0;
               
questionSource[1].answerArray[1] = new Array();
questionSource[1].answerArray[1].id = 1;
questionSource[1].answerArray[1].value = true;
questionSource[1].answerArray[1].weight = 1;

/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/
questionSource[2] = new Array();
questionSource[2].formatArray = new Array();
questionSource[2].interactionArray = new Array();
questionSource[2].answerArray = new Array();

questionSource[2].incorrectAnswerFeedback  = "<br />Non, désolé.<br /><br />L’<strong>obstétricien</strong> est un médecin spécialiste de la grossesse et de l’accouchement.";
questionSource[2].incorrectAnswerFeedback  += "<br /><br />La <strong>sage-femme</strong> peut aussi s’occuper de la grossesse et de l’accouchement."; 

questionSource[2].correctAnswerFeedback  = "<br />Bonne réponse!<br /><br />L’<strong>obstétricien</strong> est un médecin spécialiste de la grossesse et de l’accouchement.<br />";
questionSource[2].correctAnswerFeedback  += "<br />La <strong>sage-femme</strong> peut aussi s’occuper de la grossesse et de l’accouchement.";
               
questionSource[2].questionType = "trueFalse";
questionSource[2].weight = 1;
questionSource[2].maxAttempt = 1;
questionSource[2].questionSlide = true;
questionSource[2].partialPoints = false;
               
questionSource[2].formatArray[0] = new Array();
questionSource[2].formatArray[0].type = "banner";
questionSource[2].formatArray[0].value = "Dites si l’affirmation est vraie ou fausse.<br />L’<strong>obstétricien</strong> est un médecin spécialiste de la grossesse et de l’accouchement.";

               
questionSource[2].formatArray[1] = new Array();
questionSource[2].formatArray[1].type = "interaction";

questionSource[2].formatArray[2] = new Array();
questionSource[2].formatArray[2].type = "normal";
questionSource[2].formatArray[2].value="<br /><br />";

               
questionSource[2].interactionArray.setting = new Array();
questionSource[2].interactionArray.setting.nbColumn = 1;
               
questionSource[2].interactionArray.element = new Array();
questionSource[2].interactionArray.element[0] = new Array();
questionSource[2].interactionArray.element[0].id = 0;
               
questionSource[2].interactionArray.element[0].value = "Vrai";
               
questionSource[2].interactionArray.element[0].mediaArray = new Array();

questionSource[2].interactionArray.element[1] = new Array();
questionSource[2].interactionArray.element[1].value = "Faux";
questionSource[2].interactionArray.element[1].id = 1;
questionSource[2].interactionArray.element[1].mediaArray = new Array();

questionSource[2].answerArray[0] = new Array();
questionSource[2].answerArray[0].id = 0;
questionSource[2].answerArray[0].value = true;
questionSource[2].answerArray[0].weight = 1;
               
questionSource[2].answerArray[1] = new Array();
questionSource[2].answerArray[1].id = 1;
questionSource[2].answerArray[1].value = false;
questionSource[2].answerArray[1].weight = 0;

/***********************************************/
/*                CHOIX MULTIPLES              */
/***********************************************/


questionSource[3] = new Array();
questionSource[3].formatArray = new Array();
questionSource[3].interactionArray = new Array();
questionSource[3].answerArray = new Array();

              
questionSource[3].questionType = "multipleChoice";
questionSource[3].weight = 1;
questionSource[3].maxAttempt = 2;
questionSource[3].questionSlide = true;
questionSource[3].customFeedback = true;
questionSource[3].partialPoints = false;
               
questionSource[3].formatArray[0] = new Array();
questionSource[3].formatArray[0].type = "banner";
questionSource[3].formatArray[0].value = "Lisez la question et choisissez <strong>la</strong> bonne réponse.<br />";
questionSource[3].formatArray[0].value += "Quel mot correspond à la définition : le moment où l’enfant est prêt à naître.";
    
questionSource[3].formatArray[1] = new Array();
questionSource[3].formatArray[1].type = "interaction";
               
questionSource[3].formatArray[2] = new Array();
questionSource[3].formatArray[2].type = "normal";
questionSource[3].formatArray[2].value="<br /><br />";
               
               
questionSource[3].interactionArray.setting = new Array();
questionSource[3].interactionArray.setting.nbColumn = 1;
               
questionSource[3].interactionArray.element = new Array();
questionSource[3].interactionArray.element[0] = new Array();

questionSource[3].interactionArray.element[0].id = 0;               
questionSource[3].interactionArray.element[0].value = "grossesse";

questionSource[3].interactionArray.element[1] = new Array();
questionSource[3].interactionArray.element[1].value = "accouchement";
questionSource[3].interactionArray.element[1].id = 1;               

questionSource[3].interactionArray.element[2] = new Array();
questionSource[3].interactionArray.element[2].value = "échographie";
questionSource[3].interactionArray.element[2].id = 2;               


questionSource[3].answerArray[0] = new Array();
questionSource[3].answerArray[0].id = 0;
questionSource[3].answerArray[0].value = false;
questionSource[3].answerArray[0].weight = 0;
questionSource[3].answerArray[0].customFeedback = "<br />Désolé. Ce n’est pas la bonne réponse.<br />";
questionSource[3].answerArray[0].customFeedback += "La « <strong>grossesse</strong> » veut dire être enceinte.";

               
questionSource[3].answerArray[1] = new Array();
questionSource[3].answerArray[1].id = 1;
questionSource[3].answerArray[1].value = true;
questionSource[3].answerArray[1].weight = 1;
questionSource[3].answerArray[1].customFeedback  = "<br />C’est exact!<br /><br />";
questionSource[3].answerArray[1].customFeedback  += "<br />L’« <strong>accouchement</strong> », c’est le moment où l’enfant est prêt à naître; c’est l’ensemble des phénomènes physiques qui permet à un bébé de sortir du corps de sa mère. Quand la mère s’apprête à donner naissance, on dit qu’elle va <strong>accoucher</strong>.";

questionSource[3].answerArray[2] = new Array();
questionSource[3].answerArray[2].id = 2;
questionSource[3].answerArray[2].value = false;
questionSource[3].answerArray[2].weight = 0;
questionSource[3].answerArray[2].customFeedback = "<br />Désolé. Ce n’est pas la bonne réponse.<br />";
questionSource[3].answerArray[2].customFeedback += "<br />L’« <strong>échographie</strong> » est une technique médicale qui permet de voir le bébé dans le ventre de la mère.";

/***********************************************/
/*                 CONTENU                  */
/***********************************************/

questionSource[4] = new Array();
               
questionSource[4].playerIdArray = new Array();
questionSource[4].formatArray = new Array();
questionSource[4].interactionArray = new Array();
               
questionSource[4].answerArray = new Array();
               
questionSource[4].questionType = "content";
questionSource[4].weight = 0;
questionSource[4].maxAttempt = 1;
questionSource[4].questionSlide = false;
questionSource[4].partialPoints = false;
               
questionSource[4].formatArray[0] = new Array();
questionSource[4].formatArray[0].type = "banner";
questionSource[4].formatArray[0].value = "Enceinte, accouchement et échographie";
               
questionSource[4].formatArray[1] = new Array();
questionSource[4].formatArray[1].type = "normal";
questionSource[4].formatArray[1].value = "";
               
questionSource[4].formatArray[2] = new Array();
questionSource[4].formatArray[2].type = "normal";
questionSource[4].formatArray[2].value = "La bonne réponse est « accouchement ».<br /><br />un <strong>accouchement</strong> (n. m.) : au moment où l’enfant est prêt à naître, l’ensemble des phénomènes physiques qui permet à un bébé de sortir du corps de sa mère. Quand la mère s’apprête à donner naissance, on dit qu’elle va <strong>accoucher</strong>.";
questionSource[4].formatArray[2].css = "interactionDiv";

questionSource[4].formatArray[3] = new Array();
questionSource[4].formatArray[3].type = "media";
questionSource[4].formatArray[3].mediaArray = new Array();

questionSource[4].formatArray[3].mediaArray[0] = new Array();
questionSource[4].formatArray[3].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_AUDIO4.mp3";
questionSource[4].formatArray[3].mediaArray[0].type = "audio";
questionSource[4].formatArray[3].mediaArray[0].location = "audio";
questionSource[4].formatArray[3].mediaArray[0].mediaSetting = new Array();
questionSource[4].formatArray[3].mediaArray[0].mediaSetting.autoStart = false;
questionSource[4].formatArray[3].mediaArray[0].mediaSetting.loop = false;


questionSource[4].formatArray[4] = new Array();
questionSource[4].formatArray[4].type = "normal";
questionSource[4].formatArray[4].value="<br />la <strong>grossesse</strong> (n. f.) : être enceinte. « <strong>Enceinte</strong> » veut dire attendre un enfant.<br />";
questionSource[4].formatArray[4].css = "interactionDiv";

questionSource[4].formatArray[5] = new Array();
questionSource[4].formatArray[5].type = "media";
questionSource[4].formatArray[5].mediaArray = new Array();


questionSource[4].formatArray[5].mediaArray[0] = new Array();
questionSource[4].formatArray[5].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_IMAGE3.jpg";
questionSource[4].formatArray[5].mediaArray[0].type = "image";
questionSource[4].formatArray[5].mediaArray[0].location = "image";
questionSource[4].formatArray[5].mediaArray[0].mediaSetting = new Array();
questionSource[4].formatArray[5].mediaArray[0].mediaSetting.width = 192;
questionSource[4].formatArray[5].mediaArray[0].mediaSetting.height = 140;
questionSource[4].formatArray[5].mediaArray[0].mediaSetting.fancy = false;

questionSource[4].formatArray[6] = new Array();
questionSource[4].formatArray[6].type = "media";
questionSource[4].formatArray[6].mediaArray = new Array();

questionSource[4].formatArray[6].mediaArray[0] = new Array();
questionSource[4].formatArray[6].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_AUDIO5.mp3";
questionSource[4].formatArray[6].mediaArray[0].type = "audio";
questionSource[4].formatArray[6].mediaArray[0].location = "audio";
questionSource[4].formatArray[6].mediaArray[0].mediaSetting = new Array();
questionSource[4].formatArray[6].mediaArray[0].mediaSetting.autoStart = false;
questionSource[4].formatArray[6].mediaArray[0].mediaSetting.loop = false;

questionSource[4].formatArray[7] = new Array();
questionSource[4].formatArray[7].type = "normal";
questionSource[4].formatArray[7].value="<br />une <strong>échographie</strong> (n. f.) : une technique médicale qui permet de voir le bébé dans le ventre de la mère.<br />";
questionSource[4].formatArray[7].css = "interactionDiv";


questionSource[4].formatArray[8] = new Array();
questionSource[4].formatArray[8].type = "media";
questionSource[4].formatArray[8].mediaArray = new Array();

questionSource[4].formatArray[8].mediaArray[0] = new Array();
questionSource[4].formatArray[8].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_IMAGE6.jpg";
questionSource[4].formatArray[8].mediaArray[0].type = "image";
questionSource[4].formatArray[8].mediaArray[0].location = "image";
questionSource[4].formatArray[8].mediaArray[0].mediaSetting = new Array();
questionSource[4].formatArray[8].mediaArray[0].mediaSetting.width = 250;
questionSource[4].formatArray[8].mediaArray[0].mediaSetting.height = 200;
questionSource[4].formatArray[8].mediaArray[0].mediaSetting.fancy = false;

questionSource[4].formatArray[9] = new Array();
questionSource[4].formatArray[9].type = "media";
questionSource[4].formatArray[9].mediaArray = new Array();

questionSource[4].formatArray[9].mediaArray[0] = new Array();
questionSource[4].formatArray[9].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_AUDIO6.mp3";
questionSource[4].formatArray[9].mediaArray[0].type = "audio";
questionSource[4].formatArray[9].mediaArray[0].location = "audio";
questionSource[4].formatArray[9].mediaArray[0].mediaSetting = new Array();
questionSource[4].formatArray[9].mediaArray[0].mediaSetting.autoStart = false;
questionSource[4].formatArray[9].mediaArray[0].mediaSetting.loop = false;

/***********************************************/
/*                CHOIX MULTIPLES              */
/***********************************************/


questionSource[5] = new Array();
questionSource[5].formatArray = new Array();
questionSource[5].interactionArray = new Array();
questionSource[5].answerArray = new Array();

questionSource[5].incorrectAnswerFeedback  = "<br />Désolé. Ce n’est pas la bonne réponse.<br /><br />";

questionSource[5].correctAnswerFeedback  = "<br />Vous avez raison!<br /><br />"; 
               
questionSource[5].questionType = "multipleChoice";
questionSource[5].weight = 1;
questionSource[5].maxAttempt = 1;
questionSource[5].questionSlide = true;
questionSource[5].partialPoints = false;
               
questionSource[5].formatArray[0] = new Array();
questionSource[5].formatArray[0].type = "banner";
questionSource[5].formatArray[0].value = "Lisez la question et choisissez <strong>la</strong> bonne réponse.<br />";
questionSource[5].formatArray[0].value += "Selon vous, que veut dire l’expression « <strong>grossesse à risque</strong> »?";
    
questionSource[5].formatArray[1] = new Array();
questionSource[5].formatArray[1].type = "interaction";
               
questionSource[5].formatArray[2] = new Array();
questionSource[5].formatArray[2].type = "normal";
questionSource[5].formatArray[2].value="<br /><br />";
               
               
questionSource[5].interactionArray.setting = new Array();
questionSource[5].interactionArray.setting.nbColumn = 1;
               
questionSource[5].interactionArray.element = new Array();
questionSource[5].interactionArray.element[0] = new Array();

questionSource[5].interactionArray.element[0].id = 0;               
questionSource[5].interactionArray.element[0].value = "Une grossesse qui présente <u>peu</u> de danger pour la santé ou la vie de la mère ou de l’enfant.";

questionSource[5].interactionArray.element[1] = new Array();
questionSource[5].interactionArray.element[1].value = "Une grossesse qui présente un danger pour la santé ou la vie de la mère ou de l’enfant.";
questionSource[5].interactionArray.element[1].id = 1;               


questionSource[5].answerArray[0] = new Array();
questionSource[5].answerArray[0].id = 0;
questionSource[5].answerArray[0].value = false;
questionSource[5].answerArray[0].weight = 0;

               
questionSource[5].answerArray[1] = new Array();
questionSource[5].answerArray[1].id = 1;
questionSource[5].answerArray[1].value = true;
questionSource[5].answerArray[1].weight = 1;

/***********************************************/
/*                 CONTENU                  */
/***********************************************/

questionSource[6] = new Array();
               
questionSource[6].playerIdArray = new Array();
questionSource[6].formatArray = new Array();
questionSource[6].interactionArray = new Array();
               
questionSource[6].answerArray = new Array();
               
questionSource[6].questionType = "content";
questionSource[6].weight = 0;
questionSource[6].maxAttempt = 1;
questionSource[6].questionSlide = false;
               
questionSource[6].formatArray[0] = new Array();
questionSource[6].formatArray[0].type = "banner";
questionSource[6].formatArray[0].value = "Une grossesse à risque";
               
questionSource[6].formatArray[1] = new Array();
questionSource[6].formatArray[1].type = "normal";
questionSource[6].formatArray[1].value = "";
               
questionSource[6].formatArray[2] = new Array();
questionSource[6].formatArray[2].type = "normal";
questionSource[6].formatArray[2].value = "une <strong>grossesse à risque</strong> (loc.) : une grossesse qui présente un danger pour la santé ou la vie de la mère ou de l’enfant.";
questionSource[6].formatArray[2].css = "interactionDiv";

questionSource[6].formatArray[3] = new Array();
questionSource[6].formatArray[3].type = "media";
questionSource[6].formatArray[3].mediaArray = new Array();

questionSource[6].formatArray[3].mediaArray[0] = new Array();
questionSource[6].formatArray[3].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_AUDIO7.mp3";
questionSource[6].formatArray[3].mediaArray[0].type = "audio";
questionSource[6].formatArray[3].mediaArray[0].location = "audio";
questionSource[6].formatArray[3].mediaArray[0].mediaSetting = new Array();
questionSource[6].formatArray[3].mediaArray[0].mediaSetting.autoStart = false;
questionSource[6].formatArray[3].mediaArray[0].mediaSetting.loop = false;


questionSource[6].formatArray[4] = new Array();
questionSource[6].formatArray[4].type = "normal";
questionSource[6].formatArray[4].value="<br />une <strong>grossesse à faible risque</strong> (loc.) : une grossesse qui présente peu de danger pour la santé ou la vie de la mère ou de l’enfant.<br />";
questionSource[6].formatArray[4].css = "interactionDiv";

questionSource[6].formatArray[5] = new Array();
questionSource[6].formatArray[5].type = "media";
questionSource[6].formatArray[5].mediaArray = new Array();

questionSource[6].formatArray[5].mediaArray[0] = new Array();
questionSource[6].formatArray[5].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_AUDIO8.mp3";
questionSource[6].formatArray[5].mediaArray[0].type = "audio";
questionSource[6].formatArray[5].mediaArray[0].location = "audio";
questionSource[6].formatArray[5].mediaArray[0].mediaSetting = new Array();
questionSource[6].formatArray[5].mediaArray[0].mediaSetting.autoStart = false;
questionSource[6].formatArray[5].mediaArray[0].mediaSetting.loop = false;

/********************************************************/
/*          ASSOCIATION                                 */
/********************************************************/

questionSource[7] = new Array();
questionSource[7].formatArray = new Array();
questionSource[7].interactionArray = new Array();
questionSource[7].answerArray = new Array();

questionSource[7].incorrectAnswerFeedback  = "<br />Désolé, non.<br /><br />";

questionSource[7].correctAnswerFeedback  = "<br />Vous avez réussi à associer les mots aux bonnes définitions.<br /><br />"; 


questionSource[7].questionType = "association";
questionSource[7].weight = 1;
questionSource[7].maxAttempt = 2;
questionSource[7].questionSlide = true;
questionSource[7].partialPoints = false;

questionSource[7].formatArray[0] = new Array();
questionSource[7].formatArray[0].type = "banner";
questionSource[7].formatArray[0].value = "Associez les mots aux bonnes définitions.";

questionSource[7].formatArray[1] = new Array();
questionSource[7].formatArray[1].type = "interaction";

questionSource[7].interactionArray.setting = new Array();
questionSource[7].interactionArray.setting.nbColumn = 1;

questionSource[7].interactionArray.element = new Array();



/********************************************************/
/*           Element 0 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
questionSource[7].interactionArray.element[0] = new Array();
questionSource[7].interactionArray.element[0].elementFixe = new Array();
questionSource[7].interactionArray.element[0].elementFixe.id = 0;

questionSource[7].interactionArray.element[0].elementFixe.value = "le <strong>suivi prénatal</strong>";


// element[n].elementSortable[n] de la question est la colonne de droite de la question d'association
questionSource[7].interactionArray.element[0].elementSortable = new Array();
questionSource[7].interactionArray.element[0].elementSortable.id = 1;
questionSource[7].interactionArray.element[0].elementSortable.value = "Une série de rendez-vous avec l’obstétricien ou la sage-femme pour vérifier l’état de santé de la mère et du bébé.";


/********************************************************/
/*           Element 1 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
questionSource[7].interactionArray.element[1] = new Array();
questionSource[7].interactionArray.element[1].elementFixe = new Array();
questionSource[7].interactionArray.element[1].elementFixe.id = 2;

questionSource[7].interactionArray.element[1].elementFixe.value = "le <strong>suivi postnatal</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
questionSource[7].interactionArray.element[1].elementSortable = new Array();
questionSource[7].interactionArray.element[1].elementSortable.id = 3;
questionSource[7].interactionArray.element[1].elementSortable.value = "Une série de rendez-vous avec le médecin ou la sage-femme pour vérifier l’état de santé du bébé et de la mère après l’accouchement." 

/********************************************************/
/*           Element 2 de la question                   */
/********************************************************/

questionSource[7].interactionArray.element[2] = new Array();
questionSource[7].interactionArray.element[2].elementFixe = new Array();
questionSource[7].interactionArray.element[2].elementFixe.id = 4;

questionSource[7].interactionArray.element[2].elementFixe.value = "une <strong>maison de naissance</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
questionSource[7].interactionArray.element[2].elementSortable = new Array();
questionSource[7].interactionArray.element[2].elementSortable.id = 5;
questionSource[7].interactionArray.element[2].elementSortable.value = "Un endroit où les femmes peuvent accoucher et où l’on donne des soins aux mères et à leur bébé."; 

/********************************************************/
/*           Element 3 de la question                   */
/********************************************************/

questionSource[7].interactionArray.element[3] = new Array();
questionSource[7].interactionArray.element[3].elementFixe = new Array();
questionSource[7].interactionArray.element[3].elementFixe.id = 6;

questionSource[7].interactionArray.element[3].elementFixe.value = "la <strong>péridurale</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
questionSource[7].interactionArray.element[3].elementSortable = new Array();
questionSource[7].interactionArray.element[3].elementSortable.id = 7;
questionSource[7].interactionArray.element[3].elementSortable.value = "Une injection que l’on donne aux femmes pendant l’accouchement pour diminuer la douleur."; 

/********************************************************/
/*           Element 4 de la question                   */
/********************************************************/

questionSource[7].interactionArray.element[4] = new Array();
questionSource[7].interactionArray.element[4].elementFixe = new Array();
questionSource[7].interactionArray.element[4].elementFixe.id = 8;

questionSource[7].interactionArray.element[4].elementFixe.value = "des <strong>cours prénataux</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
questionSource[7].interactionArray.element[4].elementSortable = new Array();
questionSource[7].interactionArray.element[4].elementSortable.id = 9;
questionSource[7].interactionArray.element[4].elementSortable.value = "Des cours donnés aux femmes et à leur conjoint pendant la grossesse."; 

questionSource[7].answerArray[0] = new Array();
questionSource[7].answerArray[0].id = 0;
questionSource[7].answerArray[0].value = 1;
questionSource[7].answerArray[0].weight = 0.2;
               
questionSource[7].answerArray[1] = new Array();
questionSource[7].answerArray[1].id = 2;
questionSource[7].answerArray[1].value = 3;
questionSource[7].answerArray[1].weight = 0.2;

questionSource[7].answerArray[2] = new Array();
questionSource[7].answerArray[2].id = 4;
questionSource[7].answerArray[2].value = 5;
questionSource[7].answerArray[2].weight = 0.2;

questionSource[7].answerArray[3] = new Array();
questionSource[7].answerArray[3].id = 6;
questionSource[7].answerArray[3].value = 7;
questionSource[7].answerArray[3].weight = 0.2;

questionSource[7].answerArray[4] = new Array();
questionSource[7].answerArray[4].id = 8;
questionSource[7].answerArray[4].value = 9;
questionSource[7].answerArray[4].weight = 0.2;

/***********************************************/
/*                 CONTENU                  */
/***********************************************/

questionSource[8] = new Array();
               
questionSource[8].playerIdArray = new Array();
questionSource[8].formatArray = new Array();
questionSource[8].interactionArray = new Array();
               
questionSource[8].answerArray = new Array();
               
questionSource[8].questionType = "content";
questionSource[8].weight = 0;
questionSource[8].maxAttempt = 1;
questionSource[8].questionSlide = false;
questionSource[8].partialPoints = false;
               
questionSource[8].formatArray[0] = new Array();
questionSource[8].formatArray[0].type = "banner";
questionSource[8].formatArray[0].value = "<h2>Quelques définitions</h2>";
               
questionSource[8].formatArray[1] = new Array();
questionSource[8].formatArray[1].type = "normal";
questionSource[8].formatArray[1].value = "";
               
questionSource[8].formatArray[2] = new Array();
questionSource[8].formatArray[2].type = "normal";
questionSource[8].formatArray[2].value = "un <strong>suivi prénatal</strong> (n. m.) : une série de rendez-vous avec l’obstétricien ou la sage-femme pour vérifier l’état de santé de la mère et du bébé pendant la grossesse.";
questionSource[8].formatArray[2].css = "interactionDiv";

questionSource[8].formatArray[3] = new Array();
questionSource[8].formatArray[3].type = "media";
questionSource[8].formatArray[3].mediaArray = new Array();

questionSource[8].formatArray[3].mediaArray[0] = new Array();
questionSource[8].formatArray[3].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_AUDIO9.mp3";
questionSource[8].formatArray[3].mediaArray[0].type = "audio";
questionSource[8].formatArray[3].mediaArray[0].location = "audio";
questionSource[8].formatArray[3].mediaArray[0].mediaSetting = new Array();
questionSource[8].formatArray[3].mediaArray[0].mediaSetting.autoStart = false;
questionSource[8].formatArray[3].mediaArray[0].mediaSetting.loop = false;


questionSource[8].formatArray[4] = new Array();
questionSource[8].formatArray[4].type = "normal";
questionSource[8].formatArray[4].value="<br />un <strong>suivi postnatal</strong> (n. m.) : une série de rendez-vous avec le médecin ou la sage-femme pour vérifier l’état de santé du bébé et de la mère après l’accouchement.<br />";
questionSource[8].formatArray[4].css = "interactionDiv";

questionSource[8].formatArray[5] = new Array();
questionSource[8].formatArray[5].type = "media";
questionSource[8].formatArray[5].mediaArray = new Array();

questionSource[8].formatArray[5].mediaArray[0] = new Array();
questionSource[8].formatArray[5].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_AUDIO10.mp3";
questionSource[8].formatArray[5].mediaArray[0].type = "audio";
questionSource[8].formatArray[5].mediaArray[0].location = "audio";
questionSource[8].formatArray[5].mediaArray[0].mediaSetting = new Array();
questionSource[8].formatArray[5].mediaArray[0].mediaSetting.autoStart = false;
questionSource[8].formatArray[5].mediaArray[0].mediaSetting.loop = false;

questionSource[8].formatArray[6] = new Array();
questionSource[8].formatArray[6].type = "normal";
questionSource[8].formatArray[6].value="<br />une <strong>maison de naissance</strong> (n. f.) : un endroit où les femmes peuvent accoucher et où l’on donne des soins aux mères et à leur bébé. Les sages-femmes travaillent dans les maisons de naissance. La « maison de naissance » est un établissement non hospitalier. Ce n’est pas un hôpital.<br />";
questionSource[8].formatArray[6].css = "interactionDiv";

questionSource[8].formatArray[7] = new Array();
questionSource[8].formatArray[7].type = "media";
questionSource[8].formatArray[7].mediaArray = new Array();

questionSource[8].formatArray[7].mediaArray[0] = new Array();
questionSource[8].formatArray[7].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_AUDIO11.mp3";
questionSource[8].formatArray[7].mediaArray[0].type = "audio";
questionSource[8].formatArray[7].mediaArray[0].location = "audio";
questionSource[8].formatArray[7].mediaArray[0].mediaSetting = new Array();
questionSource[8].formatArray[7].mediaArray[0].mediaSetting.autoStart = false;
questionSource[8].formatArray[7].mediaArray[0].mediaSetting.loop = false;

questionSource[8].formatArray[8] = new Array();
questionSource[8].formatArray[8].type = "normal";
questionSource[8].formatArray[8].value="<br />des <strong>cours prénataux</strong> (n. m.) : des cours donnés aux femmes et à leur conjoint pendant la grossesse. Plusieurs sujets sont abordés pendant le cours : l’accouchement, la santé de la mère et de l’enfant, les soins du bébé après sa naissance, etc.<br />";
questionSource[8].formatArray[8].css = "interactionDiv";

questionSource[8].formatArray[9] = new Array();
questionSource[8].formatArray[9].type = "media";
questionSource[8].formatArray[9].mediaArray = new Array();

questionSource[8].formatArray[9].mediaArray[0] = new Array();
questionSource[8].formatArray[9].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_AUDIO12.mp3";
questionSource[8].formatArray[9].mediaArray[0].type = "audio";
questionSource[8].formatArray[9].mediaArray[0].location = "audio";
questionSource[8].formatArray[9].mediaArray[0].mediaSetting = new Array();
questionSource[8].formatArray[9].mediaArray[0].mediaSetting.autoStart = false;
questionSource[8].formatArray[9].mediaArray[0].mediaSetting.loop = false;

questionSource[8].formatArray[10] = new Array();
questionSource[8].formatArray[10].type = "normal";
questionSource[8].formatArray[10].value ="<br />une <strong>péridurale</strong> (n. f.) : une injection que l’on donne aux femmes pendant l’accouchement pour diminuer la douleur.";
questionSource[8].formatArray[10].value += "<img width='270' height='180' src='image/CLIC5_U7_M1_CO_A1_OA1_COMB_IMAGE7.jpg'  />";
 
questionSource[8].formatArray[10].css = "interactionDiv";

questionSource[8].formatArray[11] = new Array();
questionSource[8].formatArray[11].type = "media";
questionSource[8].formatArray[11].mediaArray = new Array();

questionSource[8].formatArray[11].mediaArray[0] = new Array();
questionSource[8].formatArray[11].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_OA1_COMB_AUDIO13.mp3";
questionSource[8].formatArray[11].mediaArray[0].type = "audio";
questionSource[8].formatArray[11].mediaArray[0].location = "audio";
questionSource[8].formatArray[11].mediaArray[0].mediaSetting = new Array();
questionSource[8].formatArray[11].mediaArray[0].mediaSetting.autoStart = false;
questionSource[8].formatArray[11].mediaArray[0].mediaSetting.loop = false;

/***********************************************/
/*                 CONTENU                  */
/***********************************************/

questionSource[9] = new Array();
               
questionSource[9].playerIdArray = new Array();
questionSource[9].formatArray = new Array();
questionSource[9].interactionArray = new Array();
               
questionSource[9].answerArray = new Array();
               
questionSource[9].questionType = "content";
questionSource[9].weight = 0;
questionSource[9].maxAttempt = 1;
questionSource[9].questionSlide = false;
questionSource[9].partialPoints = false;
               
               
questionSource[9].formatArray[0] = new Array();
questionSource[9].formatArray[0].type = "banner";
questionSource[9].formatArray[0].value = "<h2>L’exercice est terminé.</h2>";
               
  

questionSource[9].formatArray[1] = new Array();
questionSource[9].formatArray[1].type = "normal";
questionSource[9].formatArray[1].css = "interactionDiv";
questionSource[9].formatArray[1].value = "Avez-vous bien pris en note les nouveaux mots et les nouvelles expressions?";
questionSource[9].formatArray[1].value += "<br /><br />Êtes-vous prêt à écouter les conseils et suggestions d’Anika?<br /><br />Retournez à l’activité.<br /><br />";

 

               