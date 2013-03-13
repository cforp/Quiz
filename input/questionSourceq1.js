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
contentSlide1.partialPoints = false;
               
contentSlide1.formatArray[0] = new Array();
contentSlide1.formatArray[0].css = "banner";
contentSlide1.formatArray[0].type = "normal";
contentSlide1.formatArray[0].value = "<strong>Le vocabulaire du plan de naissance</strong>";
               
contentSlide1.formatArray[1] = new Array();
contentSlide1.formatArray[1].type = "normal";
contentSlide1.formatArray[1].value = "";

contentSlide1.formatArray[2] = new Array();
contentSlide1.formatArray[2].css = "intro";
contentSlide1.formatArray[2].type = "normal";
contentSlide1.formatArray[2].value = "<p>Vous  avez découvert les différentes parties du plan de naissance. Vous avez  aussi  découvert le vocabulaire du plan  de naissance.</p><p>Vérifions  votre compréhension de ce vocabulaire. </p><p>N'hésitez  pas à utiliser le dictionnaire, au besoin.</p><br \><br \>";


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
cm1.weight = 1;
cm1.maxAttempt = 1;
cm1.questionSlide = true;
cm1.customFeedback = true;
cm1.partialPoints = false;


/* POUR LE BRANCHING  */
cm1.branching = true;
cm1.nextSlideIDGA = 3;
cm1.nextSlideIDWA = 2;

               
cm1.formatArray[0] = new Array();
cm1.formatArray[0].css = "banner";
cm1.formatArray[0].type = "normal";
cm1.formatArray[0].value = "Qu’est-ce qu’un plan de naissance?<br />";

cm1.formatArray[1] = new Array();
cm1.formatArray[1].type = "interaction";
               
cm1.formatArray[2] = new Array();
cm1.formatArray[2].type = "normal";
cm1.formatArray[2].value="<br /><br />";
               
cm1.interactionArray.setting = new Array();
cm1.interactionArray.setting.nbColumn = 1;
               
cm1.interactionArray.element = new Array();
cm1.interactionArray.element[0] = new Array();

cm1.interactionArray.element[0].id = 0;               
cm1.interactionArray.element[0].value = "un document qui permet de raconter le déroulement de la grossesse.";

cm1.interactionArray.element[1] = new Array();
cm1.interactionArray.element[1].value = "un document qui permet de dire ce que l’on souhaite au sujet de l’accouchement.";
cm1.interactionArray.element[1].id = 1;               

cm1.interactionArray.element[2] = new Array();
cm1.interactionArray.element[2].value = "un document qui permet de raconter les premières années de la vie du bébé.";
cm1.interactionArray.element[2].id = 2;               


cm1.answerArray[0] = new Array();
cm1.answerArray[0].id = 0;
cm1.answerArray[0].value = false;
cm1.answerArray[0].weight = 0;

cm1.answerArray[0].customFeedback = "<p>Ce n'est pas  la bonne réponse. Désolé. </p><p>Le <strong>plan de  naissance</strong> est un document qui permet aux parents de dire ce qu'ils souhaitent  au sujet de l'accouchement. Les parents donnent le document  à l'<strong>équipe médicale </strong>qui s'occupe de la  naissance de l'enfant.</p>";               

cm1.answerArray[1] = new Array();
cm1.answerArray[1].id = 1;
cm1.answerArray[1].value = true;
cm1.answerArray[1].weight = 1;
cm1.answerArray[1].customFeedback = "<p>C'est exact!</p>Le <strong>plan de naissance</strong> est un document qui permet  aux parents de dire ce qu'ils souhaitent au sujet de l'accouchement. Les parents  donnent le document  à l'<strong>équipe  médicale </strong>qui s'occupe de la naissance de l'enfant.";


cm1.answerArray[2] = new Array();
cm1.answerArray[2].id = 2;
cm1.answerArray[2].value = false;
cm1.answerArray[2].weight = 0;
cm1.answerArray[2].customFeedback = "<p>Non, désolé.</p>Le <strong>plan de naissance</strong> est un document qui permet  aux parents de dire ce qu'ils souhaitent au sujet de l'accouchement. Les  parents donnent le document  à l'<strong>équipe  médicale </strong>qui s'occupe de la naissance de l'enfant.";

this.questionSource[1] = new Array();
this.questionSource[1] = cm1;

