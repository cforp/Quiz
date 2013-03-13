var questionSource = new Array();

/********************************************************/
/*          ASSOCIATION                                 */
/********************************************************/

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



/********************************************************/
/*           Element 0 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
questionSource[0].interactionArray.element[0] = new Array();
questionSource[0].interactionArray.element[0].elementFixe = new Array();
questionSource[0].interactionArray.element[0].elementFixe.id = 0;

questionSource[0].interactionArray.element[0].elementFixe.value = "";

questionSource[0].interactionArray.element[0].elementFixe.mediaArray = new Array();


questionSource[0].interactionArray.element[0].elementFixe.mediaArray[0] = new Array();
questionSource[0].interactionArray.element[0].elementFixe.mediaArray[0].type="image";
questionSource[0].interactionArray.element[0].elementFixe.mediaArray[0].value="canada.jpg";
questionSource[0].interactionArray.element[0].elementFixe.mediaArray[0].location = "image";
questionSource[0].interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting = new Array();
questionSource[0].interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.width = 100;
questionSource[0].interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.height = 65;
questionSource[0].interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[0].interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[0].interactionArray.element[0].elementFixe.mediaArray[0].mediaSetting.fancy = true;


// element[n].elementSortable[n] de la question est la colonne de droite de la question d'association
questionSource[0].interactionArray.element[0].elementSortable = new Array();
questionSource[0].interactionArray.element[0].elementSortable.id = 1;
questionSource[0].interactionArray.element[0].elementSortable.value = "Canada";
//questionSource[0].interactionArray.element[0].elementSortable.mediaArray = new Array();

/********************************************************/
/*           Element 1 de la question                   */
/********************************************************/

// elementFixe[n] de la question est la colonne de gauche de la question d'association
questionSource[0].interactionArray.element[1] = new Array();
questionSource[0].interactionArray.element[1].elementFixe = new Array();
questionSource[0].interactionArray.element[1].elementFixe.id = 2;

questionSource[0].interactionArray.element[1].elementFixe.value = "";

questionSource[0].interactionArray.element[1].elementFixe.mediaArray = new Array();

questionSource[0].interactionArray.element[1].elementFixe.mediaArray[0] = new Array();
questionSource[0].interactionArray.element[1].elementFixe.mediaArray[0].type="image";
questionSource[0].interactionArray.element[1].elementFixe.mediaArray[0].value="belgique.jpg";
questionSource[0].interactionArray.element[1].elementFixe.mediaArray[0].location = "image";
questionSource[0].interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting = new Array();
questionSource[0].interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.width = 105;
questionSource[0].interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.height = 65;
questionSource[0].interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[0].interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[0].interactionArray.element[1].elementFixe.mediaArray[0].mediaSetting.fancy = true;


// elementSortable[n] de la question est la colonne de droite de la question d'association
questionSource[0].interactionArray.element[1].elementSortable = new Array();
questionSource[0].interactionArray.element[1].elementSortable.id = 3;
questionSource[0].interactionArray.element[1].elementSortable.value = "Belgique" 

/********************************************************/
/*           Element 2 de la question                   */
/********************************************************/

questionSource[0].interactionArray.element[2] = new Array();
questionSource[0].interactionArray.element[2].elementFixe = new Array();
questionSource[0].interactionArray.element[2].elementFixe.id = 4;

questionSource[0].interactionArray.element[2].elementFixe.value = "";

questionSource[0].interactionArray.element[2].elementFixe.mediaArray = new Array();

questionSource[0].interactionArray.element[2].elementFixe.mediaArray[0] = new Array();
questionSource[0].interactionArray.element[2].elementFixe.mediaArray[0].type="image";
questionSource[0].interactionArray.element[2].elementFixe.mediaArray[0].value="france.jpg";
questionSource[0].interactionArray.element[2].elementFixe.mediaArray[0].location = "image";
questionSource[0].interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting = new Array();
questionSource[0].interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.width = 105;
questionSource[0].interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.height = 65;
questionSource[0].interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[0].interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[0].interactionArray.element[2].elementFixe.mediaArray[0].mediaSetting.fancy = true;


