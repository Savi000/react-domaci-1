import React from "react";
import { useState } from "react";
import "./Film.css";

const LicnaKarta = ({ info }) => {
  const { naziv, godina, zanr, reziser, glumci, imgUrl } = info;

  const [opened, setOpened] = useState(false);

  return (
    <div onClick={() => setOpened(!opened)} className={`flip-card`}>
      <div className={`flip-card-inner ${opened && "open"}`}>
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className="flip-card-front"
        >
          <div>
            <h3 className="naziv">{naziv}</h3>
            <p>{godina}</p>
          </div>
        </div>
        <div onClick={() => setOpened(!opened)} className="flip-card-back">
          <div>
            <p>
              <b>genre: </b>
              {zanr}
            </p>
            <p>
              <b>producer: </b>
              {reziser}
            </p>
            <b>actors: </b>
            {glumci.map((ime, index) => (
              <p key={index}>{ime}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
    // <div
    //   onClick={() => setOpened(!opened)}
    //   style={{ backgroundImage: `url(${imgUrl}) ` }}
    //   className={`film ${opened && "hideMain"}`}
    // >

    //   <div className="main-page-text">
    //     <p className="naziv">{naziv}</p>
    //     <p>{godina}</p>
    //   </div>
    //   <div
    //     onClick={() => setOpened(!opened)}
    //     className={`back-page-text ${opened && "displayBack"}`}
    //   >
    //     <p>genre:{zanr}</p>
    //     <p>producer:{reziser}</p>
    //     actors:
    //     {glumci.map((ime) => (
    //       <p>{ime}</p>
    //     ))}
    //   </div>

    // </div>
  );
};

export default LicnaKarta;
