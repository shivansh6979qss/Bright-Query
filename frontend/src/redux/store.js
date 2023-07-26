import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './features/DataList';
import SearchReducer from './features/DataSearch';
const store = configureStore({
  reducer: {
    data: DataReducer,
    search: SearchReducer,
  },
});

export default store;
