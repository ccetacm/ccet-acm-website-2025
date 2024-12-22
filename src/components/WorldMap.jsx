import React from "react";
import worldmap from "../acm-assets-2/worldmap.png";
import '../styles/map.css';

const WorldMap = () => {
  return (
    <div>
      <div className="world-map">
        <img src={worldmap} alt="world map" />

        <div className="pin usa">
          <span>United States</span>
        </div>
        <div className="pin usa">
          <span>United States</span>
        </div>
        <div className="pin france">
          <span>France</span>
        </div>
        <div className="pin sweden">
          <span>Sweden</span>
        </div>
        <div className="pin south-africa">
          <span>South Africa</span>
        </div>
        <div className="pin brazil">
          <span>Brazil</span>
        </div>
        <div className="pin china">
          <span>China</span>
        </div>
        <div className="pin australia">
          <span>Australia</span>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
