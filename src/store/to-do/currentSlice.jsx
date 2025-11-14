import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
  value: "",
  data: "",
    isLoading: false,
    isError: false,
}

export const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    current: (state, action) => {
      state.value = action.payload.id 
      state.data = action.payload.name
    },
  },

})

// Action creators are generated for each case reducer function
export const { current } = currentSlice.actions

export default currentSlice.reducer