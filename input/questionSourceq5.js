var questionSource = new Array();

/***********************************************/
/*                 CONTENU                  */
/***********************************************/

contentSlide1 = new Array();
               
contentSlide1.playerIdArray = new Array();
contentSlide1.formatArray = new Array();
contentSlide1.interactionArray = new Array();
               
contentSlide1.answerArray = new Array();
               
contentSlide1.questionType = "content";
contentSlide1.weight = 0;
contentSlide1.maxAttempt = 1;
contentSlide1.questionSlide = false;
               
contentSlide1.formatArray[0] = new Array();
contentSlide1.formatArray[0].css = "banner";
contentSlide1.formatArray[0].type = "normal";
contentSlide1.formatArray[0].value = "Du vocabulaire pour décrire le rôle du père";
               
contentSlide1.formatArray[1] = new Array();
contentSlide1.formatArray[1].type = "normal";
contentSlide1.formatArray[1].value = "";
               
contentSlide1.formatArray[2] = new Array();
contentSlide1.formatArray[2].type = "normal";
contentSlide1.formatArray[2].value = "<p>Vous devez rédiger  un texte pour décrire le rôle du père pendant la grossesse et l'accouchement.  Pour rédiger votre texte, vous allez utiliser des adjectifs, des expressions et  des verbes.</p><p align='center'><em>Vérifiez votre compréhension du  vocabulaire pour décrire le rôle du père.</em></p><br /><br />";
contentSlide1.formatArray[2].css = "intro";


contentSlide1.formatArray[3] = new Array();
contentSlide1.formatArray[3].type = "normal";
contentSlide1.formatArray[3].value="<br /><br />";

this.questionSource = new Array();
this.questionSource[0] = new Array();
this.questionSource[0] = contentSlide1;

/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/

tf1 = new Array();
tf1.formatArray = new Array();
tf1.interactionArray = new Array();
tf1.answerArray = new Array();

tf1.incorrectAnswerFeedback  = "<p>Non, désolé.</p><p>«&nbsp;<strong>Aménager</strong> <strong>une chambre</strong>&nbsp;» veut dire  préparer la pièce où l'enfant va dormir. On peut acheter des meubles et décorer  la pièce.<strong></strong></p>"; 

tf1.correctAnswerFeedback  = "<p>Vous avez raison!</p>«&nbsp;<strong>Aménager</strong> <strong>une chambre</strong>&nbsp;» veut dire préparer la pièce où l'enfant va  dormir. On peut acheter des meubles et décorer la pièce."; 
               
tf1.questionType = "trueFalse";
tf1.weight = 1;
tf1.maxAttempt = 1;
tf1.questionSlide = true;
tf1.partialPoints = false;
               
tf1.formatArray[0] = new Array();
tf1.formatArray[0].css = "banner";
tf1.formatArray[0].type = "normal";
tf1.formatArray[0].value = "Dites si l'affirmation est vraie ou fausse. <br />«&nbsp;<strong>Aménager  une chambre</strong>&nbsp;» veut dire préparer la pièce où l'enfant va dormir.<strong></strong>";

               
tf1.formatArray[1] = new Array();
tf1.formatArray[1].type = "interaction";

tf1.formatArray[2] = new Array();
tf1.formatArray[2].type = "normal";
tf1.formatArray[2].value="<br /><br />";

               
tf1.interactionArray.setting = new Array();
tf1.interactionArray.setting.nbColumn = 1;
               
tf1.interactionArray.element = new Array();
tf1.interactionArray.element[0] = new Array();
tf1.interactionArray.element[0].id = 0;
               
tf1.interactionArray.element[0].value = "Vrai";
               
tf1.interactionArray.element[0].mediaArray = new Array();

tf1.interactionArray.element[1] = new Array();
tf1.interactionArray.element[1].value = "Faux";
tf1.interactionArray.element[1].id = 1;
tf1.interactionArray.element[1].mediaArray = new Array();

tf1.answerArray[0] = new Array();
tf1.answerArray[0].id = 0;
tf1.answerArray[0].value = true;
tf1.answerArray[0].weight = 1;
               
tf1.answerArray[1] = new Array();
tf1.answerArray[1].id = 1;
tf1.answerArray[1].value = false;
tf1.answerArray[1].weight = 0;

this.questionSource[1] = new Array();
this.questionSource[1] = tf1;

/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/

tf2 = new Array();
tf2.formatArray = new Array();
tf2.interactionArray = new Array();
tf2.answerArray = new Array();

tf2.incorrectAnswerFeedback  = "<p>Non, désolé. </p><p>« <strong>Apaiser les craintes</strong> » d'une personne veut dire rassurer la  personne pour qu'elle oublie ses peurs.<strong></strong></p>"; 

tf2.correctAnswerFeedback  = "Bonne réponse!"; 
               
tf2.questionType = "trueFalse";
tf2.weight = 1;
tf2.maxAttempt = 1;
tf2.questionSlide = true;
tf2.partialPoints = false;
               
