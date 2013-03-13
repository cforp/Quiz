var questionSource = new Array();

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

/* POUR LE BRANCHING  */
ass1.branching = true;
ass1.nextSlideID = 4;

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
ass1.interactionArray.element[1].elementFixe.mediaArray[0].type="image";
ass1.interactionArray.element[1].elementFixe.mediaArray[0].value="belgique.jpg";
ass1.interactionArray.element[1].elementFixe.mediaArray[0].location = "image";
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting = new Array();
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.width = 105;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.height = 65;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.widthRatio = 1;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.heightRatio = 1;
ass1.interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.fancy = true;


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

this.questionSource[0] = new Array();
this.questionSource[0] = ass1;   
            
/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/
TF1 = new Array();
TF1.formatArray = new Array();
TF1.interactionArray = new Array();
TF1.answerArray = new Array();
TF1.incorrectAnswerFeedback = "Désolé. Vous n'avez pas trouvé les bonnes réponses.";
TF1.correctAnswerFeedback = "Vous avez trouvé toutes les bonnes réponses!";

               
TF1.questionType = "trueFalse";
TF1.nbColumn = 1;
TF1.weight = 1;
TF1.maxAttempt = 1;
TF1.questionSlide = true;

TF1.branching = false;
               
TF1.formatArray[0] = new Array();
TF1.formatArray[0].type = "banner";
TF1.formatArray[0].value = "<br />Ceci est un koala.";

               
TF1.formatArray[1] = new Array();
TF1.formatArray[1].type = "media";
TF1.formatArray[1].mediaArray = new Array();
TF1.formatArray[1].mediaArray[0] = new Array();
TF1.formatArray[1].mediaArray[0].value = "Koala.jpg";
TF1.formatArray[1].mediaArray[0].type = "image";
TF1.formatArray[1].mediaArray[0].location = "image";
TF1.formatArray[1].mediaArray[0].mediaSetting = new Array();
TF1.formatArray[1].mediaArray[0].mediaSetting.width = 250;
TF1.formatArray[1].mediaArray[0].mediaSetting.height = 200;
TF1.formatArray[1].mediaArray[0].mediaSetting.fancy = true;


TF1.formatArray[2] = new Array();
TF1.formatArray[2].type = "interaction";

TF1.formatArray[3] = new Array();
TF1.formatArray[3].type = "normal";
TF1.formatArray[3].value="<br /><br />";

TF1.interactionArray.setting = new Array();
               
TF1.interactionArray.element = new Array();
TF1.interactionArray.element[0] = new Array();
TF1.interactionArray.element[0].id = 0;
               
TF1.interactionArray.element[0].value = "Vrai";
               
TF1.interactionArray.element[0].mediaArray = new Array();

TF1.interactionArray.element[1] = new Array();
TF1.interactionArray.element[1].value = "Faux";
TF1.interactionArray.element[1].id = 1;
TF1.interactionArray.element[1].mediaArray = new Array();

TF1.answerArray[0] = new Array();
TF1.answerArray[0].id = 0;
TF1.answerArray[0].value = true;
TF1.answerArray[0].weight = 1;
               
TF1.answerArray[1] = new Array();
TF1.answerArray[1].id = 1;
TF1.answerArray[1].value = false;
TF1.answerArray[1].weight = 0;


this.questionSource[1] = new Array();
this.questionSource[1] = TF1;   
            
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

this.questionSource[2] = new Array();
this.questionSource[2] = HS1;  

/***********************************************/
/*                 MOT CROISÉ                  */
/***********************************************/

MotCr1 = new Array();
               
MotCr1.playerIdArray = new Array();
MotCr1.formatArray = new Array();
MotCr1.interactionArray = new Array();
               
MotCr1.answerArray = new Array();
               
MotCr1.questionType = "crossword";
MotCr1.nbColumn = 1;
MotCr1.weight = 1;
MotCr1.maxAttempt = 1;
MotCr1.questionSlide = true;
               
MotCr1.formatArray[0] = new Array();
MotCr1.formatArray[0].type = "banner";
MotCr1.formatArray[0].value = "<br /> Remplissez le mot croisé.";
               
MotCr1.formatArray[1] = new Array();
MotCr1.formatArray[1].type = "interaction";
MotCr1.formatArray[1].value = "";

