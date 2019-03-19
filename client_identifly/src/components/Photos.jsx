import React, { Component } from 'react';

class Photos extends Component {

  state = {
    largePictureId: 0,
    currentPictureId: 0
  }

  changeSize = (id) => {
    if(this.state.largePictureId === 0) {
      this.setState({ 
        largePictureId: this.props.sightingId,
        currentPictureId: id
      })
    } else {
      this.setState({ 
        largePictureId: 0,
        currentPictureId: 0
      })
    }
  }

  render() {
    let photoList = this.props.photos.map(photo => {
      return(
        <div>
          <div
            onClick={()=>this.changeSize(photo.id)}
            key={photo.id}
            className='ml-2' 
            style={ this.state.largePictureId === this.props.sightingId && this.state.currentPictureId === photo.id
              ? {cursor: 'pointer', width: 500, height: 500, backgroundImage: 'url('+ photo.photo_url +')', backgroundSize: 'cover' }
              : {cursor: 'pointer', width: 100, height: 100, backgroundImage: 'url('+ photo.photo_url +')', backgroundSize: 'cover' } }>
          </div>
        </div>
      )
    })
    
    return (
      <div className='d-flex'>
        {photoList ? photoList : "" }
      </div>
    );
  }
}

export default Photos;