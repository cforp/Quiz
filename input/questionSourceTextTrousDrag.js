var questionSource = new Array();


/********************************************************/
/*          texte à trous Drag et Wordbank              */
/********************************************************/


ttDrag1 = new Array();
ttDrag1.formatArray = new Array();
ttDrag1.interactionArray = new Array();
ttDrag1.answerArray = new Array();

ttDrag1.questionType = "texteTrouDrag";
ttDrag1.nbColumn = 1;
ttDrag1.weight = 1;
ttDrag1.maxAttempt = 1;
ttDrag1.questionSlide = true;

ttDrag1.formatArray[0] = new Array();
//ttDrag1.formatArray[0].css = "banner";
ttDrag1.formatArray[0].type = "banner";
ttDrag1.formatArray[0].value = "<br />Veuillez répondre à la question suivante.";

ttDrag1.formatArray[1] = new Array();
ttDrag1.formatArray[1].type = "interaction";

ttDrag1.interactionArray.element = new Array();

ttDrag1.interactionArray.element[0] = new Array();
ttDrag1.interactionArray.element[0].type = "bp"; // bout de phrase
ttDrag1.interactionArray.element[0].value = "Chaque";

ttDrag1.interactionArray.element[1] = new Array();
ttDrag1.interactionArray.element[1].type = "trou";
ttDrag1.interactionArray.element[1].value = 0;

ttDrag1.interactionArray.element[2] = new Array();
ttDrag1.interactionArray.element[2].type = "bp";
ttDrag1.interactionArray.element[2].value = "Paolo et sa femme ont beaucoup de ";

ttDrag1.interactionArray.element[3] = new Array();
ttDrag1.interactionArray.element[3].type = "trou";
ttDrag1.interactionArray.element[3].value = 1;

ttDrag1.interactionArray.element[4] = new Array();
ttDrag1.interactionArray.element[4].type = "bp";
ttDrag1.interactionArray.element[4].value = " : les sorties au";

ttDrag1.interactionArray.element[5] = new Array();
ttDrag1.interactionArray.element[5].type = "trou";
ttDrag1.interactionArray.element[5].value = 2;

ttDrag1.interactionArray.element[6] = new Array();
ttDrag1.interactionArray.element[6].type = "bp";
ttDrag1.interactionArray.element[6].value = ", les ";

ttDrag1.interactionArray.element[7] = new Array();
ttDrag1.interactionArray.element[7].type = "trou";
ttDrag1.interactionArray.element[7].value = 3;

ttDrag1.interactionArray.element[8] = new Array();
ttDrag1.interactionArray.element[8].type = "bp";
ttDrag1.interactionArray.element[8].value = " et le magasinage.";



ttDrag1.answerArray[0] = new Array();
ttDrag1.answerArray[0].value = "mois";
ttDrag1.answerArray[0].weight = .25;
ttDrag1.answerArray[0].id = 0;
               
ttDrag1.answerArray[1] = new Array();
ttDrag1.answerArray[1].value = "dépenses";
ttDrag1.answerArray[1].weight = .25;
ttDrag1.answerArray[1].id = 1;

ttDrag1.answerArray[2] = new Array();
ttDrag1.answerArray[2].value = "cinéma";
ttDrag1.answerArray[2].weight = .25;
ttDrag1.answerArray[2].id = 2;

ttDrag1.answerArray[3] = new Array();
ttDrag1.answerArray[3].value = "restaurants";
ttDrag1.answerArray[3].weight = .25;
ttDrag1.answerArray[3].id = 3;

ttDrag1.answerArray[4] = new Array();
ttDrag1.answerArray[4].value = "camping";
ttDrag1.answerArray[4].weight = 0;
ttDrag1.answerArray[4].id = 4;

ttDrag1.answerArray[5] = new Array();
ttDrag1.answerArray[5].value = "année";
ttDrag1.answerArray[5].weight = 0;
ttDrag1.answerArray[5].id = 5;

this.questionSource[0] = new Array();
this.questionSource[0] = ttDrag1;

