import React, { Component, Fragment } from "react";

import "./react-photo-slider.css";

class photoSlider extends Component {
  constructor() {
    super();
    this.state = { currentPhoto: 0 };
    this.wrapper = React.createRef();
  }

  previousPhoto() {
    this.setState({ currentPhoto: this.state.currentPhoto - 1 });
    this.wrapper.current.scrollBy({
      top: 0,
      left: window.innerWidth * -1,
      behavior: "smooth"
    });
  }

  nextPhoto() {
    this.setState({ currentPhoto: this.state.currentPhoto + 1 });
    this.wrapper.current.scrollBy({
      top: 0,
      left: window.innerWidth,
      behavior: "smooth"
    });
  }

  choosePhoto(index) {
    this.setState({ currentPhoto: index });
    this.wrapper.current.scroll({
      top: 0,
      left: window.innerWidth * index,
      behavior: "smooth"
    });
  }

  render() {
    let photos = this.props.photos.map((data, index) => (
      <img src={data} className="slider__image" key={index} />
    ));

    let buttons = this.props.photos.map((data, index) => (
      <button
        className="slider__dot"
        onClick={this.choosePhoto.bind(this, index)}
      >
        {index + 1}
      </button>
    ));

    return (
      <div className="slider__container">
        <div className="slider__wrapper" ref={this.wrapper}>
          <div className="slider__images">{photos}</div>
        </div>
        <button
          className="slider__button"
          onClick={this.previousPhoto.bind(this)}
        >
          previous
        </button>
        {buttons}
        <button className="slider__button" onClick={this.nextPhoto.bind(this)}>
          next
        </button>
      </div>
    );
  }
}

export default photoSlider;
