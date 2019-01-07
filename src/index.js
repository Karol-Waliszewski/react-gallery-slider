import React, { Component } from "react";

import "./react-photo-slider.css";
import Arrow from "./arrow.svg";

class photoSlider extends Component {
    constructor() {
        super();
        this.state = { currentPhoto: 0 };
        this.wrapper = React.createRef();
        this.container = React.createRef();
    }

    previousPhoto() {
        this.setState({ currentPhoto: this.state.currentPhoto - 1 });
        this.wrapper.current.scrollBy({
            top: 0,
            left: this.container.current.clientWidth * -1,
            behavior: "smooth"
        });
    }

    nextPhoto() {
        this.setState({ currentPhoto: this.state.currentPhoto + 1 });
        this.wrapper.current.scrollBy({
            top: 0,
            left: this.container.current.clientWidth,
            behavior: "smooth"
        });
    }

    choosePhoto(index) {
        this.setState({ currentPhoto: index });
        this.wrapper.current.scroll({
            top: 0,
            left: this.container.current.clientWidth * index,
            behavior: "smooth"
        });
    }

    componentWillReceiveProps(newProps) {
        if (typeof newProps.activePhoto != "undefined") {
            this.choosePhoto(newProps.activePhoto);
        }
    }

    render() {
        let photos = this.props.photos.map((data, index) => (
            <img src={data} className="slider__image" key={index} />
        ));

        return <div className="slider__container" style={this.props.style} ref={this.container}>
            <div className="slider__wrapper" ref={this.wrapper}>
                <div className="slider__images">{photos}</div>
            </div>
            <button className="slider__button--left" onClick={this.previousPhoto.bind(this)}>
                <img src={Arrow} alt="arrow pointing to the left" />
            </button>
            <button className="slider__button--right" onClick={this.nextPhoto.bind(this)}>
                <img src={Arrow} alt="arrow pointing to the right" />
            </button>
        </div>;
    }
}

export default photoSlider;
