this.quizSoundArray = new Array();

$(document).ready(function(){

	config = jQuery.extend(true,{},soundsConfig);
	config['file'] = 'sound/correct.mp3';
	jwplayer('quizSound_correct').setup(config);
    
    config = jQuery.extend(true,{},soundsConfig);
	config['file'] = 'sound/incorrect.mp3';
    jwplayer('quizSound_incorrect').setup(config);
    
    config = jQuery.extend(true,{},soundsConfig);
	config['file'] = 'sound/hover.mp3';	
    jwplayer('quizSound_hover').setup(config);
    
    config = jQuery.extend(true,{},soundsConfig);
	config['file'] = 'sound/select.mp3';
    jwplayer('quizSound_select').setup(config);

	config = jQuery.extend(true,{},soundsConfig);
	config['file'] = 'sound/noResponse.mp3';
    jwplayer('quizSound_notAnswered').setup(config);
            
    $('#quiz_sounds').css("visibility","hidden");

});


function playQuizSoundCorrect(){
	jwplayer('quizSound_correct').stop();
	jwplayer('quizSound_correct').play();
}

function playQuizSoundIncorrect(){
	jwplayer('quizSound_incorrect').stop();
	jwplayer('quizSound_incorrect').play();
}

function playQuizSoundHover(){	
	jwplayer('quizSound_hover').stop();
	jwplayer('quizSound_hover').play();
}

function playQuizSoundSelect(){
	jwplayer('quizSound_select').stop();
	jwplayer('quizSound_select').play();
}
function playQuizSoundNotAnswered(){
	jwplayer('quizSound_notAnswered').stop();
	jwplayer('quizSound_notAnswered').play();
}

