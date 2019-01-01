import React, { Component, Fragment } from "react";
import PhotoSlider from "./react-photo-slider";

class App extends Component {
  render() {
    return (
      <Fragment>
        <section class="hero is-info is-fullheight">
          <div class="hero-body" style={{ height: "100vh" }}>
            <PhotoSlider
              photos={[
                "https://images.pexels.com/photos/1168742/pexels-photo-1168742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "https://images.pexels.com/photos/691571/pexels-photo-691571.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "https://images.pexels.com/photos/457044/pexels-photo-457044.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              ]}
            />
          </div>

          {/* <div class="hero-body">
            <div class="container has-text-centered">
              <div class="column is-6 is-offset-3">
                <h1 class="title">Coming Soon</h1>
                <h2 class="subtitle">
                  $this is the best software platform for running an internet
                  business. We handle billions of dollars every year for
                  forward-thinking businesses around the world.
                </h2>
              </div>
            </div>
          </div> */}
        </section>
      </Fragment>
    );
  }
}

export default App;
