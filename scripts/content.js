'use strict';

function onClickPlayButton() {
		const player = document.getElementById('oframecdnplayer');
		const buttonPlayer = getPjsdiv(player)[79];

		const itemsForPlay = [player, buttonPlayer];

		itemsForPlay.forEach((item) => item.addEventListener('click', () => {
				getPlayerControlTimelinePassed();
		}));
}

function getPlayerControlTimelinePassed() {
		const playerControlTimelinePassed = getPjsdiv(player)[23];

		checkStyleLeft(playerControlTimelinePassed);
}

function checkStyleLeft(control) {
		if(+control.style.width.slice(0, -2) > 0) {
				getSubtitles();
		}
}

function getSubtitles() {
		const components = document.getElementsByTagName('pjsdiv');
		const containerSubtitles = components[components.length - 1];
		// const videoPlayer = document.getElementsByTagName('video')[0];

		containerSubtitles.classList.add('subtitles');

		containerSubtitles.addEventListener('mouseover', () => {
				// videoPlayer.pause();
		});

		containerSubtitles.addEventListener('mouseout', () => {
				// videoPlayer.play().catch(error => {
				// 		console.error('Ошибка воспроизведения видео:', error);
				// });
		});

		console.log('getSubtitles');

		containerSubtitles.addEventListener('mousedown', (e) => {
				console.log(e);

				containerSubtitles.style.left = '0px';
				containerSubtitles.style.top = '85%';
		});

		// containerSubtitles.addEventListener('mousedown', function(e) {
				// var offsetX = e.clientX - subtitles.getBoundingClientRect().left;
				// var offsetY = e.clientY - subtitles.getBoundingClientRect().top;
				//
				// function mouseMoveHandler(e) {
				// 		subtitles.style.left = (e.clientX - offsetX) + 'px';
				// 		subtitles.style.top = (e.clientY - offsetY) + 'px';
				// }
				//
				// function reset() {
				// 		window.removeEventListener('mousemove', mouseMoveHandler);
				// 		window.removeEventListener('mouseup', reset);
				// }
				//
				// window.addEventListener('mousemove', mouseMoveHandler);
				// window.addEventListener('mouseup', reset);
		// });
}

function getPjsdiv(selector) {
		return selector.querySelectorAll('pjsdiv');
}

onClickPlayButton();

