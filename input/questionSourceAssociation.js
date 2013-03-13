var questionSource = new Array();

/********************************************************/
/*          ASSOCIATION                                 */
/********************************************************/

ass1 = new Array();
ass1.formatArray = new Array();
ass1.interactionArray = new Array();
ass1.answerArray = new Array();

ass1.questionType = "association";
ass1.nbColumn = 1;
ass1.weight = 1;
ass1.maxAttempt = 1;
ass1.questionSlide = true;

ass1.formatArray[0] = new Array();
ass1.formatArray[0].type = "banner";
ass1.formatArray[0].value = "<br />Associez les noms de pays à leur drapeau respectif.";

ass1.formatArray[1] = new Array();
ass1.formatArray[1].type = "interaction";

ass1.interactionArray.setting = new Array();

ass1.interactionArray.element = new Array();



/********************************************************/
/*           Element 0 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
ass1.interactionArray.element[0] = new Array();
ass1.interactionArray.element[0].elementFixe = new Array();
ass1.interactionArray.element[0].elementFixe.id = 0;

ass1.interactionArray.element[0].elementFixe.value = "";

ass1.interactionArray.element[0].elementFixe.mediaArray = new Array();


ass1.interactionArray.element[0].elementFixe.mediaArray[0] = new Array();
ass1.interactionArray.element[0].elementFixe.mediaArray[0].type="image";
ass1.interactionArray.element[0].elementFixe.mediaArray[0].value="canada.jpg";
ass1.interactionArray.element[0].elementFixe.mediaArray[0].location = "image";
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting = new Array();
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.width = 100;
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.height = 65;
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.widthRatio = 1;
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.heightRatio = 1;
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.fancy = true;


// element[n].elementSortable[n] de la question est la colonne de droite de la question d'association
ass1.interactionArray.element[0].elementSortable = new Array();
ass1.interactionArray.element[0].elementSortable.id = 1;
ass1.interactionArray.element[0].elementSortable.value = "Canada";
//ass1.interactionArray.element[0].elementSortable.mediaArray = new Array();

/********************************************************/
/*           Element 1 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
ass1.interactionArray.element[1] = new Array();
ass1.interactionArray.element[1].elementFixe = new Array();
ass1.interactionArray.element[1].elementFixe.id = 2;

ass1.interactionArray.element[1].elementFixe.value = "";

ass1.interactionArray.element[1].elementFixe.mediaArray = new Array();

ass1.interactionArray.element[1].elementFixe.mediaArray[0] = new Array();
ass1.interactionArray.element[1].elementFixe.mediaArray[0].type="image";
ass1.interactionArray.element[1].elementFixe.mediaArray[0].value="belgique.jpg";
ass1.interactionArray.element[1].elementFixe.mediaArray[0].location = "image";
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting = new Array();
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.width = 105;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.height = 65;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.widthRatio = 1;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.heightRatio = 1;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.fancy = true;


// elementSortable[n] de la question est la colonne de droite de la question d'association
ass1.interactionArray.element[1].elementSortable = new Array();
ass1.interactionArray.element[1].elementSortable.id = 3;
ass1.interactionArray.element[1].elementSortable.value = "Belgique" 

/********************************************************/
/*           Element 2 de la question                   */
/********************************************************/

ass1.interactionArray.element[2] = new Array();
ass1.interactionArray.element[2].elementFixe = new Array();
ass1.interactionArray.element[2].elementFixe.id = 4;

ass1.interactionArray.element[2].elementFixe.value = "";

ass1.interactionArray.element[2].elementFixe.mediaArray = new Array();

ass1.interactionArray.element[2].elementFixe.mediaArray[0] = new Array();
ass1.interactionArray.element[2].elementFixe.mediaArray[0].type="image";
ass1.interactionArray.element[2].elementFixe.mediaArray[0].value="france.jpg";
ass1.interactionArray.element[2].elementFixe.mediaArray[0].location = "image";
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting = new Array();
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.width = 105;
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.height = 65;
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.widthRatio = 1;
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.heightRatio = 1;
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.fancy = true;


// elementSortable[n] de la question est la colonne de droite de la question d'association
ass1.interactionArray.element[2].elementSortable = new Array();
ass1.interactionArray.element[2].elementSortable.id = 5;
ass1.interactionArray.element[2].elementSortable.value = "France"; 

ass1.answerArray[0] = new Array();
ass1.answerArray[0].id = 0;
ass1.answerArray[0].value = 1;
ass1.answerArray[0].weight = 0.33;
               
ass1.answerArray[1] = new Array();
ass1.answerArray[1].id = 2;
ass1.answerArray[1].value = 3;
ass1.answerArray[1].weight = 0.33;

ass1.answerArray[2] = new Array();
ass1.answerArray[2].id = 4;
ass1.answerArray[2].value = 5;
ass1.answerArray[2].weight = 0.33;

this.questionSource[0] = new Array();
this.questionSource[0] = ass1;   

/********************************************************/
/*          ASSOCIATION                                 */
/********************************************************/

