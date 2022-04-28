import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// Components
import ListCities from "./components/ListCities";
import ListCountries from "./components/ListCountries";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="continents/:id/countries" element={<ListCountries />} />
      <Route path="*" element={
        <main>
          <div className="container mt-5">
            <p>There's nothing here!</p>
          </div>
        </main>}
      />
      <Route path="continents/countries/:id/cities" element={<ListCities />}/>
    </Routes>
  </BrowserRouter>
);