var findAPITries = 0;
var isFinished; //If the communication with the API is terminated 
var interactionTimeArray = new Array(); //start time of interactions

//the API variable, should only be directly called from this file
var theAPI = getAPI();
var useAPI = checkAPI();
alert(useAPI);
//var theAPI;
function findAPI(win)
{
   // Check to see if the window (win) contains the API
   // if the window (win) does not contain the API and
   // the window (win) has a parent window and the parent window
   // is not the same as the window (win)
   while ( (win.API == null) && (win.parent != null) && (win.parent != win) )
   {
      // increment the number of findAPITries
      findAPITries++;
 
      // Note: 7 is an arbitrary number, but should be more than sufficient
      if (findAPITries > 7)
      {
         //alert("Error finding API -- too deeply nested.");
         return null;
      }
 
      // set the variable that represents the window being
      // being searched to be the parent of the current window
      // then search for the API again
      win = win.parent;
   }
   return win.API;
}
 
function getAPI()
{
   // start by looking for the API in the current window
   var theAPI = findAPI(window);
 
   // if the API is null (could not be found in the current window)
   // and the current window has an opener window
   if ( (theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined") )
   {
      // try to find the API in the current window’s opener
      theAPI = findAPI(window.opener);
   }
   // if the API has not been found
   
   if (theAPI == null)
   {
      // Alert the user that the API Adapter could not be found
      alert("Impossible de communiquer avec le LMS, le progrès de cette tentative ne sera pas sauvegarder.");
   }
   return theAPI;
}

var SCORM_BROWSE = "browse";
var SCORM_NORMAL = "normal";
var SCORM_REVIEW = "review";

var SCORM_NEW = "ab-initio";
var SCORM_RESUME = "resume";

function checkAPI(){
	return(theAPI!=null);
}

//API signatures with a couple of validations to deal with more than one exiting scenarios
function initialize(){
	if(theAPI.LMSInitialize("")){
		isFinished = false;
	}
	return isFinished;
}

function finish(){
	if(!isFinished && theAPI.LMSFinish("")){
		isFinished = true;
	}
	return isFinished;
}

function commit(){
	return theAPI.LMSCommit("");
}

//getters////////////////////////////////////////////////////////////////
function getLessonLocation(){
	return theAPI.LMSGetValue("cmi.core.lesson_location");
}

function getLessonStatus(){
	return theAPI.LMSGetValue("cmi.core.lesson_status");
}

function getEntry(){
	return theAPI.LMSGetValue("cmi.core.entry");
}

function getScoreRaw(){
	return theAPI.LMSGetValue("cmi.core.score.raw");
}

function getScoreMin(){
	return theAPI.LMSGetValue("cmi.core.score.min");
}

function getScoreMax(){
	return theAPI.LMSGetValue("cmi.core.score.max");
}

function getLessonMode(){
	return theAPI.LMSGetValue("cmi.core.lesson_mode");
}

function getSuspendData(){
	return theAPI.LMSGetValue("cmi.suspend_data");
}

function getLaunchData(){
	return theAPI.LMSGetValue("cmi.core.launch_data");
}

function getInteractionsCount(){
	return theAPI.LMSGetValue("cmi.interactions._count");
}

function getInteractionsCorrectResponsesCount(n){
	return theAPI.LMSGetValue("cmi.interactions." + n + ".correct_responses._count");
}

function getIsFirstTime(){
	return (getEntry()== "ab-initio");
}

//setters////////////////////////////////////////////////////////////////
function setLessonLocation(lessonLocation){
	theAPI.LMSSetValue("cmi.core.lesson_location", lessonLocation);
}

function setLessonStatus(lessonStatus){
	theAPI.LMSSetValue("cmi.core.lesson_status", lessonStatus);
}

function setScoreRaw(scoreRaw){
	theAPI.LMSSetValue("cmi.core.score.raw", scoreRaw);
}

function setScoreMin(scoreMin){
	theAPI.LMSSetValue("cmi.core.score.min", scoreMin);
}

function setScoreMax(scoreMax){
	theAPI.LMSSetValue("cmi.core.score.max", scoreMax);
}

function setExit(exit){
	theAPI.LMSSetValue("cmi.core.exit", exit);
}

function setSessionTime(sessionTime){
	theAPI.LMSSetValue("cmi.core.session_time", formatTime(sessionTime));
}

function setSuspendData(suspendData){
	theAPI.LMSSetValue("cmi.suspend_data", suspendData);
}

function setInteractionsId(n,id){
	theAPI.LMSSetValue("cmi.interactions."+ n +".id",id);
}

function setInteractionsTime(n){
	var time = new Date();
	interactionTimeArray[n] = time;
	theAPI.LMSSetValue("cmi.interactions."+ n +".time", formatTime(time));
}

function setInteractionsType(n, type){
	theAPI.LMSSetValue("cmi.interactions."+ n +".type", type);
}

function setInteractionsWeighting(n,weight){
	theAPI.LMSSetValue("cmi.interactions."+ n +".weighting", weight);
}

function setInteractionsResponsePattern(n, responsePattern){
	theAPI.LMSSetValue("cmi.interactions."+ n +".correct_responses.0.pattern", responsePattern); //here each quiz question is an interaction, so only 1 response per interaction
}

function setInteractionsStudentResponse(n,studentResponse){
	theAPI.LMSSetValue("cmi.interactions."+ n +".student_response", studentResponse);
}

function setInteractionsResult(n,result){
	theAPI.LMSSetValue("cmi.interactions."+ n +".result", result);
}

function setInteractionsLatency(n){
	var time = new Date();
	
	var diffSecs = time.getSeconds() - interactionTimeArray[n].getSeconds();
	var diffMins = time.getMinutes() - interactionTimeArray[n].getMinutes();
	var diffHours = time.getHours() - interactionTimeArray[n].getHours();
	
	time.setHours(diffHours, diffMins, diffSecs);
	theAPI.LMSSetValue("cmi.interactions."+ n +".latency", formatTime(time));
}

function setInteractionsObjectiveId(n, id){
	theAPI.LMSSetValue("cmi.interactions."+ n +".objectives.0.id", id); // here, one objective per interaction
}
