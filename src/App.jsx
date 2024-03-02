import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/restaurants/:id" element={<DetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
