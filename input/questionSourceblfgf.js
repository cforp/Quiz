hotSpot1 = new Array();

hotSpot1.playerIdArray = new Array();
hotSpot1.formatArray = new Array();
hotSpot1.interactionArray = new Array();
               
hotSpot1.answerArray = new Array();
               
hotSpot1.questionType = "hotspot";
hotSpot1.nbColumn = 1;
hotSpot1.weight = 1;
hotSpot1.maxAttempt =1;
hotSpot1.questionSlide = true;
hotSpot1.partialPoints = false;

hotSpot1.formatArray[0] = new Array();
hotSpot1.formatArray[0].css = "banner";
hotSpot1.formatArray[0].type = "normal";
hotSpot1.formatArray[0].value = "<br />Sélectionnez l'oreille gauche du koala.";

hotSpot1.formatArray[1] = new Array();
hotSpot1.formatArray[1].type = "interaction";
hotSpot1.formatArray[1].value = "";
hotSpot1.formatArray[2] = new Array();
hotSpot1.formatArray[2].type = "normal";
hotSpot1.formatArray[2].value="<br /><br />";

hotSpot1.interactionArray.setting = new Array();
hotSpot1.interactionArray.setting.maxMark = 1;
hotSpot1.interactionArray.setting.mediaArray = new Array();
hotSpot1.interactionArray.setting.mediaArray[0] = new Array();
hotSpot1.interactionArray.setting.mediaArray[0].value = "Koala.jpg";
hotSpot1.interactionArray.setting.mediaArray[0].type = "image";
hotSpot1.interactionArray.setting.mediaArray[0].location = "image";
hotSpot1.interactionArray.setting.mediaArray[0].mediaSetting = new Array();
hotSpot1.interactionArray.setting.mediaArray[0].mediaSetting.width = 575;
hotSpot1.interactionArray.setting.mediaArray[0].mediaSetting.height = 450;

hotSpot1.interactionArray.element = new Array();
hotSpot1.interactionArray.element[0] = new Array();
hotSpot1.interactionArray.element[0].name="zone1"
hotSpot1.interactionArray.element[0].id= 0;
hotSpot1.interactionArray.element[0].coords = "417,46,580,46,580,271,417,271";
hotSpot1.interactionArray.element[0].color = "F80000";
hotSpot1.interactionArray.element[0].desc = "Ceci est l'oreille gauche du koala.";

hotSpot1.answerArray[0] = new Array();
hotSpot1.answerArray[0].id = 0;
hotSpot1.answerArray[0].name = "zone1";
hotSpot1.answerArray[0].weight = 1;


//////////////////////////////////////////////////

mc1 = new Array();
mc1.formatArray = new Array();
mc1.interactionArray = new Array();
mc1.answerArray = new Array();
               
mc1.questionType = "multipleResponse";
mc1.nbColumn = 1;
mc1.weight = 1;
mc1.maxAttempt = 1;
mc1.questionSlide = true;
mc1.partialPoints = false;
               
mc1.formatArray[0] = new Array();
mc1.formatArray[0].css = "banner";
mc1.formatArray[0].type = "normal";
mc1.formatArray[0].value = "<br />Ceci est un koala.";
               
               
mc1.formatArray[1] = new Array();
mc1.formatArray[1].type = "media";
mc1.formatArray[1].mediaArray = new Array();
mc1.formatArray[1].mediaArray[0] = new Array();
mc1.formatArray[1].mediaArray[0].value = "Koala.jpg";
mc1.formatArray[1].mediaArray[0].type = "image";
mc1.formatArray[1].mediaArray[0].location = "image";
mc1.formatArray[1].mediaArray[0].mediaSetting = new Array();
mc1.formatArray[1].mediaArray[0].mediaSetting.width = 250;
mc1.formatArray[1].mediaArray[0].mediaSetting.height = 200;
mc1.formatArray[1].mediaArray[0].mediaSetting.fancy = true;
               
               
mc1.formatArray[2] = new Array();
mc1.formatArray[2].type = "interaction";
               
mc1.formatArray[3] = new Array();
mc1.formatArray[3].type = "normal";
mc1.formatArray[3].value="<br /><br />";
                           
mc1.interactionArray.setting = new Array();
               
mc1.interactionArray.element = new Array();
mc1.interactionArray.element[0] = new Array();
               
mc1.interactionArray.element[0].value = "Vrai";
mc1.interactionArray.element[0].id = 0;
mc1.interactionArray.element[0].mediaArray = new Array();

mc1.interactionArray.element[1] = new Array();
mc1.interactionArray.element[1].value = "Faux";
mc1.interactionArray.element[1].id = 1;
mc1.interactionArray.element[1].mediaArray = new Array();

mc1.interactionArray.element[2] = new Array();
mc1.interactionArray.element[2].value = "Other";
mc1.interactionArray.element[2].id = 2;
mc1.interactionArray.element[2].mediaArray = new Array();

mc1.answerArray[0] = new Array();
mc1.answerArray[0].id = 0;
mc1.answerArray[0].value = false;
mc1.answerArray[0].weight = 0;
               
mc1.answerArray[1] = new Array();
mc1.answerArray[1].id = 1;
mc1.answerArray[1].value = false;
mc1.answerArray[1].weight = 0;

mc1.answerArray[2] = new Array();
mc1.answerArray[2].id = 2;
mc1.answerArray[2].value = true;
mc1.answerArray[2].weight = 1;

////////////////////////////////////////////////////////
tf = new Array();
tf.formatArray = new Array();
tf.interactionArray = new Array();
tf.answerArray = new Array();
               
tf.questionType = "trueFalse";
tf.nbColumn = 1;
tf.weight = 1;
tf.maxAttempt = 1;
tf.questionSlide = true;
tf.partialPoints = false;
               
tf.formatArray[0] = new Array();
tf.formatArray[0].css = "banner";
tf.formatArray[0].type = "normal";
tf.formatArray[0].value = "<br />Ceci est un koala.";

               
tf.formatArray[1] = new Array();
tf.formatArray[1].type = "media";
tf.formatArray[1].mediaArray = new Array();
tf.formatArray[1].mediaArray[0] = new Array();
tf.formatArray[1].mediaArray[0].value = "Koala.jpg";
tf.formatArray[1].mediaArray[0].type = "image";
tf.formatArray[1].mediaArray[0].location = "image";
tf.formatArray[1].mediaArray[0].mediaSetting = new Array();
tf.formatArray[1].mediaArray[0].mediaSetting.width = 250;
tf.formatArray[1].mediaArray[0].mediaSetting.height = 200;
tf.formatArray[1].mediaArray[0].mediaSetting.fancy = true;


tf.formatArray[2] = new Array();
tf.formatArray[2].type = "interaction";

tf.formatArray[3] = new Array();
tf.formatArray[3].type = "normal";
tf.formatArray[3].value="<br /><br />";

               
tf.interactionArray.setting = new Array();
               
tf.interactionArray.element = new Array();
tf.interactionArray.element[0] = new Array();
               
tf.interactionArray.element[0].value = "Vrai";
tf.interactionArray.element[0].id = 0;
               
tf.interactionArray.element[0].mediaArray = new Array();
/*             
tf.interactionArray.element[0].mediaArray[0] = new Array();
tf.interactionArray.element[0].mediaArray[0].type="image";
tf.interactionArray.element[0].mediaArray[0].value="Penguins.jpg";
tf.interactionArray.element[0].mediaArray[0].location = "image";
tf.interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
tf.interactionArray.element[0].mediaArray[0].mediaSetting.width = 250;
tf.interactionArray.element[0].mediaArray[0].mediaSetting.height = 150;
tf.interactionArray.element[0].mediaArray[0].mediaSetting.widthRatio = 1;
tf.interactionArray.element[0].mediaArray[0].mediaSetting.heightRatio = 1;
tf.interactionArray.element[0].mediaArray[0].mediaSetting.fancy = true;
               
tf.interactionArray.element[0].mediaArray[1] = new Array();
tf.interactionArray.element[0].mediaArray[1].type="video";
tf.interactionArray.element[0].mediaArray[1].value="CLIC5_U1_M1_EE_A3_video1.mp4";
tf.interactionArray.element[0].mediaArray[1].location = "video";
tf.interactionArray.element[0].mediaArray[1].mediaSetting = new Array();
tf.interactionArray.element[0].mediaArray[1].mediaSetting.width = 150;
tf.interactionArray.element[0].mediaArray[1].mediaSetting.height = 150;
tf.interactionArray.element[0].mediaArray[1].mediaSetting.widthRatio = 1;
tf.interactionArray.element[0].mediaArray[1].mediaSetting.heightRatio = 1;
tf.interactionArray.element[0].mediaArray[1].mediaSetting.fancy = false;
               
tf.interactionArray.element[0].mediaArray[2] = new Array();
tf.interactionArray.element[0].mediaArray[2].type="video";
tf.interactionArray.element[0].mediaArray[2].value="CLIC5_U1_M1_EE_A3_video1.mp4";
tf.interactionArray.element[0].mediaArray[2].location = "video";
tf.interactionArray.element[0].mediaArray[2].mediaSetting = new Array();
tf.interactionArray.element[0].mediaArray[2].mediaSetting.width = 150;
tf.interactionArray.element[0].mediaArray[2].mediaSetting.height = 150;
tf.interactionArray.element[0].mediaArray[2].mediaSetting.widthRatio = 1;
tf.interactionArray.element[0].mediaArray[2].mediaSetting.heightRatio = 1;
tf.interactionArray.element[0].mediaArray[2].mediaSetting.fancy = false;
               
     */        
     
