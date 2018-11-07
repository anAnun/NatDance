import React from "react";
import image1 from "./images/Slider1.jpg";
import image2 from "./images/Slider2.jpg";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="slideshow">
          <div className="slideshow-container slide">
            <div className="slider1-css">
              <img src={image1} />
              <img src={image2} className="img1" />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
