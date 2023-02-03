import React from "react";
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import Header from "./Components/Header";
import Filters from "./Components/Filters";
import "./style.css";
import Country from "./Components/Country";
import { motion } from "framer-motion";
import DetailedView from "./Components/DetailedView";

export default function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [regionInput, setRegionInput] = useState("");
  const [clickedCountry, setClickedCountry] = useState("");
  const [detailedView, setDetailedView] = useState(false);
  console.log(detailedView);

  //checking if the user has set a theme preference in their browser settings
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  //creating a stateful theme variable that is tied to localStorage
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  function switchTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  function toggleDetailedView() {
    setDetailedView((prevDetailedView) => !prevDetailedView);
  }

  const countriesElements = countriesData
    ?.filter((country) => {
      if (
        countryInput.toLowerCase() === "" &&
        regionInput.toLowerCase() === ""
      ) {
        return country;
      } else {
        return (
          country.name.common.toLowerCase().includes(countryInput) &&
          country.region.toLowerCase().includes(regionInput)
        );
      }
    })
    .map((country) => {
      return (
        <Country
          key={country.cca2}
          flag={country.flags.svg}
          countryName={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
          setClickedCountry={setClickedCountry}
          toggleDetailedView={toggleDetailedView}
        />
      );
    });

  const detailedCountry = countriesData
    .filter((country) => {
      return clickedCountry === country.name.common;
    })
    .map((country) => {
      return (
        <DetailedView
          key={country.cca2}
          flag={country.flags.svg}
          countryName={country.name.common}
          nativeName={country.name.nativeName.official}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
          subRegion={country.subregion}
          topLevelDomain={country.tld?.[0]}
          currencies={country.currencies.name}
          languages={country.languages}
          borders={country.borders}
        />
      );
    });

  console.log(detailedCountry);

  return (
    <div className="container" data-theme={theme}>
      <Header theme={theme} switchTheme={() => switchTheme()} />
      <main>
        <div className="home">
          {detailedView ? (
            detailedCountry
          ) : (
            <React.Fragment>
              <Filters
                countryInput={countryInput}
                setCountryInput={setCountryInput}
                regionInput={regionInput}
                setRegionInput={setRegionInput}
              />

              <div className="countries-container">{countriesElements}</div>
            </React.Fragment>
          )}
        </div>
      </main>
    </div>
  );
}