MotCr1.formatArray[2] = new Array();
MotCr1.formatArray[2].type = "normal";
MotCr1.formatArray[2].value="<br /><br />";
               
MotCr1.interactionArray = new Array();
               
MotCr1.interactionArray.element = new Array();

MotCr1.interactionArray.element[0] = new Array();
MotCr1.interactionArray.element[0].id = 0;
MotCr1.interactionArray.element[0].indice = "Nom de la compagnie";
MotCr1.interactionArray.element[0].value = "cforp";
MotCr1.interactionArray.element[0].orientation =1;
MotCr1.interactionArray.element[0].x = 10;
MotCr1.interactionArray.element[0].y = 8;
               
MotCr1.interactionArray.element[1] = new Array();
MotCr1.interactionArray.element[1].id = 1;
MotCr1.interactionArray.element[1].indice = "Compléter : Objet d'apprentissage '&nbsp;_________&nbsp;'";
MotCr1.interactionArray.element[1].value = "interactif";
MotCr1.interactionArray.element[1].orientation = 0;
MotCr1.interactionArray.element[1].x = 1;
MotCr1.interactionArray.element[1].y = 9;
               
MotCr1.interactionArray.element[2] = new Array();
MotCr1.interactionArray.element[2].id = 2;
MotCr1.interactionArray.element[2].indice = "Parle fort au téléphone : )";
MotCr1.interactionArray.element[2].value = "hubert";
MotCr1.interactionArray.element[2].orientation = 1;
MotCr1.interactionArray.element[2].x = 5;
MotCr1.interactionArray.element[2].y = 5;
               
MotCr1.interactionArray.element[3] = new Array();
MotCr1.interactionArray.element[3].id = 3;
MotCr1.interactionArray.element[3].indice = "Nom du département";
MotCr1.interactionArray.element[3].value = "multimedia";
MotCr1.interactionArray.element[3].orientation = 0;
MotCr1.interactionArray.element[3].x = 1;
MotCr1.interactionArray.element[3].y = 2;
               
MotCr1.interactionArray.element[4] = new Array();
MotCr1.interactionArray.element[4].id = 4;
MotCr1.interactionArray.element[4].indice = "Matière scolaire où l'on apprend l'algèbre.";
MotCr1.interactionArray.element[4].value = "mathematique";
MotCr1.interactionArray.element[4].orientation = 0;
MotCr1.interactionArray.element[4].x = 2;
MotCr1.interactionArray.element[4].y = 5;
               
MotCr1.interactionArray.element[5] = new Array();
MotCr1.interactionArray.element[5].id = 5;
MotCr1.interactionArray.element[5].indice = "Rue du cforp.";
MotCr1.interactionArray.element[5].value = "donald";
MotCr1.interactionArray.element[5].orientation = 1;
MotCr1.interactionArray.element[5].x = 8;
MotCr1.interactionArray.element[5].y = 2;
              
MotCr1.answerArray[0] = new Array();
MotCr1.answerArray[0].weight = 0.2;
               
MotCr1.answerArray[1] = new Array();
MotCr1.answerArray[1].weight = 0.2;
               
MotCr1.answerArray[2] = new Array();
MotCr1.answerArray[2].weight = 0.2;
               
MotCr1.answerArray[3] = new Array();
MotCr1.answerArray[3].weight = 0.2;
               
MotCr1.answerArray[4] = new Array();
MotCr1.answerArray[4].weight = 0.2;

MotCr1.answerArray[5] = new Array();
MotCr1.answerArray[5].weight = 0.2;

this.questionSource[3] = new Array();
this.questionSource[3] = MotCr1;  


/***********************************************/
/*                CHOIX MULTIPLES              */
/***********************************************/


MC1 = new Array();
MC1.formatArray = new Array();
MC1.interactionArray = new Array();
MC1.answerArray = new Array();
               
MC1.questionType = "multipleChoice";
MC1.nbColumn = 2;
MC1.weight = 1;
MC1.maxAttempt = 1;
MC1.questionSlide = true;
MC1.customFeedback = true;
               
MC1.formatArray[0] = new Array();
MC1.formatArray[0].type = "banner";
MC1.formatArray[0].value = "<br /> Lisez la phrase suivante et choisissez la bonne réponse. &laquo; J'ai beaucoup épargné ces dernières années. Je pense avoir les moyens de m'acheter une maison.&raquo;.<br />Que signifie l'expression avoir les moyens, selon vous?";
    
