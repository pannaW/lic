document.addEventListener('DOMContentLoaded', () => {
	const jsSlides = document.querySelectorAll('.jsSlide');

	function slideText() {
		this.parentNode.parentNode.classList.toggle('jsOpened');
	}
    
	if(jsSlides !== null) {
		[...jsSlides].forEach(slide => slide.addEventListener('click', slideText));
	}
});


