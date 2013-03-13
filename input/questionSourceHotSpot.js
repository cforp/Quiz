var questionSource = new Array();

            
/***********************************************/
/*                 HOTSPOT                     */
/***********************************************/

HS1 = new Array();

HS1.playerIdArray = new Array();
HS1.formatArray = new Array();
HS1.interactionArray = new Array();
               
HS1.answerArray = new Array();
               
HS1.questionType = "hotspot";
HS1.nbColumn = 1;
HS1.weight = 1;
HS1.maxAttempt =1;
HS1.questionSlide = true;

HS1.formatArray[0] = new Array();
HS1.formatArray[0].type = "banner";
HS1.formatArray[0].value = "<br />Sélectionnez l'oreille gauche du koala.";

HS1.formatArray[1] = new Array();
HS1.formatArray[1].type = "interaction";
HS1.formatArray[1].value = "";
HS1.formatArray[2] = new Array();
HS1.formatArray[2].type = "normal";
HS1.formatArray[2].value="<br /><br />";

HS1.interactionArray.setting = new Array();
HS1.interactionArray.setting.maxMark = 1;
HS1.interactionArray.setting.mediaArray = new Array();
HS1.interactionArray.setting.mediaArray[0] = new Array();
HS1.interactionArray.setting.mediaArray[0].value = "Koala.jpg";
HS1.interactionArray.setting.mediaArray[0].type = "image";
HS1.interactionArray.setting.mediaArray[0].location = "image";
HS1.interactionArray.setting.mediaArray[0].mediaSetting = new Array();
HS1.interactionArray.setting.mediaArray[0].mediaSetting.width = 575;
HS1.interactionArray.setting.mediaArray[0].mediaSetting.height = 450;

HS1.interactionArray.element = new Array();
HS1.interactionArray.element[0] = new Array();
HS1.interactionArray.element[0].name="zone1"
HS1.interactionArray.element[0].id= 0;
HS1.interactionArray.element[0].coords = "417,46,580,46,580,271,417,271";
HS1.interactionArray.element[0].color = "F80000";
HS1.interactionArray.element[0].desc = "Ceci est l'oreille gauche du koala.";

HS1.answerArray[0] = new Array();
HS1.answerArray[0].id = 0;
HS1.answerArray[0].name = "zone1";
HS1.answerArray[0].weight = 1;

this.questionSource[0] = new Array();
this.questionSource[0] = HS1;  


/*******************************************************************/
/*     HOTSPOT à plusieurs zones cliquables  et plusieurs markers  */
/******************************************************************/

HS2 = new Array();

HS2.playerIdArray = new Array();
HS2.formatArray = new Array();
HS2.interactionArray = new Array();
               
HS2.answerArray = new Array();
               
HS2.questionType = "hotspot";
HS2.nbColumn = 1;
HS2.weight = 1;
HS2.maxAttempt =1;
HS2.questionSlide = true;

HS2.formatArray[0] = new Array();
HS2.formatArray[0].type = "banner";
HS2.formatArray[0].value = "<br />Trouvez les yeux du koala.";

HS2.formatArray[1] = new Array();
HS2.formatArray[1].type = "interaction";
HS2.formatArray[1].value = "";
HS2.formatArray[2] = new Array();
HS2.formatArray[2].type = "normal";
HS2.formatArray[2].value="<br /><br />";

HS2.interactionArray.setting = new Array();
HS2.interactionArray.setting.maxMark = 2;
HS2.interactionArray.setting.mediaArray = new Array();
HS2.interactionArray.setting.mediaArray[0] = new Array();
HS2.interactionArray.setting.mediaArray[0].value = "Koala.jpg";
HS2.interactionArray.setting.mediaArray[0].type = "image";
HS2.interactionArray.setting.mediaArray[0].location = "image";
HS2.interactionArray.setting.mediaArray[0].mediaSetting = new Array();
HS2.interactionArray.setting.mediaArray[0].mediaSetting.width = 575;
HS2.interactionArray.setting.mediaArray[0].mediaSetting.height = 450;

HS2.interactionArray.element = new Array();
HS2.interactionArray.element[0] = new Array();
HS2.interactionArray.element[0].name="zone1"
HS2.interactionArray.element[0].id= 0;
HS2.interactionArray.element[0].coords = "359,244,369,238,377,236,382,242,382,255,375,266,367,266,357,265,356,252,359,243";
HS2.interactionArray.element[0].color = "00FF00";
HS2.interactionArray.element[0].desc = "Ceci est l'oeil gauche du koala.";

HS2.interactionArray.element[1] = new Array();
HS2.interactionArray.element[1].name="zone2"
HS2.interactionArray.element[1].id= 1;
HS2.interactionArray.element[1].coords = "206,224,213,215,222,212,230,219,227,230,225,240,215,243,207,240,204,228";
HS2.interactionArray.element[1].color = "00FF00";
HS2.interactionArray.element[1].desc = "Ceci est l'oeil droit du koala.";

HS2.answerArray[0] = new Array();
HS2.answerArray[0].id = 0;
HS2.answerArray[0].name = "zone1";
HS2.answerArray[0].weight = .5;

HS2.answerArray[0] = new Array();
HS2.answerArray[0].id = 1;
HS2.answerArray[0].name = "zone2";
HS2.answerArray[0].weight = .5;

this.questionSource[1] = new Array();
this.questionSource[1] = HS2;

