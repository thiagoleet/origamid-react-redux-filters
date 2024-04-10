import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";

export const selectUniqueColors = ({ products }) =>
  Array.from(new Set(products.data.map(({ color }) => color)));

const slice = createSlice({
  name: "products",
  initialState: {
    data,
    filters: {
      colors: [],
      prices: {
        max: 0,
        min: 0,
      },
    },
  },
  reducers: {
    changeFilters: (state, { payload }) => {
      state.filters[payload.name] = payload.value;
    },
  },
});

export const { changeFilters } = slice.actions;
export default slice.reducer;
