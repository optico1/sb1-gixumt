import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Parts from './pages/Parts';
import Services from './pages/Services';
import VehicleInventory from './pages/VehicleInventory';
import Records from './pages/Records';
import Estimates from './pages/Estimates';
import Exports from './pages/Exports';
import Settings from './pages/Settings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/parts" element={<Parts />} />
              <Route path="/services" element={<Services />} />
              <Route path="/inventory" element={<VehicleInventory />} />
              <Route path="/records" element={<Records />} />
              <Route path="/estimates" element={<Estimates />} />
              <Route path="/exports" element={<Exports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;