'use strict';

import { Element } from './Element';
import { Menu } from './Menu';

document.addEventListener('DOMContentLoaded', () => {
	const site = document.querySelector('.site');
	const sidebar = document.querySelector('#sidebar');
	const siteBody = document.querySelector('.site__main');
    
	const buttonToggleFontSize = document.querySelector('.jsToggleFontSize');
	const buttonToggleTheme = document.querySelector('.jsToggleTheme');
	const buttonToggleMenu = document.querySelector('.jsToggleMenu');

	let touchstartX = 0;
	let touchendX = 0;
    
	function clickEvent(elem){
		config[elem.configParam] = config[elem.configParam] === 'true' ? 'false' : 'true';
	}
    
	function swipeEvent(elem){
		if (touchstartX - touchendX >= 130) {
			config[elem.configParam] = 'true';
		}

		if (touchendX - touchstartX >= 130) {
			config[elem.configParam] = 'false';
		}
	}
    
	function handleEvent(callback,elem){
		callback(elem);
		elem.toggle(config,site);
		localStorage.setItem('app_config', JSON.stringify(config));
	}
    
	const ls = localStorage.getItem('app_config');
	const config = ls ? JSON.parse(ls) : {
		menuClosed : false,
		fontSize : false,
		darkTheme : false
	};
    
	const font = new Element(buttonToggleFontSize, 'fontSize', 'big-font');
	const theme = new Element(buttonToggleTheme,'darkTheme','dark-theme');

	const menu = buttonToggleMenu !== null ? new Menu(buttonToggleMenu,'menuClosed', 'menu-closed', sidebar) : null;
    
	let elems = [font,theme];
	if(menu !== null) {
		elems.push(menu);
	}
    
	[...elems].forEach(elem =>{
		elem.btn.addEventListener('click',() => {
			handleEvent(clickEvent,elem);
			if(elem instanceof Menu){
				handleEvent(swipeEvent,elem);
			}
		});
		elem.toggle(config,site); 
	});	
    
	siteBody.addEventListener('click', () => {
		if (window.innerWidth <= 750 && config.menuClosed === 'false') { // menu, mobile devices, closing only
			handleEvent(clickEvent,menu);
		}
	});
    
	site.addEventListener('touchstart', (e) => {
		touchstartX = e.changedTouches[0].screenX;
	}, false);

	siteBody.addEventListener('touchend', (e) => {
		touchendX = e.changedTouches[0].screenX;
		handleEvent(swipeEvent,menu);
	}, false); 
});