// elementSortable[n] de la question est la colonne de droite de la question d'association
questionSource[0].interactionArray.element[2].elementSortable = new Array();
questionSource[0].interactionArray.element[2].elementSortable.id = 5;
questionSource[0].interactionArray.element[2].elementSortable.value = "France"; 

questionSource[0].answerArray[0] = new Array();
questionSource[0].answerArray[0].id = 0;
questionSource[0].answerArray[0].value = 1;
questionSource[0].answerArray[0].weight = 0.33;
               
questionSource[0].answerArray[1] = new Array();
questionSource[0].answerArray[1].id = 2;
questionSource[0].answerArray[1].value = 3;
questionSource[0].answerArray[1].weight = 0.33;

questionSource[0].answerArray[2] = new Array();
questionSource[0].answerArray[2].id = 4;
questionSource[0].answerArray[2].value = 5;
questionSource[0].answerArray[2].weight = 0.33;
               
/**********************************************************/
/*                  VRAI OU FAUX                          */
/**********************************************************/
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
questionSource[1].interactionArray.element[0].id = 0;
               
questionSource[1].interactionArray.element[0].value = "Vrai";
               
questionSource[1].interactionArray.element[0].mediaArray = new Array();

questionSource[1].interactionArray.element[1] = new Array();
questionSource[1].interactionArray.element[1].value = "Faux";
questionSource[1].interactionArray.element[1].id = 1;
questionSource[1].interactionArray.element[1].mediaArray = new Array();

questionSource[1].answerArray[0] = new Array();
questionSource[1].answerArray[0].id = 0;
questionSource[1].answerArray[0].value = true;
questionSource[1].answerArray[0].weight = 1;
               
questionSource[1].answerArray[1] = new Array();
questionSource[1].answerArray[1].id = 1;
questionSource[1].answerArray[1].value = false;
questionSource[1].answerArray[1].weight = 0;

/***********************************************/
/*                 HOTSPOT                     */
/***********************************************/

questionSource[2] = new Array();

questionSource[2].playerIdArray = new Array();
questionSource[2].formatArray = new Array();
questionSource[2].interactionArray = new Array();
               
questionSource[2].answerArray = new Array();
               
questionSource[2].questionType = "hotspot";
questionSource[2].nbColumn = 1;
questionSource[2].weight = 1;
questionSource[2].maxAttempt =1;
questionSource[2].questionSlide = true;

questionSource[2].formatArray[0] = new Array();
questionSource[2].formatArray[0].css = "banner";
questionSource[2].formatArray[0].type = "normal";
questionSource[2].formatArray[0].value = "<br />Sélectionnez l'oreille gauche du koala.";

questionSource[2].formatArray[1] = new Array();
questionSource[2].formatArray[1].type = "interaction";
questionSource[2].formatArray[1].value = "";
questionSource[2].formatArray[2] = new Array();
questionSource[2].formatArray[2].type = "normal";
questionSource[2].formatArray[2].value="<br /><br />";

questionSource[2].interactionArray.setting = new Array();
questionSource[2].interactionArray.setting.maxMark = 1;
questionSource[2].interactionArray.setting.mediaArray = new Array();
questionSource[2].interactionArray.setting.mediaArray[0] = new Array();
questionSource[2].interactionArray.setting.mediaArray[0].value = "Koala.jpg";
questionSource[2].interactionArray.setting.mediaArray[0].type = "image";
questionSource[2].interactionArray.setting.mediaArray[0].location = "image";
questionSource[2].interactionArray.setting.mediaArray[0].mediaSetting = new Array();
questionSource[2].interactionArray.setting.mediaArray[0].mediaSetting.width = 575;
questionSource[2].interactionArray.setting.mediaArray[0].mediaSetting.height = 450;

