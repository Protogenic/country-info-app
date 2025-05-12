import { useState, useEffect } from "react";
import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl mb-4">🌍 Страны мира</h1>
      {selectedCountry ? (
        <CountryDetail country={selectedCountry} onBack={() => setSelectedCountry(null)} />
      ) : (
        <CountryList countries={countries} onSelect={setSelectedCountry} />
      )}
    </div>
  );
}

export default App;
