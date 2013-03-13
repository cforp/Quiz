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
tf.interactionArray.element[0].mediaArray[0].mediaSetting.width = 100;
tf.interactionArray.element[0].mediaArray[0].mediaSetting.height = 75;
tf.interactionArray.element[0].mediaArray[0].mediaSetting.fancy = true;

tf.interactionArray.element[0].mediaArray[1] = new Array();
tf.interactionArray.element[0].mediaArray[1].value = "Koala.jpg";
tf.interactionArray.element[0].mediaArray[1].type = "image";
tf.interactionArray.element[0].mediaArray[1].location = "image";
tf.interactionArray.element[0].mediaArray[1].mediaSetting = new Array();
tf.interactionArray.element[0].mediaArray[1].mediaSetting.width = 100;
tf.interactionArray.element[0].mediaArray[1].mediaSetting.height = 75;
tf.interactionArray.element[0].mediaArray[1].mediaSetting.fancy = true;
/*
tf.interactionArray.element[0].mediaArray[2] = new Array();
tf.interactionArray.element[0].mediaArray[2].value = "Koala.jpg";
tf.interactionArray.element[0].mediaArray[2].type = "image";
tf.interactionArray.element[0].mediaArray[2].location = "image";
tf.interactionArray.element[0].mediaArray[2].mediaSetting = new Array();
tf.interactionArray.element[0].mediaArray[2].mediaSetting.width = 100;
tf.interactionArray.element[0].mediaArray[2].mediaSetting.height = 75;
tf.interactionArray.element[0].mediaArray[2].mediaSetting.fancy = true;
*/

tf.interactionArray.element[1] = new Array();
tf.interactionArray.element[1].value = "Faux";
tf.interactionArray.element[1].id = 1;
tf.interactionArray.element[1].mediaArray = new Array();
              
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
this.questionSource[0] = tf;