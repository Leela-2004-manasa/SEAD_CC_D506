import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Train, Clock, Users, CreditCard } from 'lucide-react';

const mockTrain = {
  id: 1,
  name: 'Rajdhani Express',
  from: 'New Delhi',
  to: 'Mumbai Central',
  departure: '16:00',
  arrival: '08:00',
  duration: '16h',
  amenities: ['Pantry Car', 'Bedroll', 'Reading Light', 'Mobile Charging'],
  classes: [
    { name: 'Sleeper', price: 1200, seats: 72 },
    { name: '3AC', price: 2100, seats: 64 },
    { name: '2AC', price: 2800, seats: 48 },
    { name: '1AC', price: 4500, seats: 24 },
  ],
};

const TrainDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState(mockTrain.classes[0]);
  const [passengers, setPassengers] = useState(1);

  const handleBook = () => {
    // Add booking logic here
    navigate('/bookings');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{mockTrain.name}</h1>
              <p className="text-blue-100">
                {mockTrain.from} → {mockTrain.to}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">₹{selectedClass.price}</p>
              <p className="text-blue-100">per person</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Train className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Train Number</p>
                <p className="font-semibold">#{mockTrain.id}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold">{mockTrain.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Available Seats</p>
                <p className="font-semibold">{selectedClass.seats}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mockTrain.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="bg-gray-50 rounded-lg p-3 text-center text-sm"
                >
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-lg font-semibold mb-4">Book Your Ticket</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Travel Class
                </label>
                <select
                  value={selectedClass.name}
                  onChange={(e) =>
                    setSelectedClass(
                      mockTrain.classes.find((c) => c.name === e.target.value) ||
                        mockTrain.classes[0]
                    )
                  }
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  {mockTrain.classes.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name} - ₹{c.price}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Passengers
                </label>
                <input
                  type="number"
                  min="1"
                  max={selectedClass.seats}
                  value={passengers}
                  onChange={(e) => setPassengers(parseInt(e.target.value))}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total Amount</span>
                <span className="text-2xl font-bold text-blue-600">
                  ₹{selectedClass.price * passengers}
                </span>
              </div>
              <button
                onClick={handleBook}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
              >
                <CreditCard className="h-5 w-5" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainDetails;