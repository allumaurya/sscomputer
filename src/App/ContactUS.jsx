import React from 'react'

export default function ContactUS() {
  return (
    <div>
          <div className="bg-blue-50 mt-2 mb-4 flex justify-center  px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Contact US</h2>
        
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Please enter first name..."
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Please enter last name..."
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <input
              type="email"
              placeholder="Please enter email..."
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <input
              type="tel"
              placeholder="Please enter phone number..."
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>

          <textarea
            placeholder="Please enter query..."
            rows="4"
            className="border border-gray-300 rounded-md px-4 py-2 w-full resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-6 text-blue-500 text-xl">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-google"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
    </div>
  )
}
