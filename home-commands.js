var util = require( 'util' );
var lifx = require( 'lifx' );
var lx = lifx.init();

var bulbs = [];

lx.on( 'bulb', function( bulb ) {
	bulbs.push( bulb );

	if ( bulbs.length > 1 ) {
		lifxUtil.processCommand();
	}
});

var lifxUtil = {};

lifxUtil.processCommand = function() {
	var command = process.argv[2];

	switch ( command ) {
		case 'off':
			lx.lightsOff();
			break;
		case 'on':
			lx.lightsOn();
			break;
	}//end switch

	process.exit();
};
