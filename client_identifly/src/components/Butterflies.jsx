import React, { Component } from 'react';

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
            <div>
              <img className='img-fluid rounded' src={butterfly.photo_url} alt="butterfly"/>
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
            <div key={butterfly.id} className='d-flex border m-4 p-4'>
              <div>
                <h3>{butterfly.name}</h3>
                <h4>{butterfly.scientific_name}</h4>
                <p>{butterfly.region}</p>
                <p>About: {butterfly.behavior}</p>
                <p>Description: {butterfly.description}</p>
              </div>
              <div>
                <img className='img-fluid rounded' src={butterfly.photo_url} alt="butterfly"/>
              </div>
            </div>
        )
      })
    })

    //PAGINATION
    var mergedButterflyArrays = [].concat.apply([], butterflyList);
    var numberPerPage = 5;
    let numberOfPages = Math.ceil(mergedButterflyArrays.length / numberPerPage);
    let begin = ((this.state.currentPage - 1 ) * numberPerPage );
    let end = begin + numberPerPage;
    let pageList = mergedButterflyArrays.slice(begin, end);
    // PAGINATION
    
    return (
      <div className='p-4 col'>
        { this.props.filteredType === 'All' ?
        <div>
          {pageList}
            <nav className='ml-5'>
              <ul className="pagination">
                {this.state.currentPage === 1 ? "" : <li className="page-item"><button className="mt-2 page-link" onClick={()=>this.previousPage()}>Previous</button></li>}
                {this.state.currentPage === numberOfPages ? "" : <li className="page-item"><button className="mt-2 page-link" onClick={()=>this.nextPage()}>Next</button></li>}
              </ul>
            </nav>
        </div>
        : 
        filteredList
        }
      </div>
    );
  }
}

export default Butterflies;



