import React, { Component, Fragment } from "react";
import PhotoSlider from "./react-photo-slider";
import test from "my-component";

class App extends Component {
  state = { activePhoto: 0 };

  setActive(index) {
    this.setState({ activePhoto: index });
  }

  render() {
    let buttons = [1, 2, 3].map((data, index) => (
      <button
        className="slider__dot"
        onClick={this.setActive.bind(this, index)}
      >
        {index + 1}
      </button>
    ));

    console.log(test);

    return (
      <Fragment>
        <section class="hero is-info is-fullheight">
          <div class="hero-body" style={{ height: "100vh" }}>
            <PhotoSlider
              style={{ border: "4px solid #000" }}
              photos={[
                "https://images.pexels.com/photos/1168742/pexels-photo-1168742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "https://images.pexels.com/photos/691571/pexels-photo-691571.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "https://images.pexels.com/photos/457044/pexels-photo-457044.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              ]}
              activePhoto={this.state.activePhoto}
            />
          </div>

          {buttons}
        </section>
      </Fragment>
    );
  }
}

export default App;