/***********************************************/
/*                 CONTENU                  */
/***********************************************/
contentSlide4 = new Array();
               
contentSlide4.playerIdArray = new Array();
contentSlide4.formatArray = new Array();
contentSlide4.interactionArray = new Array();
               
contentSlide4.answerArray = new Array();
               
contentSlide4.questionType = "content";
contentSlide4.weight = 0;
contentSlide4.maxAttempt = 1;
contentSlide4.questionSlide = false;
               
contentSlide4.formatArray[0] = new Array();
contentSlide4.formatArray[0].css = "banner";
contentSlide4.formatArray[0].type = "normal";
contentSlide4.formatArray[0].value = "<p>Contenu de la réponse</p><br \><br \>";
               
contentSlide4.formatArray[1] = new Array();
contentSlide4.formatArray[1].type = "normal";
contentSlide4.formatArray[1].value = "";


this.questionSource[2] = new Array();
this.questionSource[2] = contentSlide4;

/***********************************************/
/*                CHOIX MULTIPLES              */
/***********************************************/

cm2 = new Array();
cm2.formatArray = new Array();
cm2.interactionArray = new Array();
cm2.answerArray = new Array();

               
cm2.questionType = "multipleChoice";
cm2.weight = 1;
cm2.maxAttempt = 1;
cm2.questionSlide = true;
cm2.customFeedback = true;
cm2.partialPoints = false;
               
cm2.formatArray[0] = new Array();
cm2.formatArray[0].css = "banner";
cm2.formatArray[0].type = "normal";
cm2.formatArray[0].value = "Quelle est la première étape de l’accouchement?<br />";

cm2.formatArray[1] = new Array();
cm2.formatArray[1].type = "interaction";
               
cm2.formatArray[2] = new Array();
cm2.formatArray[2].type = "normal";
cm2.formatArray[2].value="<br /><br />";
               
               
cm2.interactionArray.setting = new Array();
cm2.interactionArray.setting.nbColumn = 1;
               
cm2.interactionArray.element = new Array();
cm2.interactionArray.element[0] = new Array();

cm2.interactionArray.element[0].id = 0;               
cm2.interactionArray.element[0].value = "la coupure du cordon ombilical";

cm2.interactionArray.element[1] = new Array();
cm2.interactionArray.element[1].value = "l’expulsion du bébé";
cm2.interactionArray.element[1].id = 1;               

cm2.interactionArray.element[2] = new Array();
cm2.interactionArray.element[2].value = "le travail";
cm2.interactionArray.element[2].id = 2;               


cm2.answerArray[0] = new Array();
cm2.answerArray[0].id = 0;
cm2.answerArray[0].value = false;
cm2.answerArray[0].weight = 0;
cm2.answerArray[0].customFeedback = "<p>Ce n'est pas  la bonne réponse. Désolé. </p><p>La première  étape de l'accouchement est le <strong>travail</strong>. </p><p>La deuxième  étape de l'accouchement est l'expulsion du bébé.</p>";
               
cm2.answerArray[1] = new Array();
cm2.answerArray[1].id = 1;
cm2.answerArray[1].value = false;
cm2.answerArray[1].weight = 0;
cm2.answerArray[1].customFeedback = "<p>Non. Désolé.</p><p>La première  étape de l'accouchement est le <strong>travail</strong>. </p><p>La deuxième  étape de l\'accouchement est l\'expulsion du bébé.</p>";

cm2.answerArray[2] = new Array();
cm2.answerArray[2].id = 2;
cm2.answerArray[2].value = true;
cm2.answerArray[2].weight = 1;
cm2.answerArray[2].customFeedback = "<p>Bonne  réponse! </p><p>La première  étape de l'accouchement est le <strong>travail</strong>. </p><p>La deuxième  étape de l'accouchement est l'expulsion du bébé.</p>";

this.questionSource[3] = new Array();
this.questionSource[3] = cm2;



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
contentSlide3.formatArray[0].value = "<p>L'exercice  est terminé.</p> <br /> <p>Retournez à l'activité et vérifiez votre compréhension du plan de  naissance.</p><br \><br \>";
               
contentSlide3.formatArray[1] = new Array();
contentSlide3.formatArray[1].type = "normal";
contentSlide3.formatArray[1].value = "";


this.questionSource[4] = new Array();
this.questionSource[4] = contentSlide3;
