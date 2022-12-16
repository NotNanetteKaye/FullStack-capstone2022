// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DarlingDreamsPage from "./pages/DarlingDreamsPage/DarlingDreams";
import MusicPage from "./pages/MusicPage/MusicPage";
import FoodPage from "./pages/FoodPage/FoodPage";
import BusinessPage from "./pages/BusinessesPage/BusinessPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/music" element={<MusicPage />}/>
        <Route path="/food" element={<FoodPage />}/> 
        <Route path="/business" element={<BusinessPage />}/>
        <Route path="/events" element={<EventsPage />}/>
        {/* <Route path="/favorites" element={<FavoritesPage />}/>  */}
        {/* <Route path="/darlingdreams" element={<DarlingDreamsPage/>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