tf2.formatArray[0] = new Array();
tf2.formatArray[0].css = "banner";
tf2.formatArray[0].type = "normal";
tf2.formatArray[0].value = "Dites si l'affirmation est vraie ou fausse.<br />Noah  veut <strong>apaiser les craintes</strong> de sa conjointe. Il veut la rassurer.";

               
tf2.formatArray[1] = new Array();
tf2.formatArray[1].type = "interaction";

tf2.formatArray[2] = new Array();
tf2.formatArray[2].type = "normal";
tf2.formatArray[2].value="<br /><br />";

               
tf2.interactionArray.setting = new Array();
tf2.interactionArray.setting.nbColumn = 1;
               
tf2.interactionArray.element = new Array();
tf2.interactionArray.element[0] = new Array();
tf2.interactionArray.element[0].id = 0;
               
tf2.interactionArray.element[0].value = "Vrai";
               
tf2.interactionArray.element[0].mediaArray = new Array();

tf2.interactionArray.element[1] = new Array();
tf2.interactionArray.element[1].value = "Faux";
tf2.interactionArray.element[1].id = 1;
tf2.interactionArray.element[1].mediaArray = new Array();

tf2.answerArray[0] = new Array();
tf2.answerArray[0].id = 0;
tf2.answerArray[0].value = true;
tf2.answerArray[0].weight = 1;
               
tf2.answerArray[1] = new Array();
tf2.answerArray[1].id = 1;
tf2.answerArray[1].value = false;
tf2.answerArray[1].weight = 0;

this.questionSource[2] = new Array();
this.questionSource[2] = tf2;

/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/

tf3 = new Array();
tf3.formatArray = new Array();
tf3.interactionArray = new Array();
tf3.answerArray = new Array();

tf3.incorrectAnswerFeedback  = "Non, désolé.<br><br>Les techniques de respiration sont des façons de respirer pour faciliter l’accouchement. La façon de respirer peut aider la mère à accoucher de son bébé."; 

tf3.correctAnswerFeedback  = "<p>Bonne réponse!</p>La façon de respirer peut aider la mère à accoucher de  son bébé."; 
               
tf3.questionType = "trueFalse";
tf3.weight = 1;
tf3.maxAttempt = 1;
tf3.questionSlide = true;
tf3.partialPoints = false;
               
tf3.formatArray[0] = new Array();
tf3.formatArray[0].css = "banner";
tf3.formatArray[0].type = "normal";
tf3.formatArray[0].value = "Dites si l'affirmation est vraie ou fausse.<br />Les <strong>techniques de respiration</strong> sont des façons de respirer pour faciliter  l'accouchement.";

               
tf3.formatArray[1] = new Array();
tf3.formatArray[1].type = "interaction";

tf3.formatArray[2] = new Array();
tf3.formatArray[2].type = "normal";
tf3.formatArray[2].value="<br /><br />";

               
tf3.interactionArray.setting = new Array();
tf3.interactionArray.setting.nbColumn =1;
               
tf3.interactionArray.element = new Array();
tf3.interactionArray.element[0] = new Array();
tf3.interactionArray.element[0].id = 0;
               
tf3.interactionArray.element[0].value = "Vrai";
               
tf3.interactionArray.element[0].mediaArray = new Array();

tf3.interactionArray.element[1] = new Array();
tf3.interactionArray.element[1].value = "Faux";
tf3.interactionArray.element[1].id = 1;
tf3.interactionArray.element[1].mediaArray = new Array();

tf3.answerArray[0] = new Array();
tf3.answerArray[0].id = 0;
tf3.answerArray[0].value = true;
tf3.answerArray[0].weight = 1;
               
tf3.answerArray[1] = new Array();
tf3.answerArray[1].id = 1;
tf3.answerArray[1].value = false;
tf3.answerArray[1].weight = 0;

this.questionSource[3] = new Array();
this.questionSource[3] = tf3;

/********************************************************/
/*          ASSOCIATION                                 */
/********************************************************/

as1 = new Array();
as1.formatArray = new Array();
as1.interactionArray = new Array();
as1.answerArray = new Array();

as1.incorrectAnswerFeedback  = "<br />Non, désolé. Vous n’avez pas réussi à associer les expressions aux bonnes définitions. Passez au prochain écran. Découvrez les bonnes réponses.<br /><br />";

as1.correctAnswerFeedback  = "<br />Bonnes réponses! Vous avez associé toutes les expressions aux bonnes définitions.<br /><br />"; 


as1.questionType = "association";
as1.weight = 1;
as1.maxAttempt = 2;
as1.questionSlide = true;
as1.partialPoints = false;

as1.formatArray[0] = new Array();
as1.formatArray[0].css = "banner";
as1.formatArray[0].type = "normal";
as1.formatArray[0].value = "Associez les expressions aux bonnes définitions. Les expressions sont en gras.";

as1.formatArray[1] = new Array();
as1.formatArray[1].type = "interaction";

as1.interactionArray.setting = new Array();
as1.interactionArray.setting.nbColumn = 1;

as1.interactionArray.element = new Array();



