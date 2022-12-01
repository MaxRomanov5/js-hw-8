import Player from '@vimeo/player';
import { throttle } from 'throttle-debounce';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const saveTimeVideo = function (time) {
  localStorage.setItem('time', JSON.stringify(time));
};
player.on('timeupdate', throttle(1000,saveTimeVideo ));

function startLastTime() {
  if (JSON.parse(localStorage.getItem('time'))) {
    player
      .setCurrentTime(JSON.parse(localStorage.getItem('time'))['seconds'])
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
