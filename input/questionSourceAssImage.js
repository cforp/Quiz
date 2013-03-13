var questionSource = new Array();

/********************************************************/
/*          ASSOCIATION DESCRIPTION                     */
/********************************************************/

assDesc1 = new Array();
assDesc1.formatArray = new Array();
assDesc1.interactionArray = new Array();
assDesc1.answerArray = new Array();

assDesc1.questionType = "assMatch";
assDesc1.nbColumn = 1;
assDesc1.weight = 1;
assDesc1.maxAttempt = 1;
assDesc1.questionSlide = true;

assDesc1.formatArray[0] = new Array();
assDesc1.formatArray[0].type = "banner";
assDesc1.formatArray[0].value = "<br />Cliquez sur la bonne description";

assDesc1.formatArray[1] = new Array();
assDesc1.formatArray[1].type = "interaction";

assDesc1.interactionArray.setting = new Array();
assDesc1.interactionArray.setting.typeAssociation = "description";

assDesc1.interactionArray.element = new Array();
assDesc1.interactionArray.element[0] = new Array();

/********************************************************/
/*           Définir les descriptions                   */
/********************************************************/
assDesc1.interactionArray.element[0].description = new Array();

assDesc1.interactionArray.element[0].description[0] = new Array();
assDesc1.interactionArray.element[0].description[0].value = "un parc";
assDesc1.interactionArray.element[0].description[0].id = 0;

assDesc1.interactionArray.element[0].description[1] = new Array();
assDesc1.interactionArray.element[0].description[1].value = "la location de vélos";
assDesc1.interactionArray.element[0].description[1].id = 1;

assDesc1.interactionArray.element[0].description[2] = new Array();
assDesc1.interactionArray.element[0].description[2].value = "la plaque de rue";
assDesc1.interactionArray.element[0].description[2].id = 2;

assDesc1.interactionArray.element[0].description[3] = new Array();
assDesc1.interactionArray.element[0].description[3].value = "un trottoir";
assDesc1.interactionArray.element[0].description[3].id = 3;

assDesc1.interactionArray.element[0].description[4] = new Array();
assDesc1.interactionArray.element[0].description[4].value = "un passage pour piétons";
assDesc1.interactionArray.element[0].description[4].id = 4;

assDesc1.interactionArray.element[0].description[5] = new Array();
assDesc1.interactionArray.element[0].description[5].value = "le quai de métro";
assDesc1.interactionArray.element[0].description[5].id = 5;

assDesc1.interactionArray.element[0].description[6] = new Array();
assDesc1.interactionArray.element[0].description[6].value = "le nettoyage";
assDesc1.interactionArray.element[0].description[6].id = 6;

assDesc1.interactionArray.element[0].description[7] = new Array();
assDesc1.interactionArray.element[0].description[7].value = "un panneau de signalisation";
assDesc1.interactionArray.element[0].description[7].id = 7;



/********************************************************/
/*     Définir les médias (images ou vidéo ou son)      */
/********************************************************/


assDesc1.interactionArray.element[0].mediaArray = new Array();
assDesc1.interactionArray.element[0].mediaArray[0] = new Array();
 
assDesc1.interactionArray.element[0].mediaArray[0].type="image";
assDesc1.interactionArray.element[0].mediaArray[0].value="Penguins.jpg";
assDesc1.interactionArray.element[0].mediaArray[0].location = "image";
assDesc1.interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
assDesc1.interactionArray.element[0].mediaArray[0].mediaSetting.width = 160;
assDesc1.interactionArray.element[0].mediaArray[0].mediaSetting.height = 145;
assDesc1.interactionArray.element[0].mediaArray[0].mediaSetting.widthRatio = 1;
assDesc1.interactionArray.element[0].mediaArray[0].mediaSetting.heightRatio = 1;
assDesc1.interactionArray.element[0].mediaArray[0].mediaSetting.fancy = false;


