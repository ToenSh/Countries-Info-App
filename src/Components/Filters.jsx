import React from "react";

export default function Filters(props) {
  return (
    <div className="filter-options">
      <div className="filter-options__name">
        <label>
          <input
            type="text"
            name="filter-by-name"
            className="filter-options__inp"
            placeholder="Search for a country..."
            value={props.countryInput}
            onChange={(e) => props.setCountryInput(e.target.value)}
          />
        </label>
      </div>

      <select
        name="regions"
        id="region-select"
        className="filter-options__region"
        value={props.regionInput}
        onChange={(e) => props.setRegionInput(e.target.value)}
      >
        <option value="" disabled hidden>
          Filter by Region
        </option>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}
