'use strict';


function onClickPlayButton() {
  const player = document.getElementById('oframecdnplayer');
  const buttonPlayer = getPjsdiv(player)[79];

  const itemsForPlay = [player, buttonPlayer];

  itemsForPlay.forEach((item) => item.addEventListener('click', () => {
    getPlayerControlTimelinePassed(player);
  }));
}

function getPlayerControlTimelinePassed(player) {
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
  const span = containerSubtitles.querySelector('span');
  // const videoPlayer = document.getElementsByTagName('video')[0];

  console.log(span?.textContent);

  containerSubtitles.classList.add('subtitles');

  containerSubtitles.addEventListener('mouseover', () => {
    // videoPlayer.pause();
  });

  containerSubtitles.addEventListener('mouseout', () => {
    // videoPlayer.play().catch(error => {
    //   console.error('Ошибка воспроизведения видео:', error);
    // });
  });

  new MutationObserver(mutations => {
    console.log(mutations);

    mutations.forEach(mutation => {
      if (mutation.type === 'characterData') {
        console.log('Текст изменен на:', mutation.target.data);
      }
    });
  });

  // const config = { characterData: true, subtree: true };

  // const targetNode = document.getElementById('someElement');
  // observer.observe(span, config);

  // mousedown
  // containerSubtitles.addEventListener('mousemove', (e) => {
  //   e.preventDefault();
  //   console.log('dragging');
  // }, true);
  // containerSubtitles.addEventListener('mousedown', preventDragHandler, true);
  // containerSubtitles.addEventListener('mousemove', preventDragHandler, true);
  // containerSubtitles.addEventListener('mouseup', preventDragHandler, true);
}

function getPjsdiv(selector) {
  return selector?.querySelectorAll('pjsdiv');
}

onClickPlayButton();

// function preventDragHandler(event) {
//   event.preventDefault();
//   event.stopPropagation();
// }

