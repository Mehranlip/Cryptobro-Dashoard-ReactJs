import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar"

import MainDashboard from "./page/mainDashboard";
import Exchange from "./page/Exchange";
import Wallet from "./page/Wallet";
import Statistics from "./page/Statistics";
import Profile from "./page/Profile";
import Settings from "./page/settings";

function App() {

  return (
    <div className="row m-0">
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/dashboard/exchange" element={< Exchange />} />
        <Route path="/dashboard/wallet" element={<Wallet />} />
        <Route path="/dashboard/statistics" element={<Statistics />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App
