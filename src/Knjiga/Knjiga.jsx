import React from "react";
import "./Knjiga.css";
import Slika from "../Slika/Slika";
import { useState } from "react";
const LicnaKarta = ({ info }) => {
  const { naslov, godinaIzdavanja, autor, imgUrl, citat } = info;
  // const [longText, setLongText] = useState(false);
  // const [citatText, setCitatText] = useState(citat.substring(0, 20));

  return (
    <div className="knjiga">
      <Slika src={imgUrl} />
      <h2>{naslov}</h2>
      <div>
        <p className="god">{godinaIzdavanja} </p>
        <p>&nbsp;{autor}</p>
      </div>
      <p className="citat">
        {citat}
        {/* {longText ? citat : citat.substring(0, 20)} */}
        {/* <a onClick={() => setLongText(!longText)}>
          {longText ? `read less` : `...`}
        </a> */}
      </p>
    </div>
  );
};

export default LicnaKarta;
