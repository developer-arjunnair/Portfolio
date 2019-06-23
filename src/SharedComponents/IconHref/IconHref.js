import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./iconHref.scss";

export default function IconHref({ icon, url, text }) {
  return (
    <li>
      <a href={url} className="iconHref">
        <div className="iconHref-icon">
          <FontAwesomeIcon icon={icon} pull="left" size="1x" />
        </div>
        <div className="iconHref-text">{text}</div>
      </a>
    </li>
  );
}
