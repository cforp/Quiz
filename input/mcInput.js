tf = new Array();
tf.formatArray = new Array();
tf.interactionArray = new Array();
tf.answerArray = new Array();         
tf.questionType = "trueFalse";
tf.weight = 1;
tf.maxAttempt = 1;
tf.questionSlide = true;
tf.partialPoints = false;
           
tf.formatArray[0] = new Array();
tf.formatArray[0].css = "banner";
tf.formatArray[0].type = "normal";
tf.formatArray[0].value = "Ceci est un koala.";

tf.formatArray[1] = new Array();
tf.formatArray[1].type = "interaction";

tf.formatArray[2] = new Array();
tf.formatArray[2].type = "media";
tf.formatArray[2].mediaArray = new Array();
tf.formatArray[2].mediaArray[0] = new Array();
tf.formatArray[2].mediaArray[0].value = "CLIC3_U1_M2_CE_A2_VIDEO4.mp4";
tf.formatArray[2].mediaArray[0].type = "video";
tf.formatArray[2].mediaArray[0].location = "video";
tf.formatArray[2].mediaArray[0].mediaSetting = new Array();
tf.formatArray[2].mediaArray[0].mediaSetting.heightRatio = 1;
tf.formatArray[2].mediaArray[0].mediaSetting.imagePreview = "image/Koala.jpg";

tf.formatArray[2].mediaArray[0].mediaSetting.widthRatio = .9;
tf.formatArray[2].mediaArray[0].mediaSetting.width = 360;
tf.formatArray[2].mediaArray[0].mediaSetting.height = 400;
tf.formatArray[2].mediaArray[0].mediaSetting.fancy = true;

tf.formatArray[3] = new Array();
tf.formatArray[3].type = "media";
tf.formatArray[3].mediaArray = new Array();
tf.formatArray[3].mediaArray[0] = new Array();
tf.formatArray[3].mediaArray[0].value = "CLIC5_U1_M1_EE_A3_video1.mp4";
tf.formatArray[3].mediaArray[0].type = "video";
tf.formatArray[3].mediaArray[0].location = "video";
tf.formatArray[3].mediaArray[0].mediaSetting = new Array();
tf.formatArray[3].mediaArray[0].mediaSetting.heightRatio = 1;
tf.formatArray[3].mediaArray[0].mediaSetting.imagePreview = "image/Koala.jpg";

tf.formatArray[3].mediaArray[0].mediaSetting.widthRatio = .9;
tf.formatArray[3].mediaArray[0].mediaSetting.width = 360;
tf.formatArray[3].mediaArray[0].mediaSetting.height = 400;
tf.formatArray[3].mediaArray[0].mediaSetting.fancy = true;

tf.interactionArray.setting = new Array();
tf.interactionArray.setting.nbColumn = 1;
          
tf.interactionArray.element = new Array();
tf.interactionArray.element[0] = new Array();
               
tf.interactionArray.element[0].value = "Vrai";
tf.interactionArray.element[0].id = 0; 
         
tf.interactionArray.element[0].mediaArray = new Array();
tf.interactionArray.element[0].mediaArray[0] = new Array();
tf.interactionArray.element[0].mediaArray[0].value = "Koala.jpg";
tf.interactionArray.element[0].mediaArray[0].type = "image";
tf.interactionArray.element[0].mediaArray[0].location = "image";
tf.interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
tf.interactionArray.element[0].mediaArray[0].mediaSetting.imagePreview = "KoalaThumb.jpg";
tf.interactionArray.element[0].mediaArray[0].mediaSetting.imagePreviewLocation= "image";
tf.interactionArray.element[0].mediaArray[0].mediaSetting.width = 100;
tf.interactionArray.element[0].mediaArray[0].mediaSetting.height = 75;
tf.interactionArray.element[0].mediaArray[0].mediaSetting.fancy = true;

tf.interactionArray.element[0].mediaArray[1] = new Array();
tf.interactionArray.element[0].mediaArray[1].value = "TURKEY.mp3";
tf.interactionArray.element[0].mediaArray[1].type = "audio";
tf.interactionArray.element[0].mediaArray[1].location = "audio";
tf.interactionArray.element[0].mediaArray[1].mediaSetting = new Array();
tf.interactionArray.element[0].mediaArray[1].mediaSetting.fancy = false;

tf.interactionArray.element[0].mediaArray[2] = new Array();
tf.interactionArray.element[0].mediaArray[2].value = "Koala.jpg";
tf.interactionArray.element[0].mediaArray[2].type = "image";
tf.interactionArray.element[0].mediaArray[2].location = "image";
tf.interactionArray.element[0].mediaArray[2].mediaSetting = new Array();
tf.interactionArray.element[0].mediaArray[2].mediaSetting.width = 100;
tf.interactionArray.element[0].mediaArray[2].mediaSetting.height = 75;
tf.interactionArray.element[0].mediaArray[2].mediaSetting.fancy = false;



