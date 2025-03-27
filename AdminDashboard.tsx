import React, { useState } from 'react';
import { Plus, Train, Clock, MapPin } from 'lucide-react';

const AdminDashboard = () => {
  const [newTrain, setNewTrain] = useState({
    name: '',
    from: '',
    to: '',
    departure: '',
    arrival: '',
    economyPrice: '',
    businessPrice: '',
    totalSeats: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add train creation logic here
    setNewTrain({
      name: '',
      from: '',
      to: '',
      departure: '',
      arrival: '',
      economyPrice: '',
      businessPrice: '',
      totalSeats: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Add New Train</h2>
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Plus className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Train Name
              </label>
              <div className="mt-1 relative">
                <Train className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newTrain.name}
                  onChange={(e) =>
                    setNewTrain({ ...newTrain, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Total Seats
              </label>
              <input
                type="number"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={newTrain.totalSeats}
                onChange={(e) =>
                  setNewTrain({ ...newTrain, totalSeats: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">From</label>
              <div className="mt-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newTrain.from}
                  onChange={(e) =>
                    setNewTrain({ ...newTrain, from: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">To</label>
              <div className="mt-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newTrain.to}
                  onChange={(e) => setNewTrain({ ...newTrain, to: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Departure Time
              </label>
              <div className="mt-1 relative">
                <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="time"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newTrain.departure}
                  onChange={(e) =>
                    setNewTrain({ ...newTrain, departure: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Arrival Time
              </label>
              <div className="mt-1 relative">
                <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="time"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newTrain.arrival}
                  onChange={(e) =>
                    setNewTrain({ ...newTrain, arrival: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Economy Class Price
              </label>
              <div className="mt-1 relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  required
                  className="pl-8 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newTrain.economyPrice}
                  onChange={(e) =>
                    setNewTrain({ ...newTrain, economyPrice: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Business Class Price
              </label>
              <div className="mt-1 relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  required
                  className="pl-8 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newTrain.businessPrice}
                  onChange={(e) =>
                    setNewTrain({ ...newTrain, businessPrice: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Train
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;