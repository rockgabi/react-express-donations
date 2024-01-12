import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Landing from './pages/Landing';
import Admin from './pages/Admin';
import Organizations, { Create, Update, List } from './components/organizations';
import Campaings from './components/campaigns';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/" element={<App />}>
        <Route path="gallery" element={<Gallery />} />
        <Route path="admin" element={<Admin />}>
          <Route path="organizations" element={<Organizations />}>
            <Route path="" element={<List />} />
            <Route path="new" element={<Create />} />
            <Route path=":id" element={<Update />} />
          </Route>
          <Route path="campaigns" element={<Campaings />} />
        </Route>
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
