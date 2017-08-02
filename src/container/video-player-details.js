import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactPlayer from 'react-player';
import {Button} from 'react-bootstrap';
import {preVideo,nextVideo} from '../actions/video';
import {Grid,Row,Col} from 'react-bootstrap';

class VideoPlayer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeVideo: 0
    };
  }

 // goToVideo(index){
 //
 //    let activeVideo = index;
 //    if (activeVideo < 0) {
 //      activeVideo = this.props.video.length - 1;
 //    } else if (activeVideo >= this.props.video.length) {
 //      activeVideo = 0;
 //    }
 //    this.setState({
 //    activeVideo  : activeVideo
 //    });
 //  }

    render() {

      console.log("video",this.props.video)
      var index= this.props.index;
      console

      if(this.props.video.type === 'video'){
        return (
            <div>
            <Grid>
          <h2>{this.props.video.title}</h2>
          <br/>
          <ReactPlayer url={this.props.video.src} playing />
          <br />

            <Row className="show-grid">
            <Col xs={8} md={6}>

          <Button bsStyle="primary" onClick={()=>this.props.preVideo(index)}>Previous</Button>
          </Col>
          <Col xs={8} md={5}>
          <Button bsStyle="primary" onClick={()=>this.props.nextVideo(index)}>Next</Button>

            </Col>
            </Row>
          </Grid>
          </div>
        );
      }else if(this.props.video.type === 'audio'){
          return(
          <div>
          <ReactPlayer url={this.props.video.src} playing />
          </div>
        );
        }else {
          return (
          <div>
          <h2>please select from the list....
          </h2>
          </div>
        );
        }
    }
}

function mapStateToProps(state){
  console.log("state",state)
   if(state.activeVideo != '')
   {
     var  videoIndex = state.activeVideo;
    }else{
      videoIndex = 0;
    }
  return {
    video:state.video[videoIndex],
    index:videoIndex
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    nextVideo : nextVideo,
    preVideo : preVideo},
    dispatch
  )
}

export default connect(mapStateToProps,matchDispatchToProps)(VideoPlayer)
