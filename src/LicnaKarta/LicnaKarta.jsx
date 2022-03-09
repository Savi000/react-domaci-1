import React from "react";
import "./LicnaKarta.css";
import Slika from "../Slika/Slika";

const LicnaKarta = ({ info }) => {
  const { ime, prezime, datumRodjenja, grad, imgUrl } = info;
  return (
    <div className="licna-karta">
      <div className="background">
        <p>{grad}</p>
      </div>
      <div className="slika-div">
        <Slika src={imgUrl} />
      </div>
      <div className="opis">
        <h3 className="imeIprezime">
          {ime} {prezime}
        </h3>
        <p className="datum">{datumRodjenja}</p>
      </div>
    </div>
  );
};

export default LicnaKarta;
