var questionSource = new Array();

var questionSource = new Array();


/********************************************************/
/*          Réponse Courte                         */
/********************************************************/
RC1 = new Array();
RC1.formatArray = new Array();
RC1.interactionArray = new Array();
RC1.answerArray = new Array();

RC1.questionType = "RC";
RC1.nbColumn = 1;
RC1.weight = 1;
RC1.maxAttempt = 1;
RC1.questionSlide = true;



RC1.formatArray[0] = new Array();
RC1.formatArray[0].css = "banner";
RC1.formatArray[0].type = "normal";
RC1.formatArray[0].value = "<br />Veuillez répondre à la question suivante.";

RC1.formatArray[1] = new Array();
RC1.formatArray[1].type = "interaction";


RC1.interactionArray.element = new Array();
RC1.interactionArray.validate = false;

RC1.interactionArray.element[0] = new Array();
RC1.interactionArray.element[0].type = "bp"; // bout de phrase
RC1.interactionArray.element[0].value = "Chaque";


RC1.interactionArray.element[1] = new Array();
RC1.interactionArray.element[1].type = "trou";
RC1.interactionArray.element[1].value = "mois";
RC1.interactionArray.element[1].id = 0;

RC1.interactionArray.element[2] = new Array();
RC1.interactionArray.element[2].type = "bp";
RC1.interactionArray.element[2].value = "Paolo et sa femme ont beaucoup de ";

RC1.interactionArray.element[3] = new Array();
RC1.interactionArray.element[3].type = "trou";
RC1.interactionArray.element[3].value = "dépenses";
RC1.interactionArray.element[3].id = 1;

RC1.interactionArray.element[4] = new Array();
RC1.interactionArray.element[4].type = "bp";
RC1.interactionArray.element[4].value = " : les sorties au";

RC1.interactionArray.element[5] = new Array();
RC1.interactionArray.element[5].type = "trou";
RC1.interactionArray.element[5].value = "cinéma";
RC1.interactionArray.element[5].id = 2;

RC1.interactionArray.element[6] = new Array();
RC1.interactionArray.element[6].type = "bp";
RC1.interactionArray.element[6].value = ", les ";

RC1.interactionArray.element[7] = new Array();
RC1.interactionArray.element[7].type = "trou";
RC1.interactionArray.element[7].value = "restaurants";
RC1.interactionArray.element[1].id = 3;

RC1.interactionArray.element[8] = new Array();
RC1.interactionArray.element[8].type = "bp";
RC1.interactionArray.element[8].value = " et le magasinage.";



RC1.answerArray[0] = new Array();
RC1.answerArray[0].value = "mois";
RC1.answerArray[0].weight = .25;
               
RC1.answerArray[1] = new Array();
RC1.answerArray[1].value = "dépenses";
RC1.answerArray[1].weight = .25;

RC1.answerArray[2] = new Array();
RC1.answerArray[2].value = "cinéma";
RC1.answerArray[2].weight = .25;

RC1.answerArray[3] = new Array();
RC1.answerArray[3].value = "restaurants";
RC1.answerArray[3].weight = .25;

this.questionSource[0] = new Array();
this.questionSource[0] = RC1;


/********************************************************/
/*          Réponse Courte      #2                    */
/********************************************************/

RC2 = new Array();
RC2.formatArray = new Array();
RC2.interactionArray = new Array();
RC2.answerArray = new Array();

RC2.questionType = "RC";
RC2.nbColumn = 1;
RC2.weight = 1;
RC2.maxAttempt = 1;
RC2.questionSlide = true;

RC2.formatArray[0] = new Array();
RC2.formatArray[0].css = "banner";
RC2.formatArray[0].type = "normal";
RC2.formatArray[0].value = "<br />Veuillez répondre à la question suivante.";

RC2.formatArray[1] = new Array();
RC2.formatArray[1].type = "interaction";

RC2.interactionArray.element = new Array();
RC2.interactionArray.validate = true;

RC2.interactionArray.element[0] = new Array();
RC2.interactionArray.element[0].type = "bp"; // bout de phrase
RC2.interactionArray.element[0].value = "Chaque";


