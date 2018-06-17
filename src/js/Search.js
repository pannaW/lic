class Search {
	constructor(articles,navList){
		this.articles = articles;
		this.navList = navList;
	}  
	findMatches(wordToMatch){
		return this.articles.filter(article => {
			var regex = new RegExp(wordToMatch, 'gi');
			return article.content.match(regex) || article.title.match(regex);
		});
	}
}

export { Search };