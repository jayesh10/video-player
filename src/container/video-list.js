import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectVideo} from '../actions/video';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


class VideoList extends Component {


  VideoListItem(){
    console.log(this.props.video);
    return this.props.video.map((video,i) => {

      return(
        <ListGroupItem key={i}
          onClick ={() => this.props.selectVideo(video,i)} >  {video.title}
        </ListGroupItem>

      );
    });
  }

    render() {
      return (
      <div>
      <ListGroup>
        {this.VideoListItem()}
        <Button bsStyle="primary" >Pre</Button>
        <Button bsStyle="primary">Next</Button>
        </ListGroup>
      </div>
    );
    }
}

function mapStateToProps(state) {
  console.log(state);
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
