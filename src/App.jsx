import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Marketplace from "./pages/Marketplace/Marketplace";
import Layout from "./Components/Layout/Layout";
import MarketPlaceSingle from "./pages/Marketplace/MarketPlaceSingle";
import PlayerProfileSingle from "./pages/Profile/PlayerProfileSingle";
import CategoryAvatar from "./pages/Marketplace/Category/CategoryAvatar";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import ProfileSetting from "./pages/Profile/ProfileSetting";
import ProfilePlayer from "./pages/Profile/ProfilePlayer";
import Faq from "./pages/Faq/Faq";
import Tournament from "./pages/Tournament/Tournament";
import CategoryGaming from "./pages/Marketplace/Category/CategoryGaming";
import CategoryItem from "./pages/Marketplace/Category/CategoryItem";
import Scholarship from "./pages/Scholarship/Scholarship";
import GameCenter from "./pages/Gamecenter/GameCenter";
import Inventory from "./pages/Marketplace/Inventory/Inventory";
import TournamentResult from "./pages/Tournament/TournamentsResults/TournamentResult";
import CreateTournament from "./pages/Tournament/CreateTournament/CreateTournament";
import EditTournament from "./pages/Tournament/EditTournament/EditTournament";
import Landing from "./pages/Landing/Landing";
import Contact from "./pages/Contact/Contact";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icons.min.css";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index defaultActiveKey="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="scholarship" element={<Scholarship />} />
        <Route path="game-center" element={<GameCenter />} />

        <Route
          path="market-place/nft-details/:id"
          element={<MarketPlaceSingle />}
        />
        <Route
          path="player-profile/nft-details/:id"
          element={<PlayerProfileSingle />}
        />
        {/* <Route path="nft-details" element={<MarketPlaceSingle />} /> */}
        <Route path="marketplace/avatar" element={<CategoryAvatar />} />
        <Route path="marketplace/gaming" element={<CategoryGaming />} />
        <Route path="marketplace/item" element={<CategoryItem />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="profile-setting" element={<ProfileSetting />} />
        <Route path="player-profile" element={<ProfilePlayer />} />
        <Route path="help-center" element={<Faq />} />

        <Route path="tournaments" element={<Tournament />} />
        <Route path="tournament-result" element={<TournamentResult />} />
        <Route path="edit-tournament" element={<EditTournament />} />
      </Route>
      <Route path="landing-page" element={<Landing />} />
      <Route path="contact" element={<Contact />} />
      <Route path="create-tournament" element={<CreateTournament />} />
    </Routes>
  );
}

export default App;
