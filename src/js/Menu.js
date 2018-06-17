import { Element } from './Element';

class Menu extends Element {
	constructor(btn, configParam, cl, sidebar){
		super(btn, configParam, cl); 
		this.sidebar = sidebar;
	}
	setAttributes(el,attrs){
		for (const [key,value] of Object.entries(attrs)){ 
			el.setAttribute(key,value);
		}
	}
    
	toggle(config,site) {
		let expanded,label,hidden;
        
		if(config[this.configParam] === 'true'){
			this.sidebar.classList.add('hidden');
			site.classList.add(this.cl);
			expanded,label,hidden = 'false','Otwórz Menu','true';
		}else {
			this.sidebar.classList.remove('hidden');
			site.classList.remove(this.cl);
			expanded,label,hidden = 'true','Zamknij Menu','false';
			this.sidebar.focus(); 
		}
        
		this.setAttributes(this.btn,{'aria-expanded':expanded,'aria-label':label});
		this.sidebar.setAttribute('aria-hidden',hidden);
	}
}


export { Menu };