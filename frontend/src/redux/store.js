import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import wishlistReducer from './wishlistSlice'; 
import { loadState, saveState } from './localStorage';

const rootReducer = combineReducers({
  form: formReducer,
  wishlist: wishlistReducer,
});

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState, 
});

store.subscribe(() => {
  saveState({
    wishlist: store.getState().wishlist, 
  });
});
export default store;
