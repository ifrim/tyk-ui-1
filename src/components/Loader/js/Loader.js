import React, { Component } from 'react';

export default class Loader extends Component {
  getCssClasses() {
    let cssClasses = ['loading'];
    const { position } = this.props;

    cssClasses.push(position || 'absolute');

    return cssClasses.join(' ');
  }
  render() {

    return (
      <div className={ this.getCssClasses() }>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    );
  }
}
