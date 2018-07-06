function LayersViewer(opt){
	this.setting = {
		// data: layers dataset
	};
	extend(this.setting, opt);
	this.elt = document.getElementById(this.setting.id);
	console.log(this.elt);

	this.searchbar = this.elt.querySelector('.searchbar');
	this.viewList = this.elt.querySelector('.layers_list');

	// for expand and collapse
	this.clpBtns = this.elt.querySelectorAll('.material-icons.md-24');
	this.clpBtns.forEach( btn=> btn.addEventListener('click', this._switch.bind(this)));

	// for check and uncheck
	this.bigCheck = this.elt.querySelectorAll('input[type=checkbox].big');
	this.bigCheck.forEach(check=> check.addEventListener('change', this._change.bind(this)));
}

LayersViewer.prototype._switch = function(e){
	const nextElt = e.target.parentNode.nextElementSibling;
	if(nextElt.style.display=='none'){
		nextElt.style.display = null;
		e.target.innerHTML = 'keyboard_arrow_down';
	}else{
		nextElt.style.display = 'none';
		e.target.innerHTML = 'keyboard_arrow_right';
	}
};


LayersViewer.prototype._change = function(e){
	const chkVal= e.target.checked;
	const nextElt = e.target.parentNode.nextElementSibling;
	checkList = nextElt.querySelectorAll('input[type=checkbox]');
	checkList.forEach(check => check.checked = chkVal);
}
