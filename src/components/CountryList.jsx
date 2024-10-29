import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on a city map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  //   const countryMap = new Map();
  //   cities.forEach((city) => {
  //     if (!countryMap.has(city.country)) {
  //       countryMap.set(city.country, {
  //         country: city.country,
  //         emoji: city.emoji,
  //       });
  //     }
  //   });

  //   const countries = Array.from(countryMap.values());
  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country} />
      ))}
    </ul>
  );
}

export default CountryList;
