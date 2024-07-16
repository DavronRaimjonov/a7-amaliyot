import { createSlice } from "@reduxjs/toolkit";
import { getStore, setStore } from "../store";

const initialState = {
  data: getStore("shop") || [],
};
const shopSlice = createSlice({
  name: "Shop",
  initialState,
  reducers: {
    getData(state, { payload }) {
      state.data = [
        ...state.data,
        { ...payload, count: 1, userPrice: payload.price * 1 },
      ];
      setStore("shop", state.data);
    },
    deleteProduct(state, { payload }) {
      state.data = state.data.filter((value) => value.id != payload);
      setStore("shop", state.data);
    },
    increment(state, { payload }) {
      state.data = state.data.map((value) =>
        value.id === payload
          ? {
              ...value,
              userPrice: (value.count + 1) * value.price,
              count: value.count + 1,
            }
          : value
      );
      setStore("shop", state.data);
    },
    decrement(state, { payload }) {
      state.data = state.data.map((value) =>
        value.id === payload
          ? {
              ...value,
              count: value.count <= 1 ? 1 : value.count - 1,
              userPrice: (value.count <= 1 ? 1 : value.count - 1) * value.price,
            }
          : value
      );
      setStore("shop", state.data);
    },
  },
});

export const { getData, deleteProduct, increment, decrement } =
  shopSlice.actions;
export default shopSlice.reducer;
