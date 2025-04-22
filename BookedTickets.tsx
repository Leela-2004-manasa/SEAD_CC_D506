import React from 'react';
import { Train, Calendar, Clock, Users } from 'lucide-react';

const mockBookings = [
  {
    id: 'BK001',
    trainName: 'Express 101',
    from: 'New York',
    to: 'Boston',
    date: '2024-03-20',
    departure: '08:00 AM',
    arrival: '12:00 PM',
    passengers: 2,
    class: 'Economy',
    status: 'Confirmed',
    totalAmount: 150,
  },
  {
    id: 'BK002',
    trainName: 'Coastal Line',
    from: 'Los Angeles',
    to: 'San Francisco',
    date: '2024-03-25',
    departure: '09:30 AM',
    arrival: '03:30 PM',
    passengers: 1,
    class: 'Business',
    status: 'Confirmed',
    totalAmount: 125,
  },
];

const BookedTickets = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">My Bookings</h1>
      <div className="space-y-6">
        {mockBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-blue-600 text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Train className="h-5 w-5" />
                  <span className="font-semibold">{booking.trainName}</span>
                </div>
                <div className="text-sm">
                  Booking ID: <span className="font-mono">{booking.id}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">From</p>
                      <p className="font-semibold">{booking.from}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">To</p>
                      <p className="font-semibold">{booking.to}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>
                        {booking.departure} - {booking.arrival}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Class</p>
                      <p className="font-semibold">{booking.class}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Passengers</p>
                      <p className="font-semibold flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{booking.passengers}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {booking.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Amount</p>
                      <p className="font-semibold text-blue-600">
                        ${booking.totalAmount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Download Ticket
                </button>
                <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedTickets;