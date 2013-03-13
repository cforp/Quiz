// JavaScript Document

// pour les sons over correct ... on ne veut pas que le player prenne de place
var soundsConfig = {
	'useFullscreen' : 'false',
	'allowFullscreen' : 'false',
	'autostart': 'false',
	'modes': [
		{
			type: 'flash', src: 'lib/jwplayer/player.swf',
				config: {
					'height' : 0,
					'width' : 200
				}
		},
		{
		  	type: 'html5',
			  	config: {
					'height' : 0,
					'width' : 200
			 	}
		}
	]

};
var jwconfigAudio = {
'useFullscreen' : 'false',
'allowFullscreen' : 'false',
'autostart': 'false',
'modes': [
	{
		type: 'flash', src: 'lib/jwplayer/player.swf',
			config: {
				'height' : 24,
				'width' : 200
			}
	},
	{
	  	type: 'html5',
		  	config: {
				'height' : 24,
				'width' : 200
		 	}
	}
]
};

var jwconfigVideo = {
'allowFullscreen': 'true',
'useFullscreen' : 'true',
'autostart' : 'false',
'modes': [
	{type: 'flash', src: 'lib/jwplayer/player.swf',
		config: {
			'height' : 200,
			'width' : 200
		}
	},
	{type: 'html5',
		config: {
			'height' : 200,
			'width' : 200
		}
	}
]
};