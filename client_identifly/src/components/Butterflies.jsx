import React, { Component } from 'react';
import Pagination from './Pagination';

class Butterflies extends Component {

  state = {
    currentPage: 1,
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

  flatten(arr) {
    return arr.reduce((a,b) => {
      return a.concat(b);
    },[]);
  }

  render() {
    
    let butterflyList = this.props.types.map(type => {
      return type.butterflies.map(butterfly => {
        return(
          <div key={butterfly.id} className='d-flex border-bottom p-4'>
            <div>
              <h3>{butterfly.name}</h3>
              <h4>{butterfly.scientific_name}</h4>
              <p>{butterfly.region}</p>
              <p>About: {butterfly.behavior}</p>
              <p>Description: {butterfly.description}</p>
            </div>
            <div className='ml-4'>
              <div style={{width: 300, height: 300, backgroundImage: 'url('+ butterfly.photo_url +')', backgroundSize: 'cover'}} className='rounded'></div>
            </div>
          </div>
          )
        })
      })

    let filteredList = this.props.types.map(type => {
      return type.butterflies
        .filter(butterfly => butterfly.type_id === this.props.filteredType)
        .map(butterfly => {
          return(
            <div key={butterfly.id} className='d-flex border-bottom p-4'>
              <div>
                <h3>{butterfly.name}</h3>
                <h4>{butterfly.scientific_name}</h4>
                <p>{butterfly.region}</p>
                <p>About: {butterfly.behavior}</p>
                <p>Description: {butterfly.description}</p>
              </div>
              <div className='ml-4'>
                <div style={{width: 300, height: 300, backgroundImage: 'url('+ butterfly.photo_url +')', backgroundSize: 'cover' }} className='rounded'></div>
              </div>
            </div>
        )
      })
    })

    let mergedButterflyArrays = [].concat.apply([], butterflyList);
    let numberPerPage = 5;
    let numberOfPages = Math.ceil(mergedButterflyArrays.length / numberPerPage);
    let flattenedList = this.flatten(filteredList);
    let numberOfFilteredPages = Math.ceil(flattenedList.length / numberPerPage);
    
    return (
      <div className='p-4 col'>
        { this.props.filteredType === 'All' 
        ? <Pagination numberOfPages={numberOfPages} numberPerPage={numberPerPage} list={mergedButterflyArrays}/>
        : <Pagination numberOfPages={numberOfFilteredPages} numberPerPage={numberPerPage} list={flattenedList} /> }
      </div>
    );
  }
}

export default Butterflies;