assDesc1.answerArray[0] = new Array();
assDesc1.answerArray[0].value = 2;
assDesc1.answerArray[0].weight = 1;
               
this.questionSource[0] = new Array();
this.questionSource[0] = assDesc1;   
            
/********************************************************/
/*          ASSOCIATION IMAGE                           */
/********************************************************/
/*
assImage1 = new Array();
assImage1.formatArray = new Array();
assImage1.interactionArray = new Array();
assImage1.answerArray = new Array();

assImage1.questionType = "assMatch;
assImage1.nbColumn = 1;
assImage1.weight = 1;
assImage1.maxAttempt = 1;
assImage1.questionSlide = true;

assImage1.formatArray[0] = new Array();
assImage1.formatArray[0].type = "banner";
assImage1.formatArray[0].value = "<br />Cliquez sur la bonne image";

assImage1.formatArray[1] = new Array();
assImage1.formatArray[1].type = "interaction";

assImage1.interactionArray.setting = new Array();
assImage1.interactionArray.setting.typeAssociation = "image";

assImage1.interactionArray.element = new Array();
assImage1.interactionArray.element[0] = new Array();

/********************************************************/
/*           Définir la descriptions                   */
/********************************************************/
/*assImage1.interactionArray.element[0].description = new Array();
assImage1.interactionArray.element[0].description[0].value = "un parc";



/********************************************************/
/*     Définir les médias (images ou vidéo ou son)      */
/********************************************************/


/*assImage1.interactionArray.element[0].mediaArray = new Array();
assImage1.interactionArray.element[0].mediaArray[0] = new Array();
 
assImage1.interactionArray.element[0].mediaArray[0].type="image";
assImage1.interactionArray.element[0].mediaArray[0].value="hubert.png";
assImage1.interactionArray.element[0].mediaArray[0].location = "image";
assImage1.interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.width = 150;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.height = 139;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.widthRatio = 1;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.heightRatio = 1;
assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.fancy = false;

assImage1.interactionArray.element[0].mediaArray[1] = new Array(); 
assImage1.interactionArray.element[0].mediaArray[1].type="image";
assImage1.interactionArray.element[0].mediaArray[1].value="hubert.png";
assImage1.interactionArray.element[0].mediaArray[1].location = "image";
assImage1.interactionArray.element[0].mediaArray[1].mediaSetting = new Array();
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.width = 150;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.height = 139;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.widthRatio = 1;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.heightRatio = 1;
assImage1.interactionArray.element[0].mediaArray[1].mediaSetting.fancy = false;

assImage1.interactionArray.element[0].mediaArray[2] = new Array(); 
assImage1.interactionArray.element[0].mediaArray[2].type="image";
assImage1.interactionArray.element[0].mediaArray[2].value="hubert.png";
assImage1.interactionArray.element[0].mediaArray[2].location = "image";
assImage1.interactionArray.element[0].mediaArray[2].mediaSetting = new Array();
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.width = 150;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.height = 139;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.widthRatio = 1;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.heightRatio = 1;
assImage1.interactionArray.element[0].mediaArray[2].mediaSetting.fancy = false;

assImage1.interactionArray.element[0].mediaArray[3] = new Array(); 
assImage1.interactionArray.element[0].mediaArray[3].type="image";
assImage1.interactionArray.element[0].mediaArray[3].value="hubert.png";
assImage1.interactionArray.element[0].mediaArray[3].location = "image";
assImage1.interactionArray.element[0].mediaArray[3].mediaSetting = new Array();
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.width = 150;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.height = 139;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.widthRatio = 1;
//assImage1.interactionArray.element[0].mediaArray[0].mediaSetting.heightRatio = 1;
assImage1.interactionArray.element[0].mediaArray[3].mediaSetting.fancy = false;


assImage1.answerArray[0] = new Array();
assImage1.answerArray[0].value = 1;
assImage1.answerArray[0].weight = 1;
               
this.questionSource[0] = new Array();
this.questionSource[0] = assImage1;   
            
*/