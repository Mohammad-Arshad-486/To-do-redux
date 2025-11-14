import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const editData = createAsyncThunk(
  "editData",
  async ({ id, updatedData }) => {
    const res = await fetch(
      `https://6912c0b452a60f10c822924e.mockapi.io/Task/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      }
    );

    const result = await res.json();
    console.log("Updated", result)
    return result; // return the updated item
  }
);



export const editSlice = createSlice({
  name: "edit",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(editData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.map((item) =>
          item.id === action.payload.id ? result : item
        );
      })
      .addCase(editData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default editSlice.reducer;
