import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Train } from 'lucide-react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import SearchTrains from './pages/SearchTrains';
import TrainDetails from './pages/TrainDetails';
import BookedTickets from './pages/BookedTickets';
import Payment from './pages/Payment';
import FareEnquiry from './pages/FareEnquiry';
import ChangePassword from './pages/ChangePassword';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/search" element={<SearchTrains />} />
          <Route path="/train/:id" element={<TrainDetails />} />
          <Route path="/bookings" element={<BookedTickets />} />
          <Route path="/payment/:bookingId" element={<Payment />} />
          <Route path="/fare-enquiry" element={<FareEnquiry />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Navigate to="/search" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App