MC1.formatArray[1] = new Array();
MC1.formatArray[1].type = "interaction";
               
MC1.formatArray[2] = new Array();
MC1.formatArray[2].type = "normal";
MC1.formatArray[2].value="<br /><br />";
               
               
MC1.interactionArray.setting = new Array();
MC1.interactionArray.setting.nbColumn = 1;
               
MC1.interactionArray.element = new Array();
MC1.interactionArray.element[0] = new Array();

MC1.interactionArray.element[0].id = 0;               
MC1.interactionArray.element[0].value = "<strong>Je sais comment</strong> faire pour acheter une maison";
               
               
MC1.interactionArray.element[1] = new Array();
MC1.interactionArray.element[1].value = "J'ai les compétences pour acheter une maison.";
MC1.interactionArray.element[1].id = 1;               

MC1.interactionArray.element[2] = new Array();
MC1.interactionArray.element[2].value = "J'ai suffisamment d'argent pour acheter une maison.";
MC1.interactionArray.element[2].id = 2;               
               
MC1.answerArray[0] = new Array();
MC1.answerArray[0].id = 0;
MC1.answerArray[0].value = false;
MC1.answerArray[0].weight = 0;
MC1.answerArray[0].customFeedback = "<p>Non. Désolé.</p>Ne signifie pas ..."; 
               
MC1.answerArray[1] = new Array();
MC1.answerArray[1].id = 1;
MC1.answerArray[1].value = false;
MC1.answerArray[1].weight = 0;
MC1.answerArray[1].customFeedback = "<p>Non. Désolé.</p><p>Ne signifie pas que vous avez suffisamment d'argent </p>";

MC1.answerArray[2] = new Array();
MC1.answerArray[2].id = 2;
MC1.answerArray[2].value = true;
MC1.answerArray[2].weight = 1;
MC1.answerArray[2].customFeedback = "<p>Bonne  réponse!</p>";

this.questionSource[4] = new Array();
this.questionSource[4] = MC1; 


/********************************************************/
/*          séquence Drop down                  */
/********************************************************/

SeqListe = new Array();
SeqListe.formatArray = new Array();
SeqListe.interactionArray = new Array();
SeqListe.answerArray = new Array();

SeqListe.questionType = "sequenceListe";
SeqListe.nbColumn = 1;
SeqListe.weight = 1;
SeqListe.maxAttempt = 1;
SeqListe.questionSlide = true;

SeqListe.formatArray[0] = new Array();
SeqListe.formatArray[0].type = "banner";
SeqListe.formatArray[0].value = "<br />Veuillez remettre en ordre.";

SeqListe.formatArray[1] = new Array();
SeqListe.formatArray[1].type = "interaction";

SeqListe.interactionArray.element = new Array();

SeqListe.interactionArray.element[0] = new Array();
SeqListe.interactionArray.element[0].value = "Lire le scénario.";
SeqListe.interactionArray.element[0].id = 0;


SeqListe.interactionArray.element[1] = new Array();
SeqListe.interactionArray.element[1].value = "Lire les consignes et apprendre le vocabulaire.";
SeqListe.interactionArray.element[1].id = 1;

SeqListe.interactionArray.element[2] = new Array();
SeqListe.interactionArray.element[2].value = "Vérifier votre compréhension du vocabulaire.";
SeqListe.interactionArray.element[2].id = 2;

SeqListe.interactionArray.element[3] = new Array();
SeqListe.interactionArray.element[3].value = "Vérifier votre compréhension des consignes dans le dépliant.";
SeqListe.interactionArray.element[3].id = 3;



SeqListe.answerArray[0] = new Array();
SeqListe.answerArray[0].value = 0;
SeqListe.answerArray[0].weight = 0.25;
SeqListe.answerArray[0].id = 0;
               
SeqListe.answerArray[1] = new Array();
SeqListe.answerArray[1].value = 1;
SeqListe.answerArray[1].weight = 0.25;
SeqListe.answerArray[1].id = 1;

SeqListe.answerArray[2] = new Array();
SeqListe.answerArray[2].value = 2;
SeqListe.answerArray[2].weight = 0.25;
SeqListe.answerArray[2].id = 2;

