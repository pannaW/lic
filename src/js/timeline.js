document.addEventListener('DOMContentLoaded', () => {
	const jsSlides = document.querySelectorAll('.jsSlide');

	function slideText() {
		let timelineRow = this.parentNode.parentNode;
		timelineRow.classList.toggle('jsOpened');
		this.setAttribute('aria-expanded',`${timelineRow.classList.contains('jsOpened')}`);
	}
    
	if(jsSlides !== null) {
        [...jsSlides].forEach(slide =>{
            let iconCl = 'timeline__icon'; slide.firstElementChild.classList.add(`${iconCl}--visible`);
        });
        
		[...jsSlides].forEach(slide =>
			slide.addEventListener('click', slideText));
        
		[...jsSlides].forEach(slide =>
		//quick fix for accessibility sake
			slide.click());
	}
});