import React, { Component } from 'react';
import Header from './Header';
import NewSighting from './NewSighting';
import axios from 'axios';
import moment from 'moment';
import NewPhoto from './NewPhoto';
import Photos from './Photos';
import Pagination from './Pagination';

class Sightings extends Component {

  state = {
    sightings: [],
    butterflies: [],
    largePictureId: '',
    show: false,
    editId: '',
    photo: '',
    photos: []
  }

  componentDidMount = async () => {
    let res2 = await axios.get('/getbutterflies');
    this.setState({ butterflies: res2.data })
    this.getSightings();
    this.getPhotos();
  }
  
  getSightings = async () => {
    let res = await axios.get('/sighting');
    this.setState({ sightings: res.data })
  }

  hide = () => {
    this.setState({ show: false })
  }

  getPhotos = async () => {
    let res = await axios.get(`/getphotos`);
    this.setState({ photos: res.data });
  }

  render() {

    let sortedSightings = this.state.sightings.sort((a,b)=>new moment(b.date_sighted).format('YYYYMMDD') - new moment(a.date_sighted).format('YYYYMMDD'));
    let sightingsList = sortedSightings.map(sighting => {
      let relevantPhotos = this.state.photos.filter(photo => {
        return sighting.id === photo.sighting_id
      });
      let buttfly = this.state.butterflies.filter(butterfly => sighting.butterfly_id === butterfly.id );
      return(
        <div className='border-bottom p-2 mt-2 d-flex justify-content-between' key={sighting.id}>
          <div>
            <div className='d-flex'>
              <h5>{buttfly[0].name}</h5>
              <p className='m-0 ml-4'>
                <small>{moment(sighting.date_sighted).format('MMMM Do YYYY')}</small>
              </p>
              <small 
                onClick={()=>this.setState({ show: !this.state.show, editId: sighting.id })}>
                <i style={{ cursor: 'pointer'}} className="ml-4 mr-4 text-muted fas fa-folder-plus"></i>  
              </small>
              {this.state.show && this.state.editId === sighting.id 
              ? <NewPhoto getPhotosFn={this.getPhotos} sightingId={sighting.id} hideFn={this.hide}/> 
              : "" }
            </div>
            <p className='m-0'>{sighting.location}</p>
            <p className='m-0'>{sighting.notes}</p>
            <p className='text-muted'>Seen by {sighting.sighted_by}</p>
          </div>
          <div>
            <Photos photos={relevantPhotos} sightingId={sighting.id} />
          </div>
        </div>
      )
    })

    let numberPerPage = 10;
    let numberOfPages = Math.ceil(sightingsList.length / numberPerPage);

    return (
      
      <div>
        <Header />
        <div className='container-fluid'>
          <div className='row'>
            <div className='h-100 col-4'>
              <NewSighting 
                refreshSightings={ this.getSightings } 
                butterflies={this.state.butterflies}/>
            </div>
            <div className='h-100 col m-4'>
              <h3 className='col'>Sightings</h3>
              <Pagination 
                numberOfPages={numberOfPages} 
                numberPerPage={numberPerPage} 
                list={sightingsList}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sightings;