SeqListe.answerArray[3] = new Array();
SeqListe.answerArray[3].value = 3;
SeqListe.answerArray[3].weight = 0.25;
SeqListe.answerArray[3].id = 3;

this.questionSource[5] = new Array();
this.questionSource[5] = SeqListe; 

/********************************************************/
/*          séquence Drag & Drop                        */
/********************************************************/

SeqDrag1 = new Array();
SeqDrag1.formatArray = new Array();
SeqDrag1.interactionArray = new Array();
SeqDrag1.answerArray = new Array();

SeqDrag1.questionType = "sequenceDD";
SeqDrag1.nbColumn = 1;
SeqDrag1.weight = 1;
SeqDrag1.maxAttempt = 1;
SeqDrag1.questionSlide = true;

SeqDrag1.formatArray[0] = new Array();
SeqDrag1.formatArray[0].type = "banner";
SeqDrag1.formatArray[0].value = "<br />Voici les étapes pour l'obtention d'un permis de conduire. Veuillez mettre celles-ci en ordre.";

SeqDrag1.formatArray[1] = new Array();
SeqDrag1.formatArray[1].type = "interaction";

SeqDrag1.interactionArray.element = new Array();

SeqDrag1.interactionArray.element[0] = new Array();
SeqDrag1.interactionArray.element[0].value = "<strong>Inscription</strong> au cours de conduite";
SeqDrag1.interactionArray.element[0].id = 0;


SeqDrag1.interactionArray.element[1] = new Array();
SeqDrag1.interactionArray.element[1].value = "Obtention du permis d'apprenti conducteur";
SeqDrag1.interactionArray.element[1].id = 1;

SeqDrag1.interactionArray.element[2] = new Array();
SeqDrag1.interactionArray.element[2].value = "Réussite de l'examen théorique";
SeqDrag1.interactionArray.element[2].id = 2;

SeqDrag1.interactionArray.element[3] = new Array();
SeqDrag1.interactionArray.element[3].value = "Réussite de l'examen pratique";
SeqDrag1.interactionArray.element[3].id = 3;

SeqDrag1.interactionArray.element[4] = new Array();
SeqDrag1.interactionArray.element[4].value = "Permis probatoire";
SeqDrag1.interactionArray.element[4].id = 4;



SeqDrag1.answerArray[0] = new Array();
SeqDrag1.answerArray[0].value = 0;
SeqDrag1.answerArray[0].weight = 0.25;
               
SeqDrag1.answerArray[1] = new Array();
SeqDrag1.answerArray[1].value = 1;
SeqDrag1.answerArray[1].weight = 0.25;

SeqDrag1.answerArray[2] = new Array();
SeqDrag1.answerArray[2].value = 2;
SeqDrag1.answerArray[2].weight = 0.25;

SeqDrag1.answerArray[3] = new Array();
SeqDrag1.answerArray[3].value = 3;
SeqDrag1.answerArray[3].weight = 0.25;

SeqDrag1.answerArray[4] = new Array();
SeqDrag1.answerArray[4].value = 4;
SeqDrag1.answerArray[4].weight = 0.25;

this.questionSource[6] = new Array();
this.questionSource[6] = SeqDrag1; 


/********************************************************/
/*          texte à trous Drop down                     */
/********************************************************/

TTDrop1 = new Array();
TTDrop1.formatArray = new Array();
TTDrop1.interactionArray = new Array();
TTDrop1.answerArray = new Array();

TTDrop1.questionType = "texteTrouDD";
TTDrop1.nbColumn = 1;
TTDrop1.weight = 1;
TTDrop1.maxAttempt = 1;
TTDrop1.questionSlide = true;

TTDrop1.formatArray[0] = new Array();
TTDrop1.formatArray[0].type = "banner";
TTDrop1.formatArray[0].value = "<br />Veuillez répondre à la question suivante.";

TTDrop1.formatArray[1] = new Array();
TTDrop1.formatArray[1].type = "interaction";

TTDrop1.interactionArray.element = new Array();

TTDrop1.interactionArray.element[0] = new Array();
TTDrop1.interactionArray.element[0].type = "bp"; // bout de phrase
TTDrop1.interactionArray.element[0].value = "<strong>Nila</strong> veut partir en";

