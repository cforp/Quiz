slideUtils = {};

slideUtils.formatMedia = function(mediaArray, customMediaId, questionId){
	var optionMedia = document.createElement("div");
	optionMedia.className = "";

	for (var i=0; i<mediaArray.length; i++){
		var mediaElem = document.createElement("div");
		$(mediaElem).css("position","relative");
		$(mediaElem).css("float","left");
		mediaElem.innerHTML += this.getHTML(mediaArray[i].type, mediaArray[i].value, customMediaId, questionId, mediaArray[i].thumb);
		optionMedia.appendChild(mediaElem);
	}
	return optionMedia;
};

slideUtils.getHTML = function(type,value, customMediaId, questionId, thumb){
	var html = "";
	var id = this.addCustomMedia(type,value,customMediaId,questionId);
	
	switch(type){
		case "image":
			html ="<a rel=\"fancybox\" href=\"image/"+value+"\"><img id=\"" + id +"\" class = \"mediaImage\" src=\"image/"+value+"\" style=\"height:"+this.maxImgHeightPreview+"px;\" /></a>";
		break;
		
		case "video":
			//html = "<div class = \"mediaVideo\" id=\""+id+"\">Chargement en cours ...</div>";
			html = "<a rel=\"fancybox\" href=\"video/"+value+"\"><img id=\"" + id +"\" class = \"mediaVideo\" src=\"image/"+thumb+"\" style=\"height:"+this.maxImgHeightPreview+"px;\" /></a>";
		break;
		
		case "audio":
			html = "<div class = \"mediaAudio\" id=\""+id+"\">Chargement en cours ...</div>";
		break;
		
		default: 
			html = "<div id=\"" + id +"\" class = \"mediaDefault\" >" + value + "</div>";
		break;
	}
	return html;
};

slideUtils.addCustomMedia = function(type,value,customMediaId,questionId)
{
	var length = customMediaId.length;
	var id = "customMedia"+length+questionId+type;
	
	customMediaId[length] = new Array();
	customMediaId[length].value = value;
	customMediaId[length].type = type;
	customMediaId[length].id = id;
	return id;
};