RC2.interactionArray.element[1] = new Array();
RC2.interactionArray.element[1].type = "trou";
RC2.interactionArray.element[1].value = "mois";
RC2.interactionArray.element[1].id = 0;

RC2.interactionArray.element[2] = new Array();
RC2.interactionArray.element[2].type = "bp";
RC2.interactionArray.element[2].value = "Paolo et sa femme ont beaucoup de ";

RC2.interactionArray.element[3] = new Array();
RC2.interactionArray.element[3].type = "trou";
RC2.interactionArray.element[3].value = "dépenses";
RC2.interactionArray.element[3].id = 1;

RC2.interactionArray.element[4] = new Array();
RC2.interactionArray.element[4].type = "bp";
RC2.interactionArray.element[4].value = " : les sorties au";

RC2.interactionArray.element[5] = new Array();
RC2.interactionArray.element[5].type = "trou";
RC2.interactionArray.element[5].value = "cinéma";
RC2.interactionArray.element[5].id = 2;

RC2.interactionArray.element[6] = new Array();
RC2.interactionArray.element[6].type = "bp";
RC2.interactionArray.element[6].value = ", les ";

RC2.interactionArray.element[7] = new Array();
RC2.interactionArray.element[7].type = "trou";
RC2.interactionArray.element[7].value = "restaurants";
RC2.interactionArray.element[1].id = 3;

RC2.interactionArray.element[8] = new Array();
RC2.interactionArray.element[8].type = "bp";
RC2.interactionArray.element[8].value = " et le magasinage.";



RC2.answerArray[0] = new Array();
RC2.answerArray[0].value = "mois";
RC2.answerArray[0].weight = .25;
               
RC2.answerArray[1] = new Array();
RC2.answerArray[1].value = "dépenses";
RC2.answerArray[1].weight = .25;

RC2.answerArray[2] = new Array();
RC2.answerArray[2].value = "cinéma";
RC2.answerArray[2].weight = .25;

RC2.answerArray[3] = new Array();
RC2.answerArray[3].value = "restaurants";
RC2.answerArray[3].weight = .25;



this.questionSource[1] = new Array();
this.questionSource[1] = RC2;
/********************************************************/
/*          Réponse Courte                         */
/********************************************************/

