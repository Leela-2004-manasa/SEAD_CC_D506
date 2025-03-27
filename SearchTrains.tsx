import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const mockTrains = [
  {
    id: 1,
    name: 'Rajdhani Express',
    from: 'New Delhi',
    to: 'Mumbai Central',
    departure: '16:00',
    arrival: '08:00',
    price: 2100,
    seats: 45,
  },
  {
    id: 2,
    name: 'Shatabdi Express',
    from: 'Bangalore',
    to: 'Chennai',
    departure: '06:00',
    arrival: '12:30',
    price: 1500,
    seats: 32,
  },
  {
    id: 3,
    name: 'Duronto Express',
    from: 'Kolkata',
    to: 'New Delhi',
    departure: '15:30',
    arrival: '10:00',
    price: 2500,
    seats: 28,
  },
];

const SearchTrains = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [searchResults, setSearchResults] = useState(mockTrains);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add search logic here
    setSearchResults(mockTrains);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Departure Station"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Arrival Station"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Search Trains</span>
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {searchResults.map((train) => (
          <div
            key={train.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/train/${train.id}`)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{train.name}</h3>
                <p className="text-sm text-gray-500">
                  {train.from} → {train.to}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">₹{train.price}</p>
                <p className="text-sm text-gray-500">{train.seats} seats available</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
              <div>
                <p className="font-semibold">Departure</p>
                <p>{train.departure}</p>
              </div>
              <div>
                <p className="font-semibold">Arrival</p>
                <p>{train.arrival}</p>
              </div>
              <button
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/train/${train.id}`);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchTrains;