import React, { useContext} from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import AppContext from '../App/AppContext'

function Footer() {
  const context = useContext(AppContext);
  return (
    <div className="Footer">
      <div className="App-footer">
        {context.user.isLoggedIn && (<a href='#'>Contact us</a>)}
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default Footer;