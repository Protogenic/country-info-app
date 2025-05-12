function CountryDetail({ country, onBack }) {
  return (
    <div>
      <button onClick={onBack} className="mb-4 px-3 py-1 border rounded">← Назад</button>
      <div className="flex gap-6 flex-col md:flex-row">
        <img src={country.flags.svg} alt={country.name.common} className="w-64 rounded shadow" />
        <div>
          <h2 className="text-2xl font-bold">{country.name.common}</h2>
          <p><strong>Столица:</strong> {country.capital?.[0]}</p>
          <p><strong>Население:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Регион:</strong> {country.region}</p>
          <p><strong>Языки:</strong> {Object.values(country.languages || {}).join(", ")}</p>
          <p><strong>Валюты:</strong> {Object.values(country.currencies || {}).map(cur => cur.name).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