TTDrop1.interactionArray.element[1] = new Array();
TTDrop1.interactionArray.element[1].type = "trou";
TTDrop1.interactionArray.element[1].id = 0;

TTDrop1.interactionArray.element[1].trou = new Array();

TTDrop1.interactionArray.element[1].trou[0] = new Array();
TTDrop1.interactionArray.element[1].trou[0].value = "vacances";
TTDrop1.interactionArray.element[1].trou[0].id = 0;
TTDrop1.interactionArray.element[1].trou[1] = new Array();
TTDrop1.interactionArray.element[1].trou[1].value = "train";
TTDrop1.interactionArray.element[1].trou[1].id = 1;
TTDrop1.interactionArray.element[1].trou[2] = new Array();
TTDrop1.interactionArray.element[1].trou[2].value = "avion";
TTDrop1.interactionArray.element[1].trou[2].id = 2;

TTDrop1.interactionArray.element[2] = new Array();
TTDrop1.interactionArray.element[2].type = "bp";
TTDrop1.interactionArray.element[2].value = ". Son";

TTDrop1.interactionArray.element[3] = new Array();
TTDrop1.interactionArray.element[3].type = "trou";
TTDrop1.interactionArray.element[3].id = 1;

TTDrop1.interactionArray.element[3].trou = new Array();

TTDrop1.interactionArray.element[3].trou[0] = new Array();
TTDrop1.interactionArray.element[3].trou[0].value = "revenu";
TTDrop1.interactionArray.element[3].trou[0].id = 0;

TTDrop1.interactionArray.element[3].trou[1] = new Array();
TTDrop1.interactionArray.element[3].trou[1].value = "budget";
TTDrop1.interactionArray.element[3].trou[1].id = 1;

TTDrop1.interactionArray.element[3].trou[2] = new Array();
TTDrop1.interactionArray.element[3].trou[2].value = "apport";
TTDrop1.interactionArray.element[3].trou[2].id = 2;

TTDrop1.interactionArray.element[4] = new Array();
TTDrop1.interactionArray.element[4].type = "bp";
TTDrop1.interactionArray.element[4].value = "est de 500$.";


TTDrop1.answerArray[0] = new Array();
TTDrop1.answerArray[0].value = 0;
TTDrop1.answerArray[0].weight = .33;
TTDrop1.answerArray[0].id = 0;
               
TTDrop1.answerArray[1] = new Array();
TTDrop1.answerArray[1].value = 1;
TTDrop1.answerArray[1].weight = .33;
TTDrop1.answerArray[1].id = 1;

TTDrop1.answerArray[2] = new Array();
TTDrop1.answerArray[2].value = 1;
TTDrop1.answerArray[2].weight = .33;
TTDrop1.answerArray[2].id = 2;

this.questionSource[7] = new Array();
this.questionSource[7] = TTDrop1; 


/********************************************************/
/*          texte à trous Drag                          */
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
ttDrag1.interactionArray.element[2].value = "<strong>Paolo et sa femme</strong> ont beaucoup de ";

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
ttDrag1.answerArray[1].value = "<strong>dépenses</strong";
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

this.questionSource[8] = new Array();
this.questionSource[8] = ttDrag1; 

/***********************************************/
/*                RÉPONSES MULTIPLES              */
/***********************************************/

MR1 = new Array();
MR1.formatArray = new Array();
MR1.interactionArray = new Array();
MR1.answerArray = new Array();
               
MR1.questionType = "multipleResponse";
MR1.nbColumn = 1;
MR1.weight = 1;
MR1.maxAttempt = 3;
MR1.questionSlide = true;

MR1.incorrectAnswerFeedback  = "Désolé. Vous n’avez pas trouvé les bonnes réponses.";
MR1.correctAnswerFeedback  = "Vous avez trouvé toutes les bonnes réponses!"; 

               
MR1.formatArray[0] = new Array();
MR1.formatArray[0].type = "banner";
MR1.formatArray[0].value = "Qu’est-ce que la mère peut utiliser pour soulager la douleur pendant son accouchement?";

MR1.formatArray[1] = new Array();
MR1.formatArray[1].type = "normal";
MR1.formatArray[1].css = "interactionDiv";
MR1.formatArray[1].value="<p>Cochez toutes les bonnes réponses.</p>";

   
MR1.formatArray[2] = new Array();
MR1.formatArray[2].type = "interaction";
               
