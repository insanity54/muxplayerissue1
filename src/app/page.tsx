'use client';

import MuxPlayer from '@mux/mux-player-react/lazy';

const demoVideo = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4';

export default function Home() {
  return (
    <div>
      <p><b>Observed behavior</b></p>
      <p>The video player does not exit fullscreen in response to the fullscreen button being pressed while in fullscreen mode.</p>
      <p>The user is forced to use the Esc key to exit fullscreen as the mux player's fullscreen button is unresponsive.</p>
      <br></br>

      <p><b>Reproduction steps.</b></p>
      <p>* Refresh the page.</p>
      <p>* Click play.</p>
      <p>* While the video is buffering, enter fullscreen mode using the fullscreen button in the bottom right of the player.</p>
      <p>* Click the fullscreen button to exit fullscreen. (nothing happens)</p>
      <br></br>

      <p><b>Alternative Reproduction steps.</b></p>
      <p>* Refresh the page.</p>
      <p>* Click play.</p>
      <p>* While the video is buffering, seek to an <i>unloaded portion</i> of video. (<b>important!</b>)</p>
      <p>* Enter fullscreen mode using the fullscreen button in the bottom right of the player.</p>
      <p>* Click the fullscreen button. (nothing happens)</p>
      <br></br>

      <p>Reproduction steps may not work exactly the same in all environments.</p>
      <p>I have a slow internet connection. I think the issue might be related to buffering. </p>
      <p>Using browser tools to simulate low bandwidth connection may be helpful.</p>
      <br></br>

      <MuxPlayer
        src={demoVideo}
      ></MuxPlayer>
    </div>
  )
}
