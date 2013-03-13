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
contentSlide1.nbColumn = 1;
contentSlide1.weight = 0;
contentSlide1.maxAttempt = 1;
contentSlide1.questionSlide = false;
               
contentSlide1.formatArray[0] = new Array();
contentSlide1.formatArray[0].css = "banner";
contentSlide1.formatArray[0].type = "normal";
contentSlide1.formatArray[0].value = "<br /><strong>Des conseils et des suggestions</strong>";
               
contentSlide1.formatArray[1] = new Array();
contentSlide1.formatArray[1].type = "normal";
contentSlide1.formatArray[1].value = "";

contentSlide1.formatArray[2] = new Array();
contentSlide1.formatArray[2].css = "intro";
contentSlide1.formatArray[2].type = "normal";
contentSlide1.formatArray[2].value = "<br />Rhianna vient d’obtenir des renseignements au sujet de la <strong>sage-femme</strong> et de l’<strong>obstétricien</strong>. Anika lui a suggéré et conseillé plusieurs choses.<br /><br />";
contentSlide1.formatArray[2].value += "Vérifions votre compréhension des conseils et suggestions.<br /><br />";
contentSlide1.formatArray[2].value += "N’hésitez pas à réécouter la conversation avant de répondre à la question.<br /><br />";


this.questionSource = new Array();
this.questionSource[0] = new Array();
this.questionSource[0] = contentSlide1;

/***********************************************/
/*                CHOIX MULTIPLES              */
/***********************************************/

cm1 = new Array();
cm1.formatArray = new Array();
cm1.interactionArray = new Array();
cm1.answerArray = new Array();

               
cm1.questionType = "multipleChoice";
cm1.nbColumn = 1;
cm1.weight = 1;
cm1.maxAttempt = 1;
cm1.questionSlide = true;
cm1.customFeedback = true;
               
cm1.formatArray[0] = new Array();
cm1.formatArray[0].css = "banner";
cm1.formatArray[0].type = "normal";
cm1.formatArray[0].value = "<br />Lisez la question et choisissez <u>la</u> bonne réponse.<br />";
cm1.formatArray[0].value += "Pour en savoir plus au sujet des <strong>sages-femmes</strong>, Anika suggère à Rhianna de…";

cm1.formatArray[1] = new Array();
cm1.formatArray[1].type = "media";
cm1.formatArray[1].mediaArray = new Array();
cm1.formatArray[1].mediaArray[0] = new Array();
cm1.formatArray[1].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_AUDIO14.mp3";
cm1.formatArray[1].mediaArray[0].type = "audio";
cm1.formatArray[1].mediaArray[0].location = "audio";
cm1.formatArray[1].mediaArray[0].mediaSetting = new Array();
cm1.formatArray[1].mediaArray[0].mediaSetting.autoStart = false;
cm1.formatArray[1].mediaArray[0].mediaSetting.loop = false;

    
cm1.formatArray[2] = new Array();
cm1.formatArray[2].type = "interaction";
               
cm1.formatArray[3] = new Array();
cm1.formatArray[3].type = "normal";
cm1.formatArray[3].value="<br /><br />";
               
               
cm1.interactionArray.setting = new Array();
               
cm1.interactionArray.element = new Array();
cm1.interactionArray.element[0] = new Array();

cm1.interactionArray.element[0].id = 0;               
cm1.interactionArray.element[0].value = "prendre un rendez-vous avec une sage-femme.";

cm1.interactionArray.element[1] = new Array();
cm1.interactionArray.element[1].value = "communiquer avec l’association des sages-femmes.";
cm1.interactionArray.element[1].id = 1;               

cm1.interactionArray.element[2] = new Array();
cm1.interactionArray.element[2].value = "contacter un obstétricien.";
cm1.interactionArray.element[2].id = 2;               


cm1.answerArray[0] = new Array();
cm1.answerArray[0].id = 0;
cm1.answerArray[0].value = false;
cm1.answerArray[0].weight = 0;

