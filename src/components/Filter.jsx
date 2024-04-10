import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUniqueColors, changeFilters } from "../store/reducers/products";

const Filter = () => {
  const colors = useSelector(selectUniqueColors);
  const dispatch = useDispatch();

  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [selectedColors, setSelectedColors] = React.useState([]);

  function handleColorChange({ target }) {
    const { value, checked } = target;

    if (checked) {
      setSelectedColors([...selectedColors, value]);
    } else {
      setSelectedColors(selectedColors.filter((color) => color !== value));
    }
  }

  function handleColorChecket(color) {
    return selectedColors.includes(color);
  }

  React.useEffect(() => {
    dispatch(changeFilters({ name: "colors", value: selectedColors }));
  }, [selectedColors, dispatch]);

  React.useEffect(() => {
    dispatch(
      changeFilters({
        name: "prices",
        value: {
          min: Number(minPrice),
          max: Number(maxPrice),
        },
      })
    );
  }, [minPrice, maxPrice, dispatch]);

  return (
    <div>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      {colors.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            onChange={handleColorChange}
            checked={handleColorChecket(color)}
          />
          {color}
        </label>
      ))}
    </div>
  );
};

export default Filter;
