import React from "react";
import image1 from "./images/Slider1.jpg";
import image2 from "./images/Slider2.jpg";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container margin">
          <section className="slideshow">
            <div className="slideshow-container slide">
              <div className="slider1-css">
                <img alt="" src={image1} className="auto-size" />
                <img alt="" src={image2} className="img1 auto-size" />
              </div>
            </div>
          </section>

          <div className="block content-1">
            <div className="text">
              <div className="text-header">WELCOME</div>
              <span className="liner" />
              An LA native, Natalie Avakian, grew up with soul, energy and a
              burning desire to dance since age 7. After many years of training
              by world renowned coaches and choreographers, she joined numerous
              teams and became the principal dancer of Son Y Pasos and Salsa
              Brava to name a few- later going on to partner numerous Latin
              champions, sharing the stage with them, even performing at sold
              out concerts at The Nokia Theatre in LA. She has performed all
              over the West Coast where she is known for her technique and
              performance skills. She has studied Salsa (NY and LA style), Hip
              Hop, Bachata, Jazz, Ballroom, Latin and many more social dances
              including Bachata. You might have seen her performances and
              competitions at National Dance Congresses and NDCA events. Later
              in her career as a professional dancer, Natalie was signed to one
              of the most prestigious dance agencies in Los Angeles, BLOC LA
              where she was signed for 3 years. Later, she decided to open her
              own business under the name AD Productions and runs one of the
              hottest dance social clubs in Los Angeles located in Studio City
              called “Salsa Wednesdays” at Club Rain where she motivates and
              teaches her students, gathering attendees up to 300 weekly. During
              her busy schedule as a performer and coach, she enjoys and devotes
              time for her students to become the best dancers they can be.
              <div>
                <button>CALL US TODAY</button>
                <button>EMAIL US</button>
                <button>BOOK TODAY</button>
              </div>
            </div>
          </div>
          <div className="block content-2">
            <div className="text text-header">UPCOMING EVENTS</div>
            <span className="liner" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