cm1.answerArray[0].customFeedback = "Ce n’est pas la bonne réponse.<br /><br />Anika ne suggère pas de prendre un rendez-vous avec une <strong>sage-femme</strong>. Elle suggère à Rhianna de communiquer avec l’Association canadienne des sages-femmes.";
               
cm1.answerArray[1] = new Array();
cm1.answerArray[1].id = 1;
cm1.answerArray[1].value = true;
cm1.answerArray[1].weight = 1;
cm1.answerArray[1].customFeedback = "C’est exact! <br /><br />Anika suggère à Rhianna de communiquer avec l’Association canadienne des <strong>sages-femmes</strong>.";


cm1.answerArray[2] = new Array();
cm1.answerArray[2].id = 2;
cm1.answerArray[2].value = false;
cm1.answerArray[2].weight = 0;
cm1.answerArray[2].customFeedback = "Non, désolé.<br /><br />Anika ne suggère pas de contacter un obstétricien. Elle suggère à Rhianna de communiquer avec l’Association canadienne des <strong>sages-femmes</strong>.";

this.questionSource[1] = new Array();
this.questionSource[1] = cm1;


/***********************************************/
/*                CHOIX MULTIPLES              */
/***********************************************/

cm2 = new Array();
cm2.formatArray = new Array();
cm2.interactionArray = new Array();
cm2.answerArray = new Array();

               
cm2.questionType = "multipleChoice";
cm2.nbColumn = 1;
cm2.weight = 1;
cm2.maxAttempt = 1;
cm2.questionSlide = true;
cm2.customFeedback = true;
               
cm2.formatArray[0] = new Array();
cm2.formatArray[0].css = "banner";
cm2.formatArray[0].type = "normal";
cm2.formatArray[0].value = "<br />Lisez la question et choisissez <u>la</u> bonne réponse.<br />";
cm2.formatArray[0].value += "Qu’est-ce qu’Anika conseille à Rhianna au sujet du lieu de naissance?";

cm2.formatArray[1] = new Array();
cm2.formatArray[1].type = "media";
cm2.formatArray[1].mediaArray = new Array();
cm2.formatArray[1].mediaArray[0] = new Array();
cm2.formatArray[1].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_AUDIO14.mp3";
cm2.formatArray[1].mediaArray[0].type = "audio";
cm2.formatArray[1].mediaArray[0].location = "audio";
cm2.formatArray[1].mediaArray[0].mediaSetting = new Array();
cm2.formatArray[1].mediaArray[0].mediaSetting.autoStart = false;
cm2.formatArray[1].mediaArray[0].mediaSetting.loop = false;

    
cm2.formatArray[2] = new Array();
cm2.formatArray[2].type = "interaction";
               
cm2.formatArray[3] = new Array();
cm2.formatArray[3].type = "normal";
cm2.formatArray[3].value="<br /><br />";
               
               
cm2.interactionArray.setting = new Array();
               
cm2.interactionArray.element = new Array();
cm2.interactionArray.element[0] = new Array();

cm2.interactionArray.element[0].id = 0;               
cm2.interactionArray.element[0].value = "Elle conseille d’étudier les avantages et les désavantages de chaque lieu de naissance.";

cm2.interactionArray.element[1] = new Array();
cm2.interactionArray.element[1].value = "Elle conseille de faire des recherches au sujet des coûts.";
cm2.interactionArray.element[1].id = 1;               


cm2.answerArray[0] = new Array();
cm2.answerArray[0].id = 0;
cm2.answerArray[0].value = true;
cm2.answerArray[0].weight = 1;
cm2.answerArray[0].customFeedback = "Vous avez raison!<br /><br />Anika conseille à Rhianna d’étudier les avantages et les désavantages de chaque lieu de naissance.";

               
cm2.answerArray[1] = new Array();
cm2.answerArray[1].id = 1;
cm2.answerArray[1].value = false;
cm2.answerArray[1].weight = 0;
cm2.answerArray[1].customFeedback = "Non, désolé.<br /><br />Anika conseille à Rhianna d’étudier les avantages et les désavantages de chaque lieu de naissance.";
cm2.answerArray[1].customFeedback += "<br /><br />Anika conseille à Rhianna de faire des recherches au sujet des coûts du suivi prénatal. Par exemple, elle lui suggère de vérifier les coûts pour l’échographie, les prises de sang et les tests d’urine.";


