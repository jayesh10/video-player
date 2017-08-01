import React from 'react';
import VideoList  from '../container/video-list';
import VideoPlayer from '../container/video-player-details';

const app = () =>(
  <div>
  <h2>Video list</h2>
  <VideoList />
  <hr />
  <VideoPlayer />
  </div>
);


export default app;
