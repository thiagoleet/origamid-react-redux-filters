// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";

const filterColors = (colors) => (product) =>
  !colors.length || colors.includes(product.color);

const filterPrices = (prices) => (product) =>
  (!prices.max || product.price <= prices.max) &&
  (!prices.min || product.price >= prices.min);

const filterProducts = ({ products }) => {
  const { data, filters } = products;
  return data
    .filter(filterColors(filters.colors))
    .filter(filterPrices(filters.prices));
};

const Products = () => {
  const data = useSelector(filterProducts);
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.color}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