ass2 = new Array();
ass2.formatArray = new Array();
ass2.interactionArray = new Array();
ass2.answerArray = new Array();

ass2.incorrectAnswerFeedback  = "<br />Désolé, non.<br /><br />";

ass2.correctAnswerFeedback  = "<br />Vous avez réussi à associer les mots aux bonnes définitions.<br /><br />"; 


ass2.questionType = "association";
ass2.weight = 1;
ass2.maxAttempt = 2;
ass2.questionSlide = true;
ass2.partialPoints = false;

ass2.formatArray[0] = new Array();
ass2.formatArray[0].type = "banner";
ass2.formatArray[0].value = "Associez les mots aux bonnes définitions.";

ass2.formatArray[1] = new Array();
ass2.formatArray[1].type = "interaction";

ass2.interactionArray.setting = new Array();
ass2.interactionArray.setting.nbColumn = 1;

ass2.interactionArray.element = new Array();



/********************************************************/
/*           Element 0 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
ass2.interactionArray.element[0] = new Array();
ass2.interactionArray.element[0].elementFixe = new Array();
ass2.interactionArray.element[0].elementFixe.id = 0;

ass2.interactionArray.element[0].elementFixe.value = "le <strong>suivi prénatal</strong>";


// element[n].elementSortable[n] de la question est la colonne de droite de la question d'association
ass2.interactionArray.element[0].elementSortable = new Array();
ass2.interactionArray.element[0].elementSortable.id = 1;
ass2.interactionArray.element[0].elementSortable.value = "Une série de rendez-vous avec l’obstétricien ou la sage-femme pour vérifier l’état de santé de la mère et du bébé.";


/********************************************************/
/*           Element 1 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
ass2.interactionArray.element[1] = new Array();
ass2.interactionArray.element[1].elementFixe = new Array();
ass2.interactionArray.element[1].elementFixe.id = 2;

ass2.interactionArray.element[1].elementFixe.value = "le <strong>suivi postnatal</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
ass2.interactionArray.element[1].elementSortable = new Array();
ass2.interactionArray.element[1].elementSortable.id = 3;
ass2.interactionArray.element[1].elementSortable.value = "Une série de rendez-vous avec le médecin ou la sage-femme pour vérifier l’état de santé du bébé et de la mère après l’accouchement." 

/********************************************************/
/*           Element 2 de la question                   */
/********************************************************/

ass2.interactionArray.element[2] = new Array();
ass2.interactionArray.element[2].elementFixe = new Array();
ass2.interactionArray.element[2].elementFixe.id = 4;

ass2.interactionArray.element[2].elementFixe.value = "une <strong>maison de naissance</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
ass2.interactionArray.element[2].elementSortable = new Array();
ass2.interactionArray.element[2].elementSortable.id = 5;
ass2.interactionArray.element[2].elementSortable.value = "Un endroit où les femmes peuvent accoucher et où l’on donne des soins aux mères et à leur bébé."; 

/********************************************************/
/*           Element 3 de la question                   */
/********************************************************/

ass2.interactionArray.element[3] = new Array();
ass2.interactionArray.element[3].elementFixe = new Array();
ass2.interactionArray.element[3].elementFixe.id = 6;

ass2.interactionArray.element[3].elementFixe.value = "la <strong>péridurale</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
ass2.interactionArray.element[3].elementSortable = new Array();
ass2.interactionArray.element[3].elementSortable.id = 7;
ass2.interactionArray.element[3].elementSortable.value = "Une injection que l’on donne aux femmes pendant l’accouchement pour diminuer la douleur."; 

/********************************************************/
/*           Element 4 de la question                   */
/********************************************************/

ass2.interactionArray.element[4] = new Array();
ass2.interactionArray.element[4].elementFixe = new Array();
ass2.interactionArray.element[4].elementFixe.id = 8;

ass2.interactionArray.element[4].elementFixe.value = "des <strong>cours prénataux</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
ass2.interactionArray.element[4].elementSortable = new Array();
ass2.interactionArray.element[4].elementSortable.id = 9;
ass2.interactionArray.element[4].elementSortable.value = "Des cours donnés aux femmes et à leur conjoint pendant la grossesse."; 

ass2.answerArray[0] = new Array();
ass2.answerArray[0].id = 0;
ass2.answerArray[0].value = 1;
ass2.answerArray[0].weight = 0.2;
               
ass2.answerArray[1] = new Array();
ass2.answerArray[1].id = 2;
ass2.answerArray[1].value = 3;
ass2.answerArray[1].weight = 0.2;

ass2.answerArray[2] = new Array();
ass2.answerArray[2].id = 4;
ass2.answerArray[2].value = 5;
ass2.answerArray[2].weight = 0.2;

ass2.answerArray[3] = new Array();
ass2.answerArray[3].id = 6;
ass2.answerArray[3].value = 7;
ass2.answerArray[3].weight = 0.2;

ass2.answerArray[4] = new Array();
ass2.answerArray[4].id = 8;
ass2.answerArray[4].value = 9;
ass2.answerArray[4].weight = 0.2;

this.questionSource[1] = new Array();
this.questionSource[1] = ass2;
