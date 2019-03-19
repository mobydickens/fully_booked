import React, { Component } from 'react';

class Photos extends Component {

  state = {
    largePictureId: 0
  }

  reduce = () => {
    this.setState({ largePictureId: 0 })
  }

  render() {
    let photoList = this.props.photos.map(photo => {
      return(
        <div
          onClick={()=>this.setState({ largePictureId: this.props.sightingId })}
          key={photo.id}
          className='ml-2' 
          style={{cursor: 'pointer', width: 100, height: 100, backgroundImage: 'url('+ photo.photo_url +')', backgroundSize: 'cover' }}>
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