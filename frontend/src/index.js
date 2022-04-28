import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';


// Components
import ListCities from "./components/ListCities";
import ListCountries from "./components/ListCountries";
import Menu from "./components/Menu";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><Menu />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="continents/:id/countries" element={<ListCountries />} />
      <Route path="*" element={<main>
        <div className="container mt-5">
          <p>There's nothing here!</p>
        </div>
      </main>} />
      <Route path="continents/countries/:id/cities" element={<ListCities />} />
    </Routes>
  </BrowserRouter></>
);