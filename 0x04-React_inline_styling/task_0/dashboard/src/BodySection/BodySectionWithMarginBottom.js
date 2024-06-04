import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { title, children } = this.props;
    return(
      <div className='bodySectionWithMargin'>
        <BodySection title={title}>{children}</BodySection>
      </div>
    )
  }
}

export default BodySectionWithMarginBottom;