var questionSource = new Array();


/***********************************************/
/*                 CONTENU                  */
/***********************************************/

content1 = new Array();
               
content1.playerIdArray = new Array();
content1.formatArray = new Array();
content1.interactionArray = new Array();
               
content1.answerArray = new Array();
               
content1.questionType = "content";
content1.nbColumn = 1;
content1.weight = 0;
content1.maxAttempt = 1;
content1.questionSlide = false;
               
content1.formatArray[0] = new Array();
content1.formatArray[0].type = "banner";
content1.formatArray[0].value = "Diapositive de contenu <br/> <img src=\"image/cforp.jpg\" height =\"60\" /> ";
               
content1.formatArray[1] = new Array();
content1.formatArray[1].type = "normal";
content1.formatArray[1].value = "";
               
content1.formatArray[2] = new Array();
content1.formatArray[2].type = "normal";
content1.formatArray[2].value = "<ul><li> contenu html/css/javascript</li></ul> <a href='http://www.google.ca' target='blank' style='color:#0000FF'> Lien vers site web </a>";
content1.formatArray[2].css = "interactionDiv";


this.questionSource[0] = new Array();
this.questionSource[0] = content1; 
