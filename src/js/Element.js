class Element {
	constructor(btn, configParam, cl) {
		this.btn = btn;
		this.configParam = configParam;
		this.cl = cl;
	}
	toggle(config,site) {
		if (config[this.configParam] === 'true') {
			site.classList.add(this.cl);
			this.btn.classList.add('btn--on');
		} else {
			site.classList.remove(this.cl);
			this.btn.classList.remove('btn--on');
		}
	}
}

export { Element };