this.questionSource[2] = new Array();
this.questionSource[2] = cm2;

/***********************************************/
/*                CHOIX MULTIPLES              */
/***********************************************/

cm3 = new Array();
cm3.formatArray = new Array();
cm3.interactionArray = new Array();
cm3.answerArray = new Array();

               
cm3.questionType = "multipleChoice";
cm3.nbColumn = 1;
cm3.weight = 1;
cm3.maxAttempt = 1;
cm3.questionSlide = true;
cm3.customFeedback = true;

               
cm3.formatArray[0] = new Array();
cm3.formatArray[0].css = "banner";
cm3.formatArray[0].type = "normal";
cm3.formatArray[0].value = "<br />Lisez la question et choisissez <u>la</u> bonne réponse.<br />";
cm3.formatArray[0].value += "Rhianna pense avoir recours à la <strong>péridurale</strong> pendant son <strong>accouchement</strong> pour diminuer la douleur. Que lui suggère Anika à ce sujet? ";

cm3.formatArray[1] = new Array();
cm3.formatArray[1].type = "media";
cm3.formatArray[1].mediaArray = new Array();
cm3.formatArray[1].mediaArray[0] = new Array();
cm3.formatArray[1].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_AUDIO14.mp3";
cm3.formatArray[1].mediaArray[0].type = "audio";
cm3.formatArray[1].mediaArray[0].location = "audio";
cm3.formatArray[1].mediaArray[0].mediaSetting = new Array();
cm3.formatArray[1].mediaArray[0].mediaSetting.autoStart = false;
cm3.formatArray[1].mediaArray[0].mediaSetting.loop = false;

    
cm3.formatArray[2] = new Array();
cm3.formatArray[2].type = "interaction";
               
cm3.formatArray[3] = new Array();
cm3.formatArray[3].type = "normal";
cm3.formatArray[3].value="<br /><br />";
               
               
cm3.interactionArray.setting = new Array();
               
cm3.interactionArray.element = new Array();
cm3.interactionArray.element[0] = new Array();

cm3.interactionArray.element[0].id = 0;               
cm3.interactionArray.element[0].value = "Elle lui suggère de choisir un obstétricien.";

cm3.interactionArray.element[1] = new Array();
cm3.interactionArray.element[1].value = "Elle lui suggère de choisir une sage-femme.";
cm3.interactionArray.element[1].id = 1;               


cm3.answerArray[0] = new Array();
cm3.answerArray[0].id = 0;
cm3.answerArray[0].value = true;
cm3.answerArray[0].weight = 0;
cm3.answerArray[0].customFeedback = "Vous avez raison!<br /><br />Anika lui suggère de choisir un <strong>obstétricien</strong>. Les <strong>sages-femmes</strong> n’utilisent pas la péridurale."; 
cm3.answerArray[0].customFeedback += "<br /><br />Si Rhianna pense avoir recours à la péridurale pendant son accouchement, elle doit choisir un obstétricien.";

               
cm3.answerArray[1] = new Array();
cm3.answerArray[1].id = 1;
cm3.answerArray[1].value = false;
cm3.answerArray[1].weight = 1;
cm3.answerArray[1].customFeedback = "Non, désolé.<br /><br />Anika ne lui suggère pas de choisir une <strong>sage-femme</strong>. Elle lui suggère de choisir un <strong>obstétricien</strong>. Les sages-femmes n’utilisent pas la péridurale.";
cm3.answerArray[1].customFeedback += "<br /><br />Si Rhianna pense avoir recours à la péridurale pendant son accouchement, elle doit choisir un obstétricien.";


this.questionSource[3] = new Array();
this.questionSource[3] = cm3;

