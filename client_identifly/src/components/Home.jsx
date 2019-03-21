import React, { Component } from 'react';
import axios from 'axios';
import TypesSidebar from './TypesSidebar';
import Butterflies from './Butterflies';
import Header from './Header';

class Home extends Component {

  state = {
    butterflyInfo: [],
    filterType: 'All'
  }

  async componentDidMount() {
    this.getButterflies();
  }
  
  getButterflies = async () => {
    let res = await axios.get('/butterflies');
    this.setState({
      butterflyInfo: res.data
    })
  }

  filterTypeBy = (type) => {
    this.setState({
      filterType: type
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
          <div className='row'>
            <TypesSidebar filterFn={this.filterTypeBy} types={this.state.butterflyInfo}/>
            <Butterflies 
              getButterfliesFn={this.getButterflies} 
              filteredType={this.state.filterType} 
              types={this.state.butterflyInfo}/>
          </div>
        </div>
        {/* <div className='p-4'>Icons made by <a 
            href="https://www.freepik.com/" 
            title="Freepik">Freepik</a> from <a 
            href="https://www.flaticon.com/" 			    
            title="Flaticon">www.flaticon.com</a> is licensed by <a 
            href="http://creativecommons.org/licenses/by/3.0/" 			    
            title="Creative Commons BY 3.0" 
            target="_blank">CC 3.0 BY
          </a>
        </div> */}
      </div>
    );
  }
}

export default Home;