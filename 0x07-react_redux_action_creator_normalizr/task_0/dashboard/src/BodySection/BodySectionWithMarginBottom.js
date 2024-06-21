import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css} from 'aphrodite'


const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  }
})


class BodySectionWithMarginBottom extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { title, children } = this.props;
    return(
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection title={title}>{children}</BodySection>
      </div>
    )
  }
}

export default BodySectionWithMarginBottom;