import React,{Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import {Button} from 'react-bootstrap';

class VideoPlayer extends Component {


    render() {

      if(this.props.video.type === 'video'){
        return (
            <div>
          <h2>{this.props.video.title}</h2>
          <br/>
          <ReactPlayer url={this.props.video.src} playing />
          <br />
          <Button bsStyle="primary">Pre</Button>
          <Button bsStyle="primary">Next</Button>
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
  return {
    video:state.activeVideo,
    audio:state.activeVideo
  }
}

export default connect(mapStateToProps)(VideoPlayer)
