import React, { Component} from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  App: {
    boxSizing: 'border-box',
    height: '100%',
  },
  
  AppBody: {
    margin: '60px 0 0 20px',
  },

  AppFooter: {
    textAlign: 'center'
  }
  
})

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
]


class App extends Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
  }

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {}
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  //  removes the event listener to avoid memory leaks.
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    return (
      <>
        <Notifications displayDrawer={true} listNotifications={listNotifications} />
        <div className={css(styles.App)}>
          <Header />
          <div className={css(styles.AppBody)}>
            {this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList  listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : ( 
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </BodySection>
          </div>
          <div className={css(styles.AppFooter)}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}


export default App;