tf.interactionArray.element[1] = new Array();
tf.interactionArray.element[1].value = "Faux";
tf.interactionArray.element[1].id = 1;
tf.interactionArray.element[1].mediaArray = new Array();
/*
tf.interactionArray.element[1].mediaArray[0] = new Array();
tf.interactionArray.element[1].mediaArray[0].type="image";
tf.interactionArray.element[1].mediaArray[0].value="Penguins.jpg";
tf.interactionArray.element[1].mediaArray[0].location = "image";
tf.interactionArray.element[1].mediaArray[0].mediaSetting = new Array();
tf.interactionArray.element[1].mediaArray[0].mediaSetting.width = 250;
tf.interactionArray.element[1].mediaArray[0].mediaSetting.height = 150;
tf.interactionArray.element[1].mediaArray[0].mediaSetting.widthRatio = 1;
tf.interactionArray.element[1].mediaArray[0].mediaSetting.heightRatio = 1;
tf.interactionArray.element[1].mediaArray[0].mediaSetting.fancy = true;
               */
              
tf.answerArray[0] = new Array();
tf.answerArray[0].id = 0;
tf.answerArray[0].value = true;
tf.answerArray[0].weight = 1;
               
tf.answerArray[1] = new Array();
tf.answerArray[1].id = 1;
tf.answerArray[1].value = false;
tf.answerArray[1].weight = 0;

               
this.questionSource = new Array();
this.questionSource[0] = new Array();
this.questionSource[1] = new Array();
this.questionSource[2] = new Array();
this.questionSource[0] = hotSpot1;
this.questionSource[1] = mc1;
this.questionSource[2] = tf;

