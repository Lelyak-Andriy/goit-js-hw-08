import throttle from 'lodash.throttle'
import Player from '@vimeo/player';
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
player.on('timeupdate',throttle( makeCurrentTime,1000))
 function makeCurrentTime (data) {
   const currentTime = data.seconds
   console.log(currentTime)
  localStorage.setItem("videoplayer-current-time", currentTime)
}
const currentTime = localStorage.getItem("videoplayer-current-time")
  player.setCurrentTime(currentTime).then(function(seconds) {
    }).catch(function(error) {
    switch (error.name) {
          case 'RangeError':
              // the time was less than 0 or greater than the video’s duration
              break;
          default:
              // some other error occurred
              break;
      }
    });

