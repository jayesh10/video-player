import React,{Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import Audio from 'react-audioplayer';



class VideoPlayer extends Component {


    render() {



      if(this.props.video.type == 'video'){
        return (
            <div>
          <h2>{this.props.video.title}</h2>
          <br/>
          <ReactPlayer url={this.props.video.src} playing />
          </div>
        );
        }else if(this.props.video.type == 'audio'){

          const songObj = {
            name: this.props.video.title, // song name
            src: this.props.video.src, // song source address
            img: '', // (optional) song image source address
            comments: '' // (optional) comments to display of that song
          }
          return(
          <div>
          <Audio
          width={600}
          height={400}
          autoPlay={true}
          playlist={songObj}
              />
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
