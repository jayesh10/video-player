import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectVideo} from '../actions/video';

class VideoList extends Component {



  VideoListItem(){
    return this.props.video.map((video) => {
      return(
          <li
          key = {video.id}
          onClick ={() => this.props.selectVideo(video)}
          >
          {video.title}
          </li>
      );
    });
  }

    render() {
        return (
          <ul>
            {this.VideoListItem()}
          </ul>
        );
    }
}

function mapStateToProps(state) {
  return{
    video:state.video
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectVideo : selectVideo},
    dispatch
  )
}


export default connect (mapStateToProps,matchDispatchToProps)(VideoList);
