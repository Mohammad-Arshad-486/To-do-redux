import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchData = createAsyncThunk('fetchData', async ()=> {
  const res = await fetch('https://6912c0b452a60f10c822924e.mockapi.io/Task');
  return res.json();

});


export const fetchSlice = createSlice({
  name: 'fetch',
  initialState:{
  data: null,
  isLoading: false,
  isError: false,
},
  extraReducers: (builder) => {
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isError= true;
      console.log("Error", action.payload);
    });
    builder.addCase(fetchData.pending, (state, action)=> {
      state.isLoading= true
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading= false;
      state.data= action.payload;
    })
  }
})

// Action creators are generated for each case reducer function

export default fetchSlice.reducer