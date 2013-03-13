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
contentSlide1.formatArray[0].value = "<strong>Vérifions!</strong>";
               
contentSlide1.formatArray[1] = new Array();
contentSlide1.formatArray[1].type = "normal";
contentSlide1.formatArray[1].value = "";

contentSlide1.formatArray[2] = new Array();
contentSlide1.formatArray[2].css = "intro";
contentSlide1.formatArray[2].type = "normal";
contentSlide1.formatArray[2].value = "<p>Vous avez découvert ce que l’on écrit dans un plan de naissance. Vérifiez votre compréhension du plan de naissance. </p><br \><br \>";


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

tf1.incorrectAnswerFeedback  = "<p>Désolé. Ce  n'est pas la bonne réponse.</p><p>La présence  du conjoint n'est pas obligatoire dans la salle d'accouchement. La mère peut  choisir son <strong>partenaire de naissance</strong>. Le partenaire de naissance peut  être son conjoint, sa sœur, son amie, etc. </p>"; 

tf1.correctAnswerFeedback  = "<p>C'est exact!</p>La présence du conjoint n'est pas obligatoire dans la  salle d'accouchement. La mère peut choisir son <strong>partenaire de naissance</strong>.  Le partenaire de naissance peut être son conjoint, sa sœur, son amie, etc.";
               
tf1.questionType = "trueFalse";
tf1.weight = 1;
tf1.maxAttempt = 1;
tf1.questionSlide = true;
tf1.partialPoints = false;
               
tf1.formatArray[0] = new Array();
tf1.formatArray[0].css = "banner";
tf1.formatArray[0].type = "normal";
tf1.formatArray[0].value = "Dites si  l'affirmation est vraie ou fausse.";

tf1.formatArray[1] = new Array();
tf1.formatArray[1].css = "interactionDiv";
tf1.formatArray[1].type = "normal";
tf1.formatArray[1].value = "<p>La présence  du conjoint est obligatoire dans la salle d'accouchement.</p>";

               
tf1.formatArray[2] = new Array();
tf1.formatArray[2].type = "interaction";

tf1.formatArray[3] = new Array();
tf1.formatArray[3].type = "normal";
tf1.formatArray[3].value="<br /><br />";

               
tf1.interactionArray.setting = new Array();
tf1.interactionArray.setting.nbColumn = 1;
               
tf1.interactionArray.element = new Array();
tf1.interactionArray.element[0] = new Array();

tf1.interactionArray.element[0].id = 0;               
tf1.interactionArray.element[0].value = "Vrai";

tf1.interactionArray.element[1] = new Array();
tf1.interactionArray.element[1].value = "Faux";
tf1.interactionArray.element[1].id = 1;

tf1.answerArray[0] = new Array();
tf1.answerArray[0].id = 0;
tf1.answerArray[0].value = false;
tf1.answerArray[0].weight = 0;
               
tf1.answerArray[1] = new Array();
tf1.answerArray[1].id = 1;
tf1.answerArray[1].value = true;
tf1.answerArray[1].weight = 1;

this.questionSource[1] = new Array();
this.questionSource[1] = tf1;

/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/

tf2 = new Array();
tf2.formatArray = new Array();
tf2.interactionArray = new Array();
tf2.answerArray = new Array();

tf2.incorrectAnswerFeedback  = "<p>Non, désolé.</p><p>La mère peut  demander la présence de plusieurs personnes. Par exemple, elle peut demander la  présence d'un <strong>partenaire de naissance</strong> et d'un membre de la famille ou  d'une amie.<strong></strong></p>"; 
tf2.correctAnswerFeedback  = "Bonne réponse!La mère peut demander la présence de plusieurs personnes. Par exemple, elle peut demander la présence d’un partenaire de naissance et d’un membre de la famille ou d’une amie.";

               
tf2.questionType = "trueFalse";
tf2.nbColumn = 1;
tf2.weight = 1;
tf2.maxAttempt = 1;
tf2.questionSlide = true;
tf2.partialPoints = false;
               