tf.interactionArray.element[1] = new Array();
tf.interactionArray.element[1].value = "Faux";
tf.interactionArray.element[1].id = 1;
tf.interactionArray.element[1].mediaArray = new Array();
          
tf.answerArray[0] = new Array();
tf.answerArray[0].id = 0;
tf.answerArray[0].value = true;
tf.answerArray[0].weight = 0.5;
            
tf.answerArray[1] = new Array();
tf.answerArray[1].id = 1;
tf.answerArray[1].value = false;
tf.answerArray[1].weight = 0;



mc = new Array();
mc.formatArray = new Array();
mc.interactionArray = new Array();
mc.answerArray = new Array();         
mc.questionType = "multipleChoice";
mc.weight = 1;
mc.maxAttempt = 1;
mc.questionSlide = true;
mc.partialPoints = false;
           
mc.formatArray[0] = new Array();
mc.formatArray[0].type = "banner";
mc.formatArray[0].value = "Ceci est un koala.";

mc.formatArray[1] = new Array();
mc.formatArray[1].type = "interaction";

mc.formatArray[2] = new Array();
mc.formatArray[2].css = "interactionDiv";
mc.formatArray[2].type = "normal";
mc.formatArray[2].value = "Video YouTube.";

mc.formatArray[3] = new Array();
mc.formatArray[3].type = "media";
mc.formatArray[3].mediaArray = new Array();
mc.formatArray[3].mediaArray[0] = new Array();
mc.formatArray[3].mediaArray[0].value = "http://www.youtube.com/watch?v=aGJC0KAPeYA&feature=player_detailpage";
mc.formatArray[3].mediaArray[0].type = "video";
mc.formatArray[3].mediaArray[0].location = "video";
mc.formatArray[3].mediaArray[0].mediaSetting = new Array();
mc.formatArray[3].mediaArray[0].mediaSetting.imagePreview = "Penguins.jpg";
mc.formatArray[3].mediaArray[0].mediaSetting.imagePreviewLocation= "image";
mc.formatArray[3].mediaArray[0].mediaSetting.width = 200;
mc.formatArray[3].mediaArray[0].mediaSetting.height = 200;
mc.formatArray[3].mediaArray[0].mediaSetting.fancy = false;

mc.formatArray[4] = new Array();
mc.formatArray[4].css = "interactionDiv";
mc.formatArray[4].type = "normal";
mc.formatArray[4].value = "Video YouTube avec Fancybox.";


mc.formatArray[5] = new Array();
mc.formatArray[5].type = "media";
mc.formatArray[5].mediaArray = new Array();
mc.formatArray[5].mediaArray[0] = new Array();
mc.formatArray[5].mediaArray[0].value = "http://www.youtube.com/watch?v=0emXuhPTWUM&feature=list_other&playnext=1&list=AL94UKMTqg-9Ahb0X38T8Qg4DVfgMUbZ4D";
mc.formatArray[5].mediaArray[0].type = "video";
mc.formatArray[5].mediaArray[0].location = "video";
mc.formatArray[5].mediaArray[0].mediaSetting = new Array();
mc.formatArray[5].mediaArray[0].mediaSetting.width = 300;
mc.formatArray[5].mediaArray[0].mediaSetting.height = 300;
mc.formatArray[5].mediaArray[0].mediaSetting.fancy = true;

mc.interactionArray.setting = new Array();
mc.interactionArray.setting.nbColumn = 1;
          
mc.interactionArray.element = new Array();
mc.interactionArray.element[0] = new Array();
               
mc.interactionArray.element[0].value = "oui";
mc.interactionArray.element[0].id = 0; 
         
mc.interactionArray.element[0].mediaArray = new Array();
mc.interactionArray.element[0].mediaArray[0] = new Array();
mc.interactionArray.element[0].mediaArray[0].value = "Koala.jpg";
mc.interactionArray.element[0].mediaArray[0].type = "image";
mc.interactionArray.element[0].mediaArray[0].location = "image";
mc.interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
mc.interactionArray.element[0].mediaArray[0].mediaSetting.width = 100;
mc.interactionArray.element[0].mediaArray[0].mediaSetting.height = 75;
mc.interactionArray.element[0].mediaArray[0].mediaSetting.fancy = true;

mc.interactionArray.element[0].mediaArray[1] = new Array();
mc.interactionArray.element[0].mediaArray[1].value = "TURKEY.mp3";
mc.interactionArray.element[0].mediaArray[1].type = "audio";
mc.interactionArray.element[0].mediaArray[1].location = "audio";
mc.interactionArray.element[0].mediaArray[1].mediaSetting = new Array();
mc.interactionArray.element[0].mediaArray[1].mediaSetting.width = 100;
mc.interactionArray.element[0].mediaArray[1].mediaSetting.height = 75;
mc.interactionArray.element[0].mediaArray[1].mediaSetting.fancy = false;