/*
questionSource[0] = new Array();
               
questionSource[0].playerIdArray = new Array();
questionSource[0].formatArray = new Array();
questionSource[0].interactionArray = new Array();
               
questionSource[0].answerArray = new Array();
               
questionSource[0].questionType = "hotspot";
questionSource[0].nbColumn = 1;
questionSource[0].weight = 1;
questionSource[0].maxAttempt =1;
questionSource[0].questionSlide = true;

               
questionSource[0].formatArray[0] = new Array();
questionSource[0].formatArray[0].css = "banner";
questionSource[0].formatArray[0].type = "normal";
questionSource[0].formatArray[0].value = "<br />Sélectionnez l'oreille gauche du koala.";
               
questionSource[0].formatArray[1] = new Array();
questionSource[0].formatArray[1].type = "interaction";
questionSource[0].formatArray[1].value = "";
questionSource[0].formatArray[2] = new Array();
questionSource[0].formatArray[2].type = "normal";
questionSource[0].formatArray[2].value="<br /><br />";

questionSource[0].interactionArray.setting = new Array();
questionSource[0].interactionArray.setting.maxMark = 1;
questionSource[0].interactionArray.setting.mediaArray = new Array();
questionSource[0].interactionArray.setting.mediaArray[0] = new Array();
questionSource[0].interactionArray.setting.mediaArray[0].value = "Koala.jpg";
questionSource[0].interactionArray.setting.mediaArray[0].type = "image";
questionSource[0].interactionArray.setting.mediaArray[0].location = "image";
questionSource[0].interactionArray.setting.mediaArray[0].mediaSetting = new Array();
questionSource[0].interactionArray.setting.mediaArray[0].mediaSetting.width = 575;
questionSource[0].interactionArray.setting.mediaArray[0].mediaSetting.height = 450;

questionSource[0].interactionArray.element = new Array();
questionSource[0].interactionArray.element[0] = new Array();
questionSource[0].interactionArray.element[0].name="zone1"
questionSource[0].interactionArray.element[0].id= 0;
questionSource[0].interactionArray.element[0].coords = "417,46,580,46,580,271,417,271";
questionSource[0].interactionArray.element[0].color = "F80000";
questionSource[0].interactionArray.element[0].desc = "Ceci est l'oreille gauche du koala.";

questionSource[0].answerArray[0] = new Array();
questionSource[0].answerArray[0].id = 0;
questionSource[0].answerArray[0].name = "zone1";
questionSource[0].answerArray[0].weight = 1;
/*
questionSource[0].answerArray[1] = new Array();
questionSource[0].answerArray[1].id = 0;
questionSource[0].answerArray[1].name = "zone1";
questionSource[0].answerArray[1].weight = 1;
questionSource[0].answerArray[2] = new Array();
questionSource[0].answerArray[2].id = 0;
questionSource[0].answerArray[2].name = "zone1";
questionSource[0].answerArray[2].weight = 1;
*/
/*

questionSource[0] = new Array();
questionSource[0].formatArray = new Array();
questionSource[0].interactionArray = new Array();
questionSource[0].answerArray = new Array();
               
questionSource[0].questionType = "multipleChoice";
questionSource[0].nbColumn = 1;
questionSource[0].weight = 1;
questionSource[0].maxAttempt = 1;
questionSource[0].questionSlide = true;
               
questionSource[0].formatArray[0] = new Array();
questionSource[0].formatArray[0].css = "banner";
questionSource[0].formatArray[0].type = "normal";
questionSource[0].formatArray[0].value = "<br />Ceci est un koala.";
               
               
questionSource[0].formatArray[1] = new Array();
questionSource[0].formatArray[1].type = "media";
questionSource[0].formatArray[1].mediaArray = new Array();
questionSource[0].formatArray[1].mediaArray[0] = new Array();
questionSource[0].formatArray[1].mediaArray[0].value = "Koala.jpg";
questionSource[0].formatArray[1].mediaArray[0].type = "image";
questionSource[0].formatArray[1].mediaArray[0].location = "image";
questionSource[0].formatArray[1].mediaArray[0].mediaSetting = new Array();
questionSource[0].formatArray[1].mediaArray[0].mediaSetting.width = 250;
questionSource[0].formatArray[1].mediaArray[0].mediaSetting.height = 200;
questionSource[0].formatArray[1].mediaArray[0].mediaSetting.fancy = true;
               
               
questionSource[0].formatArray[2] = new Array();
questionSource[0].formatArray[2].type = "interaction";
               
questionSource[0].formatArray[3] = new Array();
questionSource[0].formatArray[3].type = "normal";
questionSource[0].formatArray[3].value="<br /><br />";
               
               
questionSource[0].interactionArray.setting = new Array();
               
questionSource[0].interactionArray.element = new Array();
questionSource[0].interactionArray.element[0] = new Array();
               
questionSource[0].interactionArray.element[0].value = "Vrai";
questionSource[0].interactionArray.element[0].id = 0;
               
questionSource[0].interactionArray.element[0].mediaArray = new Array();

    /*      
questionSource[0].interactionArray.element[0].mediaArray[0] = new Array();
questionSource[0].interactionArray.element[0].mediaArray[0].type="image";
questionSource[1].interactionArray.element[0].mediaArray[0].value="Penguins.jpg";
questionSource[1].interactionArray.element[0].mediaArray[0].location = "image";
questionSource[1].interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
questionSource[0].interactionArray.element[0].mediaArray[0].mediaSetting.width = 250;
questionSource[0].interactionArray.element[0].mediaArray[0].mediaSetting.height = 150;
questionSource[0].interactionArray.element[0].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[0].interactionArray.element[0].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[0].interactionArray.element[0].mediaArray[0].mediaSetting.fancy = true;
               
questionSource[0].interactionArray.element[0].mediaArray[1] = new Array();
questionSource[0].interactionArray.element[0].mediaArray[1].type="video";
questionSource[0].interactionArray.element[0].mediaArray[1].value="CLIC5_U1_M1_EE_A3_video1.mp4";
questionSource[0].interactionArray.element[0].mediaArray[1].location = "video";
questionSource[0].interactionArray.element[0].mediaArray[1].mediaSetting = new Array();
questionSource[0].interactionArray.element[0].mediaArray[1].mediaSetting.width = 150;
questionSource[0].interactionArray.element[0].mediaArray[1].mediaSetting.height = 150;
questionSource[0].interactionArray.element[0].mediaArray[1].mediaSetting.widthRatio = 1;
questionSource[0].interactionArray.element[0].mediaArray[1].mediaSetting.heightRatio = 1;
questionSource[0].interactionArray.element[0].mediaArray[1].mediaSetting.fancy = false;
               
questionSource[0].interactionArray.element[0].mediaArray[2] = new Array();
questionSource[0].interactionArray.element[0].mediaArray[2].type="video";
questionSource[0].interactionArray.element[0].mediaArray[2].value="CLIC5_U1_M1_EE_A3_video1.mp4";
questionSource[0].interactionArray.element[0].mediaArray[2].location = "video";
questionSource[0].interactionArray.element[0].mediaArray[2].mediaSetting = new Array();
questionSource[0].interactionArray.element[0].mediaArray[2].mediaSetting.width = 150;
questionSource[0].interactionArray.element[0].mediaArray[2].mediaSetting.height = 150;
questionSource[0].interactionArray.element[0].mediaArray[2].mediaSetting.widthRatio = 1;
questionSource[0].interactionArray.element[0].mediaArray[2].mediaSetting.heightRatio = 1;
questionSource[0].interactionArray.element[0].mediaArray[2].mediaSetting.fancy = false;
               
      
     
questionSource[0].interactionArray.element[1] = new Array();
questionSource[0].interactionArray.element[1].value = "Faux";
questionSource[0].interactionArray.element[1].id = 1;
questionSource[0].interactionArray.element[1].mediaArray = new Array();

questionSource[0].interactionArray.element[2] = new Array();
questionSource[0].interactionArray.element[2].value = "Other";
questionSource[0].interactionArray.element[2].id = 2;
questionSource[0].interactionArray.element[2].mediaArray = new Array();
/*             
questionSource[0].interactionArray.element[1].mediaArray[0] = new Array();
questionSource[0].interactionArray.element[1].mediaArray[0].type="image";
questionSource[0].interactionArray.element[1].mediaArray[0].value="Penguins.jpg";
questionSource[0].interactionArray.element[1].mediaArray[0].location = "image";
questionSource[0].interactionArray.element[1].mediaArray[0].mediaSetting = new Array();
questionSource[0].interactionArray.element[1].mediaArray[0].mediaSetting.width = 250;
questionSource[0].interactionArray.element[1].mediaArray[0].mediaSetting.height = 150;
questionSource[0].interactionArray.element[1].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[0].interactionArray.element[1].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[0].interactionArray.element[1].mediaArray[0].mediaSetting.fancy = true;
               
              
questionSource[0].answerArray[0] = new Array();
questionSource[0].answerArray[0].id = 0;
questionSource[0].answerArray[0].value = false;
questionSource[0].answerArray[0].weight = 0;
               
questionSource[0].answerArray[1] = new Array();
questionSource[0].answerArray[1].id = 1;
questionSource[0].answerArray[1].value = false;
questionSource[0].answerArray[1].weight = 0;

questionSource[0].answerArray[2] = new Array();
questionSource[0].answerArray[2].id = 2;
questionSource[0].answerArray[2].value = true;
questionSource[0].answerArray[2].weight = 1;

/*




questionSource[0] = new Array();
questionSource[0].formatArray = new Array();
questionSource[0].interactionArray = new Array();
questionSource[0].answerArray = new Array();

questionSource[0].questionType = "association";
questionSource[0].nbColumn = 1;
questionSource[0].weight = 1;
questionSource[0].maxAttempt = 2;
questionSource[0].questionSlide = true;

questionSource[0].formatArray[0] = new Array();
questionSource[0].formatArray[0].css = "banner";
questionSource[0].formatArray[0].type = "normal";
questionSource[0].formatArray[0].value = "<br />Associez les noms de pays à leur drapeau respectif.";

questionSource[0].formatArray[1] = new Array();
questionSource[0].formatArray[1].type = "interaction";

questionSource[0].interactionArray.setting = new Array();

questionSource[0].interactionArray.element = new Array();
questionSource[0].interactionArray.element.elementFixe = new Array();
questionSource[0].interactionArray.element.elementSortable = new Array();



/********************************************************/
/*           Element 0 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
/*
questionSource[0].interactionArray.element.elementFixe[0] = new Array();

questionSource[0].interactionArray.element.elementFixe[0].value = "";

questionSource[0].interactionArray.element.elementFixe[0].mediaArray = new Array();


questionSource[0].interactionArray.element.elementFixe[0].mediaArray[0] = new Array();
questionSource[0].interactionArray.element.elementFixe[0].mediaArray[0].type="image";
questionSource[0].interactionArray.element.elementFixe[0].mediaArray[0].value="canada.jpg";
questionSource[0].interactionArray.element.elementFixe[0].mediaArray[0].location = "image";
questionSource[0].interactionArray.element.elementFixe[0].mediaArray[0].mediaSetting = new Array();
questionSource[0].interactionArray.element.elementFixe[0].mediaArray[0].mediaSetting.width = 100;
questionSource[0].interactionArray.element.elementFixe[0].mediaArray[0].mediaSetting.height = 65;
questionSource[0].interactionArray.element.elementFixe[0].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[0].interactionArray.element.elementFixe[0].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[0].interactionArray.element.elementFixe[0].mediaArray[0].mediaSetting.fancy = true;


// element[n].elementSortable[n] de la question est la colonne de droite de la question d'association
questionSource[0].interactionArray.element.elementSortable[0] = new Array();
questionSource[0].interactionArray.element.elementSortable[0].value = "Canada";
questionSource[0].interactionArray.element.elementSortable[0].mediaArray = new Array();
/*
questionSource[0].interactionArray.element.elementSortable[0].mediaArray[0] = new Array();
questionSource[0].interactionArray.element.elementSortable[0].mediaArray[0].type="image";
questionSource[0].interactionArray.element.elementSortable[0].mediaArray[0].value="Penguins.jpg";
questionSource[0].interactionArray.element.elementSortable[0].mediaArray[0].location = "image";
questionSource[0].interactionArray.element.elementSortable[0].mediaArray[0].mediaSetting = new Array();
questionSource[0].interactionArray.element.elementSortable[0].mediaArray[0].mediaSetting.width = 57;
questionSource[0].interactionArray.element.elementSortable[0].mediaArray[0].mediaSetting.height = 57;
questionSource[0].interactionArray.element.elementSortable[0].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[0].interactionArray.element.elementSortable[0].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[0].interactionArray.element.elementSortable[0].mediaArray[0].mediaSetting.fancy = true;
*/