questionSource[2].interactionArray.element = new Array();
questionSource[2].interactionArray.element[0] = new Array();
questionSource[2].interactionArray.element[0].name="zone1"
questionSource[2].interactionArray.element[0].id= 0;
questionSource[2].interactionArray.element[0].coords = "417,46,580,46,580,271,417,271";
questionSource[2].interactionArray.element[0].color = "F80000";
questionSource[2].interactionArray.element[0].desc = "Ceci est l'oreille gauche du koala.";

questionSource[2].answerArray[0] = new Array();
questionSource[2].answerArray[0].id = 0;
questionSource[2].answerArray[0].name = "zone1";
questionSource[2].answerArray[0].weight = 1;


/***********************************************/
/*                 MOT CROISÉ                  */
/***********************************************/

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
questionSource[3].answerArray[0].weight = 0.2;
               
questionSource[3].answerArray[1] = new Array();
questionSource[3].answerArray[1].weight = 0.2;
               
questionSource[3].answerArray[2] = new Array();
questionSource[3].answerArray[2].weight = 0.2;
               
questionSource[3].answerArray[3] = new Array();
questionSource[3].answerArray[3].weight = 0.2;
               
questionSource[3].answerArray[4] = new Array();
questionSource[3].answerArray[4].weight = 0.2;

questionSource[3].answerArray[5] = new Array();
questionSource[3].answerArray[5].weight = 0.2;

/***********************************************/
/*                CHOIX MULTIPLES              */
/***********************************************/


questionSource[4] = new Array();
questionSource[4].formatArray = new Array();
questionSource[4].interactionArray = new Array();
questionSource[4].answerArray = new Array();
               
questionSource[4].questionType = "multipleResponse";
questionSource[4].nbColumn = 2;
questionSource[4].weight = 1;
questionSource[4].maxAttempt = 1;
questionSource[4].questionSlide = true;
               
questionSource[4].formatArray[0] = new Array();
questionSource[4].formatArray[0].css = "banner";
questionSource[4].formatArray[0].type = "normal";
questionSource[4].formatArray[0].value = "<br /> Lisez la phrase suivante et choisissez la bonne réponse. &laquo; J'ai beaucoup épargné ces dernières années. Je pense avoir les moyens de m'acheter une maison.&raquo;.<br />Que signifie l'expression avoir les moyens, selon vous?";
    
questionSource[4].formatArray[1] = new Array();
questionSource[4].formatArray[1].type = "interaction";
               
questionSource[4].formatArray[2] = new Array();
questionSource[4].formatArray[2].type = "normal";
questionSource[4].formatArray[2].value="<br /><br />";
               
               
questionSource[4].interactionArray.setting = new Array();
               
questionSource[4].interactionArray.element = new Array();
questionSource[4].interactionArray.element[0] = new Array();

questionSource[4].interactionArray.element[0].id = 0;               
questionSource[4].interactionArray.element[0].value = "Je sais comment faire pour acheter une maison";
               
/*questionSource[4].interactionArray.element[0].mediaArray = new Array();
           
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
  */            
               
questionSource[4].interactionArray.element[1] = new Array();
questionSource[4].interactionArray.element[1].value = "J'ai les compétences pour acheter une maison.";
questionSource[4].interactionArray.element[1].id = 1;               
/*questionSource[4].interactionArray.element[1].mediaArray = new Array();
questionSource[4].interactionArray.element[1].mediaArray[0] = new Array();
questionSource[4].interactionArray.element[1].mediaArray[0].type="image";
questionSource[4].interactionArray.element[1].mediaArray[0].value="jonathan.png";
questionSource[4].interactionArray.element[1].mediaArray[0].location = "image";
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting = new Array();
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting.width = 150;
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting.height = 139;
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[4].interactionArray.element[1].mediaArray[0].mediaSetting.fancy = true;*/

