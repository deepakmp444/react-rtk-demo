import { createSlice } from "@reduxjs/toolkit";

import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
  numOfIce: 20,
};

const icecreamSlice = createSlice({
  name: "iceicream",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIce--;
    },
    restocked: (state, action) => {
      state.numOfIce += action.payload;
    },
  },
  // first way of using extra reducer
  // extraReducers:{
  //   ['cake/ordered']: (state) =>{
  //     state.numOfIce--;
  //   },
  // }
  // Recommended
  extraReducers: builder => {
    builder.addCase(cakeOrdered, state => {
      state.numOfIce
    })
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
