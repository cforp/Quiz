var questionSource = new Array();


/********************************************************/
/*          texte à trous Drop down                     */
/********************************************************/

questionSource[0] = new Array();
questionSource[0].formatArray = new Array();
questionSource[0].interactionArray = new Array();
questionSource[0].answerArray = new Array();

questionSource[0].questionType = "texteTrouDD";
questionSource[0].nbColumn = 1;
questionSource[0].weight = 1;
questionSource[0].maxAttempt = 1;
questionSource[0].questionSlide = true;

questionSource[0].formatArray[0] = new Array();
questionSource[0].formatArray[0].type = "banner";
questionSource[0].formatArray[0].value = "<br />Veuillez choisir le bon mot.";

questionSource[0].formatArray[1] = new Array();
questionSource[0].formatArray[1].type = "interaction";

questionSource[0].interactionArray.element = new Array();

questionSource[0].interactionArray.element[0] = new Array();
questionSource[0].interactionArray.element[0].type = "bp"; // bout de phrase
questionSource[0].interactionArray.element[0].value = "J'habite au ";

questionSource[0].interactionArray.element[1] = new Array();
questionSource[0].interactionArray.element[1].type = "trou";
questionSource[0].interactionArray.element[1].id = 0;

questionSource[0].interactionArray.element[1].trou = new Array();
questionSource[0].interactionArray.element[1].trou[0] = new Array();
questionSource[0].interactionArray.element[1].trou[0].value = "France";
questionSource[0].interactionArray.element[1].trou[0].id = 0;
questionSource[0].interactionArray.element[1].trou[1] = new Array();
questionSource[0].interactionArray.element[1].trou[1].value = "Canada";
questionSource[0].interactionArray.element[1].trou[1].id = 1;
questionSource[0].interactionArray.element[1].trou[2] = new Array();
questionSource[0].interactionArray.element[1].trou[2].value = "Belgique";
questionSource[0].interactionArray.element[1].trou[2].id = 2;

questionSource[0].interactionArray.element[2] = new Array();
questionSource[0].interactionArray.element[2].type = "bp";
questionSource[0].interactionArray.element[2].value = "depuis";

questionSource[0].interactionArray.element[3] = new Array();
questionSource[0].interactionArray.element[3].type = "trou";
questionSource[0].interactionArray.element[3].id = 1;

questionSource[0].interactionArray.element[3].trou = new Array();
questionSource[0].interactionArray.element[3].trou[0] = new Array();
questionSource[0].interactionArray.element[3].trou[0].value = "Toujours";
questionSource[0].interactionArray.element[3].trou[0].id = 0;
questionSource[0].interactionArray.element[3].trou[1] = new Array();
questionSource[0].interactionArray.element[3].trou[1].value = "3 jours";
questionSource[0].interactionArray.element[3].trou[1].id = 1;
questionSource[0].interactionArray.element[3].trou[2] = new Array();
questionSource[0].interactionArray.element[3].trou[2].value = "3 ans";
questionSource[0].interactionArray.element[3].trou[2].id = 2;

questionSource[0].answerArray[0] = new Array();
questionSource[0].answerArray[0].value = 1;
questionSource[0].answerArray[0].weight = .5;
questionSource[0].answerArray[0].id = 0;

               
questionSource[0].answerArray[1] = new Array();
questionSource[0].answerArray[1].value = 0;
questionSource[0].answerArray[1].weight = .5;
questionSource[0].answerArray[1].id = 1;

/********************************************************/
/*          texte à trous Drop down                   */
/********************************************************/
/*
questionSource[1] = new Array();
questionSource[1].formatArray = new Array();
questionSource[1].interactionArray = new Array();
questionSource[1].answerArray = new Array();

questionSource[1].questionType = "texteTrouDD";
questionSource[1].nbColumn = 1;
questionSource[1].weight = 1;
questionSource[1].maxAttempt = 1;
questionSource[1].questionSlide = true;

questionSource[1].formatArray[0] = new Array();
questionSource[1].formatArray[0].type = "banner";
questionSource[1].formatArray[0].value = "<br />Veuillez choisir le bon mot.";

questionSource[1].formatArray[1] = new Array();
questionSource[1].formatArray[1].type = "interaction";

questionSource[1].interactionArray.element = new Array();

questionSource[1].interactionArray.element[0] = new Array();
questionSource[1].interactionArray.element[0].type = "bp"; // bout de phrase
questionSource[1].interactionArray.element[0].value = "Il y aura un";


questionSource[1].interactionArray.element[1] = new Array();
questionSource[1].interactionArray.element[1].type = "trou";
questionSource[1].interactionArray.element[1].id = 0;

questionSource[1].interactionArray.element[1].trou = new Array();
questionSource[1].interactionArray.element[1].trou[0] = "spectacle";
questionSource[1].interactionArray.element[1].trou[1] = "tournoi";
questionSource[1].interactionArray.element[1].trou[2] = "buffet";

questionSource[1].interactionArray.element[2] = new Array();
questionSource[1].interactionArray.element[2].type = "bp";
questionSource[1].interactionArray.element[2].value = "en votre honneur ";


questionSource[1].interactionArray.element[3] = new Array();
questionSource[1].interactionArray.element[3].type = "trou";
questionSource[1].interactionArray.element[3].id = 1;

questionSource[1].interactionArray.element[3].trou = new Array();
questionSource[1].interactionArray.element[3].trou[0] = "ce week-end";
questionSource[1].interactionArray.element[3].trou[1] = "la semaine prochaine";
questionSource[1].interactionArray.element[3].trou[2] = "le mois prochain";

questionSource[1].answerArray[0] = new Array();
questionSource[1].answerArray[0].value = 0;
questionSource[1].answerArray[0].weight = .5;
questionSource[1].answerArray[0].id = 0;
               
questionSource[1].answerArray[1] = new Array();
questionSource[1].answerArray[1].value = 1;
questionSource[1].answerArray[1].weight = .5;
questionSource[1].answerArray[1].id = 1;
*/