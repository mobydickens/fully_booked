import React from 'react';
import { Link } from 'react-router-dom';
import butterflyLogo from '../pictures/beautiful-butterfly-silhouette.svg';

function Header() {

    return (
      <div className='d-flex p-4 bg-primary'>
        <Link className='text-decoration-none' to='/'><h1 className='text-white text-center title mr-4'>IDENTIFLY</h1></Link>
        <img src={butterflyLogo} alt="butterfly"/>
      </div>
    );
}

export default Header;