MR1.formatArray[3] = new Array();
MR1.formatArray[3].type = "normal";
MR1.formatArray[3].value="<br /><br />";
               
               
MR1.interactionArray.setting = new Array();
               
MR1.interactionArray.element = new Array();
MR1.interactionArray.element[0] = new Array();

MR1.interactionArray.element[0].id = 0;               
MR1.interactionArray.element[0].value = "<strong>la péridurale</strong>";
               
              
MR1.interactionArray.element[1] = new Array();
MR1.interactionArray.element[1].value = "une contraction";
MR1.interactionArray.element[1].id = 1;               

MR1.interactionArray.element[2] = new Array();
MR1.interactionArray.element[2].value = "un ballon de naissance";
MR1.interactionArray.element[2].id = 2;               

MR1.interactionArray.element[3] = new Array();
MR1.interactionArray.element[3].value = "le cordon ombilical";
MR1.interactionArray.element[3].id = 3;               

MR1.interactionArray.element[4] = new Array();
MR1.interactionArray.element[4].value = "une baignoire de naissance";
MR1.interactionArray.element[4].id = 4;               

MR1.interactionArray.element[5] = new Array();
MR1.interactionArray.element[5].value = "un siège-sac";
MR1.interactionArray.element[5].id = 5;               
               
MR1.answerArray[0] = new Array();
MR1.answerArray[0].id = 0;
MR1.answerArray[0].value = true;
MR1.answerArray[0].weight = 1;
               
MR1.answerArray[1] = new Array();
MR1.answerArray[1].id = 1;
MR1.answerArray[1].value = false;
MR1.answerArray[1].weight = 0;

MR1.answerArray[2] = new Array();
MR1.answerArray[2].id = 2;
MR1.answerArray[2].value = true;
MR1.answerArray[2].weight = 1;

MR1.answerArray[3] = new Array();
MR1.answerArray[3].id = 3;
MR1.answerArray[3].value = false;
MR1.answerArray[3].weight = 0;

MR1.answerArray[4] = new Array();
MR1.answerArray[4].id = 4;
MR1.answerArray[4].value = true;
MR1.answerArray[4].weight = 1;


MR1.answerArray[5] = new Array();
MR1.answerArray[5].id = 5;
MR1.answerArray[5].value = true;
MR1.answerArray[5].weight = 1;

this.questionSource[9] = new Array();
this.questionSource[9] = MR1;

/********************************************************/
/*     Réponse Courte  sans validation "on the fly"     */
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
RC1.formatArray[0].type = "banner";
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
RC1.interactionArray.element[2].value = "<strong>Paolo et sa femme</strong> ont beaucoup de ";

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

this.questionSource[10] = new Array();
this.questionSource[10] = RC1;

/********************************************************/
/*          Réponse Courte avec validation              */
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

RC2.formatArray[0].type = "banner";
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
RC2.interactionArray.element[2].value = "<strong>Paolo et sa femme</strong> ont beaucoup de ";

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

this.questionSource[11] = new Array();
this.questionSource[11] = RC2;

/********************************************************/
/*          Wordbank              */
/********************************************************/


WB1 = new Array();
WB1.formatArray = new Array();
WB1.interactionArray = new Array();
WB1.answerArray = new Array();

WB1.questionType = "texteTrouDrag";
WB1.nbColumn = 1;
WB1.weight = 1;
WB1.maxAttempt = 1;
WB1.questionSlide = true;
WB1.customFeedback = true;

WB1.formatArray[0] = new Array();
WB1.formatArray[0].type = "banner";
WB1.formatArray[0].value = "<br />Choisir cinéma.";

WB1.formatArray[1] = new Array();
WB1.formatArray[1].type = "interaction";

WB1.interactionArray.element = new Array();

WB1.interactionArray.element[0] = new Array();
WB1.interactionArray.element[0].type = "trou";
WB1.interactionArray.element[0].value = 2;

WB1.answerArray[0] = new Array();
WB1.answerArray[0].value = "rédige les constitutions.";
WB1.answerArray[0].weight = 1;
WB1.answerArray[0].id = 0;
WB1.answerArray[0].customFeedback = "feedback par réponse 1";
               