mc.interactionArray.element[0].mediaArray[2] = new Array();
mc.interactionArray.element[0].mediaArray[2].value = "Koala.jpg";
mc.interactionArray.element[0].mediaArray[2].type = "image";
mc.interactionArray.element[0].mediaArray[2].location = "image";
mc.interactionArray.element[0].mediaArray[2].mediaSetting = new Array();
mc.interactionArray.element[0].mediaArray[2].mediaSetting.width = 100;
mc.interactionArray.element[0].mediaArray[2].mediaSetting.height = 75;
mc.interactionArray.element[0].mediaArray[2].mediaSetting.fancy = true;

mc.interactionArray.element[0].mediaArray[3] = new Array();
mc.interactionArray.element[0].mediaArray[3].value = "TURKEY.mp3";
mc.interactionArray.element[0].mediaArray[3].type = "audio";
mc.interactionArray.element[0].mediaArray[3].location = "audio";
mc.interactionArray.element[0].mediaArray[3].mediaSetting = new Array();
mc.interactionArray.element[0].mediaArray[3].mediaSetting.width = 100;
mc.interactionArray.element[0].mediaArray[3].mediaSetting.height = 75;
mc.interactionArray.element[0].mediaArray[3].mediaSetting.fancy = false;


mc.interactionArray.element[1] = new Array();
mc.interactionArray.element[1].value = "Non";
mc.interactionArray.element[1].id = 1;
mc.interactionArray.element[1].mediaArray = new Array();

mc.interactionArray.element[2] = new Array();
mc.interactionArray.element[2].value = "Nope";
mc.interactionArray.element[2].id = 2;
mc.interactionArray.element[2].mediaArray = new Array();
          
mc.answerArray[0] = new Array();
mc.answerArray[0].id = 0;
mc.answerArray[0].value = true;
mc.answerArray[0].weight = 0.5;
            
mc.answerArray[1] = new Array();
mc.answerArray[1].id = 1;
mc.answerArray[1].value = false;
mc.answerArray[1].weight = 0;

mc.answerArray[1] = new Array();
mc.answerArray[1].id = 2;
mc.answerArray[1].value = false;
mc.answerArray[1].weight = 0;



/********************************************************/
/*          ASSOCIATION                                 */
/********************************************************/

ass1 = new Array();
ass1.formatArray = new Array();
ass1.interactionArray = new Array();
ass1.answerArray = new Array();

ass1.questionType = "association";
ass1.nbColumn = 1;
ass1.weight = 1;
ass1.maxAttempt = 1;
ass1.questionSlide = true;

ass1.formatArray[0] = new Array();
ass1.formatArray[0].type = "banner";
ass1.formatArray[0].value = "<br />Associez les noms de pays à leur drapeau respectif.";

ass1.formatArray[1] = new Array();
ass1.formatArray[1].type = "interaction";

ass1.interactionArray.setting = new Array();

ass1.interactionArray.element = new Array();



/********************************************************/
/*           Element 0 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
ass1.interactionArray.element[0] = new Array();
ass1.interactionArray.element[0].elementFixe = new Array();
ass1.interactionArray.element[0].elementFixe.id = 0;

ass1.interactionArray.element[0].elementFixe.value = "";

ass1.interactionArray.element[0].elementFixe.mediaArray = new Array();


ass1.interactionArray.element[0].elementFixe.mediaArray[0] = new Array();
ass1.interactionArray.element[0].elementFixe.mediaArray[0].type="image";
ass1.interactionArray.element[0].elementFixe.mediaArray[0].value="canada.jpg";
ass1.interactionArray.element[0].elementFixe.mediaArray[0].location = "image";
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting = new Array();
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.width = 100;
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.height = 65;
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.widthRatio = 1;
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.heightRatio = 1;
ass1.interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.fancy = true;


// element[n].elementSortable[n] de la question est la colonne de droite de la question d'association
ass1.interactionArray.element[0].elementSortable = new Array();
ass1.interactionArray.element[0].elementSortable.id = 1;
ass1.interactionArray.element[0].elementSortable.value = "Canada";
//ass1.interactionArray.element[0].elementSortable.mediaArray = new Array();

/********************************************************/
/*           Element 1 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
ass1.interactionArray.element[1] = new Array();
ass1.interactionArray.element[1].elementFixe = new Array();
ass1.interactionArray.element[1].elementFixe.id = 2;

ass1.interactionArray.element[1].elementFixe.value = "";

ass1.interactionArray.element[1].elementFixe.mediaArray = new Array();

ass1.interactionArray.element[1].elementFixe.mediaArray[0] = new Array();
ass1.interactionArray.element[1].elementFixe.mediaArray[0].type="video";
ass1.interactionArray.element[1].elementFixe.mediaArray[0].value="CLIC3_U1_M2_CE_A2_VIDEO4.mp4";
ass1.interactionArray.element[1].elementFixe.mediaArray[0].location = "video";
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting = new Array();
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.imagePreview = "image/belgique.jpg";
;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.width = 100;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.height = 100;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.widthRatio = 1;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.heightRatio = 1;

ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.fancy = false;


// elementSortable[n] de la question est la colonne de droite de la question d'association
ass1.interactionArray.element[1].elementSortable = new Array();
ass1.interactionArray.element[1].elementSortable.id = 3;
ass1.interactionArray.element[1].elementSortable.value = "Belgique" 

/********************************************************/
/*           Element 2 de la question                   */
/********************************************************/