/********************************************************/
/*           Element 1 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
/*
questionSource[0].interactionArray.element.elementFixe[1] = new Array();

questionSource[0].interactionArray.element.elementFixe[1].value = "";

questionSource[0].interactionArray.element.elementFixe[1].mediaArray = new Array();

questionSource[0].interactionArray.element.elementFixe[1].mediaArray[0] = new Array();
questionSource[0].interactionArray.element.elementFixe[1].mediaArray[0].type="image";
questionSource[0].interactionArray.element.elementFixe[1].mediaArray[0].value="belgique.jpg";
questionSource[0].interactionArray.element.elementFixe[1].mediaArray[0].location = "image";
questionSource[0].interactionArray.element.elementFixe[1].mediaArray[0].mediaSetting = new Array();
questionSource[0].interactionArray.element.elementFixe[1].mediaArray[0].mediaSetting.width = 105;
questionSource[0].interactionArray.element.elementFixe[1].mediaArray[0].mediaSetting.height = 65;
questionSource[0].interactionArray.element.elementFixe[1].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[0].interactionArray.element.elementFixe[1].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[0].interactionArray.element.elementFixe[1].mediaArray[0].mediaSetting.fancy = true;


// elementSortable[n] de la question est la colonne de droite de la question d'association
questionSource[0].interactionArray.element.elementSortable[1] = new Array();
questionSource[0].interactionArray.element.elementSortable[1].value = "Belgique" 

questionSource[0].interactionArray.element.elementFixe[2] = new Array();

questionSource[0].interactionArray.element.elementFixe[2].value = "";

questionSource[0].interactionArray.element.elementFixe[2].mediaArray = new Array();

questionSource[0].interactionArray.element.elementFixe[2].mediaArray[0] = new Array();
questionSource[0].interactionArray.element.elementFixe[2].mediaArray[0].type="image";
questionSource[0].interactionArray.element.elementFixe[2].mediaArray[0].value="france.jpg";
questionSource[0].interactionArray.element.elementFixe[2].mediaArray[0].location = "image";
questionSource[0].interactionArray.element.elementFixe[2].mediaArray[0].mediaSetting = new Array();
questionSource[0].interactionArray.element.elementFixe[2].mediaArray[0].mediaSetting.width = 105;
questionSource[0].interactionArray.element.elementFixe[2].mediaArray[0].mediaSetting.height = 65;
questionSource[0].interactionArray.element.elementFixe[2].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[0].interactionArray.element.elementFixe[2].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[0].interactionArray.element.elementFixe[2].mediaArray[0].mediaSetting.fancy = true;


// elementSortable[n] de la question est la colonne de droite de la question d'association
questionSource[0].interactionArray.element.elementSortable[2] = new Array();
questionSource[0].interactionArray.element.elementSortable[2].value = "France"; 

questionSource[0].answerArray[0] = new Array();
questionSource[0].answerArray[0].value = 0;
questionSource[0].answerArray[0].weight = 0.33;
               
questionSource[0].answerArray[1] = new Array();
questionSource[0].answerArray[1].value = 1;
questionSource[0].answerArray[1].weight = 0.33;

questionSource[0].answerArray[2] = new Array();
questionSource[0].answerArray[2].value = 2;
questionSource[0].answerArray[2].weight = 0.33;
               
questionSource[1] = new Array();
questionSource[1].formatArray = new Array();
questionSource[1].interactionArray = new Array();
questionSource[1].answerArray = new Array();
               
questionSource[1].questionType = "trueFalse";
questionSource[1].nbColumn = 1;
questionSource[1].weight = 1;
questionSource[1].maxAttempt = 1;
questionSource[1].questionSlide = true;
               
questionSource[1].formatArray[0] = new Array();
questionSource[1].formatArray[0].css = "banner";
questionSource[1].formatArray[0].type = "normal";
questionSource[1].formatArray[0].value = "<br />Ceci est un koala.";

               
questionSource[1].formatArray[1] = new Array();
questionSource[1].formatArray[1].type = "media";
questionSource[1].formatArray[1].mediaArray = new Array();
questionSource[1].formatArray[1].mediaArray[0] = new Array();
questionSource[1].formatArray[1].mediaArray[0].value = "Koala.jpg";
questionSource[1].formatArray[1].mediaArray[0].type = "image";
questionSource[1].formatArray[1].mediaArray[0].location = "image";
questionSource[1].formatArray[1].mediaArray[0].mediaSetting = new Array();
questionSource[1].formatArray[1].mediaArray[0].mediaSetting.width = 250;
questionSource[1].formatArray[1].mediaArray[0].mediaSetting.height = 200;
questionSource[1].formatArray[1].mediaArray[0].mediaSetting.fancy = true;


questionSource[1].formatArray[2] = new Array();
questionSource[1].formatArray[2].type = "interaction";

questionSource[1].formatArray[3] = new Array();
questionSource[1].formatArray[3].type = "normal";
questionSource[1].formatArray[3].value="<br /><br />";

               
questionSource[1].interactionArray.setting = new Array();
               
questionSource[1].interactionArray.element = new Array();
questionSource[1].interactionArray.element[0] = new Array();
               
questionSource[1].interactionArray.element[0].value = "Vrai";
questionSource[1].interactionArray.element[0].id = 0;
               
questionSource[1].interactionArray.element[0].mediaArray = new Array();
/*             
questionSource[1].interactionArray.element[0].mediaArray[0] = new Array();
questionSource[1].interactionArray.element[0].mediaArray[0].type="image";
questionSource[1].interactionArray.element[0].mediaArray[0].value="Penguins.jpg";
questionSource[1].interactionArray.element[0].mediaArray[0].location = "image";
questionSource[1].interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
questionSource[1].interactionArray.element[0].mediaArray[0].mediaSetting.width = 250;
questionSource[1].interactionArray.element[0].mediaArray[0].mediaSetting.height = 150;
questionSource[1].interactionArray.element[0].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[1].interactionArray.element[0].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[1].interactionArray.element[0].mediaArray[0].mediaSetting.fancy = true;
               
questionSource[1].interactionArray.element[0].mediaArray[1] = new Array();
questionSource[1].interactionArray.element[0].mediaArray[1].type="video";
questionSource[1].interactionArray.element[0].mediaArray[1].value="CLIC5_U1_M1_EE_A3_video1.mp4";
questionSource[1].interactionArray.element[0].mediaArray[1].location = "video";
questionSource[1].interactionArray.element[0].mediaArray[1].mediaSetting = new Array();
questionSource[1].interactionArray.element[0].mediaArray[1].mediaSetting.width = 150;
questionSource[1].interactionArray.element[0].mediaArray[1].mediaSetting.height = 150;
questionSource[1].interactionArray.element[0].mediaArray[1].mediaSetting.widthRatio = 1;
questionSource[1].interactionArray.element[0].mediaArray[1].mediaSetting.heightRatio = 1;
questionSource[1].interactionArray.element[0].mediaArray[1].mediaSetting.fancy = false;
               
questionSource[1].interactionArray.element[0].mediaArray[2] = new Array();
questionSource[1].interactionArray.element[0].mediaArray[2].type="video";
questionSource[1].interactionArray.element[0].mediaArray[2].value="CLIC5_U1_M1_EE_A3_video1.mp4";
questionSource[1].interactionArray.element[0].mediaArray[2].location = "video";
questionSource[1].interactionArray.element[0].mediaArray[2].mediaSetting = new Array();
questionSource[1].interactionArray.element[0].mediaArray[2].mediaSetting.width = 150;
questionSource[1].interactionArray.element[0].mediaArray[2].mediaSetting.height = 150;
questionSource[1].interactionArray.element[0].mediaArray[2].mediaSetting.widthRatio = 1;
questionSource[1].interactionArray.element[0].mediaArray[2].mediaSetting.heightRatio = 1;
questionSource[1].interactionArray.element[0].mediaArray[2].mediaSetting.fancy = false;
               
     */        
     /*  
questionSource[1].interactionArray.element[1] = new Array();
questionSource[1].interactionArray.element[1].value = "Faux";
questionSource[1].interactionArray.element[1].id = 1;
questionSource[1].interactionArray.element[1].mediaArray = new Array();
/*
questionSource[1].interactionArray.element[1].mediaArray[0] = new Array();
questionSource[1].interactionArray.element[1].mediaArray[0].type="image";
questionSource[1].interactionArray.element[1].mediaArray[0].value="Penguins.jpg";
questionSource[1].interactionArray.element[1].mediaArray[0].location = "image";
questionSource[1].interactionArray.element[1].mediaArray[0].mediaSetting = new Array();
questionSource[1].interactionArray.element[1].mediaArray[0].mediaSetting.width = 250;
questionSource[1].interactionArray.element[1].mediaArray[0].mediaSetting.height = 150;
questionSource[1].interactionArray.element[1].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[1].interactionArray.element[1].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[1].interactionArray.element[1].mediaArray[0].mediaSetting.fancy = true;
               */
              /*
questionSource[1].answerArray[0] = new Array();
questionSource[1].answerArray[0].id = 0;
questionSource[1].answerArray[0].value = true;
questionSource[1].answerArray[0].weight = 1;
               
questionSource[1].answerArray[1] = new Array();
questionSource[1].answerArray[1].id = 1;
questionSource[1].answerArray[1].value = false;
questionSource[1].answerArray[1].weight = 0;

questionSource[2] = new Array();
               
questionSource[2].playerIdArray = new Array();
questionSource[2].formatArray = new Array();
questionSource[2].interactionArray = new Array();
               
questionSource[2].answerArray = new Array();
               
questionSource[2].questionType = "hotspot";
questionSource[2].nbColumn = 1;
questionSource[2].weight = 1;
questionSource[2].maxAttempt = 1;
questionSource[2].questionSlide = true;

               
questionSource[2].formatArray[0] = new Array();
questionSource[2].formatArray[0].css = "banner";
questionSource[2].formatArray[0].type = "normal";
questionSource[2].formatArray[0].value = "<br />Sélectionnez l'oreille droite du koala.";
               
questionSource[2].formatArray[1] = new Array();
questionSource[2].formatArray[1].type = "interaction";
questionSource[2].formatArray[1].value = "";
questionSource[2].formatArray[2] = new Array();
questionSource[2].formatArray[2].type = "normal";
questionSource[2].formatArray[2].value="<br /><br />";

questionSource[2].interactionArray.setting = new Array();
questionSource[2].interactionArray.setting.imgLocation = "Koala.jpg"
questionSource[2].interactionArray.setting.maxMark = 1;

questionSource[2].interactionArray.element = new Array();
questionSource[2].interactionArray.element[0] = new Array();
questionSource[2].interactionArray.element[0].name="zone1"
questionSource[2].interactionArray.element[0].id= 0;
questionSource[2].interactionArray.element[0].coords = "417,46, 580,46, 580,271, 417,271";
questionSource[2].interactionArray.element[0].color = "F80000";
questionSource[2].interactionArray.element[0].desc = "Ceci est l'oreille droite du koala.";

questionSource[2].answerArray[0] = new Array();
questionSource[2].answerArray[0].id = 0;
questionSource[2].answerArray[0].name = "zone1";
questionSource[2].answerArray[0].weight = 1;

questionSource[3] = new Array();
               
questionSource[3].playerIdArray = new Array();
questionSource[3].formatArray = new Array();
questionSource[3].interactionArray = new Array();
               
questionSource[3].answerArray = new Array();
               
questionSource[3].questionType = "crossword";
questionSource[3].nbColumn = 1;
questionSource[3].weight = 1;
questionSource[3].maxAttempt = 3;
questionSource[3].questionSlide = true;
               
questionSource[3].formatArray[0] = new Array();
questionSource[3].formatArray[0].css = "banner";
questionSource[3].formatArray[0].type = "normal";
questionSource[3].formatArray[0].value = "<br /> Remplissez le mot croisé.";
               
questionSource[3].formatArray[1] = new Array();
questionSource[3].formatArray[1].type = "interaction";
questionSource[3].formatArray[1].value = "";

questionSource[3].formatArray[2] = new Array();
questionSource[3].formatArray[2].type = "normal";
questionSource[3].formatArray[2].value="<br /><br />";
               
questionSource[3].interactionArray = new Array();
               
questionSource[3].interactionArray.element = new Array();

questionSource[3].interactionArray.element[0] = new Array();
questionSource[3].interactionArray.element[0].id = 0;
questionSource[3].interactionArray.element[0].indice = "Nom de la compagnie";
questionSource[3].interactionArray.element[0].value = "cforp";
questionSource[3].interactionArray.element[0].orientation =1;
questionSource[3].interactionArray.element[0].x = 10;
questionSource[3].interactionArray.element[0].y = 8;
               
questionSource[3].interactionArray.element[1] = new Array();
questionSource[3].interactionArray.element[1].id = 1;
questionSource[3].interactionArray.element[1].indice = "Compléter : Objet d'apprentissage '&nbsp;_________&nbsp;'";
questionSource[3].interactionArray.element[1].value = "interactif";
questionSource[3].interactionArray.element[1].orientation = 0;
questionSource[3].interactionArray.element[1].x = 1;
questionSource[3].interactionArray.element[1].y = 9;
               
questionSource[3].interactionArray.element[2] = new Array();
questionSource[3].interactionArray.element[2].id = 2;
questionSource[3].interactionArray.element[2].indice = "Parle fort au téléphone : )";
questionSource[3].interactionArray.element[2].value = "hubert";
questionSource[3].interactionArray.element[2].orientation = 1;
questionSource[3].interactionArray.element[2].x = 5;
questionSource[3].interactionArray.element[2].y = 5;
               
questionSource[3].interactionArray.element[3] = new Array();
questionSource[3].interactionArray.element[3].id = 3;
questionSource[3].interactionArray.element[3].indice = "Nom du département";
questionSource[3].interactionArray.element[3].value = "multimedia";
questionSource[3].interactionArray.element[3].orientation = 0;
questionSource[3].interactionArray.element[3].x = 1;
questionSource[3].interactionArray.element[3].y = 2;
               
questionSource[3].interactionArray.element[4] = new Array();
questionSource[3].interactionArray.element[4].id = 4;
questionSource[3].interactionArray.element[4].indice = "Matière scolaire où l'on apprend l'algèbre.";
questionSource[3].interactionArray.element[4].value = "mathematique";
questionSource[3].interactionArray.element[4].orientation = 0;
questionSource[3].interactionArray.element[4].x = 2;
questionSource[3].interactionArray.element[4].y = 5;
               
questionSource[3].interactionArray.element[5] = new Array();
questionSource[3].interactionArray.element[5].id = 5;
questionSource[3].interactionArray.element[5].indice = "Rue du cforp.";
questionSource[3].interactionArray.element[5].value = "donald";
questionSource[3].interactionArray.element[5].orientation = 1;
questionSource[3].interactionArray.element[5].x = 8;
questionSource[3].interactionArray.element[5].y = 2;
              
questionSource[3].answerArray[0] = new Array();
questionSource[3].answerArray[0].id= 0;
questionSource[3].answerArray[0].weight = 0.2;
               
questionSource[3].answerArray[1] = new Array();
questionSource[3].answerArray[1].id= 1;
questionSource[3].answerArray[1].weight = 0.2;
               
questionSource[3].answerArray[2] = new Array();
questionSource[3].answerArray[2].id= 2;
questionSource[3].answerArray[2].weight = 0.2;
               
questionSource[3].answerArray[3] = new Array();
questionSource[3].answerArray[3].id= 3;
questionSource[3].answerArray[3].weight = 0.2;
               
questionSource[3].answerArray[4] = new Array();
questionSource[3].answerArray[4].id= 4;
questionSource[3].answerArray[4].weight = 0.2;

questionSource[3].answerArray[5] = new Array();
questionSource[3].answerArray[5].id= 5;
questionSource[3].answerArray[5].weight = 0.2;


questionSource[4] = new Array();
questionSource[4].formatArray = new Array();
questionSource[4].interactionArray = new Array();
questionSource[4].answerArray = new Array();
               
questionSource[4].questionType = "multipleChoice";
questionSource[4].nbColumn = 2;
questionSource[4].weight = 1;
questionSource[4].maxAttempt = 1;
questionSource[4].questionSlide = true;
               
questionSource[4].formatArray[0] = new Array();
questionSource[4].formatArray[0].css = "banner";
questionSource[4].formatArray[0].type = "normal";
questionSource[4].formatArray[0].value = "<br /> Où est Jonathan ?";
    
questionSource[4].formatArray[1] = new Array();
questionSource[4].formatArray[1].type = "interaction";
               
questionSource[4].formatArray[2] = new Array();
questionSource[4].formatArray[2].type = "normal";
questionSource[4].formatArray[2].value="<br /><br />";
               
               
questionSource[4].interactionArray.setting = new Array();
               
questionSource[4].interactionArray.element = new Array();
questionSource[4].interactionArray.element[0] = new Array();
               
questionSource[4].interactionArray.element[0].value = "";
questionSource[4].interactionArray.element[0].id = 0;
               
questionSource[4].interactionArray.element[0].mediaArray = new Array();
           
questionSource[4].interactionArray.element[0].mediaArray[0] = new Array();
questionSource[4].interactionArray.element[0].mediaArray[0].type="image";
questionSource[4].interactionArray.element[0].mediaArray[0].value="hubert.png";
questionSource[4].interactionArray.element[0].mediaArray[0].location = "image";
questionSource[4].interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
questionSource[4].interactionArray.element[0].mediaArray[0].mediaSetting.width = 150;
questionSource[4].interactionArray.element[0].mediaArray[0].mediaSetting.height = 139;
questionSource[4].interactionArray.element[0].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[4].interactionArray.element[0].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[4].interactionArray.element[0].mediaArray[0].mediaSetting.fancy = true;
              
               
questionSource[4].interactionArray.element[1] = new Array();
questionSource[4].interactionArray.element[1].value = "";
questionSource[4].interactionArray.element[1].id = 1;
questionSource[4].interactionArray.element[1].mediaArray = new Array();
questionSource[4].interactionArray.element[1].mediaArray[0] = new Array();
questionSource[4].interactionArray.element[1].mediaArray[0].type="image";
questionSource[4].interactionArray.element[1].mediaArray[0].value="jonathan.png";
questionSource[4].interactionArray.element[1].mediaArray[0].location = "image";
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting = new Array();
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting.width = 150;
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting.height = 139;
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting.fancy = true;

questionSource[4].interactionArray.element[2] = new Array();
questionSource[4].interactionArray.element[2].value = "";
questionSource[4].interactionArray.element[2].id = 2;
questionSource[4].interactionArray.element[2].mediaArray = new Array();
questionSource[4].interactionArray.element[2].mediaArray[0] = new Array();
questionSource[4].interactionArray.element[2].mediaArray[0].type="image";
questionSource[4].interactionArray.element[2].mediaArray[0].value="gilles.jpg";
questionSource[4].interactionArray.element[2].mediaArray[0].location = "image";
questionSource[4].interactionArray.element[2].mediaArray[0]. mediaSetting = new Array();
questionSource[4].interactionArray.element[2].mediaArray[0].mediaSetting.width = 150;
questionSource[4].interactionArray.element[2].mediaArray[0].mediaSetting.height = 139;
questionSource[4].interactionArray.element[2].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[4].interactionArray.element[2].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[4].interactionArray.element[2].mediaArray[0].mediaSetting.fancy = true;
               
questionSource[4].answerArray[0] = new Array();
questionSource[4].answerArray[0].value = false;
questionSource[4].answerArray[0].id = 0;
questionSource[4].answerArray[0].weight = 0;
               
questionSource[4].answerArray[1] = new Array();
questionSource[4].answerArray[1].value = true;
questionSource[4].answerArray[1].id = 1;
questionSource[4].answerArray[1].weight = 1;

questionSource[4].answerArray[2] = new Array();
questionSource[4].answerArray[2].id = 2;
questionSource[4].answerArray[2].value = false;
questionSource[4].answerArray[2].weight = 0;


questionSource[5] = new Array();
               
questionSource[5].playerIdArray = new Array();
questionSource[5].formatArray = new Array();
questionSource[5].interactionArray = new Array();
               
questionSource[5].answerArray = new Array();
               
questionSource[5].questionType = "content";
questionSource[5].nbColumn = 1;
questionSource[5].weight = 0;
questionSource[5].maxAttempt = 1;
questionSource[5].questionSlide = false;
               
questionSource[5].formatArray[0] = new Array();
questionSource[5].formatArray[0].css = "banner";
questionSource[5].formatArray[0].type = "normal";
questionSource[5].formatArray[0].value = "Diapositive de contenu <br/> <img src=\"image/cforp.jpg\" height =\"60\" /> ";
               
questionSource[5].formatArray[1] = new Array();
questionSource[5].formatArray[1].type = "normal";
questionSource[5].formatArray[1].value = "";
               
questionSource[5].formatArray[2] = new Array();
questionSource[5].formatArray[2].type = "normal";
questionSource[5].formatArray[2].value = "<ul><li> contenu html/css/javascript</li></ul> <a href='http://www.google.ca' target='blank' style='color:#0000FF'> Lien vers site web </a>";
questionSource[5].formatArray[2].css = "interactionDiv";

questionSource[5].formatArray[3] = new Array();
questionSource[5].formatArray[3].type = "media";
questionSource[5].formatArray[3].mediaArray = new Array();
questionSource[5].formatArray[3] = new Array();
questionSource[5].formatArray[3].type = "media";
questionSource[5].formatArray[3].mediaArray = new Array();

questionSource[5].formatArray[3].mediaArray[0] = new Array();
questionSource[5].formatArray[3].mediaArray[0].value = "Desert.jpg";
questionSource[5].formatArray[3].mediaArray[0].type = "image";
questionSource[5].formatArray[3].mediaArray[0].location = "image";
questionSource[5].formatArray[3].mediaArray[0].mediaSetting = new Array();
questionSource[5].formatArray[3].mediaArray[0].mediaSetting.width = 250;
questionSource[5].formatArray[3].mediaArray[0].mediaSetting.height = 200;
questionSource[5].formatArray[3].mediaArray[0].mediaSetting.fancy = true;

questionSource[5].formatArray[3].mediaArray[1] = new Array();
questionSource[5].formatArray[3].mediaArray[1].value = "TURKEY.mp3";
questionSource[5].formatArray[3].mediaArray[1].type = "audio";
questionSource[5].formatArray[3].mediaArray[1].location = "audio";
questionSource[5].formatArray[3].mediaArray[1].mediaSetting = new Array();
questionSource[5].formatArray[3].mediaArray[1].mediaSetting.autoStart = false;
questionSource[5].formatArray[3].mediaArray[1].mediaSetting.loop = false;

questionSource[5].formatArray[4] = new Array();
questionSource[5].formatArray[4].type = "normal";
questionSource[5].formatArray[4].value="<br /><br />";

/*
questionSource[4] = new Array();
               
questionSource[4].playerIdArray = new Array();
questionSource[4].formatArray = new Array();
questionSource[4].interactionArray = new Array();
               
questionSource[4].answerArray = new Array();
               
questionSource[4].questionType = "content";
questionSource[4].nbColumn = 2;
questionSource[4].weight = 0;
questionSource[4].maxAttempt = 1;
questionSource[4].questionSlide = false;
               
questionSource[4].formatArray[0] = new Array();
questionSource[4].formatArray[0].css = "banner";
questionSource[4].formatArray[0].type = "normal";
questionSource[4].formatArray[0].value = "content slide2";
               
questionSource[4].formatArray[1] = new Array();
questionSource[4].formatArray[1].type = "normal";
questionSource[4].formatArray[1].value = "contenu html";
               
questionSource[4].formatArray[2] = new Array();
questionSource[4].formatArray[2].type = "normal";
questionSource[4].formatArray[2].value = "<ul><li> Liste </li> <li> Autre élément </li></ul> <a href='http://www.google.ca' target='blank' style='color:#0000FF'> Lien vers site web </a>";

*/


