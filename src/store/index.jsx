import { configureStore } from '@reduxjs/toolkit'
import fetchReducer from './to-do/fetchSlice'
import deleteReducer from './to-do/deleteSlice'
import editReducer from './to-do/editSlice'
import currentReducer from './to-do/currentSlice'
import addReducer from './to-do/addSlice'


export const store = configureStore({
  reducer: {
    fetch: fetchReducer,
    delete: deleteReducer,
    edit: editReducer,
    current: currentReducer,
    add: addReducer,

  },
})