/***********************************************/
/*                RÉPONSES MULTIPLES              */
/***********************************************/
MR = new Array();
MR.formatArray = new Array();
MR.interactionArray = new Array();
MR.answerArray = new Array();
               
MR.questionType = "multipleResponse";
MR.nbColumn = 1;
MR.weight = 1;
MR.maxAttempt = 1;
MR.questionSlide = true;

MR.incorrectAnswerFeedback  = "Désolé. Vous n’avez pas trouvé les bonnes réponses.";
MR.correctAnswerFeedback  = "Bonnes réponses!"; 

               
MR.formatArray[0] = new Array();
MR.formatArray[0].css = "banner";
MR.formatArray[0].type = "normal";
MR.formatArray[0].value = "<p>Cochez toutes  les bonnes réponses.</p><p>Qu'est-ce que  la <strong>sage-femme</strong> a le droit de faire?</p>";

MR.formatArray[1] = new Array();
MR.formatArray[1].type = "normal";
MR.formatArray[1].css = "interactionDiv";
MR.formatArray[1].value="<p>La sage-femme  peut…</p>";

MR.formatArray[2] = new Array();
MR.formatArray[2].type = "media";
MR.formatArray[2].mediaArray = new Array();
MR.formatArray[2].mediaArray[0] = new Array();
MR.formatArray[2].mediaArray[0].value = "CLIC5_U7_M1_CO_A1_AUDIO14.mp3";
MR.formatArray[2].mediaArray[0].type = "audio";
MR.formatArray[2].mediaArray[0].location = "audio";
MR.formatArray[2].mediaArray[0].mediaSetting = new Array();
MR.formatArray[2].mediaArray[0].mediaSetting.autoStart = false;
MR.formatArray[2].mediaArray[0].mediaSetting.loop = false;

    
MR.formatArray[3] = new Array();
MR.formatArray[3].type = "interaction";
               
MR.formatArray[4] = new Array();
MR.formatArray[4].type = "normal";
MR.formatArray[4].value="<br /><br />";
               
               
MR.interactionArray.setting = new Array();
               
MR.interactionArray.element = new Array();
MR.interactionArray.element[0] = new Array();

MR.interactionArray.element[0].id = 0;               
MR.interactionArray.element[0].value = "donner des médicaments pendant l’accouchement.";
               
              
MR.interactionArray.element[1] = new Array();
MR.interactionArray.element[1].value = "donner des soins prénataux et postnataux.";
MR.interactionArray.element[1].id = 1;               

MR.interactionArray.element[2] = new Array();
MR.interactionArray.element[2].value = "aider les femmes à accoucher.";
MR.interactionArray.element[2].id = 2;               

MR.interactionArray.element[3] = new Array();
MR.interactionArray.element[3].value = "s’occuper des femmes enceintes de jumeaux.";
MR.interactionArray.element[3].id = 3;               

MR.interactionArray.element[4] = new Array();
MR.interactionArray.element[4].value = "donner des cours prénataux.";
MR.interactionArray.element[4].id = 4;               
               
MR.answerArray[0] = new Array();
MR.answerArray[0].id = 0;
MR.answerArray[0].value = false;
MR.answerArray[0].weight = 0;
               
MR.answerArray[1] = new Array();
MR.answerArray[1].id = 1;
MR.answerArray[1].value = true;
MR.answerArray[1].weight = 1;

MR.answerArray[2] = new Array();
MR.answerArray[2].id = 2;
MR.answerArray[2].value = true;
MR.answerArray[2].weight = 1;

MR.answerArray[3] = new Array();
MR.answerArray[3].id = 3;
MR.answerArray[3].value = false;
MR.answerArray[3].weight = 0;

MR.answerArray[4] = new Array();
MR.answerArray[4].id = 2;
MR.answerArray[4].value = true;
MR.answerArray[4].weight = 1;



this.questionSource[4] = new Array();
this.questionSource[4] = MR;