/*
questionSource[0] = new Array();
               
questionSource[0].playerIdArray = new Array();
questionSource[0].formatArray = new Array();
questionSource[0].interactionArray = new Array();
               
questionSource[0].answerArray = new Array();
               
questionSource[0].questionType = "crossword";
questionSource[0].nbColumn = 1;
questionSource[0].weight = 1;
questionSource[0].maxAttempt = 3;
questionSource[0].questionSlide = true;
               
questionSource[0].formatArray[0] = new Array();
questionSource[0].formatArray[0].css = "banner";
questionSource[0].formatArray[0].type = "normal";
questionSource[0].formatArray[0].value = "mot croisé!";
               
questionSource[0].formatArray[1] = new Array();
questionSource[0].formatArray[1].type = "interaction";
questionSource[0].formatArray[1].value = "gogogogogogogogo";
               
questionSource[0].interactionArray = new Array();

questionSource[0].interactionArray.element = new Array();
questionSource[0].interactionArray.element[0] = new Array();

questionSource[0].interactionArray.element[0].id = 0;
questionSource[0].interactionArray.element[0].indice = "Nom de la compagnie";
questionSource[0].interactionArray.element[0].value = "cforp";
               
questionSource[0].interactionArray.element[1] = new Array();
questionSource[0].interactionArray.element[1].id = 1;
questionSource[0].interactionArray.element[1].indice = "Meilleur ami de l'homme";
questionSource[0].interactionArray.element[1].value = "chien";
               
questionSource[0].interactionArray.element[2] = new Array();
questionSource[0].interactionArray.element[2].id = 2;
questionSource[0].interactionArray.element[2].indice = "identité secrète de Bruce Wayne";
questionSource[0].interactionArray.element[2].value = "batman";
               
questionSource[0].interactionArray.element[3] = new Array();
questionSource[0].interactionArray.element[3].id = 3;
questionSource[0].interactionArray.element[3].indice = "tableau pour accrocher des trucs au mur";
questionSource[0].interactionArray.element[3].value = "babillard";
               
questionSource[0].interactionArray.element[4] = new Array();
questionSource[0].interactionArray.element[4].id = 4;
questionSource[0].interactionArray.element[4].indice = "opposé du sel";
questionSource[0].interactionArray.element[4].value = "poivre";

questionSource[0].answerArray[0] = new Array();
questionSource[0].answerArray[0].weight = 0.25;

questionSource[0].answerArray[1] = new Array();
questionSource[0].answerArray[1].weight = 0.25;

questionSource[0].answerArray[2] = new Array();
questionSource[0].answerArray[2].weight = 0.25;

questionSource[0].answerArray[3] = new Array();
questionSource[0].answerArray[3].weight = 0.25;

questionSource[0].answerArray[4] = new Array();
questionSource[0].answerArray[4].weight = 0.25;
/*
questionSource[0] = new Array();

questionSource[0].playerIdArray = new Array();
questionSource[0].formatArray = new Array();
questionSource[0].interactionArray = new Array();

questionSource[0].answerArray = new Array();

questionSource[0].questionType = "hotspot";
questionSource[0].nbColumn = 1;
questionSource[0].weight = 1;
questionSource[0].maxAttempt = 1;
questionSource[0].questionSlide = true;
questionSource[0].maxMark = 1;
questionSource[0].mapImage = "Koala.jpg";

questionSource[0].formatArray[0] = new Array();
questionSource[0].formatArray[0].css = "banner";
questionSource[0].formatArray[0].type = "normal";
questionSource[0].formatArray[0].value = "hotspot";

questionSource[0].formatArray[1] = new Array();
questionSource[0].formatArray[1].type = "interaction";
questionSource[0].formatArray[1].value = "";

questionSource[0].interactionArray[0] = new Array();
questionSource[0].interactionArray[0].id = 0;
questionSource[0].interactionArray[0].name="zone1"
questionSource[0].interactionArray[0].coords = "412,156, 459,174, 455,178, 460,179, 463,193,"+
			 "460,203,  478,269, 479,285, 458,309, 436,310, 414,305, 410,323,  345,145";
			
questionSource[0].interactionArray[0].color = "FFAA1B";
questionSource[0].interactionArray[0].desc = "Ceci est la zone 1.";
/*
questionSource[0].interactionArray[1] = new Array();
questionSource[0].interactionArray[1].id = 1;
questionSource[0].interactionArray[1].name = "zone2"
questionSource[0].interactionArray[1].coords = "";
questionSource[0].interactionArray[1].color = "#FFAA1B";
*/
/*
questionSource[0].interactionArray[0].mediaArray = new Array();
questionSource[0].interactionArray[0].mediaArray[0] = new Array();
questionSource[0].interactionArray[0].mediaArray[0].type="image";
questionSource[0].interactionArray[0].mediaArray[0].value="Penguins.jpg";

questionSource[0].interactionArray[0].mediaArray[1] = new Array();
questionSource[0].interactionArray[0].mediaArray[1].type="image";
questionSource[0].interactionArray[0].mediaArray[1].value="Koala.jpg";
*/
//questionSource[0].answerArray[0] = 1;
//questionSource[0].answerArray[1] = 1;

