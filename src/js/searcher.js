'use strict';
import articles from '../data/articles.json';
import { Search } from './Search';

document.addEventListener('DOMContentLoaded', () => {
	const navList = document.querySelector('.list');
	const allChapters = navList.innerHTML;
	const clearBtn = document.querySelector('.jsClearSearch');
	const searchInput = document.querySelector('.jsSearch');

	const search = new Search(articles,navList);
    
	function clearSearch(e) {
		e.preventDefault();
		searchInput.value = '';
		renderNavigation();
	}
    
	function renderNavigation() {
		if (searchInput.value === '') {
			return search.navList.innerHTML = allChapters;
		} else {
			var matchArray = search.findMatches(searchInput.value, search.articles);
			var html = matchArray.map(item => {
				var title = item.title;
				var slug = item.slug;

				return `<li class="list__item"><a href="${slug}.html">${title}</a></li>`;
			}).join('');
			search.navList.innerHTML = html;
		}
	}
    
	searchInput.addEventListener('change', () => {
		renderNavigation();
	});
                                
	searchInput.addEventListener('input',  () => {
		renderNavigation();
	});

	clearBtn.addEventListener('click', clearSearch);   
});