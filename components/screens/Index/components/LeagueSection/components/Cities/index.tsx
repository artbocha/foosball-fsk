import City from "../City";

const Cities = ({cities}) => {
  return (
    <div>
      {cities.map((city) => (
        <City key={city.key} city={city} />
      ))}
    </div>
  );
};

export default Cities;