ass1.interactionArray.element[2] = new Array();
ass1.interactionArray.element[2].elementFixe = new Array();
ass1.interactionArray.element[2].elementFixe.id = 4;

ass1.interactionArray.element[2].elementFixe.value = "";

ass1.interactionArray.element[2].elementFixe.mediaArray = new Array();

ass1.interactionArray.element[2].elementFixe.mediaArray[0] = new Array();
ass1.interactionArray.element[2].elementFixe.mediaArray[0].type="image";
ass1.interactionArray.element[2].elementFixe.mediaArray[0].value="france.jpg";
ass1.interactionArray.element[2].elementFixe.mediaArray[0].location = "image";
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting = new Array();
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.width = 105;
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.height = 65;
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.widthRatio = 1;
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.heightRatio = 1;
ass1.interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.fancy = true;


// elementSortable[n] de la question est la colonne de droite de la question d'association
ass1.interactionArray.element[2].elementSortable = new Array();
ass1.interactionArray.element[2].elementSortable.id = 5;
ass1.interactionArray.element[2].elementSortable.value = "France"; 

ass1.answerArray[0] = new Array();
ass1.answerArray[0].id = 0;
ass1.answerArray[0].value = 1;
ass1.answerArray[0].weight = 0.33;
               
ass1.answerArray[1] = new Array();
ass1.answerArray[1].id = 2;
ass1.answerArray[1].value = 3;
ass1.answerArray[1].weight = 0.33;

ass1.answerArray[2] = new Array();
ass1.answerArray[2].id = 4;
ass1.answerArray[2].value = 5;
ass1.answerArray[2].weight = 0.33;

mr = new Array();
mr.formatArray = new Array();
mr.interactionArray = new Array();
mr.answerArray = new Array();
mr.questionType = "multipleResponse";
mr.weight = 1;
mr.maxAttempt = 1;
mr.questionSlide = true;
mr.partialPoints = false;
       
mr.formatArray[0] = new Array();
mr.formatArray[0].css = "banner";
mr.formatArray[0].type = "normal";
mr.formatArray[0].value = "Ceci est un koala.";

mr.formatArray[1] = new Array();
mr.formatArray[1].type = "interaction";

mr.interactionArray.setting = new Array();
mr.interactionArray.setting.nbColumn = 1;
       
mr.interactionArray.element = new Array();
mr.interactionArray.element[0] = new Array();
       
mr.interactionArray.element[0].value = "Oui";
mr.interactionArray.element[0].id = 0; 
       
mr.interactionArray.element[0].mediaArray = new Array();
mr.interactionArray.element[0].mediaArray[0] = new Array();
mr.interactionArray.element[0].mediaArray[0].value = "Koala.jpg";
mr.interactionArray.element[0].mediaArray[0].type = "image";
mr.interactionArray.element[0].mediaArray[0].location = "image";
mr.interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
mr.interactionArray.element[0].mediaArray[0].mediaSetting.width = 100;
mr.interactionArray.element[0].mediaArray[0].mediaSetting.height = 75;
mr.interactionArray.element[0].mediaArray[0].mediaSetting.fancy = true;

mr.interactionArray.element[0].mediaArray[1] = new Array();
mr.interactionArray.element[0].mediaArray[1].value = "TURKEY.mp3";
mr.interactionArray.element[0].mediaArray[1].type = "audio";
mr.interactionArray.element[0].mediaArray[1].location = "audio";
mr.interactionArray.element[0].mediaArray[1].mediaSetting = new Array();
mr.interactionArray.element[0].mediaArray[1].mediaSetting.width = 100;
mr.interactionArray.element[0].mediaArray[1].mediaSetting.height = 75;
mr.interactionArray.element[0].mediaArray[1].mediaSetting.fancy = false;

