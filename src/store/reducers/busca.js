import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const buscaSlice = createSlice({
  name: "busca",
  initialState,
  reducers: {
    mudarBusca: (state, { payload }) => payload,
    resetarBuscar: () => initialState,
  },
});

export const { mudarBusca, resetarBuscar } = buscaSlice.actions;

export default buscaSlice.reducer;
