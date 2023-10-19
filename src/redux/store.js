import {configureStore} from "@reduxjs/toolkit";
// import { contactsReducer } from './contactsSlice';
import persistStore from 'redux-persist/es/persistStore';
import { persistedContactReducer } from './ContactsSlice';
import { filterReducer } from './filtersSlice';

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

// const store = configureStore ({
//     contacts: [],
//     filter: ""
// })
// export default store;

export const store = configureStore({
    reducer: {
      contacts: persistedContactReducer,
      filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  export const persistor = persistStore(store);