questionSource[4].interactionArray.element[2] = new Array();
questionSource[4].interactionArray.element[2].value = "J'ai suffisamment d'argent pour acheter une maison.";
questionSource[4].interactionArray.element[2].id = 2;               
/*questionSource[4].interactionArray.element[2].mediaArray = new Array();
questionSource[4].interactionArray.element[2].mediaArray[0] = new Array();
questionSource[4].interactionArray.element[2].mediaArray[0].type="image";
questionSource[4].interactionArray.element[2].mediaArray[0].value="gilles.jpg";
questionSource[4].interactionArray.element[2].mediaArray[0].location = "image";
questionSource[4].interactionArray.element[2].mediaArray[0].mediaSetting = new Array();
questionSource[4].interactionArray.element[2].mediaArray[0].mediaSetting.width = 150;
questionSource[4].interactionArray.element[2].mediaArray[0].mediaSetting.height = 139;
questionSource[4].interactionArray.element[2].mediaArray[0].mediaSetting.widthRatio = 1;
questionSource[4].interactionArray.element[2].mediaArray[0].mediaSetting.heightRatio = 1;
questionSource[4].interactionArray.element[2].mediaArray[0].mediaSetting.fancy = true;*/
               
questionSource[4].answerArray[0] = new Array();
questionSource[4].answerArray[0].id = 0;
questionSource[4].answerArray[0].value = false;
questionSource[4].answerArray[0].weight = 0;
               
questionSource[4].answerArray[1] = new Array();
questionSource[4].answerArray[1].id = 1;
questionSource[4].answerArray[1].value = false;
questionSource[4].answerArray[1].weight = 1;

questionSource[4].answerArray[2] = new Array();
questionSource[4].answerArray[2].id = 2;
questionSource[4].answerArray[2].value = true;
questionSource[4].answerArray[2].weight = 0;


/********************************************************/
/*          séquence Drop down                  */
/********************************************************/

questionSource[5] = new Array();
questionSource[5].formatArray = new Array();
questionSource[5].interactionArray = new Array();
questionSource[5].answerArray = new Array();

questionSource[5].questionType = "sequenceListe";
questionSource[5].nbColumn = 1;
questionSource[5].weight = 1;
questionSource[5].maxAttempt = 1;
questionSource[5].questionSlide = true;

questionSource[5].formatArray[0] = new Array();
questionSource[5].formatArray[0].css = "banner";
questionSource[5].formatArray[0].type = "normal";
questionSource[5].formatArray[0].value = "<br />Veuillez remettre en ordre.";

questionSource[5].formatArray[1] = new Array();
questionSource[5].formatArray[1].type = "interaction";

questionSource[5].interactionArray.element = new Array();

questionSource[5].interactionArray.element[0] = new Array();
questionSource[5].interactionArray.element[0].value = "Lire le scénario.";
questionSource[5].interactionArray.element[0].id = 0;


questionSource[5].interactionArray.element[1] = new Array();
questionSource[5].interactionArray.element[1].value = "Lire les consignes et apprendre le vocabulaire.";
questionSource[5].interactionArray.element[1].id = 1;

questionSource[5].interactionArray.element[2] = new Array();
questionSource[5].interactionArray.element[2].value = "Vérifier votre compréhension du vocabulaire.";
questionSource[5].interactionArray.element[2].id = 2;

questionSource[5].interactionArray.element[3] = new Array();
questionSource[5].interactionArray.element[3].value = "Vérifier votre compréhension des consignes dans le dépliant.";
questionSource[5].interactionArray.element[3].id = 2;



questionSource[5].answerArray[0] = new Array();
questionSource[5].answerArray[0].value = 0;
questionSource[5].answerArray[0].weight = 0.25;
               
questionSource[5].answerArray[1] = new Array();
questionSource[5].answerArray[1].value = 1;
questionSource[5].answerArray[1].weight = 0.25;

