import React, { Component } from 'react';
import axios from 'axios';

class Photos extends Component {

  state = {
    largePictureId: 0,
    photos: []
  }

  reduce = () => {
    this.setState({ largePictureId: 0 })
  }


  // componentDidMount = async () => {
  //   let res = await axios.get(`/getphotos/${this.props.sightingId}`);
  //   this.setState({ photos: res.data });
  // }

  render() {

    let photoList = this.state.photos.map(photo => {
      return(
        <div key={photo.id}>
          { this.state.largePictureId === this.props.sightingId
            ?
            //LARGE PHOTO
            <div>
              <div 
                // style={{width: 500, height: 500, backgroundImage: 'url('+ sighting.photo +')', backgroundSize: 'cover', cursor: 'pointer' }}
                onClick={()=>this.reduce()}></div>
              <small>Seen by {this.props.sightedBy}</small>
            </div>
              : 
              //SMALL PHOTO
            <div>
              <div 
                // style={{width: 100, height: 100, backgroundImage: 'url('+ sighting.photo +')', backgroundSize: 'cover', cursor: 'pointer' }}
                onClick={()=>this.setState({ largePictureId: this.props.sightingId })}></div>
              <small>Seen by {this.props.sightedBy}</small>
            </div>
          }
        </div>
      )
    })

    return (
      <div>
        {photoList}
      </div>
    );
  }
}

export default Photos;