/********************************************************/
/*           Element 0 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
as1.interactionArray.element[0] = new Array();
as1.interactionArray.element[0].elementFixe = new Array();
as1.interactionArray.element[0].elementFixe.id = 0;

as1.interactionArray.element[0].elementFixe.value = "Réconforter et encourager une personne";


// element[n].elementSortable[n] de la question est la colonne de droite de la question d'association
as1.interactionArray.element[0].elementSortable = new Array();
as1.interactionArray.element[0].elementSortable.id = 1;
as1.interactionArray.element[0].elementSortable.value = "Apporter un <strong>soutien moral</strong>";


/********************************************************/
/*           Element 1 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
as1.interactionArray.element[1] = new Array();
as1.interactionArray.element[1].elementFixe = new Array();
as1.interactionArray.element[1].elementFixe.id = 2;

as1.interactionArray.element[1].elementFixe.value = "S’affirmer, jouer son rôle";

// elementSortable[n] de la question est la colonne de droite de la question d'association
as1.interactionArray.element[1].elementSortable = new Array();
as1.interactionArray.element[1].elementSortable.id = 3;
as1.interactionArray.element[1].elementSortable.value = "<strong>Prendre sa place</strong>" 

/********************************************************/
/*           Element 2 de la question                   */
/********************************************************/

as1.interactionArray.element[2] = new Array();
as1.interactionArray.element[2].elementFixe = new Array();
as1.interactionArray.element[2].elementFixe.id = 4;

as1.interactionArray.element[2].elementFixe.value = "Développer un lien avec une autre personne";

// elementSortable[n] de la question est la colonne de droite de la question d'association
as1.interactionArray.element[2].elementSortable = new Array();
as1.interactionArray.element[2].elementSortable.id = 5;
as1.interactionArray.element[2].elementSortable.value = "<strong>Construire une relation</strong>"; 

/********************************************************/
/*           Element 3 de la question                   */
/********************************************************/

as1.interactionArray.element[3] = new Array();
as1.interactionArray.element[3].elementFixe = new Array();
as1.interactionArray.element[3].elementFixe.id = 6;

as1.interactionArray.element[3].elementFixe.value = "Écouter avec attention ";

// elementSortable[n] de la question est la colonne de droite de la question d'association
as1.interactionArray.element[3].elementSortable = new Array();
as1.interactionArray.element[3].elementSortable.id = 7;
as1.interactionArray.element[3].elementSortable.value = "<strong>Être à l'écoute</strong>"; 


as1.answerArray[0] = new Array();
as1.answerArray[0].id = 0;
as1.answerArray[0].value = 1;
as1.answerArray[0].weight = 0.25;
               
as1.answerArray[1] = new Array();
as1.answerArray[1].id = 2;
as1.answerArray[1].value = 3;
as1.answerArray[1].weight = 0.25;

as1.answerArray[2] = new Array();
as1.answerArray[2].id = 4;
as1.answerArray[2].value = 5;
as1.answerArray[2].weight = 0.25;

as1.answerArray[3] = new Array();
as1.answerArray[3].id = 6;
as1.answerArray[3].value = 7;
as1.answerArray[3].weight = 0.25;


this.questionSource[4] = new Array();
this.questionSource[4] = as1;


/***********************************************/
/*                 CONTENU                  */
/***********************************************/



contentSlide2 = new Array();
               
contentSlide2.playerIdArray = new Array();
contentSlide2.formatArray = new Array();
contentSlide2.interactionArray = new Array();
               
contentSlide2.answerArray = new Array();
               
contentSlide2.questionType = "content";
contentSlide2.weight = 0;
contentSlide2.maxAttempt = 1;
contentSlide2.questionSlide = false;
               
contentSlide2.formatArray[0] = new Array();
contentSlide2.formatArray[0].css = "banner";
contentSlide2.formatArray[0].type = "normal";
contentSlide2.formatArray[0].value = "Associer les expressions aux définitions";
               
contentSlide2.formatArray[1] = new Array();
contentSlide2.formatArray[1].type = "normal";
contentSlide2.formatArray[1].value = "";
               
contentSlide2.formatArray[2] = new Array();
contentSlide2.formatArray[2].type = "normal";
contentSlide2.formatArray[2].value = "<p><strong>1.</strong> «&nbsp;Apporter un <strong>soutien moral</strong>&nbsp;» veut dire réconforter et  encourager une personne.  <strong></strong></p><p><strong>2. </strong>«<strong>&nbsp;Prendre sa place</strong>&nbsp;» veut dire s'affirmer, jouer  son rôle. </p><p><strong>3.</strong> «&nbsp;<strong>Construire une relation</strong>&nbsp;»<strong> </strong>veut dire développer un lien  avec une autre personne. </p><p><strong>4.</strong> «&nbsp;<strong>Être à l'écoute</strong>&nbsp;» veut dire écouter avec attention.  <strong></strong></p><br /><br />";
contentSlide2.formatArray[2].css = "interactionDiv";


contentSlide2.formatArray[3] = new Array();
contentSlide2.formatArray[3].type = "normal";
contentSlide2.formatArray[3].value="<br /><br />";

this.questionSource[5] = new Array();
this.questionSource[5] = contentSlide2;
