import React from 'react'
import 'antd/dist/reset.css';
import Navbar from './components/common/Navbar/Navbar'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Router from './Router'
import './App.css';
import './index.css'
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './store/StoreSlice';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'
import { ToastContainer } from 'react-toastify';


const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  store:storeReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
      cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




 function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <ToastContainer />
          <div className='h-screen'>
            <Navbar />
            <Router />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
     
  )
}

export default App;