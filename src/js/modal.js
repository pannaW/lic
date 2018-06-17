'use strict';

document.addEventListener('DOMContentLoaded', function () {
	const buttonsOpenModal = document.querySelectorAll('.jsOpenModal');
	const buttonsCloseModal = document.querySelectorAll('.jsCloseModal');
	const images = document.querySelectorAll('.image');
	let lastFocusedElement;

	function renderImgModal(img, modal) {
		const modalImage = modal.querySelector('.jsImage');
		const modalCaption = modal.querySelector('.jsCaption');

		modalImage.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
		modalCaption.innerHTML = img.alt;
	}

	function openModal(e) {
		const modal = document.getElementById(this.dataset.modalId);
		lastFocusedElement = document.activeElement;

		if (e) {
			e.preventDefault(); // prevents from link redirect   
		}

		closeModal(); // close any other opened modal  
		if (this.src) {
			renderImgModal(this, modal);
		}

		modal.classList.add('modal--visible');
		modal.focus();

		modal.addEventListener('keydown', () => {
			if (e.keyCode === 27) { // esc-key
				closeModal();
			}
		});
	}

	function closeModal() {
		const visibleClass = 'modal--visible';
		if (document.querySelector('.' + visibleClass)) {
			document.querySelector('.' + visibleClass).classList.remove(visibleClass);
		}        
		lastFocusedElement.focus();
	}

	const openers = [...buttonsOpenModal, ...images];

	[...openers].forEach(opener => opener.addEventListener('click', openModal));
    
	[...buttonsCloseModal].forEach(btn => btn.addEventListener('click', closeModal));

});