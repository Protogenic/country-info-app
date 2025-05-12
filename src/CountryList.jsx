function CountryList({ countries, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {countries.map((country) => (
        <div
          key={country.cca3}
          onClick={() => onSelect(country)}
          className="cursor-pointer border rounded-xl p-3 hover:bg-gray-100"
        >
          <img src={country.flags.svg} alt={country.name.common} className="w-full h-24 object-cover rounded-md" />
          <h2 className="text-lg font-semibold mt-2">{country.name.common}</h2>
          <p className="text-sm text-gray-600">{country.region}</p>
        </div>
      ))}
    </div>
  );
}

export default CountryList;