WB1.answerArray[1] = new Array();
WB1.answerArray[1].value = "<strong>dépenses</strong>";
WB1.answerArray[1].weight = 0;
WB1.answerArray[1].id = 1;
WB1.answerArray[1].customFeedback = "feedback par réponse 2";

WB1.answerArray[2] = new Array();
WB1.answerArray[2].value = "cinéma";
WB1.answerArray[2].weight = 0;
WB1.answerArray[2].id = 2;
WB1.answerArray[2].customFeedback = "feedback par réponse 3";

WB1.answerArray[3] = new Array();
WB1.answerArray[3].value = "restaurants";
WB1.answerArray[3].weight = 0;
WB1.answerArray[3].id = 3;
WB1.answerArray[3].customFeedback = "feedback par réponse 4";

WB1.answerArray[4] = new Array();
WB1.answerArray[4].value = "camping";
WB1.answerArray[4].weight = 0;
WB1.answerArray[4].id = 4;
WB1.answerArray[4].customFeedback = "feedback par réponse 5";

WB1.answerArray[5] = new Array();
WB1.answerArray[5].value = "année";
WB1.answerArray[5].weight = 0;
WB1.answerArray[5].id = 5;
WB1.answerArray[5].customFeedback = "feedback par réponse 6";

this.questionSource[12] = new Array();
this.questionSource[12] = WB1;

/********************************************************/
/*          ASSOCIATION                                 */
/********************************************************/

ass2 = new Array();
ass2.formatArray = new Array();
ass2.interactionArray = new Array();
ass2.answerArray = new Array();

ass2.incorrectAnswerFeedback  = "<br />Désolé, non.<br /><br />";

ass2.correctAnswerFeedback  = "<br />Vous avez réussi à associer les mots aux bonnes définitions.<br /><br />"; 


ass2.questionType = "association";
ass2.weight = 1;
ass2.maxAttempt = 2;
ass2.questionSlide = true;
ass2.partialPoints = false;

ass2.formatArray[0] = new Array();
ass2.formatArray[0].type = "banner";
ass2.formatArray[0].value = "Associez les mots aux bonnes définitions.";

ass2.formatArray[1] = new Array();
ass2.formatArray[1].type = "interaction";

ass2.interactionArray.setting = new Array();
ass2.interactionArray.setting.nbColumn = 1;

ass2.interactionArray.element = new Array();



/********************************************************/
/*           Element 0 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
ass2.interactionArray.element[0] = new Array();
ass2.interactionArray.element[0].elementFixe = new Array();
ass2.interactionArray.element[0].elementFixe.id = 0;

ass2.interactionArray.element[0].elementFixe.value = "le <strong>suivi prénatal</strong>";


// element[n].elementSortable[n] de la question est la colonne de droite de la question d'association
ass2.interactionArray.element[0].elementSortable = new Array();
ass2.interactionArray.element[0].elementSortable.id = 1;
ass2.interactionArray.element[0].elementSortable.value = "Une série de rendez-vous avec l’obstétricien ou la sage-femme pour vérifier l’état de santé de la mère et du bébé.";


/********************************************************/
/*           Element 1 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
ass2.interactionArray.element[1] = new Array();
ass2.interactionArray.element[1].elementFixe = new Array();
ass2.interactionArray.element[1].elementFixe.id = 2;

ass2.interactionArray.element[1].elementFixe.value = "le <strong>suivi postnatal</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
ass2.interactionArray.element[1].elementSortable = new Array();
ass2.interactionArray.element[1].elementSortable.id = 3;
ass2.interactionArray.element[1].elementSortable.value = "Une série de rendez-vous avec le médecin ou la sage-femme pour vérifier l’état de santé du bébé et de la mère après l’accouchement." 

/********************************************************/
/*           Element 2 de la question                   */
/********************************************************/

ass2.interactionArray.element[2] = new Array();
ass2.interactionArray.element[2].elementFixe = new Array();
ass2.interactionArray.element[2].elementFixe.id = 4;

ass2.interactionArray.element[2].elementFixe.value = "une <strong>maison de naissance</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
ass2.interactionArray.element[2].elementSortable = new Array();
ass2.interactionArray.element[2].elementSortable.id = 5;
ass2.interactionArray.element[2].elementSortable.value = "Un endroit où les femmes peuvent accoucher et où l’on donne des soins aux mères et à leur bébé."; 