mr.interactionArray.element[0].mediaArray[2] = new Array();
mr.interactionArray.element[0].mediaArray[2].value = "Koala.jpg";
mr.interactionArray.element[0].mediaArray[2].type = "image";
mr.interactionArray.element[0].mediaArray[2].location = "image";
mr.interactionArray.element[0].mediaArray[2].mediaSetting = new Array();
mr.interactionArray.element[0].mediaArray[2].mediaSetting.width = 100;
mr.interactionArray.element[0].mediaArray[2].mediaSetting.height = 75;
mr.interactionArray.element[0].mediaArray[2].mediaSetting.fancy = true;

mr.interactionArray.element[1] = new Array();
mr.interactionArray.element[1].value = "Faux";
mr.interactionArray.element[1].id = 1;
mr.interactionArray.element[1].mediaArray = new Array();

mr.interactionArray.element[2] = new Array();
mr.interactionArray.element[2].value = "Yep";
mr.interactionArray.element[2].id = 2;
mr.interactionArray.element[2].mediaArray = new Array();
       
mr.answerArray[0] = new Array();
mr.answerArray[0].id = 0;
mr.answerArray[0].value = true;
mr.answerArray[0].weight = 0.5;
         
mr.answerArray[1] = new Array();
mr.answerArray[1].id = 1;
mr.answerArray[1].value = false;
mr.answerArray[1].weight = 0;

mr.answerArray[2] = new Array();
mr.answerArray[2].id = 2;
mr.answerArray[2].value = true;
mr.answerArray[2].weight = 0.5;

tf2 = new Array();
tf2.formatArray = new Array();
tf2.interactionArray = new Array();
tf2.answerArray = new Array();         
tf2.questionType = "trueFalse";
tf2.weight = 1;
tf2.maxAttempt = 1;
tf2.questionSlide = true;
tf2.partialPoints = false;
           
tf2.formatArray[0] = new Array();
tf2.formatArray[0].css = "banner";
tf2.formatArray[0].type = "normal";
tf2.formatArray[0].value = "Ceci est un koala.";

tf2.formatArray[1] = new Array();
tf2.formatArray[1].type = "interaction";

tf2.formatArray[2] = new Array();
tf2.formatArray[2].type = "media";
tf2.formatArray[2].mediaArray = new Array();
tf2.formatArray[2].mediaArray[0] = new Array();
tf2.formatArray[2].mediaArray[0].value = "CLIC3_U1_M2_CE_A2_VIDEO4.mp4";
tf2.formatArray[2].mediaArray[0].type = "video";
tf2.formatArray[2].mediaArray[0].location = "video";
tf2.formatArray[2].mediaArray[0].mediaSetting = new Array();
tf2.formatArray[2].mediaArray[0].mediaSetting.imagePreview = "image/Penguins.jpg";
tf2.formatArray[2].mediaArray[0].mediaSetting.width = 200;
tf2.formatArray[2].mediaArray[0].mediaSetting.height = 200;
tf2.formatArray[2].mediaArray[0].mediaSetting.fancy = true;

tf2.interactionArray.setting = new Array();
tf2.interactionArray.setting.nbColumn = 2;
          
tf2.interactionArray.element = new Array();
tf2.interactionArray.element[0] = new Array();
               
tf2.interactionArray.element[0].value = "Vrai";
tf2.interactionArray.element[0].id = 0; 
         
tf2.interactionArray.element[0].mediaArray = new Array();
tf2.interactionArray.element[0].mediaArray[0] = new Array();
tf2.interactionArray.element[0].mediaArray[0].value = "Koala.jpg";
tf2.interactionArray.element[0].mediaArray[0].type = "image";
tf2.interactionArray.element[0].mediaArray[0].location = "image";
tf2.interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
tf2.interactionArray.element[0].mediaArray[0].mediaSetting.width = 100;
tf2.interactionArray.element[0].mediaArray[0].mediaSetting.height = 75;
tf2.interactionArray.element[0].mediaArray[0].mediaSetting.fancy = true;

tf2.interactionArray.element[0].mediaArray[1] = new Array();
tf2.interactionArray.element[0].mediaArray[1].value = "TURKEY.mp3";
tf2.interactionArray.element[0].mediaArray[1].type = "audio";
tf2.interactionArray.element[0].mediaArray[1].location = "audio";
tf2.interactionArray.element[0].mediaArray[1].mediaSetting = new Array();
tf2.interactionArray.element[0].mediaArray[1].mediaSetting.width = 100;
tf2.interactionArray.element[0].mediaArray[1].mediaSetting.height = 75;
tf2.interactionArray.element[0].mediaArray[1].mediaSetting.fancy = false;

