var TopLoader = function (options) {
	// fill options
	var opts = options || {};
	opts.bg = opts.bg || '#acf';
	opts.glow = '0 0 3px ' + (opts.glow || '#acf');
	

	createStyle = function (cssOpts) {

		return '#toploader{width:0;background:' +
			cssOpts.bg +
			';height:3px;position:fixed;float:left;top:0;box-shadow:' +
			cssOpts.glow +
			';}#toploader.active{transition: all 0.4s;}'+
			'.goOut{margin-top:-20px;opacity:0};';	
	}

	addCss = function (css) {
		var s = document.getElementById( 'almanaque-style' );

		if (s==null) {
			s = document.createElement( 'style' );
			s.setAttribute( 'type', 'text/css' );
			document.getElementsByTagName( 'head' )[0].appendChild( s );
		}
		if (s.styleSheet) {   // IE
			s.styleSheet.cssText = css;
		} else {              // the world
			s.appendChild( document.createTextNode( css ));
		}
	}

	// append style
	addCss( createStyle( opts ));

	// create progress element
	this.bar = document.createElement( 'div' );
	this.bar.setAttribute( 'id', 'toploader' );
	document.getElementsByTagName( 'body' )[0].appendChild( this.bar );
	this.bar.className = "active";
}

TopLoader.prototype.init = function () {
	this.bar.style.width = 0;
	this.bar.className = "active";
}

TopLoader.prototype.finish = function (ok) {
	var _this = this;
	setTimeout( function (){
		_this.bar.className = " ";
		_this.bar.style.width = 0 ;
	}, 100);
	this.sendOk( ok );
}

TopLoader.prototype.go = function (p) {
	this.bar.style.width = p + '%';
}

TopLoader.prototype.sendOk = function (bool) {

	var ok = document.createElement('div');
	if (bool) {
		ok.innerHTML = '&#x2713;';
		ok.style.color = '#0b0';
	} else {
		ok.innerHTML = '&#x2717;';
		ok.style.color = '#f00';
	}
	ok.setAttribute( 'id', 'toploaderok' );
	ok.style.position = 'fixed';
	ok.style.top = 0;
	ok.style.right = '20px';
	ok.style.fontWeight = 'bold';
	ok.style.transition = 'all 1.8s';
	ok.style.fontSize = '36px';
	document.getElementsByTagName( 'body' )[0].appendChild( ok );
	setTimeout( function () {
		ok.className = 'goOut';
	}, 100);
	setTimeout( function () {
		ok.parentNode.removeChild( ok );
	}, 2000);
}