/********************************************************/
/*           Element 3 de la question                   */
/********************************************************/

ass2.interactionArray.element[3] = new Array();
ass2.interactionArray.element[3].elementFixe = new Array();
ass2.interactionArray.element[3].elementFixe.id = 6;

ass2.interactionArray.element[3].elementFixe.value = "la <strong>péridurale</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
ass2.interactionArray.element[3].elementSortable = new Array();
ass2.interactionArray.element[3].elementSortable.id = 7;
ass2.interactionArray.element[3].elementSortable.value = "Une injection que l’on donne aux femmes pendant l’accouchement pour diminuer la douleur."; 

/********************************************************/
/*           Element 4 de la question                   */
/********************************************************/

ass2.interactionArray.element[4] = new Array();
ass2.interactionArray.element[4].elementFixe = new Array();
ass2.interactionArray.element[4].elementFixe.id = 8;

ass2.interactionArray.element[4].elementFixe.value = "des <strong>cours prénataux</strong>";

// elementSortable[n] de la question est la colonne de droite de la question d'association
ass2.interactionArray.element[4].elementSortable = new Array();
ass2.interactionArray.element[4].elementSortable.id = 9;
ass2.interactionArray.element[4].elementSortable.value = "Des cours donnés aux femmes et à leur conjoint pendant la grossesse."; 

ass2.answerArray[0] = new Array();
ass2.answerArray[0].id = 0;
ass2.answerArray[0].value = 1;
ass2.answerArray[0].weight = 0.2;
               
ass2.answerArray[1] = new Array();
ass2.answerArray[1].id = 2;
ass2.answerArray[1].value = 3;
ass2.answerArray[1].weight = 0.2;

ass2.answerArray[2] = new Array();
ass2.answerArray[2].id = 4;
ass2.answerArray[2].value = 5;
ass2.answerArray[2].weight = 0.2;

ass2.answerArray[3] = new Array();
ass2.answerArray[3].id = 6;
ass2.answerArray[3].value = 7;
ass2.answerArray[3].weight = 0.2;

ass2.answerArray[4] = new Array();
ass2.answerArray[4].id = 8;
ass2.answerArray[4].value = 9;
ass2.answerArray[4].weight = 0.2;

this.questionSource[13] = new Array();
this.questionSource[13] = ass2;

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

this.questionSource[14] = new Array();
this.questionSource[14] = HS2;


/***********************************************/
/*                 CONTENU                  */
/***********************************************/

content1 = new Array();
               
content1.playerIdArray = new Array();
content1.formatArray = new Array();
content1.interactionArray = new Array();
               
//content1.answerArray = new Array();
               
content1.questionType = "content";
content1.nbColumn = 1;
//content1.weight = 0;
//content1.maxAttempt = 1;
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

content1.formatArray[3] = new Array();
content1.formatArray[3].type = "media";
content1.formatArray[3].mediaArray = new Array();
content1.formatArray[3] = new Array();
content1.formatArray[3].type = "media";
content1.formatArray[3].mediaArray = new Array();

content1.formatArray[3].mediaArray[0] = new Array();
content1.formatArray[3].mediaArray[0].value = "Desert.jpg";
content1.formatArray[3].mediaArray[0].type = "image";
content1.formatArray[3].mediaArray[0].location = "image";
content1.formatArray[3].mediaArray[0].mediaSetting = new Array();
content1.formatArray[3].mediaArray[0].mediaSetting.width = 250;
content1.formatArray[3].mediaArray[0].mediaSetting.height = 200;
content1.formatArray[3].mediaArray[0].mediaSetting.fancy = true;

content1.formatArray[3].mediaArray[1] = new Array();
content1.formatArray[3].mediaArray[1].value = "TURKEY.mp3";
content1.formatArray[3].mediaArray[1].type = "audio";
content1.formatArray[3].mediaArray[1].location = "audio";
content1.formatArray[3].mediaArray[1].mediaSetting = new Array();
content1.formatArray[3].mediaArray[1].mediaSetting.autoStart = false;
content1.formatArray[3].mediaArray[1].mediaSetting.loop = false;

content1.formatArray[4] = new Array();
content1.formatArray[4].type = "normal";
content1.formatArray[4].value="<br /><br />";

this.questionSource[15] = new Array();
this.questionSource[15] = content1; 