questionSource[5].answerArray[2] = new Array();
questionSource[5].answerArray[2].value = 2;
questionSource[5].answerArray[2].weight = 0.25;

questionSource[5].answerArray[3] = new Array();
questionSource[5].answerArray[3].value = 3;
questionSource[5].answerArray[3].weight = 0.25;


/********************************************************/
/*          séquence Drag & Drop                        */
/********************************************************/

questionSource[6] = new Array();
questionSource[6].formatArray = new Array();
questionSource[6].interactionArray = new Array();
questionSource[6].answerArray = new Array();

questionSource[6].questionType = "sequenceDD";
questionSource[6].nbColumn = 1;
questionSource[6].weight = 1;
questionSource[6].maxAttempt = 1;
questionSource[6].questionSlide = true;

questionSource[6].formatArray[0] = new Array();
questionSource[6].formatArray[0].css = "banner";
questionSource[6].formatArray[0].type = "normal";
questionSource[6].formatArray[0].value = "<br />Voici les étapes pour l'obtention d'un permis de conduire. Veuillez mettre celles-ci en ordre.";

questionSource[6].formatArray[1] = new Array();
questionSource[6].formatArray[1].type = "interaction";

questionSource[6].interactionArray.element = new Array();

questionSource[6].interactionArray.element[0] = new Array();
questionSource[6].interactionArray.element[0].value = "Inscription au cours de conduite";


questionSource[6].interactionArray.element[1] = new Array();
questionSource[6].interactionArray.element[1].value = "Obtention du permis d'apprenti conducteur";

questionSource[6].interactionArray.element[2] = new Array();
questionSource[6].interactionArray.element[2].value = "Réussite de l'examen théorique";

questionSource[6].interactionArray.element[3] = new Array();
questionSource[6].interactionArray.element[3].value = "Réussite de l'examen pratique";

questionSource[6].interactionArray.element[4] = new Array();
questionSource[6].interactionArray.element[4].value = "Permis probatoire";



questionSource[6].answerArray[0] = new Array();
questionSource[6].answerArray[0].value = 0;
questionSource[6].answerArray[0].weight = 0.25;
               
questionSource[6].answerArray[1] = new Array();
questionSource[6].answerArray[1].value = 1;
questionSource[6].answerArray[1].weight = 0.25;

questionSource[6].answerArray[2] = new Array();
questionSource[6].answerArray[2].value = 2;
questionSource[6].answerArray[2].weight = 0.25;

questionSource[6].answerArray[3] = new Array();
questionSource[6].answerArray[3].value = 3;
questionSource[6].answerArray[3].weight = 0.25;

questionSource[6].answerArray[4] = new Array();
questionSource[6].answerArray[4].value = 3;
questionSource[6].answerArray[4].weight = 0.25;


/********************************************************/
/*          texte à trous Drop down                     */
/********************************************************/

questionSource[7] = new Array();
questionSource[7].formatArray = new Array();
questionSource[7].interactionArray = new Array();
questionSource[7].answerArray = new Array();

questionSource[7].questionType = "texteTrouDD";
questionSource[7].nbColumn = 1;
questionSource[7].weight = 1;
questionSource[7].maxAttempt = 1;
questionSource[7].questionSlide = true;

questionSource[7].formatArray[0] = new Array();
questionSource[7].formatArray[0].css = "banner";
questionSource[7].formatArray[0].type = "normal";
questionSource[7].formatArray[0].value = "<br />Veuillez répondre à la question suivante.";

questionSource[7].formatArray[1] = new Array();
questionSource[7].formatArray[1].type = "interaction";

questionSource[7].interactionArray.element = new Array();

questionSource[7].interactionArray.element[0] = new Array();
questionSource[7].interactionArray.element[0].type = "bp"; // bout de phrase
questionSource[7].interactionArray.element[0].value = "Nila veut partir en";

questionSource[7].interactionArray.element[1] = new Array();
questionSource[7].interactionArray.element[1].type = "trou";

