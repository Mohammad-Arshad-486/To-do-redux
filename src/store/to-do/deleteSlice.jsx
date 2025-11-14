import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const deleteData = createAsyncThunk('deleteData', async (id)=> {
  const res = await fetch(`https://6912c0b452a60f10c822924e.mockapi.io/Task/${id}`, { method: "DELETE" });
  return id

});


export const deleteSlice = createSlice({
  name: 'delete',
  initialState:{
  data: [],
  isLoading: false,
  isError: false,
},
  extraReducers: (builder) => {
    builder.addCase(deleteData.rejected, (state, action) => {
      state.isError= true;
      console.log("Error", action.payload);
    });
    builder.addCase(deleteData.fulfilled, (state, action) => {
      state.data =state.data.filter((item) => item.id !== action.payload);
     
    });
    
  }
})


export default deleteSlice.reducer