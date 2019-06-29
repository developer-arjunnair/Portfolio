import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./iconHref.scss";

const displayElement = (showOnMobile, isMobile) => {
  if (isMobile) {
    return showOnMobile;
  }
  return true;
};

export default function IconHref({ icon, url, text, showOnMobile, isMobile }) {
  return displayElement(showOnMobile, isMobile) ? (
    <li>
      <a href={url} className="iconHref">
        {!isMobile && (
          <div className="iconHref-icon">
            <FontAwesomeIcon icon={icon} pull="left" size="1x" />
          </div>
        )}
        <div className="iconHref-text">{text}</div>
      </a>
    </li>
  ) : null;
}