/*
questionSource[1] = new Array();

questionSource[1].playerIdArray = new Array();
questionSource[1].formatArray = new Array();
questionSource[1].interactionArray = new Array();

questionSource[1].answerArray = new Array();

questionSource[1].questionType = "hotspot";
questionSource[1].nbColumn = 1;
questionSource[1].weight = 1;
questionSource[1].maxAttempt = 1;
questionSource[1].questionSlide = true;

questionSource[1].formatArray[0] = new Array();
questionSource[1].formatArray[0].css = "banner";
questionSource[1].formatArray[0].type = "normal";
questionSource[1].formatArray[0].value = "hotspot";

questionSource[1].formatArray[1] = new Array();
questionSource[1].formatArray[1].type = "interaction";
questionSource[1].formatArray[1].value = "";

questionSource[1].interactionArray[0] = new Array();
questionSource[1].interactionArray[0].elementFixe = new Array();
questionSource[1].interactionArray[0].elementSortable = new Array();

questionSource[1].answerArray[0] = true;
questionSource[1].answerArray[1] = false;
questionSource[1].answerArray[2] = false;

questionSource[1].playerId = new Array();
questionSource[1].playerId[0] = "player01";
*/
/* ASSOCIATION


questionSource[1] = new Array();

questionSource[1].playerIdArray = new Array();
questionSource[1].formatArray = new Array();
questionSource[1].interactionArray = new Array();

questionSource[1].answerArray = new Array();

questionSource[1].questionType = "association";
questionSource[1].nbColumn = 1;
questionSource[1].weight = 1;
questionSource[1].maxAttempt = 1;
questionSource[1].questionSlide = true;

questionSource[1].formatArray[0] = new Array();
questionSource[1].formatArray[0].css = "banner";
questionSource[1].formatArray[0].type = "normal";
questionSource[1].formatArray[0].value = "J'ai hâte que ça fonctionne";

questionSource[1].formatArray[1] = new Array();
questionSource[1].formatArray[1].type = "interaction";
questionSource[1].formatArray[1].value = "";


questionSource[1].interactionArray[0] = new Array();
questionSource[1].interactionArray[0].elementFixe = new Array();
questionSource[1].interactionArray[0].elementSortable = new Array();

questionSource[1].interactionArray[0].id = 1;

questionSource[1].interactionArray[0].elementFixe[0] = new Array();
questionSource[1].interactionArray[0].elementFixe[0].id = 0;
questionSource[1].interactionArray[0].elementFixe[0].value = "question 1";
questionSource[1].interactionArray[0].elementFixe[0].mediaArray=new Array();

questionSource[1].interactionArray[0].elementFixe[1] = new Array();
questionSource[1].interactionArray[0].elementFixe[1].id = 1;
questionSource[1].interactionArray[0].elementFixe[1].value = "question 2";
questionSource[1].interactionArray[0].elementFixe[1].mediaArray=new Array();

questionSource[1].interactionArray[0].elementFixe[2] = new Array();
questionSource[1].interactionArray[0].elementFixe[2].id = 2;
questionSource[1].interactionArray[0].elementFixe[2].value = "question 3";
questionSource[1].interactionArray[0].elementFixe[2].mediaArray=new Array();

questionSource[1].interactionArray[0].elementFixe[2].mediaArray[0] = new Array();
questionSource[1].interactionArray[0].elementFixe[2].mediaArray[0].type="image";
questionSource[1].interactionArray[0].elementFixe[2].mediaArray[0].value="Koala.jpg";

questionSource[1].interactionArray[0].elementSortable[0] = new Array();
questionSource[1].interactionArray[0].elementSortable[0].id = 0;
questionSource[1].interactionArray[0].elementSortable[0].value = "Reponse 1";
questionSource[1].interactionArray[0].elementSortable[0].mediaArray= new Array();

questionSource[1].interactionArray[0].elementSortable[1] = new Array();
questionSource[1].interactionArray[0].elementSortable[1].id = 1;
questionSource[1].interactionArray[0].elementSortable[1].value = "Reponse 2";
questionSource[1].interactionArray[0].elementSortable[1].mediaArray= new Array();

questionSource[1].interactionArray[0].elementSortable[2] = new Array();
questionSource[1].interactionArray[0].elementSortable[2].id = 2;
questionSource[1].interactionArray[0].elementSortable[2].value = "Reponse 3";
questionSource[1].interactionArray[0].elementSortable[2].mediaArray= new Array();


questionSource[1].answerArray[0] = true;
questionSource[1].answerArray[1] = false;
questionSource[1].answerArray[2] = false;

questionSource[1].playerId = new Array();
questionSource[1].playerId[0] = "player01";

*/

