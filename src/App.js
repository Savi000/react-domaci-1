import LicnaKarta from "./LicnaKarta/LicnaKarta";
import Knjiga from "./Knjiga/Knjiga";
import Film from "./Film/Film";
import Wrapper from "./Wrapper/Wrapper";
import data from "./data.json";
import "./App.css";

function App() {
  return (
    <div className="sve">
      <Wrapper
        children={data.licnaKartaInfo.map((obj) => (
          <LicnaKarta key={obj.id} info={obj} />
        ))}
      />
      <Wrapper
        children={data.filmInfo.map((obj) => (
          <Film key={obj.id} info={obj} />
        ))}
      />
      <Wrapper
        children={data.knjigaInfo.map((obj) => (
          <Knjiga key={obj.id} info={obj} />
        ))}
      />
    </div>
  );
}

export default App;
