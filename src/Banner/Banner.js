import React, { Component } from "react";
import "./banner.scss";
import {
  faEnvelope,
  faMobileAlt,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import IconHref from "../SharedComponents/IconHref/IconHref";
import proPic from "../ProPic.jpg";
class Banner extends Component {
  get iconList() {
    return [
      {
        text: "135 Quincy Ave",
        icon: faAddressCard,
        url: "https://maps.google.com"
      },
      {
        text: "arjun.nair89@outlook.com",
        icon: faEnvelope,
        url: "mailto:arjun.nair89@outlook.com"
      },
      { text: "+1-669-241-9274", icon: faMobileAlt, url: "tel:+1-669-241-9274" }
    ];
  }

  render() {
    const { iconList } = this;
    return (
      <header className="banner">
        <div className="banner-left">
          <div className="banner-heading">
            <h1> Arjun Nair </h1>
          </div>
          <div className="banner-icons">
            <ul>
              {iconList.map(ic => (
                <IconHref {...ic} />
              ))}
            </ul>
          </div>
        </div>
        <div className="banner-image">
          <img src={proPic} alt="profile" />
        </div>
      </header>
    );
  }
}

export default Banner;
