import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import './App.css';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn = false }) {
  return (
    <>
      <Notifications displayDrawer={true} />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
