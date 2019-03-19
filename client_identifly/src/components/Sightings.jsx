import React, { Component } from 'react';
import Header from './Header';
import NewSighting from './NewSighting';
import axios from 'axios';
import moment from 'moment';

class Sightings extends Component {

  state = {
    sightings: [],
    butterflies: [],
    currentPage: 1
  }

  previousPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    })
  }

  nextPage = () => {
    this.setState({
      currentPage: this.state.currentPage +  1
    })
  }

  componentDidMount = async () => {
    let res2 = await axios.get('/getbutterflies');
    this.setState({ butterflies: res2.data })
    this.getSightings();
  }
  
  getSightings = async () => {
    let res = await axios.get('/sighting');
    this.setState({ sightings: res.data })
  }

  render() {

    let sortedSightings = this.state.sightings.sort((a,b)=>new moment(b.date_sighted).format('YYYYMMDD') - new moment(a.date_sighted).format('YYYYMMDD'));
    let sightingsList = sortedSightings.map(sighting => {
      let buttfly = this.state.butterflies.filter(butterfly => sighting.butterfly_id === butterfly.id );
      return(
        <div className='border-bottom p-2 mt-2 d-flex justify-content-between' key={sighting.id}>
          <div>
            <div className='d-flex'>
              <h5>{buttfly[0].name}</h5>
              <p className='m-0 ml-4'><small>{moment(sighting.date_sighted).format('MMMM Do YYYY')}</small></p>
            </div>
            <p className='m-0'>{sighting.location}</p>
            <p className='m-0'>{sighting.notes}</p>
          </div>
          <div>
            <div style={{width: 100, height: 100, backgroundImage: 'url('+ sighting.photo +')', backgroundSize: 'cover' }}></div>
            <small>Seen by {sighting.sighted_by}</small>
          </div>
        </div>
      )
    })

    //PAGINATION SETUP
    let numberPerPage = 10;
    let numberOfPages = Math.ceil(sightingsList.length / numberPerPage);
    let begin = ((this.state.currentPage - 1 ) * numberPerPage );
    let end = begin + numberPerPage;
    let pageList = sightingsList.slice(begin, end);

    return (
      <div>
        <Header />
        <div className='container-fluid'>
          <div className='row'>
            <div className='h-100 col-4'>
              <NewSighting refreshSightings={ this.getSightings } butterflies={this.state.butterflies}/>
            </div>
            <div className='h-100 col m-4'>
              <h3 className='col'>Sightings</h3>
              <div>
                {pageList}
                {/* PAGINATION NAVIGATION */}
                <nav className='ml-5'>
                  <ul className="pagination">
                    {this.state.currentPage === 1 ? "" : <li className="page-item"><button className="mt-2 page-link" onClick={()=>this.previousPage()}>Previous</button></li>}
                    {this.state.currentPage === numberOfPages ? "" : <li className="page-item"><button className="mt-2 page-link" onClick={()=>this.nextPage()}>Next</button></li>}
                  </ul>
                </nav>
                {/* END PAGINATION NAVIGATION */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sightings;