tf2.formatArray[0] = new Array();
tf2.formatArray[0].css = "banner";
tf2.formatArray[0].type = "normal";
tf2.formatArray[0].value = "Dites si  l'affirmation est vraie ou fausse.<br />La mère peut  demander la présence de<strong> </strong><u>plusieurs</u><strong> </strong> personnes dans la salle d'accouchement.";

               
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
               
tf2.interactionArray.element[1] = new Array();
tf2.interactionArray.element[1].value = "Faux";
tf2.interactionArray.element[1].id = 1;


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

tf3.incorrectAnswerFeedback  = "<p>Non, désolé.</p><p>La mère peut  refuser la présence d'un étudiant en médecine pendant son accouchement. Elle  doit l'indiquer dans son plan de naissance dans la partie «&nbsp;Vos  accompagnateurs&nbsp;».</p>"; 
tf3.correctAnswerFeedback  = "<p>Vous avez  raison!</p><p>La mère peut  refuser la présence d'un étudiant en médecine pendant son accouchement. Elle  doit l'indiquer dans son plan de naissance dans la partie «&nbsp;Vos  accompagnateurs&nbsp;».</p>";

               
tf3.questionType = "trueFalse";
tf3.weight = 1;
tf3.maxAttempt = 1;
tf3.questionSlide = true;
tf3.partialPoints = false;
               
tf3.formatArray[0] = new Array();
tf3.formatArray[0].css = "banner";
tf3.formatArray[0].type = "normal";
tf3.formatArray[0].value = "Dites si  l'affirmation est vraie ou fausse.<br />La mère peut  refuser la présence d'un étudiant en médecine pendant son accouchement.";

               
tf3.formatArray[1] = new Array();
tf3.formatArray[1].type = "interaction";

tf3.formatArray[2] = new Array();
tf3.formatArray[2].type = "normal";
tf3.formatArray[2].value="<br /><br />";

               
tf3.interactionArray.setting = new Array();
tf3.interactionArray.setting.nbColumn = 1;
               
tf3.interactionArray.element = new Array();

tf3.interactionArray.element[0] = new Array();
tf3.interactionArray.element[0].id = 0;               
tf3.interactionArray.element[0].value = "Vrai";
               
tf3.interactionArray.element[1] = new Array();
tf3.interactionArray.element[1].value = "Faux";
tf3.interactionArray.element[1].id = 1;


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

/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/

tf4 = new Array();
tf4.formatArray = new Array();
tf4.interactionArray = new Array();
tf4.answerArray = new Array();

tf4.incorrectAnswerFeedback  = "<p>Ce n'est pas  la bonne réponse.</p><p>Miranda peut  utiliser un <strong>ballon de naissance</strong> ou un <strong>siège-sac</strong> pour soulager sa  douleur de façon naturelle.</p>La mère peut aussi utiliser une <strong>baignoire de  naissance</strong>. L'eau chaude  de la baignoire permet de diminuer la douleur des <strong>contractions</strong>."; 
tf4.correctAnswerFeedback  = "<p>C'est exact!</p><p>Miranda peut  utiliser un <strong>ballon de naissance</strong> ou un <strong>siège-sac</strong> pour soulager sa  douleur de façon naturelle.</p>La mère peut aussi utiliser une <strong>baignoire de  naissance</strong>. L'eau chaude  de la baignoire permet de diminuer la douleur des <strong>contractions</strong>.";

               
tf4.questionType = "trueFalse";
tf4.weight = 1;
tf4.maxAttempt = 1;
tf4.questionSlide = true;
tf4.partialPoints = false;
               
tf4.formatArray[0] = new Array();
tf4.formatArray[0].css = "banner";
tf4.formatArray[0].type = "normal";
tf4.formatArray[0].value = "Dites si  l'affirmation est vraie ou fausse.";

