import Player from '@vimeo/player';
import { throttle } from 'throttle-debounce';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const saveTimeVideo = function (time) {
  localStorage.setItem('time', JSON.stringify(time));
};
player.on('timeupdate', throttle(1000,saveTimeVideo ));

function startLastTime() {
  const currentTime = JSON.parse(localStorage.getItem('time'));
  if (currentTime) {
    player
      .setCurrentTime(currentTime['seconds'])
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'Error':
            break;
          default:
            break;
        }
      });
  }
}
startLastTime();
