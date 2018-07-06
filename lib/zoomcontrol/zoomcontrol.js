function CaZoomControl(opt){
	this.setting = {
		// max 
		// min
		// step
		// current zoom
		// viewer: 
		// color - font color
		// bg_color - background color	
	}
	extend(this.setting, opt);
	this.elt = document.getElementById(this.setting.id);
	if(!this.elt) return;
	
	this._zoom = this.setting.zoom;
	this._range=this.elt.querySelector('.slider');
	this._z_out=this.elt.querySelector('.zoom.out');
	this._z_in=this.elt.querySelector('.zoom.in');
	this._txt=this.elt.querySelector('.idx > .content');
	// detach it
	this.elt.parentNode.removeChild(this.elt);
	
	// setting 
	this._range.max = this._zoom.max;
	this._range.min = this._zoom.min;
	this._range.value = this._zoom.cur;
	this._range.step = this._zoom.step;
	this._txt.innerText = this._zoom.cur;

	// event
	this._z_in.addEventListener('click',this.zoomIn.bind(this));
	this._z_out.addEventListener('click',this.zoomOut.bind(this));
	this._range.addEventListener('change',this.zoomTo.bind(this));
	this._range.addEventListener('mousemove',this.zoomTo.bind(this));

	//

}

CaZoomControl.prototype.zoomTo = function() {
	var value = +this._range.value;

	viewer.viewport.zoomTo(value);
	this._zoom.cur = value;
	this._txt.innerText = `x${value}`;	
}

CaZoomControl.prototype.zoomIn = function() {
	const viewer = this.setting.viewer;
	if(this._zoom.cur >= this._zoom.max) return;
	this._zoom.cur+= this._zoom.step;
	viewer.viewport.zoomTo(this._zoom.cur.toFixed(2));
	this._range.value = this._zoom.cur.toFixed(2);
	this._txt.innerText = `x${this._zoom.cur.toFixed(2)}`;
}
CaZoomControl.prototype.zoomOut = function() {
	const viewer = this.setting.viewer;
	if(this._zoom.cur <= this._zoom.min) return;
	this._zoom.cur -= this._zoom.step;
	viewer.viewport.zoomTo(this._zoom.cur.toFixed(2));
	this._range.value = this._zoom.cur.toFixed(2);
	this._txt.innerText = `x${this._zoom.cur.toFixed(2)}`;
}