/***********************************************/
/*                 CONTENU                  */
/***********************************************/
contentSlide2 = new Array();
               
contentSlide2.playerIdArray = new Array();
contentSlide2.formatArray = new Array();
contentSlide2.interactionArray = new Array();
               
contentSlide2.answerArray = new Array();
               
contentSlide2.questionType = "content";
contentSlide2.nbColumn = 1;
contentSlide2.weight = 0;
contentSlide2.maxAttempt = 1;
contentSlide2.questionSlide = false;
               
contentSlide2.formatArray[0] = new Array();
contentSlide2.formatArray[0].css = "banner";
contentSlide2.formatArray[0].type = "normal";
contentSlide2.formatArray[0].value = "<br /><strong>Les tâches de la sage-femme</strong>";
               
contentSlide2.formatArray[1] = new Array();
contentSlide2.formatArray[1].type = "normal";
contentSlide2.formatArray[1].value = "";

contentSlide2.formatArray[2] = new Array();
contentSlide2.formatArray[2].css = "interactionDiv";
contentSlide2.formatArray[2].type = "normal";
contentSlide2.formatArray[2].value = '<br /><p>La <strong>sage-femme</strong>&nbsp;peut  :</p><ul type="disc"><li>donner des <strong>soins prénataux</strong> et <strong>postnataux</strong>;</li><li>aider les femmes à <strong>accoucher</strong>;</li><li>donner des <strong>cours prénataux</strong>.</li></ul>';
contentSlide2.formatArray[2].value += '<p>&nbsp;</p><p>La sage-femme  ne peut pas donner des médicaments pendant l\'<strong>accouchement</strong>. Elle peut donner  des médicaments seulement pendant la grossesse et après la naissance de  l\'enfant.</p>';
contentSlide2.formatArray[2].value += '<p>De plus, la  sage-femme ne peut pas s\'occuper des femmes enceintes de jumeaux. Une femme  enceinte de jumeaux présente une <strong>grossesse à risque</strong>. La sage-femme  s\'occupe des <strong>grossesses à faible risque</strong> seulement. </p><br /><br />';


this.questionSource[5] = new Array();
this.questionSource[5] = contentSlide2;

/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/

tf1 = new Array();
tf1.formatArray = new Array();
tf1.interactionArray = new Array();
tf1.answerArray = new Array();

tf1.incorrectAnswerFeedback  = "<br />Désolé, non.<br /><br />Rhianna ne peut pas choisir un <strong>obstétricien</strong> si elle veut <strong>accoucher</strong> à la maison. Les obstétriciens font des <strong>accouchements</strong> à l’hôpital seulement."; 
tf1.incorrectAnswerFeedback  += "Pour accoucher à la maison, Rhianna doit choisir une <strong>sage-femme</strong>.";
tf1.incorrectAnswerFeedback  += "<br /><br />La <strong>sage-femme</strong> peut aussi s’occuper de la grossesse et de l’accouchement."; 

tf1.correctAnswerFeedback  = "<br />Vous avez raison! Rhianna ne peut pas choisir un <strong>obstétricien</strong> si elle veut <strong>accoucher</strong> à la maison. Les obstétriciens font des <strong>accouchements</strong> à l’hôpital seulement."; 
tf1.correctAnswerFeedback  += "<br /><br />Pour accoucher à la maison, Rhianna doit choisir une <strong>sage-femme</strong>.";
               
tf1.questionType = "trueFalse";
tf1.nbColumn = 1;
tf1.weight = 1;
tf1.maxAttempt = 1;
tf1.questionSlide = true;
               
tf1.formatArray[0] = new Array();
tf1.formatArray[0].css = "banner";
tf1.formatArray[0].type = "normal";
tf1.formatArray[0].value = "<br />Dites si l’affirmation est vraie ou fausse.<br />Rhianna veut <strong>accoucher</strong> à la maison. Elle  peut choisir un <strong>obstétricien</strong>.";

               
tf1.formatArray[1] = new Array();
tf1.formatArray[1].type = "interaction";