tf2.interactionArray.element[0].mediaArray[2] = new Array();
tf2.interactionArray.element[0].mediaArray[2].value = "Koala.jpg";
tf2.interactionArray.element[0].mediaArray[2].type = "image";
tf2.interactionArray.element[0].mediaArray[2].location = "image";
tf2.interactionArray.element[0].mediaArray[2].mediaSetting = new Array();
tf2.interactionArray.element[0].mediaArray[2].mediaSetting.width = 100;
tf2.interactionArray.element[0].mediaArray[2].mediaSetting.height = 75;
tf2.interactionArray.element[0].mediaArray[2].mediaSetting.fancy = true;


tf2.interactionArray.element[1] = new Array();
tf2.interactionArray.element[1].value = "Faux";
tf2.interactionArray.element[1].id = 1;
tf2.interactionArray.element[1].mediaArray = new Array();
          
tf2.answerArray[0] = new Array();
tf2.answerArray[0].id = 0;
tf2.answerArray[0].value = true;
tf2.answerArray[0].weight = 0.5;
            
tf2.answerArray[1] = new Array();
tf2.answerArray[1].id = 1;
tf2.answerArray[1].value = false;
tf2.answerArray[1].weight = 0;

mc2 = new Array();
mc2.formatArray = new Array();
mc2.interactionArray = new Array();
mc2.answerArray = new Array();         
mc2.questionType = "multipleChoice";
mc2.weight = 1;
mc2.maxAttempt = 1;
mc2.questionSlide = true;
mc2.partialPoints = false;
           
mc2.formatArray[0] = new Array();
mc2.formatArray[0].css = "banner";
mc2.formatArray[0].type = "normal";
mc2.formatArray[0].value = "Ceci est un koala.";

mc2.formatArray[1] = new Array();
mc2.formatArray[1].type = "interaction";

mc2.formatArray[2] = new Array();
mc2.formatArray[2].type = "media";
mc2.formatArray[2].mediaArray = new Array();
mc2.formatArray[2].mediaArray[0] = new Array();
mc2.formatArray[2].mediaArray[0].value = "CLIC3_U1_M2_CE_A2_VIDEO4.mp4";
mc2.formatArray[2].mediaArray[0].type = "video";
mc2.formatArray[2].mediaArray[0].location = "video";
mc2.formatArray[2].mediaArray[0].mediaSetting = new Array();
mc2.formatArray[2].mediaArray[0].mediaSetting.width = 200;
mc2.formatArray[2].mediaArray[0].mediaSetting.height = 200;
mc2.formatArray[2].mediaArray[0].mediaSetting.fancy = true;

mc2.interactionArray.setting = new Array();
mc2.interactionArray.setting.nbColumn = 2;
          
mc2.interactionArray.element = new Array();
mc2.interactionArray.element[0] = new Array();
               
mc2.interactionArray.element[0].value = "oui";
mc2.interactionArray.element[0].id = 0; 
         
mc2.interactionArray.element[0].mediaArray = new Array();
mc2.interactionArray.element[0].mediaArray[0] = new Array();
mc2.interactionArray.element[0].mediaArray[0].value = "Koala.jpg";
mc2.interactionArray.element[0].mediaArray[0].type = "image";
mc2.interactionArray.element[0].mediaArray[0].location = "image";
mc2.interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
mc2.interactionArray.element[0].mediaArray[0].mediaSetting.width = 100;
mc2.interactionArray.element[0].mediaArray[0].mediaSetting.height = 75;
mc2.interactionArray.element[0].mediaArray[0].mediaSetting.fancy = true;

mc2.interactionArray.element[0].mediaArray[1] = new Array();
mc2.interactionArray.element[0].mediaArray[1].value = "TURKEY.mp3";
mc2.interactionArray.element[0].mediaArray[1].type = "audio";
mc2.interactionArray.element[0].mediaArray[1].location = "audio";
mc2.interactionArray.element[0].mediaArray[1].mediaSetting = new Array();
mc2.interactionArray.element[0].mediaArray[1].mediaSetting.width = 100;
mc2.interactionArray.element[0].mediaArray[1].mediaSetting.height = 75;
mc2.interactionArray.element[0].mediaArray[1].mediaSetting.fancy = true;

mc2.interactionArray.element[0].mediaArray[2] = new Array();
mc2.interactionArray.element[0].mediaArray[2].value = "Koala.jpg";
mc2.interactionArray.element[0].mediaArray[2].type = "image";
mc2.interactionArray.element[0].mediaArray[2].location = "image";
mc2.interactionArray.element[0].mediaArray[2].mediaSetting = new Array();
mc2.interactionArray.element[0].mediaArray[2].mediaSetting.width = 100;
mc2.interactionArray.element[0].mediaArray[2].mediaSetting.height = 75;
mc2.interactionArray.element[0].mediaArray[2].mediaSetting.fancy = true;