/*
questionSource = new Array();

questionSource[0] = new Array();

questionSource[0].playerIdArray = new Array();
questionSource[0].formatArray = new Array();
questionSource[0].interactionArray = new Array();

questionSource[0].answerArray = new Array();

questionSource[0].questionType = "trueFalse";
questionSource[0].nbColumn = 1;
questionSource[0].weight = 1;
questionSource[0].maxAttempt = 1;
questionSource[0].questionSlide = true;

questionSource[0].formatArray[0] = new Array();
questionSource[0].formatArray[0].css = "banner";
questionSource[0].formatArray[0].type = "normal";
questionSource[0].formatArray[0].value = "Les weekends sont fun";

questionSource[0].formatArray[1] = new Array();
questionSource[0].formatArray[1].type = "interaction";
questionSource[0].formatArray[1].value = "";

questionSource[0].interactionArray[0] = new Array();
questionSource[0].interactionArray[0].elementFixe = new Array();
questionSource[0].interactionArray[0].elementSortable = new Array();

questionSource[0].interactionArray[0].elementFixe[0] = new Array();
questionSource[0].interactionArray[0].elementFixe[0].id = 0;
questionSource[0].interactionArray[0].elementFixe[0].value = "blabla";
questionSource[0].interactionArray[0].elementFixe[0].mediaArray=new Array();

questionSource[0].interactionArray[0].elementFixe[1] = new Array();
questionSource[0].interactionArray[0].elementFixe[1].id = 1;
questionSource[0].interactionArray[0].elementFixe[1].value = "blabla";
questionSource[0].interactionArray[0].elementFixe[1].mediaArray=new Array();

questionSource[0].interactionArray[0].elementSortable[0] = new Array();
questionSource[0].interactionArray[0].elementSortable[0].id = 0;
questionSource[0].interactionArray[0].elementSortable[0].value = "blabla je suis un élément sortable blabla";
questionSource[0].interactionArray[0].elementSortable[0].mediaArray= new Array();


questionSource[0].interactionArray[0].id = 0;
questionSource[0].interactionArray[0].value = "Vrai";

questionSource[0].interactionArray[1] = new Array();
questionSource[0].interactionArray[1].id = 1;
questionSource[0].interactionArray[1].value = "Faux";

questionSource[0].interactionArray[0].mediaArray = new Array();
questionSource[0].interactionArray[0].mediaArray[0] = new Array();
questionSource[0].interactionArray[0].mediaArray[0].type="image";
questionSource[0].interactionArray[0].mediaArray[0].value="Penguins.jpg";

questionSource[0].interactionArray[0].mediaArray[1] = new Array();
questionSource[0].interactionArray[0].mediaArray[1].type="image";
questionSource[0].interactionArray[0].mediaArray[1].value="Koala.jpg";

questionSource[0].answerArray[0] = true;
questionSource[0].answerArray[1] = false;

questionSource[0].playerId = new Array();
questionSource[0].playerId[0] = "player01";


questionSource[1] = new Array();
               
questionSource[1].playerIdArray = new Array();
questionSource[1].formatArray = new Array();
questionSource[1].interactionArray = new Array();
               
questionSource[1].answerArray = new Array();
               
questionSource[1].questionType = "multipleChoice";
questionSource[1].nbColumn = 2;
questionSource[1].weight = 1;
questionSource[1].maxAttempt = 1;
questionSource[1].questionSlide = true;
               
questionSource[1].formatArray[0] = new Array();
questionSource[1].formatArray[0].css = "banner";
questionSource[1].formatArray[0].type = "normal";
questionSource[1].formatArray[0].value = "Quel est le type de cette question ?";
               
questionSource[1].formatArray[1] = new Array();
questionSource[1].formatArray[1].type = "interaction";
questionSource[1].formatArray[1].value = "";
               
questionSource[1].interactionArray[0] = new Array();
questionSource[1].interactionArray[0].id = 0;
questionSource[1].interactionArray[0].value = "Vrai / Faux";
questionSource[1].interactionArray[1] = new Array();
questionSource[1].interactionArray[1].id = 1;
questionSource[1].interactionArray[1].value = "Choix Multiple";
questionSource[1].interactionArray[2] = new Array();
questionSource[1].interactionArray[2].id = 2;
questionSource[1].interactionArray[2].value = "Association";
questionSource[1].interactionArray[3] = new Array();
questionSource[1].interactionArray[3].id = 3;
questionSource[1].interactionArray[3].value = "Mot Croisé";

questionSource[1].answerArray[0] = false;
questionSource[1].answerArray[1] = true;
questionSource[1].answerArray[2] = false;
questionSource[1].answerArray[3] = false;
               
questionSource[1].playerId = new Array();
questionSource[1].playerId[0] = "player01";


questionSource[2] = new Array();
               
questionSource[2].playerIdArray = new Array();
questionSource[2].formatArray = new Array();
questionSource[2].interactionArray = new Array();
               
questionSource[2].answerArray = new Array();
               
questionSource[2].questionType = "content";
questionSource[2].nbColumn = 2;
questionSource[2].weight = 0;
questionSource[2].maxAttempt = 1;
questionSource[2].questionSlide = false;
               
questionSource[2].formatArray[0] = new Array();
questionSource[2].formatArray[0].css = "banner";
questionSource[2].formatArray[0].type = "normal";
questionSource[2].formatArray[0].value = "content slide";
               
questionSource[2].formatArray[1] = new Array();
questionSource[2].formatArray[1].type = "normal";
questionSource[2].formatArray[1].value = "Des Média";

questionSource[2].formatArray[2] = new Array();
questionSource[2].formatArray[2].type = "media";
questionSource[2].formatArray[2].mediaArray = new Array();
questionSource[2].formatArray[2].mediaArray[0] = new Array();
questionSource[2].formatArray[2].mediaArray[0].type = "image";
questionSource[2].formatArray[2].mediaArray[0].value = "Desert.jpg";
questionSource[2].formatArray[2].mediaArray[1] = new Array();
questionSource[2].formatArray[2].mediaArray[1].type = "video";
questionSource[2].formatArray[2].mediaArray[1].value = "CLIC5_U1_M1_EE_A3_video1.mp4";
questionSource[2].formatArray[2].mediaArray[2] = new Array();
questionSource[2].formatArray[2].mediaArray[2].type = "audio";
questionSource[2].formatArray[2].mediaArray[2].value = "CLIC5_U1_M1_CO_A1_Audio2.mp3";



questionSource[2].playerId = new Array();
questionSource[2].playerId[0] = "player01";


questionSource[3] = new Array();
               
questionSource[3].playerIdArray = new Array();
questionSource[3].formatArray = new Array();
questionSource[3].interactionArray = new Array();
               
questionSource[3].answerArray = new Array();
               
questionSource[3].questionType = "content";
questionSource[3].nbColumn = 2;
questionSource[3].weight = 0;
questionSource[3].maxAttempt = 1;
questionSource[3].questionSlide = false;
               
questionSource[3].formatArray[0] = new Array();
questionSource[3].formatArray[0].css = "banner";
questionSource[3].formatArray[0].type = "normal";
questionSource[3].formatArray[0].value = "content slide2";
               
questionSource[3].formatArray[1] = new Array();
questionSource[3].formatArray[1].type = "normal";
questionSource[3].formatArray[1].value = "contenu html";

questionSource[3].formatArray[2] = new Array();
questionSource[3].formatArray[2].type = "normal";
questionSource[3].formatArray[2].value = "<ul><li> Liste </li> <li> Autre élément </li></ul> <a href='http://www.google.ca' target='blank' style='color:#0000FF'> Lien vers site web </a>";
               
questionSource[3].playerId = new Array();
questionSource[3].playerId[0] = "player01";

questionSource[4] = new Array();
               
questionSource[4].playerIdArray = new Array();
questionSource[4].formatArray = new Array();
questionSource[4].interactionArray = new Array();
               
questionSource[4].answerArray = new Array();
               
questionSource[4].questionType = "crossword";
questionSource[4].nbColumn = 1;
questionSource[4].weight = 2;
questionSource[4].maxAttempt = 3;
questionSource[4].questionSlide = true;
               
questionSource[4].formatArray[0] = new Array();
questionSource[4].formatArray[0].css = "banner";
questionSource[4].formatArray[0].type = "normal";
questionSource[4].formatArray[0].value = "mot croisé!";
               
questionSource[4].formatArray[1] = new Array();
questionSource[4].formatArray[1].type = "interaction";
questionSource[4].formatArray[1].value = "gogogogogogogogo";

questionSource[4].interactionArray[0] = new Array();
questionSource[4].interactionArray[0].id = 0;
questionSource[4].interactionArray[0].indice = "Nom de la compagnie";
questionSource[4].interactionArray[0].value = "cforp";

questionSource[4].interactionArray[1] = new Array();
questionSource[4].interactionArray[1].id = 1;
questionSource[4].interactionArray[1].indice = "Meilleur ami de l'homme";
questionSource[4].interactionArray[1].value = "chien";

questionSource[4].interactionArray[2] = new Array();
questionSource[4].interactionArray[2].id = 2;
questionSource[4].interactionArray[2].indice = "identité secrète de Bruce Wayne";
questionSource[4].interactionArray[2].value = "batman";

questionSource[4].interactionArray[3] = new Array();
questionSource[4].interactionArray[3].id = 3;
questionSource[4].interactionArray[3].indice = "tableau pour accrocher des trucs au mur";
questionSource[4].interactionArray[3].value = "babillard";

questionSource[4].interactionArray[4] = new Array();
questionSource[4].interactionArray[4].id = 4;
questionSource[4].interactionArray[4].indice = "opposé du sel";
questionSource[4].interactionArray[4].value = "poivre";
               
questionSource[4].playerId = new Array();
questionSource[4].playerId[0] = "player01";
*/
