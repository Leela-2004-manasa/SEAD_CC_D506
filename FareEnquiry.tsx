import React, { useState } from 'react';
import { Search, Train } from 'lucide-react';

const mockFares = [
  {
    from: 'New Delhi',
    to: 'Mumbai Central',
    classes: [
      { name: 'Sleeper', fare: 1200 },
      { name: '3AC', fare: 2100 },
      { name: '2AC', fare: 2800 },
      { name: '1AC', fare: 4500 },
    ],
  },
  {
    from: 'Bangalore',
    to: 'Chennai',
    classes: [
      { name: 'Sleeper', fare: 800 },
      { name: '3AC', fare: 1500 },
      { name: '2AC', fare: 2000 },
      { name: '1AC', fare: 3200 },
    ],
  },
  {
    from: 'Kolkata',
    to: 'New Delhi',
    classes: [
      { name: 'Sleeper', fare: 1500 },
      { name: '3AC', fare: 2500 },
      { name: '2AC', fare: 3200 },
      { name: '1AC', fare: 5000 },
    ],
  },
];

const FareEnquiry = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [searchResults, setSearchResults] = useState(mockFares);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add fare search logic here
    setSearchResults(mockFares);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Fare Enquiry</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Departure Station"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Arrival Station"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Check Fares</span>
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {searchResults.map((route, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Train className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">
                {route.from} → {route.to}
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {route.classes.map((classType, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-lg p-4 flex justify-between items-center"
                >
                  <span className="font-medium">{classType.name}</span>
                  <span className="text-lg font-bold text-blue-600">
                    ₹{classType.fare}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FareEnquiry;