questionSource[7].interactionArray.element[1].trou = new Array();
questionSource[7].interactionArray.element[1].trou[0] = "vacances";
questionSource[7].interactionArray.element[1].trou[1] = "train";
questionSource[7].interactionArray.element[1].trou[2] = "avion";

questionSource[7].interactionArray.element[2] = new Array();
questionSource[7].interactionArray.element[2].type = "bp";
questionSource[7].interactionArray.element[2].value = ". Son";

questionSource[7].interactionArray.element[3] = new Array();
questionSource[7].interactionArray.element[3].type = "trou";

questionSource[7].interactionArray.element[3].trou = new Array();
questionSource[7].interactionArray.element[3].trou[0] = "revenu";
questionSource[7].interactionArray.element[3].trou[1] = "budget";
questionSource[7].interactionArray.element[3].trou[2] = "apport";

questionSource[7].interactionArray.element[4] = new Array();
questionSource[7].interactionArray.element[4].type = "bp";
questionSource[7].interactionArray.element[4].value = "est de 500$.";


questionSource[7].answerArray[0] = new Array();
questionSource[7].answerArray[0].value = 0;
questionSource[7].answerArray[0].weight = .33;
               
questionSource[7].answerArray[1] = new Array();
questionSource[7].answerArray[1].value = 1;
questionSource[7].answerArray[1].weight = .33;

questionSource[7].answerArray[2] = new Array();
questionSource[7].answerArray[2].value = 1;
questionSource[7].answerArray[2].weight = .33;

/********************************************************/
/*          texte à trous Drag                          */
/********************************************************/

questionSource[8] = new Array();
questionSource[8].formatArray = new Array();
questionSource[8].interactionArray = new Array();
questionSource[8].answerArray = new Array();

questionSource[8].questionType = "texteTrouDrag";
questionSource[8].nbColumn = 1;
questionSource[8].weight = 1;
questionSource[8].maxAttempt = 1;
questionSource[8].questionSlide = true;

questionSource[8].formatArray[0] = new Array();
questionSource[8].formatArray[0].css = "banner";
questionSource[8].formatArray[0].type = "normal";
questionSource[8].formatArray[0].value = "<br />Veuillez répondre à la question suivante.";

questionSource[8].formatArray[1] = new Array();
questionSource[8].formatArray[1].type = "interaction";

questionSource[8].interactionArray.element = new Array();

questionSource[8].interactionArray.element[0] = new Array();
questionSource[8].interactionArray.element[0].type = "bp"; // bout de phrase
questionSource[8].interactionArray.element[0].value = "Chaque";

questionSource[8].interactionArray.element[1] = new Array();
questionSource[8].interactionArray.element[1].type = "trou";
questionSource[8].interactionArray.element[1].value = "mois";

questionSource[8].interactionArray.element[2] = new Array();
questionSource[8].interactionArray.element[2].type = "bp";
questionSource[8].interactionArray.element[2].value = "Paolo et sa femme ont beaucoup de ";

questionSource[8].interactionArray.element[3] = new Array();
questionSource[8].interactionArray.element[3].type = "trou";
questionSource[8].interactionArray.element[3].value = "dépenses";

questionSource[8].interactionArray.element[4] = new Array();
questionSource[8].interactionArray.element[4].type = "bp";
questionSource[8].interactionArray.element[4].value = ": les sorties au";

questionSource[8].interactionArray.element[5] = new Array();
questionSource[8].interactionArray.element[5].type = "trou";
questionSource[8].interactionArray.element[5].value = "cinéma";

questionSource[8].interactionArray.element[6] = new Array();
questionSource[8].interactionArray.element[6].type = "bp";
questionSource[8].interactionArray.element[6].value = ", les ";

questionSource[8].interactionArray.element[7] = new Array();
questionSource[8].interactionArray.element[7].type = "trou";
questionSource[8].interactionArray.element[7].value = "restaurants";

