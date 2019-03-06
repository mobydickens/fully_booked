import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import butterflyLogo from './pictures/beautiful-butterfly-silhouette.svg'
import TypesSidebar from './components/TypesSidebar';
import Butterflies from './components/Butterflies';

class App extends Component {
  state = {
    butterflyInfo: []
  }


  async componentDidMount() {
    let res = await axios.get('/butterflies');
    this.setState({
      butterflyInfo: res.data
    })
  }

  render() {
    console.log(this.state.butterflyInfo)
    return (
      <div>
        <div className='d-flex p-4 bg-primary text-white'>
          <h1 className='text-center title mr-4'>IDENTIFLY</h1>
          <img src={butterflyLogo} alt="buttfly"/>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <TypesSidebar types={this.state.butterflyInfo}/>
            <Butterflies types={this.state.butterflyInfo}/>
          </div>
        </div>
        <div className='p-4'>Icons made by <a 
            href="https://www.freepik.com/" 
            title="Freepik">Freepik</a> from <a 
            href="https://www.flaticon.com/" 			    
            title="Flaticon">www.flaticon.com</a> is licensed by <a 
            href="http://creativecommons.org/licenses/by/3.0/" 			    
            title="Creative Commons BY 3.0" 
            target="_blank">CC 3.0 BY
          </a>
        </div>
      </div>
    );
  }
}

export default App;

