import React, { Component } from 'react';

class Pagination extends Component {

  state = {
    currentPage: 1
  }

  previousPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    })
    window.scrollTo(0,0);
  }

  nextPage = () => {
    this.setState({
      currentPage: this.state.currentPage +  1
    })
    window.scrollTo(0,0);
  }

  render() {

    let begin = ((this.state.currentPage - 1 ) * this.props.numberPerPage );
    let end = begin + this.props.numberPerPage;
    let pageList = this.props.list.slice(begin, end);

    return (
      <div>
        {pageList}
        <nav className='ml-5'>
          <ul className="pagination">
            {this.state.currentPage === 1 
              ? "" : 
              <li className="page-item">
                <button className="mt-2 page-link" onClick={()=>this.previousPage()}>
                Previous
                </button>
              </li>}
            {this.state.currentPage === this.props.numberOfPages 
              ? "" : 
              <li className="page-item">
                <button className="mt-2 page-link" onClick={()=>this.nextPage()}>
                Next
                </button>
              </li>}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;