/********************************************************/
/*          texte à trous Drag et Wordbank              */
/********************************************************/
/*

ttDrag2 = new Array();
ttDrag2.formatArray = new Array();
ttDrag2.interactionArray = new Array();
ttDrag2.answerArray = new Array();

ttDrag2.questionType = "texteTrouDrag";
ttDrag2.nbColumn = 1;
ttDrag2.weight = 1;
ttDrag2.maxAttempt = 1;
ttDrag2.questionSlide = true;

ttDrag2.formatArray[0] = new Array();
//ttDrag2.formatArray[0].css = "banner";
ttDrag2.formatArray[0].type = "banner";
ttDrag2.formatArray[0].value = "<br />Veuillez répondre à la question suivante.";

ttDrag2.formatArray[1] = new Array();
ttDrag2.formatArray[1].type = "interaction";

ttDrag2.interactionArray.element = new Array();

ttDrag2.interactionArray.element[0] = new Array();
ttDrag2.interactionArray.element[0].type = "bp"; // bout de phrase
ttDrag2.interactionArray.element[0].value = "Chaque";

ttDrag2.interactionArray.element[1] = new Array();
ttDrag2.interactionArray.element[1].type = "trou";
ttDrag2.interactionArray.element[1].value = 0;

ttDrag2.interactionArray.element[2] = new Array();
ttDrag2.interactionArray.element[2].type = "bp";
ttDrag2.interactionArray.element[2].value = "Paolo et sa femme ont beaucoup de ";

ttDrag2.interactionArray.element[3] = new Array();
ttDrag2.interactionArray.element[3].type = "trou";
ttDrag2.interactionArray.element[3].value = 1;

ttDrag2.interactionArray.element[4] = new Array();
ttDrag2.interactionArray.element[4].type = "bp";
ttDrag2.interactionArray.element[4].value = " : les sorties au";

ttDrag2.interactionArray.element[5] = new Array();
ttDrag2.interactionArray.element[5].type = "trou";
ttDrag2.interactionArray.element[5].value = 2;

ttDrag2.interactionArray.element[6] = new Array();
ttDrag2.interactionArray.element[6].type = "bp";
ttDrag2.interactionArray.element[6].value = ", les ";

ttDrag2.interactionArray.element[7] = new Array();
ttDrag2.interactionArray.element[7].type = "trou";
ttDrag2.interactionArray.element[7].value = 3;

ttDrag2.interactionArray.element[8] = new Array();
ttDrag2.interactionArray.element[8].type = "bp";
ttDrag2.interactionArray.element[8].value = " et le magasinage.";



ttDrag2.answerArray[0] = new Array();
ttDrag2.answerArray[0].value = "mois";
ttDrag2.answerArray[0].weight = .25;
ttDrag2.answerArray[0].id = 0;
               
ttDrag2.answerArray[1] = new Array();
ttDrag2.answerArray[1].value = "dépenses";
ttDrag2.answerArray[1].weight = .25;
ttDrag2.answerArray[1].id = 1;

ttDrag2.answerArray[2] = new Array();
ttDrag2.answerArray[2].value = "cinéma";
ttDrag2.answerArray[2].weight = .25;
ttDrag2.answerArray[2].id = 2;

ttDrag2.answerArray[3] = new Array();
ttDrag2.answerArray[3].value = "restaurants";
ttDrag2.answerArray[3].weight = .25;
ttDrag2.answerArray[3].id = 3;

ttDrag2.answerArray[4] = new Array();
ttDrag2.answerArray[4].value = "camping";
ttDrag2.answerArray[4].weight = 0;
ttDrag2.answerArray[4].id = 4;

ttDrag2.answerArray[5] = new Array();
ttDrag2.answerArray[5].value = "année";
ttDrag2.answerArray[5].weight = 0;
ttDrag2.answerArray[5].id = 5;

this.questionSource[1] = new Array();
this.questionSource[1] = ttDrag2;

*/
/********************************************************/
/*          Wordbank              */
/********************************************************/


wb1 = new Array();
wb1.formatArray = new Array();
wb1.interactionArray = new Array();
wb1.answerArray = new Array();

wb1.questionType = "texteTrouDrag";
wb1.nbColumn = 1;
wb1.weight = 1;
wb1.maxAttempt = 1;
wb1.questionSlide = true;

wb1.formatArray[0] = new Array();
//wb1.formatArray[0].css = "banner";
wb1.formatArray[0].type = "banner";
wb1.formatArray[0].value = "<br />Choisir cinéma.";

wb1.formatArray[1] = new Array();
wb1.formatArray[1].type = "interaction";

wb1.interactionArray.element = new Array();

wb1.interactionArray.element[0] = new Array();
wb1.interactionArray.element[0].type = "trou";
wb1.interactionArray.element[0].value = 2;

wb1.answerArray[0] = new Array();
wb1.answerArray[0].value = "mois";
wb1.answerArray[0].weight = 0;
wb1.answerArray[0].id = 0;
               
wb1.answerArray[1] = new Array();
wb1.answerArray[1].value = "dépenses";
wb1.answerArray[1].weight = 0;
wb1.answerArray[1].id = 1;

wb1.answerArray[2] = new Array();
wb1.answerArray[2].value = "cinéma";
wb1.answerArray[2].weight = 1;
wb1.answerArray[2].id = 2;

wb1.answerArray[3] = new Array();
wb1.answerArray[3].value = "restaurants";
wb1.answerArray[3].weight = 0;
wb1.answerArray[3].id = 3;

wb1.answerArray[4] = new Array();
wb1.answerArray[4].value = "camping";
wb1.answerArray[4].weight = 0;
wb1.answerArray[4].id = 4;

wb1.answerArray[5] = new Array();
wb1.answerArray[5].value = "année";
wb1.answerArray[5].weight = 0;
wb1.answerArray[5].id = 5;

this.questionSource[1] = new Array();
this.questionSource[1] = wb1;