mc2.interactionArray.element[1] = new Array();
mc2.interactionArray.element[1].value = "Non";
mc2.interactionArray.element[1].id = 1;
mc2.interactionArray.element[1].mediaArray = new Array();

mc2.interactionArray.element[2] = new Array();
mc2.interactionArray.element[2].value = "Nope";
mc2.interactionArray.element[2].id = 2;
mc2.interactionArray.element[2].mediaArray = new Array();
          
mc2.answerArray[0] = new Array();
mc2.answerArray[0].id = 0;
mc2.answerArray[0].value = true;
mc2.answerArray[0].weight = 0.5;
            
mc2.answerArray[1] = new Array();
mc2.answerArray[1].id = 1;
mc2.answerArray[1].value = false;
mc2.answerArray[1].weight = 0;

mc2.answerArray[1] = new Array();
mc2.answerArray[1].id = 2;
mc2.answerArray[1].value = false;
mc2.answerArray[1].weight = 0;

mr2 = new Array();
mr2.formatArray = new Array();
mr2.interactionArray = new Array();
mr2.answerArray = new Array();
mr2.questionType = "multipleResponse";
mr2.weight = 1;
mr2.maxAttempt = 1;
mr2.questionSlide = true;
mr2.partialPoints = false;
       
mr2.formatArray[0] = new Array();
mr2.formatArray[0].css = "banner";
mr2.formatArray[0].type = "normal";
mr2.formatArray[0].value = "Ceci est un koala.";

mr2.formatArray[1] = new Array();
mr2.formatArray[1].type = "interaction";

mr2.interactionArray.setting = new Array();
mr2.interactionArray.setting.nbColumn = 2;
       
mr2.interactionArray.element = new Array();
mr2.interactionArray.element[0] = new Array();
       
mr2.interactionArray.element[0].value = "Oui";
mr2.interactionArray.element[0].id = 0; 
       
mr2.interactionArray.element[0].mediaArray = new Array();
mr2.interactionArray.element[0].mediaArray[0] = new Array();
mr2.interactionArray.element[0].mediaArray[0].value = "Koala.jpg";
mr2.interactionArray.element[0].mediaArray[0].type = "image";
mr2.interactionArray.element[0].mediaArray[0].location = "image";
mr2.interactionArray.element[0].mediaArray[0].mediaSetting = new Array();
mr2.interactionArray.element[0].mediaArray[0].mediaSetting.width = 100;
mr2.interactionArray.element[0].mediaArray[0].mediaSetting.height = 75;
mr2.interactionArray.element[0].mediaArray[0].mediaSetting.fancy = true;

mr2.interactionArray.element[0].mediaArray[1] = new Array();
mr2.interactionArray.element[0].mediaArray[1].value = "TURKEY.mp3";
mr2.interactionArray.element[0].mediaArray[1].type = "audio";
mr2.interactionArray.element[0].mediaArray[1].location = "audio";
mr2.interactionArray.element[0].mediaArray[1].mediaSetting = new Array();
mr2.interactionArray.element[0].mediaArray[1].mediaSetting.width = 100;
mr2.interactionArray.element[0].mediaArray[1].mediaSetting.height = 75;
mr2.interactionArray.element[0].mediaArray[1].mediaSetting.fancy = true;

mr2.interactionArray.element[0].mediaArray[2] = new Array();
mr2.interactionArray.element[0].mediaArray[2].value = "Koala.jpg";
mr2.interactionArray.element[0].mediaArray[2].type = "image";
mr2.interactionArray.element[0].mediaArray[2].location = "image";
mr2.interactionArray.element[0].mediaArray[2].mediaSetting = new Array();
mr2.interactionArray.element[0].mediaArray[2].mediaSetting.width = 100;
mr2.interactionArray.element[0].mediaArray[2].mediaSetting.height = 75;
mr2.interactionArray.element[0].mediaArray[2].mediaSetting.fancy = true;

mr2.interactionArray.element[1] = new Array();
mr2.interactionArray.element[1].value = "Faux";
mr2.interactionArray.element[1].id = 1;
mr2.interactionArray.element[1].mediaArray = new Array();

mr2.interactionArray.element[2] = new Array();
mr2.interactionArray.element[2].value = "Yep";
mr2.interactionArray.element[2].id = 2;
mr2.interactionArray.element[2].mediaArray = new Array();
       
mr2.answerArray[0] = new Array();
mr2.answerArray[0].id = 0;
mr2.answerArray[0].value = true;
mr2.answerArray[0].weight = 0.5;
         
mr2.answerArray[1] = new Array();
mr2.answerArray[1].id = 1;
mr2.answerArray[1].value = false;
mr2.answerArray[1].weight = 0;

mr2.answerArray[2] = new Array();
mr2.answerArray[2].id = 2;
mr2.answerArray[2].value = true;
mr2.answerArray[2].weight = 0.5;

