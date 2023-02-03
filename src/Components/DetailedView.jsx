import React from "react";
import { motion } from "framer-motion";

export default function DetailedView(props) {
  return (
    <div className="detailed-view">
      <motion.button className="back-btn" onClick={props.toggleDetailedView}>
        <i className="fa-solid fa-arrow-left-long"></i>
        Back
      </motion.button>
      <img src={props.flag} alt="flag" className="flag flag-detailed" />
      <div className="detailed-info">
        <div className="desktop-grid-style">
          <h2>{props.countryName}</h2>
          <div className="info">
            Native Name: <span className="data">{props.nativeName}</span>
          </div>
          <div className="info">
            Population: <span className="data">{props.population}</span>
          </div>
          <div className="info">
            Region: <span className="data">{props.region}</span>
          </div>
          <div className="info">
            Sub Region: <span className="data">{props.subRegion}</span>
          </div>
          <div className="info">
            Capital: <span className="data">{props.Capital}</span>
          </div>
        </div>
        <div className="extra-info">
          <div className="info">
            Top Level Domain:{" "}
            <span className="data">{props.topLevelDomain}</span>
          </div>
          <div className="info">
            Currencies: <span className="data">{props.currencies}</span>
          </div>
          <div className="info">
            Languages: <span className="data">{props.languages}</span>
          </div>
        </div>

        <div className="border-info">
          <span className="info">Border Countries: </span>
          <div className="borders">
            <button>France</button>
            <button>Germany</button>
            <button>Netherlands</button>
          </div>
        </div>
      </div>
    </div>
  );
}
