import { Fragment } from "react";
import { useState } from "react";
import styles from "./body.module.css";
import dummy from "./FoodItems/FoodItems";

const Body = () => {
  const [restaurants, setRestaurants] = useState(dummy);
  const [originalMealItems, setOriginaItems] = useState(dummy);
  let [searchValue, setSearchValue] = useState("");
  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  ///Filtering the data along with the search text
  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((res) => {
      return res.name.includes(searchText);
    });
    return filterData;
  }

  function handleClick() {
    let data = filterData(searchValue, restaurants);
    setRestaurants(data);
  }
  if (restaurants.length === 0) {
    <h1>Didnot found the food</h1>;
  }
  return (
    <Fragment>
      <div className={styles.firstPhase}>
        <h1 className={styles.firstPhaseTitle}>
          Get Your <span>Finest</span> Food and order
          <span>Anywhere</span>
        </h1>
      </div>
      <input
        className={styles.input}
        onChange={handleChange}
        type="search"
      ></input>
      <button className={styles.searchButton} onClick={handleClick}>
        Search
      </button>
      <h2>
        We Serve One of the Best Category of Food in the Town.Dont Forgot to Try
        Our Very Delicious Meals.
      </h2>
      <div className={styles.body}>
        {restaurants.map((item) => {
          return (
            <div className={styles.mealItems}>
              <img
                className={styles.img}
                src={require(`./FoodItems/assets/${item.image}`)}
              />
              <p className={styles.mealItemName}>{item.name}</p>
              <p className={styles.mealItemRating}>Rating:{item.rating}</p>
              <p className={styles.mealItemPrice}>Price:{item.price}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default Body;
