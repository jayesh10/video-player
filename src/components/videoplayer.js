import React from 'react';
import VideoList  from '../container/video-list';
import VideoPlayer from '../container/video-player-details';
import {Grid,Row,Col} from 'react-bootstrap';

const app = () =>(

  <Grid>
    <Row className="show-grid">
      <Col xs={8} md={4}>
          <div>
              <h2>Video list</h2>
                <br /><br />
                  <VideoList />
          </div>
      </Col>
      <Col xs={6} md={8}>
        <div>
          <h2>Video :</h2>
            <VideoPlayer />
        </div>
        </Col>
    </Row>
  </Grid>
);


export default app;
