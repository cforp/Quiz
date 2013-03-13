function initScorm(){
	this.pushToLMS = false;
	this.pullFromLMS = false;
	this.suspendData = {};
	this.lesson_location = 0;
	this.SCORM = pipwerks.SCORM;
	var review = false;
	
	$(window).unload(function(){
		this.exit();
	});
	
	this.SCORM.init();
	
	if(this.SCORM.API.isFound){
		
		//console.log("API VERSION: " + this.SCORM.version);

		this.lessonMode = this.SCORM.get(this.SCORM.convert("cmi.core.lesson_mode"));
		this.entry = this.SCORM.get(this.SCORM.convert("cmi.core.entry"));
		//console.log("lessonMode: " + this.lessonMode + ", entry: " + this.entry)
		
		//1.2
		if(this.SCORM.version ==="1.2"){
			this.lessonStatus = this.SCORM.get("cmi.core.lesson_status");
			//console.log("lessonStatus: " + this.lessonStatus);
		}		
		//2004
		else if(this.SCORM.version ==="2004"){
			this.success_status = this.SCORM.get("cmi.success_status");
			this.completion_status = this.SCORM.get("cmi.completion_status");
			//console.log("success_status: " + this.success_status + ", completion_status :" + this.completion_status);
		}

		//Browse
		if(this.lessonMode == SCORM_BROWSE){
			this.pushToLMS = false;
			this.pullFromLMS = false;
			this.SCORM.set(this.SCORM.convert("cmi.core.exit"),"logout");
			this.SCORM.handleExitMode = false;
			this.SCORM.save();
			this.SCORM.quit();
			//console.log("browse");
		}
		
		//Review
		else{
			if(this.lessonMode == SCORM_REVIEW){
				review = true;
			}
			else{
				//1.2
				if(this.SCORM.version === "1.2"){
					if(this.lessonStatus == "completed" || this.lessonStatus == "passed" || this.lessonStatus == "failed"){
						review = true;
					}else{
						this.SCORM.set("cmi.core.lesson_status","incomplete");
						this.SCORM.save();
					}
				}		
				//2004
				else if(this.SCORM.version ==="2004"){
					if(this.completion_status == "completed"){
						//alert("review " + this.success_status + " " + this.completion_status);
						review = true;
					}
					else{
						this.SCORM.set("cmi.completion_status", "incomplete");
						this.SCORM.save();
					}
				}
			}
		}	
		if(review){
				this.pushToLMS = false;
				this.pullFromLMS = true;
				this.suspendData =  $.parseJSON(this.SCORM.get("cmi.suspend_data").replace(/'/gi,"\""));
				this.SCORM.set(this.SCORM.convert("cmi.core.exit"),"logout");
				this.SCORM.handleExitMode = false;
				this.SCORM.save();
				this.SCORM.quit();				
		}		
		
		//Normal - New or Resume
		else if(this.lessonMode == SCORM_NORMAL || this.lessonMode == SCORM_NONE){
			this.pushToLMS = true;
			this.pullFromLMS = true;
			
			//1.2
			if(this.SCORM.version === "1.2"){
				this.SCORM.set(this.SCORM.convert("cmi.core.lesson_status"),"imcomplete");
			}
			//2004
			else if(this.SCORM.version ==="2004"){
				this.SCORM.set("cmi.completion_status", "incomplete");
			}
			this.SCORM.set(this.SCORM.convert("cmi.core.exit"),"suspend");
			this.SCORM.save();
			//console.log("normal");
			if(this.entry == SCORM_RESUME || this.entry != SCORM_NEW){
				//console.log("resume");
				this.suspendData =  $.parseJSON(this.SCORM.get("cmi.suspend_data").replace(/'/gi,"\""));
				this.lesson_location = parseInt(this.SCORM.get(this.SCORM.convert("cmi.core.lesson_location")));
			}
		}
	}
	
	//SCROM API not found
	else{
		//console.log("unknown SCORM scenario")
	}
	
	//verify lesson location and current slide
	if(isNaN(this.lesson_location)){
		this.lesson_location = 0;
		this.currentSlide = -1;
		this.previousSlideID = -1;
	}
	else{
		this.currentSlide = this.lesson_location - 1;
		this.previousSlideID = this.lesson_location -1;
	}
	
	//console.log("lesson_location: " + this.lesson_location + ", currentSlide: " + this.currentSlide);
	
};

function setQuiz(){
	this.startDate = new Date();
	
	this.quizComplete = true;
	this.quizReviewed = false;
	
	this.slideArray = new Array();
	
	// pour le branching, retenir le parcours
	this.quizNavigation = new Array();	
	this.pointeurNavigation = 0;
	
	this.maxScore = 0;
	this.maxSlide = this.questionSource.length;
	this.currentSlide = -1;
	this.previousSlideID = -1;
	this.quizScore = 0;
	
	this.interactionNum = 0;
	
	//setup for result "Slide"
	this.lastSlide = new Array();
	this.lastSlide.generated = false;
	this.lastSlide.passed;
	this.lastSlide.div = document.createElement("div");
	this.lastSlide.div.id = "lastSlideDiv";
	$(this.lastSlide.div).css("display","none");
	
	var loadUserQuiz = false;
	
	var questionContainer = document.getElementById("question_container");
	
	for(var i=0; i<this.questionSource.length; i++){
		var slideSuspendData = {};
	
		if(getObjectLength(this.suspendData)>0 && pullFromLMS && (this.suspendData[i] != undefined && this.suspendData[i] != null) ){
			slideSuspendData = this.suspendData[i];
		}
		else{
			slideSuspendData = null;
		}
		
		this.slideArray[i] = new Slide(this.questionSource[i], i, slideSuspendData);
		
		if(this.questionSource[i].questionSlide){
			this.maxScore += this.questionSource[i].weight;
		}
			
		
		questionContainer.appendChild(this.slideArray[i].slideDiv);
		
		this.slideArray[i].loadMedia();
		
		if(questionSource[i].questionType =="crossword"){
			window[questionSource[i].questionType].init(this.slideArray[i].interaction.component[0].componentParam.crossword);
		}	
		
		
		if(this.slideArray[i].slideSuspendData != null ){
			if(this.slideArray[i].input.questionSlide){		
				window[this.slideArray[i].input.questionType].loadUserAnswer(this.slideArray[i].interaction, this.slideArray[i].slideSuspendData.resume);
				//suspend = new Array();
				//suspend[0] = 0;
				window[this.slideArray[i].input.questionType].loadUserAnswer(this.slideArray[i].interaction, suspend);
				window[this.slideArray[i].input.questionType].disableQuestion(this.slideArray[i].interaction);
				window[this.slideArray[i].input.questionType].displayAnswer(this.slideArray[i].interaction, this.slideArray[i].input.answerArray);
				loadUserQuiz = true;
			}
		}
		
		if(!this.slideArray[i].completed){
			this.quizComplete = false;
		}
	}
	if(loadUserQuiz){		
		this.quizReviewed = true;		
	}	
	questionContainer.appendChild(lastSlide.div);
};

function startQuiz(){	
	if(slideArray.length > 0){			
		this.goToSlide(this.lesson_location);
	}
};

function goToSlide(to){
	
	if(this.slideArray[this.currentSlide] != undefined){
		this.slideArray[this.currentSlide].stopAllSlidePlayer();		
	}	
	this.setSessionTime();
	//make sure the slide we go to exists
	if(this.slideArray[to] != null && this.slideArray[to] != undefined){
	
		if(this.currentSlide != -1){
			$(this.slideArray[this.currentSlide].slideDiv).css("display","none");
		}
		else if(this.lastSlide.generated){
						
			$(this.lastSlide.div).css('display','none');
		}
		
		//clear buttons
		$(document.getElementById("question_prev")).css("display","none");
		$(document.getElementById("question_next")).css("display","none");
		$(document.getElementById("question_validate")).css("display","none");
		$(document.getElementById("review_quiz")).css("display","none");		
		$(document.getElementById("question_status_img")).css("display","none");
		$(document.getElementById("question_status_text")).html("");
		
		//back
		if(to != 0 && this.currentSlide != -1){
			if(!this.slideArray[this.currentSlide].questionSlide || this.lastSlide.generated || this.lessonMode == SCORM_BROWSE || this.lessonMode == SCORM_REVIEW){
				$(document.getElementById("question_prev")).css("display","inline");
			}
		}		
		
		//validate
		if(!this.slideArray[to].completed&& this.slideArray[to].canValidate && this.lessonMode != SCORM_BROWSE && this.lessonMode != SCORM_REVIEW){
			$(document.getElementById("question_validate")).css("display","inline");
			
			//scorm interaction time
			if(this.pushToLMS){
				var slideId = this.slideArray[to].slideId;
				var newInteractionDate = new Date();
				var formatTime = this.formatTime(newInteractionDate);
				this.slideArray[to].availableTime = newInteractionDate;
				switch(this.SCORM.version){
					case "1.2" : this.SCORM.set("cmi.interactions." + slideId + ".time", formatTime); this.SCORM.save(); break;
					case "2004": this.SCORM.set("cmi.interactions." + slideId + ".timestamp", formatTime); this.SCORM.save(); break;
				}
			}
		}
		
		//next
		if(this.slideArray[to].completed || this.lessonMode == SCORM_BROWSE || this.lessonMode == SCORM_REVIEW){
			$(document.getElementById("question_next")).css("display","inline");
		}
		
		//status
		if(this.slideArray[to].completed && this.slideArray[to].questionSlide){
			if(this.slideArray[to].passed){
				$(document.getElementById("question_status_img")).attr("src","image/passed.png");				
				$(document.getElementById("question_status_text")).html("- BONNE RÉPONSE -");
				$(document.getElementById("question_status_text")).css("color","#12EE30");
			}
			else{
				$(document.getElementById("question_status_img")).attr("src","image/notPassed.png");				
				$(document.getElementById("question_status_text")).html("- MAUVAISE RÉPONSE -");
				$(document.getElementById("question_status_text")).css("color","#E4353A");
			}
			$(document.getElementById("question_status_img")).css("display","inline");
			
		}
		else{
			$(document.getElementById("question_status_img")).css("display","none");
			$(document.getElementById("question_status_text")).html("");			
		}		
		$(this.slideArray[to].slideDiv).fadeTo("fast", 0,function(){
				$(this).css({opacity:1});
			});		
		//$(this.slideArray[to].slideDiv).css({opacity:1});		
				
		//$(this.slideArray[to].slideDiv).animate({width:'toggle'},'slow');
		$(this.slideArray[to].slideDiv).css("display","block");
		
		this.previousSlideID = this.currentSlide;		
		this.currentSlide = to;
		
		
		if(questionSource[to].questionType =="sequenceDD" || questionSource[to].questionType =="association" || questionSource[to].questionType =="texteTrouDrag" ){
			window[questionSource[to].questionType].init(this.slideArray[to].interaction);
		}
		
		if(this.pushToLMS){
			this.SCORM.set(this.SCORM.convert("cmi.core.lesson_location"),to.toString());
			this.SCORM.save();
		}
		
	}
	else{
		//generate slide
		
		if(to == this.slideArray.length){//result "slide"
			$(this.slideArray[this.currentSlide].slideDiv).css("display","none");
			
			//generate the result slide
			if(!this.lastSlide.generated){
				generateLastSlideDiv();
				this.lastSlide.generated = true;
				if(this.pushToLMS){
					this.SCORM.set(this.SCORM.convert("cmi.core.score.min"), "0"); //change to quizSource Min
					this.SCORM.set(this.SCORM.convert("cmi.core.score.max"), "100"); //change to quizSource Max
					this.SCORM.set(this.SCORM.convert("cmi.core.score.raw"), (this.quizScore / this.maxScore * 100).toFixed(2).toString());
					var resultStatus;
					if(this.lastSlide.passed){
						resultStatus = "passed";
					}
					else{
						resultStatus = "failed";
					}
					switch(this.SCORM.version){
						case "1.2" : this.SCORM.set("cmi.core.lesson_status", resultStatus); break;
						case "2004": 
							this.SCORM.set("cmi.completion_status", "completed");
							this.SCORM.set("cmi.success_status", resultStatus);
							break;
					}
					this.SCORM.save();
					this.exit();
				}
			}
			
			$(document.getElementById("question_validate")).css("display","none");
			$(document.getElementById("question_next")).css("display","none");
			$(document.getElementById("question_prev")).css("display","none");
			$(document.getElementById("review_quiz")).css("display","inline");
			$(document.getElementById("question_status_img")).css("display","none");			
			$(document.getElementById("question_status_text")).html("");
			
						
			//$(this.lastSlide.div).css({width:'toggle'},'slow');
			//$(this.lastSlide.div).animate({width:'toggle'},'slow');
			$(this.lastSlide.div).fadeTo("fast", 0,function(){
				$(this).css({opacity:1});
			});			
			
			
			$(this.lastSlide.div).css("display","block");
			
			this.previousSlideID = this.currentSlide;
			this.currentSlide = to;			
			
			if(this.pushToLMS){
				this.SCORM.set(this.SCORM.convert("cmi.core.lesson_location"),to.toString());
				this.SCORM.save();
			}
		}
	}
};



function nextSlide(nextSlideID){	
	var nextSlide;	
	
	// vérifier si on a déjà créé le parcours	
	
	nextSlide = nextSlideID;
		
	$(this.slideArray[this.currentSlide].slideDiv).animate({width:'toggle'},'slow', function(){				
		goToSlide(nextSlide);
	});
	
};

function previousSlide(previousSlideID){	
	$(this.slideArray[this.currentSlide].slideDiv).animate({width:'toggle'},'slow', function(){
		goToSlide(previousSlideID);
	});	
	
};


function validateAnswer(){
	var result = this.slideArray[this.currentSlide].checkUserAnswer();
	//notAnswered
	if(result.success == undefined){
		playQuizSoundNotAnswered();
		$.alerts.okButton = this.quizSource.buttonNotAnsweredFeedback;
		jAlert(result.feedback, this.quizSource.titleNotAnsweredFeedback,function(r){
			//nothing to do with scorm
		});
	}
	else{	
		if(this.slideArray[this.currentSlide].canValidate && result.success == false){//peut continuer
			playQuizSoundIncorrect();
			
			$.alerts.okButton = this.quizSource.buttonIncorrectAnswerFeedback;
			jAlert(result.feedback, this.quizSource.titleIncorrectAnswerFeedback,function(r){
				//nothing to do	
			});
		}	
		else{//peut pas continuer

			if(this.pushToLMS){
				//slideId = this.slideArray[this.currentSlide].slideId;
				this.SCORM.set("cmi.interactions." + this.interactionNum + ".objectives.0.id", "question_" + this.slideArray[this.currentSlide].slideId);
				this.SCORM.set("cmi.interactions." + this.interactionNum + ".id", "question_"+this.slideArray[this.currentSlide].slideId +"_" + window[this.slideArray[this.currentSlide].input.questionType].returnRealType());
				this.SCORM.set("cmi.interactions." + this.interactionNum + ".type", window[this.slideArray[this.currentSlide].input.questionType].returnType());
				if(result.success != true){
					this.SCORM.set("cmi.interactions." + this.interactionNum + ".result", this.SCORM.convert("wrong"));
				}
				else{
					this.SCORM.set("cmi.interactions." + this.interactionNum + ".result", "correct");
				}
				this.SCORM.set("cmi.interactions." + this.interactionNum + ".weighting", this.slideArray[this.currentSlide].input.weight);
				this.SCORM.set("cmi.interactions." + this.interactionNum + ".correct_responses.0.pattern", this.slideArray[this.currentSlide].getInteractionsResponsePattern());
				this.SCORM.set("cmi.interactions." + this.interactionNum + "." + this.SCORM.convert("student_response"), this.slideArray[this.currentSlide].getInteractionsStudentResponse());
				
				//set interaction latency
				var newInteractionDate = new Date();
				if(!isNaN(this.slideArray[this.currentSlide].availableTime.getSeconds()) && !isNaN(this.slideArray[this.currentSlide].availableTime.getMinutes()) && 
				!isNaN(this.slideArray[this.currentSlide].availableTime.getHours()) ){
					newInteractionDate.setSeconds(newInteractionDate.getSeconds() - this.slideArray[this.currentSlide].availableTime.getSeconds());
					newInteractionDate.setMinutes(newInteractionDate.getMinutes() - this.slideArray[this.currentSlide].availableTime.getMinutes());
					newInteractionDate.setHours(newInteractionDate.getHours() - this.slideArray[this.currentSlide].availableTime.getHours());
					
					var formatTime = this.formatTime(newInteractionDate);
					this.SCORM.set("cmi.interactions."+this.interactionNum+".latency",formatTime);
				}
				
				this.updateSuspendData();
				this.SCORM.save();				
			}
			this.interactionNum++;

			var nextSlideID = this.currentSlide+1;
			
			if(result.success != true){
				playQuizSoundIncorrect();
				$.alerts.okButton = this.quizSource.buttonCorrectAnswerFeedback;
				jAlert(result.feedback, this.quizSource.titleIncorrectAnswerFeedback,function(r){
					
					
					//// check branching ///////					
					// aller chercher l'ID de  la prochaine slide du branching à faire
					if(this.slideArray[this.currentSlide].input.branching){
						nextSlideID = this.slideArray[this.currentSlide].input.nextSlideIDWA;
					}	
					quizNavigation[pointeurNavigation] = new Array();
					quizNavigation[pointeurNavigation].previousSlide = previousSlideID;
					quizNavigation[pointeurNavigation].nextSlide = nextSlideID;
					pointeurNavigation++;					
					
					this.nextSlide(nextSlideID);
					resizeMyScorm();	
					
				});
			}
			else{
				playQuizSoundCorrect();
				$.alerts.okButton = this.quizSource.buttonCorrectAnswerFeedback;
				jAlert(result.feedback, this.quizSource.titleCorrectAnswerFeedback,function(r){
					//// check branching ///////					
					// aller chercher l'ID de  la prochaine slide du branching à faire
					if(this.slideArray[this.currentSlide].input.branching){
						nextSlideID = this.slideArray[this.currentSlide].input.nextSlideIDGA;
					}	
					quizNavigation[pointeurNavigation] = new Array();
					quizNavigation[pointeurNavigation].previousSlide = previousSlideID;
					quizNavigation[pointeurNavigation].nextSlide = nextSlideID;
					pointeurNavigation++;					
					
					this.nextSlide(nextSlideID);
					resizeMyScorm();	
				});
			}	
			
		}
	}
};

function reviewQuiz(){
	
	if(this.lessonMode != SCORM_BROWSE && !this.quizReviewed){		
		this.quizReviewed = true;
		for(var i=0; i< this.slideArray.length; i++){
			this.slideArray[i].displayAnswer();
		}
	}
	
	$(document.getElementById("review_quiz")).css("display","none");	
	this.currentSlide = -1;
	
	// pour parcourir le tableau de navigation quizNavigation il faut remettre le pointeur à 0
		pointeurNavigation = 0;
			
	goToSlide(0);		
	
	
};

function generateLastSlideDiv(){
	calculateQuizScore();
	var space = document.createTextNode("&nbsp;");
			
	var bannerHaut = document.createElement('div');			
	bannerHaut.className = "bannerHaut";
			
	var bannerMilieu = document.createElement('div');
	bannerMilieu.className = "bannerMilieu";
			
	var bannerText = document.createElement('div');
	bannerText.className = "bannerText";
	bannerText.innerHTML = "<h1>Résultats</h1";
	
	bannerMilieu.appendChild(bannerText);
						
	var bannerBas = document.createElement('div');
	bannerBas.className = "bannerBas";			
			
	var divBanner = document.createElement('div');
	divBanner.className = "divBanner";
	divBanner.appendChild(bannerHaut);
	divBanner.appendChild(bannerMilieu);
	divBanner.appendChild(bannerBas);
	
	// title.style.textAlign = "center"; //not working
	var result = document.createElement("h2");
	result.style.textAlign ="center";
	var review = document.createElement("p");
	review.style.textAlign = "center";
	
	if(this.lessonMode != SCORM_BROWSE){
		review.innerHTML = "Cliquez sur le bouton <strong>Revoir le quiz</strong> pour visualiser vos résultats.";
		if(passedQuiz()){
			this.lastSlide.passed = true;
			result.innerHTML = "<img src=\"image/passed.png\" style=\"width:45px; height:45px;\"/>";
			result.innerHTML += "Vous avez réussi!";
		}
		else{
			this.lastSlide.passed = false;
			result.innerHTML = "<img src=\"image/notPassed.png\" style=\"width:45px; height:45px;\"/>";
			result.innerHTML += "Vous n'avez pas réussi.";
		}
	}
	else{
		review.innerHTML = "Cliquez sur le bouton <strong>Revoir le quiz</strong> pour revoir le quiz.";
	}
	
	this.lastSlide.div.appendChild(divBanner);
	this.lastSlide.div.appendChild(result);
	var p = document.createElement("p");
	p.innerHTML="&nbsp;";
	this.lastSlide.div.appendChild(p);
	this.lastSlide.div.appendChild(review);
	
	var p = document.createElement("p");
	p.innerHTML="&nbsp;";
	this.lastSlide.div.appendChild(p);var p = document.createElement("p");
	p.innerHTML="&nbsp;";
	this.lastSlide.div.appendChild(p);var p = document.createElement("p");
	p.innerHTML="&nbsp;";
	this.lastSlide.div.appendChild(p);
};

function calculateQuizScore(){
	for(var i=0; i < this.slideArray.length; i++){
		this.quizScore += this.slideArray[i].slideScore;
	}
};

function passedQuiz(){
	return (this.quizScore / this.maxScore >= this.quizSource.passingScore);
};

function updateSuspendData(){
	this.suspendData = {};
	for(var i=0; i<this.maxSlide; i++){
		this.suspendData[i] = this.slideArray[i].slideSuspendData;
	}
	
	var newSuspendData = JSON.stringify(this.suspendData).toString().replace(/"/gi, "'");
	if(this.pushToLMS){
		this.SCORM.set("cmi.suspend_data", newSuspendData);
	}
};

function setSessionTime() {
	if(this.pushToLMS){
		
		var newSessionDate = new Date();
		newSessionDate.setSeconds(/*sessionDate.getSeconds() + */(newSessionDate.getSeconds() - startDate.getSeconds()));
		newSessionDate.setMinutes(/*sessionDate.getMinutes() +*/(newSessionDate.getMinutes() - startDate.getMinutes()));
		newSessionDate.setHours(/*sessionDate.getHours() + */(newSessionDate.getHours() - startDate.getHours()));
		
		var newSessionTime = this.formatTime(newSessionDate);
		
		this.SCORM.set(this.SCORM.convert("cmi.core.session_time"),newSessionTime);
		this.SCORM.save();
	}
}; 

function exit(){
	this.setSessionTime();
	if(this.pushToLMS){
		this.SCORM.save();
		this.SCORM.quit();
	}
}

$(document).ready(function(){
initScorm();
setQuiz();
startQuiz();
});