/*RC1 = new Array();
RC1.formatArray = new Array();
RC1.interactionArray = new Array();
RC1.answerArray = new Array();

RC1.questionType = "RC";
RC1.nbColumn = 1;
RC1.weight = 1;
RC1.maxAttempt = 1;
RC1.questionSlide = true;

RC1.formatArray[0] = new Array();
RC1.formatArray[0].type = "banner";
RC1.formatArray[0].value = "<br />Veuillez répondre à la question suivante.";

RC1.formatArray[1] = new Array();
RC1.formatArray[1].type = "interaction";


RC1.interactionArray.validate = false;
RC1.interactionArray.element = new Array();

RC1.interactionArray.element[0] = new Array();
RC1.interactionArray.element[0].type = "bp"; // bout de phrase
RC1.interactionArray.element[0].value = "Chaque";


RC1.interactionArray.element[1] = new Array();
RC1.interactionArray.element[1].type = "trou";
RC1.interactionArray.element[1].value = "mois";
RC1.interactionArray.element[1].id = 0;

RC1.interactionArray.element[2] = new Array();
RC1.interactionArray.element[2].type = "bp";
RC1.interactionArray.element[2].value = "Paolo et sa femme ont beaucoup de ";

RC1.interactionArray.element[3] = new Array();
RC1.interactionArray.element[3].type = "trou";
RC1.interactionArray.element[3].value = "dépenses";
RC1.interactionArray.element[3].id = 1;

RC1.interactionArray.element[4] = new Array();
RC1.interactionArray.element[4].type = "bp";
RC1.interactionArray.element[4].value = " : les sorties au";

RC1.interactionArray.element[5] = new Array();
RC1.interactionArray.element[5].type = "trou";
RC1.interactionArray.element[5].value = "cinéma";
RC1.interactionArray.element[5].id = 2;

RC1.interactionArray.element[6] = new Array();
RC1.interactionArray.element[6].type = "bp";
RC1.interactionArray.element[6].value = ", les ";

RC1.interactionArray.element[7] = new Array();
RC1.interactionArray.element[7].type = "trou";
RC1.interactionArray.element[7].value = "restaurants";
RC1.interactionArray.element[1].id = 3;

RC1.interactionArray.element[8] = new Array();
RC1.interactionArray.element[8].type = "bp";
RC1.interactionArray.element[8].value = " et le magasinage.";



RC1.answerArray[0] = new Array();
RC1.answerArray[0].value = "mois";
RC1.answerArray[0].weight = .25;
               
RC1.answerArray[1] = new Array();
RC1.answerArray[1].value = "dépenses";
RC1.answerArray[1].weight = .25;


RC1.answerArray[2] = new Array();
RC1.answerArray[2].value = "cinéma";
RC1.answerArray[2].weight = .25;


RC1.answerArray[3] = new Array();
RC1.answerArray[3].value = "restaurants";
RC1.answerArray[3].weight = .25;


this.questionSource[0] = new Array();
this.questionSource[0] = RC1;



/********************************************************/
/*          Réponse Courte                         */
/********************************************************/
/*
RC2 = new Array();
RC2.formatArray = new Array();
RC2.interactionArray = new Array();
RC2.answerArray = new Array();

RC2.questionType = "RC";
RC2.nbColumn = 1;
RC2.weight = 1;
RC2.maxAttempt = 1;
RC2.questionSlide = true;

RC2.formatArray[0] = new Array();
RC2.formatArray[0].type = "banner";
RC2.formatArray[0].value = "<br />Veuillez répondre à la question suivante.";

RC2.formatArray[1] = new Array();
RC2.formatArray[1].type = "interaction";

RC2.interactionArray.validate = false;
RC2.interactionArray.element = new Array();

RC2.interactionArray.element[0] = new Array();
RC2.interactionArray.element[0].type = "bp"; // bout de phrase
RC2.interactionArray.element[0].value = "Chaque";


RC2.interactionArray.element[1] = new Array();
RC2.interactionArray.element[1].type = "trou";
RC2.interactionArray.element[1].value = "mois";
RC2.interactionArray.element[1].id = 0;

RC2.interactionArray.element[2] = new Array();
RC2.interactionArray.element[2].type = "bp";
RC2.interactionArray.element[2].value = "Paolo et sa femme ont beaucoup de ";

RC2.interactionArray.element[3] = new Array();
RC2.interactionArray.element[3].type = "trou";
RC2.interactionArray.element[3].value = "dépenses";
RC2.interactionArray.element[3].id = 1;

RC2.interactionArray.element[4] = new Array();
RC2.interactionArray.element[4].type = "bp";
RC2.interactionArray.element[4].value = " : les sorties au";

RC2.interactionArray.element[5] = new Array();
RC2.interactionArray.element[5].type = "trou";
RC2.interactionArray.element[5].value = "cinéma";
RC2.interactionArray.element[5].id = 2;

RC2.interactionArray.element[6] = new Array();
RC2.interactionArray.element[6].type = "bp";
RC2.interactionArray.element[6].value = ", les ";

RC2.interactionArray.element[7] = new Array();
RC2.interactionArray.element[7].type = "trou";
RC2.interactionArray.element[7].value = "restaurants";
RC2.interactionArray.element[1].id = 3;

RC2.interactionArray.element[8] = new Array();
RC2.interactionArray.element[8].type = "bp";
RC2.interactionArray.element[8].value = " et le magasinage.";



RC2.answerArray[0] = new Array();
RC2.answerArray[0].value = "mois";
RC2.answerArray[0].weight = .25;
//RC2.answerArray[0].id = 0;
               
RC2.answerArray[1] = new Array();
RC2.answerArray[1].value = "dépenses";
RC2.answerArray[1].weight = .25;
//RC2.answerArray[1].id = 1;

RC2.answerArray[2] = new Array();
RC2.answerArray[2].value = "cinéma";
RC2.answerArray[2].weight = .25;
//RC2.answerArray[2].id = 2;

RC2.answerArray[3] = new Array();
RC2.answerArray[3].value = "restaurants";
RC2.answerArray[3].weight = .25;
//RC2.answerArray[3].id = 3;

this.questionSource[1] = new Array();
this.questionSource[1] = RC2;


*/