tf4.formatArray[1] = new Array();
tf4.formatArray[1].css = "interactionDiv";
tf4.formatArray[1].type = "normal";
tf4.formatArray[1].value = "<p>Miranda ne  veut pas utiliser de médicaments pour la douleur. Elle veut soulager sa douleur  de façon naturelle. Elle peut utiliser un <strong>ballon de naissance</strong> ou un <strong>siège-sac</strong>.</p>";
               
tf4.formatArray[2] = new Array();
tf4.formatArray[2].type = "interaction";

tf4.formatArray[3] = new Array();
tf4.formatArray[3].type = "normal";
tf4.formatArray[3].value="<br /><br />";

               
tf4.interactionArray.setting = new Array();
tf4.interactionArray.setting.nbColumn = 1;
tf4.interactionArray.element = new Array();

tf4.interactionArray.element[0] = new Array();
tf4.interactionArray.element[0].id = 0;               
tf4.interactionArray.element[0].value = "Vrai";
               
tf4.interactionArray.element[1] = new Array();
tf4.interactionArray.element[1].value = "Faux";
tf4.interactionArray.element[1].id = 1;


tf4.answerArray[0] = new Array();
tf4.answerArray[0].id = 0;
tf4.answerArray[0].value = true;
tf4.answerArray[0].weight = 1;
               
tf4.answerArray[1] = new Array();
tf4.answerArray[1].id = 1;
tf4.answerArray[1].value = false;
tf4.answerArray[1].weight = 0;

this.questionSource[4] = new Array();
this.questionSource[4] = tf4;

/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/

tf5 = new Array();
tf5.formatArray = new Array();
tf5.interactionArray = new Array();
tf5.answerArray = new Array();

tf5.incorrectAnswerFeedback  = "<p>Ce n'est pas  la bonne réponse.</p><p>La mère peut  choisir d'attendre avant de couper le <strong>cordon ombilical</strong>. Elle doit cocher  la case «&nbsp;Je souhaite attendre au moins deux minutes après la naissance du  bébé avant de couper le cordon ombilical.&nbsp;»</p>"; 
tf5.correctAnswerFeedback  = "<p>Bonne  réponse!</p><p>La mère peut  choisir d'attendre avant de couper le <strong>cordon ombilical</strong>. Elle doit cocher  la case «&nbsp;Je souhaite attendre au moins deux minutes après la naissance du  bébé avant de couper le cordon ombilical.&nbsp;»</p>";

               
tf5.questionType = "trueFalse";
tf5.weight = 1;
tf5.maxAttempt = 1;
tf5.questionSlide = true;
tf5.partialPoints = false;
               
tf5.formatArray[0] = new Array();
tf5.formatArray[0].css = "banner";
tf5.formatArray[0].type = "normal";
tf5.formatArray[0].value = "Dites si  l'affirmation est vraie ou fausse.<br />La mère peut choisir d'attendre avant de couper le <strong>cordon  ombilical</strong>.";

               
tf5.formatArray[1] = new Array();
tf5.formatArray[1].type = "interaction";

tf5.formatArray[2] = new Array();
tf5.formatArray[2].type = "normal";
tf5.formatArray[2].value="<br /><br />";

               
tf5.interactionArray.setting = new Array();
tf5.interactionArray.setting.nbColumn = 1;
               
tf5.interactionArray.element = new Array();

tf5.interactionArray.element[0] = new Array();
tf5.interactionArray.element[0].id = 0;               
tf5.interactionArray.element[0].value = "Vrai";
               
tf5.interactionArray.element[1] = new Array();
tf5.interactionArray.element[1].value = "Faux";
tf5.interactionArray.element[1].id = 1;


tf5.answerArray[0] = new Array();
tf5.answerArray[0].id = 0;
tf5.answerArray[0].value = true;
tf5.answerArray[0].weight = 1;
               
