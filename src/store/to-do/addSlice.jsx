import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const addData = createAsyncThunk(
  "addData",
  async (addedData) => {
    const res = await fetch(
      `https://6912c0b452a60f10c822924e.mockapi.io/Task`,
     {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addedData),
      }
    );

    const result = await res.json();
    console.log("Added Data", result)
    return result; // return the updated item
  }
);



export const editSlice = createSlice({
  name: "add",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default editSlice.reducer;
