import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Train, Search, Ticket, LogIn } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Train className="h-8 w-8" />
            <span className="text-xl font-bold">TrainTickets</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/search"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/search') ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </Link>
            
            <Link
              to="/bookings"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/bookings') ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              <Ticket className="h-4 w-4" />
              <span>My Bookings</span>
            </Link>
            
            <Link
              to="/login"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/login') ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;