tf1.formatArray[2] = new Array();
tf1.formatArray[2].type = "normal";
tf1.formatArray[2].value="<br /><br />";

               
tf1.interactionArray.setting = new Array();
               
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
tf1.answerArray[0].value = false;
tf1.answerArray[0].weight = 0;
               
tf1.answerArray[1] = new Array();
tf1.answerArray[1].id = 1;
tf1.answerArray[1].value = true;
tf1.answerArray[1].weight = 1;

this.questionSource[6] = new Array();
this.questionSource[6] = tf1;

/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/

tf2 = new Array();
tf2.formatArray = new Array();
tf2.interactionArray = new Array();
tf2.answerArray = new Array();

tf2.incorrectAnswerFeedback  = '<p>Désolé, non.</p> Ce n\'est pas l\'<strong>obstétricien</strong> qui va s\'occuper de  son <strong>suivi postnatal</strong>. C\'est son médecin de famille.'; 

tf2.incorrectAnswerFeedback  += "<br /><br />La <strong>sage-femme</strong> peut aussi s’occuper de la grossesse et de l’accouchement."; 

tf2.correctAnswerFeedback  = '<p>Vous avez  raison!</p>Ce n\'est pas l\'<strong>obstétricien</strong> qui va s\'occuper de  son <strong>suivi postnatal</strong>. C\'est son médecin de famille.';

               
tf2.questionType = "trueFalse";
tf2.nbColumn = 1;
tf2.weight = 1;
tf2.maxAttempt = 1;
tf2.questionSlide = true;
               
tf2.formatArray[0] = new Array();
tf2.formatArray[0].css = "banner";
tf2.formatArray[0].type = "normal";
tf2.formatArray[0].value = "<br />Dites si l’affirmation est vraie ou fausse.<br />Rhianna a choisi un <strong>obstétricien</strong>.  Est-ce lui qui va s'occuper de son <strong>suivi  postnatal</strong>?";

               
tf2.formatArray[1] = new Array();
tf2.formatArray[1].type = "interaction";

tf2.formatArray[2] = new Array();
tf2.formatArray[2].type = "normal";
tf2.formatArray[2].value="<br /><br />";

               
tf2.interactionArray.setting = new Array();
               
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
tf2.answerArray[0].value = false;
tf2.answerArray[0].weight = 0;
               
tf2.answerArray[1] = new Array();
tf2.answerArray[1].id = 1;
tf2.answerArray[1].value = true;
tf2.answerArray[1].weight = 1;

this.questionSource[7] = new Array();
this.questionSource[7] = tf2;

/***********************************************/
/*                 CONTENU                  */
/***********************************************/
contentSlide3 = new Array();
               
contentSlide3.playerIdArray = new Array();
contentSlide3.formatArray = new Array();
contentSlide3.interactionArray = new Array();
               
contentSlide3.answerArray = new Array();
               
contentSlide3.questionType = "content";
contentSlide3.nbColumn = 1;
contentSlide3.weight = 0;
contentSlide3.maxAttempt = 1;
contentSlide3.questionSlide = false;
               
contentSlide3.formatArray[0] = new Array();
contentSlide3.formatArray[0].css = "banner";
contentSlide3.formatArray[0].type = "normal";
contentSlide3.formatArray[0].value = "<p>L'exercice  est terminé. </p>";
               
contentSlide3.formatArray[1] = new Array();
contentSlide3.formatArray[1].type = "normal";
contentSlide3.formatArray[1].value = "";

contentSlide3.formatArray[1] = new Array();
contentSlide3.formatArray[1].type = "normal";
contentSlide3.formatArray[1].css = "interactionDiv";
contentSlide3.formatArray[1].value = "<p align='center'>Plus  tard pendant sa grossesse, Rhianna va devoir penser à son <strong>accouchement</strong>. </p><p align='center'>Retournez à l'activité et obtenez  quelques renseignements à ce sujet.</p><br /><br />";



this.questionSource[8] = new Array();
this.questionSource[8] = contentSlide3;