tf5.answerArray[1] = new Array();
tf5.answerArray[1].id = 1;
tf5.answerArray[1].value = false;
tf5.answerArray[1].weight = 0;

this.questionSource[5] = new Array();
this.questionSource[5] = tf5;

/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/

tf6 = new Array();
tf6.formatArray = new Array();
tf6.interactionArray = new Array();
tf6.answerArray = new Array();

tf6.incorrectAnswerFeedback  = "<p>Non, désolé.</p><p>Jana peut  indiquer ses préférences au sujet de l'<strong>allaitement</strong> dans son plan de  naissance. Elle l'indique dans la partie «&nbsp;Après l'accouchement&nbsp;».  Elle coche la case «&nbsp;Je veux <strong>imposer un horaire d'allaitement</strong> à mon  enfant.&nbsp;»</p>"; 
tf6.correctAnswerFeedback  = "<p>Bonne  réponse!</p><p>Jana peut  indiquer ses préférences au sujet de l'<strong>allaitement</strong> dans son plan de  naissance. Elle l'indique dans la partie «&nbsp;Après l'accouchement&nbsp;».  Elle coche la case «&nbsp;Je veux <strong>imposer un horaire d'allaitement</strong> à mon  enfant.&nbsp;»</p>";
               
tf6.questionType = "trueFalse";
tf6.weight = 1;
tf6.maxAttempt = 1;
tf6.questionSlide = true;
tf6.partialPoints = false;
               
tf6.formatArray[0] = new Array();
tf6.formatArray[0].css = "banner";
tf6.formatArray[0].type = "normal";
tf6.formatArray[0].value = "Dites si  l'affirmation est vraie ou fausse.<br />Jana veut <strong>allaiter</strong> toutes les trois heures. Elle peut l'indiquer dans son plan de naissance.";

               
tf6.formatArray[1] = new Array();
tf6.formatArray[1].type = "interaction";

tf6.formatArray[2] = new Array();
tf6.formatArray[2].type = "normal";
tf6.formatArray[2].value="<br /><br />";

               
tf6.interactionArray.setting = new Array();
tf1.interactionArray.setting.nbColumn = 1;
               
tf6.interactionArray.element = new Array();

tf6.interactionArray.element[0] = new Array();
tf6.interactionArray.element[0].id = 0;               
tf6.interactionArray.element[0].value = "Vrai";
               
tf6.interactionArray.element[1] = new Array();
tf6.interactionArray.element[1].value = "Faux";
tf6.interactionArray.element[1].id = 1;


tf6.answerArray[0] = new Array();
tf6.answerArray[0].id = 0;
tf6.answerArray[0].value = true;
tf6.answerArray[0].weight = 1;
               
tf6.answerArray[1] = new Array();
tf6.answerArray[1].id = 1;
tf6.answerArray[1].value = false;
tf6.answerArray[1].weight = 0;

this.questionSource[6] = new Array();
this.questionSource[6] = tf6;



/***********************************************/
/*                 CONTENU                  */
/***********************************************/
contentSlide3 = new Array();
               
contentSlide3.playerIdArray = new Array();
contentSlide3.formatArray = new Array();
contentSlide3.interactionArray = new Array();
               
contentSlide3.answerArray = new Array();
               
contentSlide3.questionType = "content";
contentSlide3.weight = 0;
contentSlide3.maxAttempt = 1;
contentSlide3.questionSlide = false;
               
contentSlide3.formatArray[0] = new Array();
contentSlide3.formatArray[0].css = "banner";
contentSlide3.formatArray[0].type = "normal";
contentSlide3.formatArray[0].value = "L’exercice est terminé. Retournez à l’activité.<br \><br \>";
               
contentSlide3.formatArray[1] = new Array();
contentSlide3.formatArray[1].type = "normal";
contentSlide3.formatArray[1].value = "";


this.questionSource[7] = new Array();
this.questionSource[7] = contentSlide3;