cw = new Array();

cw.playerIdArray = new Array();
cw.formatArray = new Array();
cw.interactionArray = new Array();

cw.answerArray = new Array();

cw.questionType = "crossword";
cw.weight = 1;
cw.maxAttempt = 1;
cw.questionSlide = true;
cw.partialPoints = false;

cw.formatArray[0] = new Array();
cw.formatArray[0].css = "banner";
cw.formatArray[0].type = "normal";
cw.formatArray[0].value = "Remplissez le mot croisé.";

cw.formatArray[1] = new Array();
cw.formatArray[1].type = "interaction";
cw.formatArray[1].value = "";

cw.interactionArray = new Array();

cw.interactionArray.element = new Array();
cw.interactionArray.setting = new Array();
cw.interactionArray.setting.nbColumn = 1;

cw.interactionArray.element[0] = new Array();
cw.interactionArray.element[0].id = 0;
cw.interactionArray.element[0].indice = "Nom de la compagnie";
cw.interactionArray.element[0].value = "cforp";
cw.interactionArray.element[0].orientation =1;
cw.interactionArray.element[0].x = 10;
cw.interactionArray.element[0].y = 8;

cw.interactionArray.element[1] = new Array();
cw.interactionArray.element[1].id = 1;
cw.interactionArray.element[1].indice = "Compléter : Objet d'apprentissage '&nbsp;_________&nbsp;'";
cw.interactionArray.element[1].value = "interactif";
cw.interactionArray.element[1].orientation = 0;
cw.interactionArray.element[1].x = 1;
cw.interactionArray.element[1].y = 9;

cw.interactionArray.element[2] = new Array();
cw.interactionArray.element[2].id = 2;
cw.interactionArray.element[2].indice = "Parle fort au téléphone : )";
cw.interactionArray.element[2].value = "hubert";
cw.interactionArray.element[2].orientation = 1;
cw.interactionArray.element[2].x = 5;
cw.interactionArray.element[2].y = 5;

cw.interactionArray.element[3] = new Array();
cw.interactionArray.element[3].id = 3;
cw.interactionArray.element[3].indice = "Nom du département";
cw.interactionArray.element[3].value = "multimedia";
cw.interactionArray.element[3].orientation = 0;
cw.interactionArray.element[3].x = 1;
cw.interactionArray.element[3].y = 2;

cw.interactionArray.element[4] = new Array();
cw.interactionArray.element[4].id = 4;
cw.interactionArray.element[4].indice = "Matière scolaire où l'on apprend l'algèbre.";
cw.interactionArray.element[4].value = "mathematique";
cw.interactionArray.element[4].orientation = 0;
cw.interactionArray.element[4].x = 2;
cw.interactionArray.element[4].y = 5;

cw.interactionArray.element[5] = new Array();
cw.interactionArray.element[5].id = 5;
cw.interactionArray.element[5].indice = "Rue du cforp.";
cw.interactionArray.element[5].value = "donald";
cw.interactionArray.element[5].orientation = 1;
cw.interactionArray.element[5].x = 8;
cw.interactionArray.element[5].y = 2;

cw.answerArray[0] = new Array();
cw.answerArray[0].weight = 0.2;

cw.answerArray[1] = new Array();
cw.answerArray[1].weight = 0.2;

cw.answerArray[2] = new Array();
cw.answerArray[2].weight = 0.2;

cw.answerArray[3] = new Array();
cw.answerArray[3].weight = 0.2;

cw.answerArray[4] = new Array();
cw.answerArray[4].weight = 0.2;

cw.answerArray[5] = new Array();
cw.answerArray[5].weight = 0.2;


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
hotSpot1.formatArray[0].value = "Sélectionnez l'oreille gauche du koala.";

hotSpot1.formatArray[1] = new Array();
hotSpot1.formatArray[1].type = "interaction";
hotSpot1.formatArray[1].value = "";

hotSpot1.interactionArray.setting = new Array();
hotSpot1.interactionArray.setting.nbColumn = 1;
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
this.questionSource[0] = tf;

this.questionSource[1] = new Array();
this.questionSource[1] = mc;

this.questionSource[2] = new Array();
this.questionSource[2] = ass1;

this.questionSource[3] = new Array();
this.questionSource[3] = mc2;

this.questionSource[3] = new Array();
this.questionSource[3] = mr;

this.questionSource[4] = new Array();
this.questionSource[4] = tf2;


this.questionSource[5] = new Array();
this.questionSource[5] = mr2;

this.questionSource[6] = new Array();
this.questionSource[6] = hotSpot1;

this.questionSource[7] = new Array();
this.questionSource[7] = cw;

this.questionSource[8] = new Array();
this.questionSource[8] = contentSlide1;

