import React from "react";
import "./SocialMediaIcons.css";

class SocialMediaIcons extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="icon-wrapper">
          <a
            className="fuse_social_icons_links"
            href="https://www.facebook.com/natalie.avakian.1"
          >
            <i className="fa fa-facebook fb-awesome-social awesome-social" />
          </a>
          <br />
          <a
            className="fuse_social_icons_links"
            href="https://twitter.com/NatalieAvakian"
          >
            <i className="fa fa-twitter tw-awesome-social awesome-social" />
          </a>
          <br />
          <a
            className="fuse_social_icons_links"
            href="https://www.youtube.com/user/Dancelessonsinla"
          >
            <i className="fa fa-youtube youtube-awesome-social awesome-social" />
          </a>
          <br />
          <a
            className="fuse_social_icons_links"
            href="https://www.instagram.com/natalieavakian/"
          >
            <i className="fa fa-instagram instagram-awesome-social awesome-social" />
          </a>
          <br />
          <a
            className="fuse_social_icons_links"
            href="http://www.yelp.com/biz/natalie-avakian-dance-glendale"
          >
            <i className="fa fa-yelp yelp-awesome-social awesome-social" />
          </a>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default SocialMediaIcons;