questionSource[8].interactionArray.element[8] = new Array();
questionSource[8].interactionArray.element[8].type = "bp";
questionSource[8].interactionArray.element[8].value = " et le magasinage.";



questionSource[8].answerArray[0] = new Array();
questionSource[8].answerArray[0].value = "mois";
questionSource[8].answerArray[0].weight = .25;
               
questionSource[8].answerArray[1] = new Array();
questionSource[8].answerArray[1].value = "dépenses";
questionSource[8].answerArray[1].weight = .25;

questionSource[8].answerArray[2] = new Array();
questionSource[8].answerArray[2].value = "cinéma";
questionSource[8].answerArray[2].weight = .25;

questionSource[8].answerArray[3] = new Array();
questionSource[8].answerArray[3].value = "restaurants";
questionSource[8].answerArray[3].weight = .25;


/***********************************************/
/*                 CONTENU                  */
/***********************************************/

questionSource[9] = new Array();
               
questionSource[9].playerIdArray = new Array();
questionSource[9].formatArray = new Array();
questionSource[9].interactionArray = new Array();
               
questionSource[9].answerArray = new Array();
               
questionSource[9].questionType = "content";
questionSource[9].nbColumn = 1;
questionSource[9].weight = 0;
questionSource[9].maxAttempt = 1;
questionSource[9].questionSlide = false;
               
questionSource[9].formatArray[0] = new Array();
questionSource[9].formatArray[0].css = "banner";
questionSource[9].formatArray[0].type = "normal";
questionSource[9].formatArray[0].value = "Diapositive de contenu <br/> <img src=\"image/cforp.jpg\" height =\"60\" /> ";
               
questionSource[9].formatArray[1] = new Array();
questionSource[9].formatArray[1].type = "normal";
questionSource[9].formatArray[1].value = "";
               
questionSource[9].formatArray[2] = new Array();
questionSource[9].formatArray[2].type = "normal";
questionSource[9].formatArray[2].value = "<ul><li> contenu html/css/javascript</li></ul> <a href='http://www.google.ca' target='blank' style='color:#0000FF'> Lien vers site web </a>";
questionSource[9].formatArray[2].css = "interactionDiv";

questionSource[9].formatArray[3] = new Array();
questionSource[9].formatArray[3].type = "media";
questionSource[9].formatArray[3].mediaArray = new Array();
questionSource[9].formatArray[3] = new Array();
questionSource[9].formatArray[3].type = "media";
questionSource[9].formatArray[3].mediaArray = new Array();

questionSource[9].formatArray[3].mediaArray[0] = new Array();
questionSource[9].formatArray[3].mediaArray[0].value = "Desert.jpg";
questionSource[9].formatArray[3].mediaArray[0].type = "image";
questionSource[9].formatArray[3].mediaArray[0].location = "image";
questionSource[9].formatArray[3].mediaArray[0].mediaSetting = new Array();
questionSource[9].formatArray[3].mediaArray[0].mediaSetting.width = 250;
questionSource[9].formatArray[3].mediaArray[0].mediaSetting.height = 200;
questionSource[9].formatArray[3].mediaArray[0].mediaSetting.fancy = true;

questionSource[9].formatArray[3].mediaArray[1] = new Array();
questionSource[9].formatArray[3].mediaArray[1].value = "TURKEY.mp3";
questionSource[9].formatArray[3].mediaArray[1].type = "audio";
questionSource[9].formatArray[3].mediaArray[1].location = "audio";
questionSource[9].formatArray[3].mediaArray[1].mediaSetting = new Array();
questionSource[9].formatArray[3].mediaArray[1].mediaSetting.autoStart = false;
questionSource[9].formatArray[3].mediaArray[1].mediaSetting.loop = false;

questionSource[9].formatArray[4] = new Array();
questionSource[9].formatArray[4].type = "normal";
questionSource[9].formatArray[4].value="<br /><br />";

