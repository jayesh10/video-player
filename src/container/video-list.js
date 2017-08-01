import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectVideo} from '../actions/video';
import {ListGroup,ListGroupItem} from 'react-bootstrap';


class VideoList extends Component {


  VideoListItem(){
    return this.props.video.map((video) => {
      return(

        <ListGroupItem key = {video.id}
          onClick ={() => this.props.selectVideo(video)} >  {video.title}
        </ListGroupItem>

      );
    });
  }

    render() {
      return (
      <div>
      <ListGroup>
        {this.VideoListItem()}
        </ListGroup>
      </div>
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
