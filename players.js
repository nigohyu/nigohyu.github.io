/* 
YouTube Audio Embed 
--------------------

Author: Amit Agarwal
Web: http://www.labnol.org/?p=26740
Via: https://codepen.io/onigetoc/pen/YNdYBw
*/

var player;

function onYouTubeIframeAPIReady() {

  var ctrlq = document.getElementById("youtube-audio");
  ctrlq.innerHTML = '<img id="youtube-icon" src=""/><div id="youtube-player"></div>';
  ctrlq.style.cssText = 'width:100px;margin:2em auto;cursor:pointer;cursor:hand;display:none';
  ctrlq.onclick = toggleAudio;

  player = new YT.Player('youtube-player', {
    height: '0',
      width: '0',
      videoId: ctrlq.dataset.video,
      playerVars: {
        autoplay: ctrlq.dataset.autoplay,
          loop: ctrlq.dataset.loop,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function togglePlayButton(play) {
  document.getElementById("youtube-icon").src = play ? "https://3.bp.blogspot.com/-BKbzpysKEFY/XAmfqAdecsI/AAAAAAAAH6c/S7iIwftzsEUpMmLoqg1z7Jt17rTrKrcFQCLcBGAs/s1600/kk.png" : "https://4.bp.blogspot.com/-qxocwg_8Tyc/XAmf0pbBxlI/AAAAAAAAH6g/6vrrxBUjwqsHCadDUvuS-DL513R791TKwCLcBGAs/s1600/kk.png";
}

function toggleAudio() {
  if (player.getPlayerState() == 1 || player.getPlayerState() == 3) {
    player.pauseVideo();
    togglePlayButton(false);
  } else {
    player.playVideo();
    togglePlayButton(true);
  }
}

function onPlayerReady(event) {
  //event.target.setVolume(100);
  player.setPlaybackQuality("small"); //highres, hd1080, hd720, large, medium, small
  document.getElementById("youtube-audio").style.display = "block";
  togglePlayButton(player.getPlayerState() !== 5);
}

function onPlayerStateChange(event) {
  if (event.data === 0) {
    togglePlayButton(false);
  }
}
