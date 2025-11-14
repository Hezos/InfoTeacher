import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Videos from './components/videos';
import Pictures from './components/pictures';
import Details from './components/details';
import References from './components/references';


const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <App />
  },
  {
    path: "/videos",
    element: 
      <Videos />
  },
  {
    path: "/pictures",
    element: 
      <Pictures/>
  },
  {
    path: "/details",
    element: 
      <Details />
  },
  {
    path: "/references",
    element: 
      <References/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
