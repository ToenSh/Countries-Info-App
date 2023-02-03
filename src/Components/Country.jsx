import React from "react";
import { motion } from "framer-motion";

export default function Country(props) {
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      className="country"
      onClick={() => {
        props.toggleDetailedView();
        props.setClickedCountry(props.countryName);
      }}
    >
      <img src={props.flag} alt="flag" className="flag flag-home" />
      <div className="country-info">
        <h4 className="country-name info">{props.countryName}</h4>
        <div className="info">
          Population: <span className="data">{props.population}</span>
        </div>
        <div className="info">
          Region: <span className="data">{props.region}</span>
        </div>
        <div className="info">
          Capital: <span className="data">{props.capital}</span>
        </div>
      </div>
    </motion.article>
  );
}
