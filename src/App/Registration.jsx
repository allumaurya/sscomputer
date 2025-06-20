import React from 'react'

export default function Registration() {
  return (
   <div className=" bg-blue-50  mb-4 flex  justify-center mt-2 p-4">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">Student Registration <span className='text-red-600'>Form</span></h2>

        <div className="mb-4">
          <label className="block font-medium text-start">Student Name</label>
          <input type="text"className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block font-medium text-start">Mobile No.</label>
            <input type="text" className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="w-1/2">
            <label className="block font-medium text-start">Email Id</label>
            <input type="email" className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block font-medium text-start">Father Name</label>
            <input type="text" className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="w-1/2">
            <label className="block font-medium text-start">Mother Name</label>
            <input type="text" className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block font-medium text-start">Select Course</label>
            <select className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select...</option>
              <option>PHOTOSHOP</option>
              <option>SQL</option>
              <option>PQL</option>
              <option>PYTHON</option>
              <option>HARDWARE</option>
              <option>NETEORKING</option>
             
            </select>
          </div>
          <div className="w-1/2">
            <label className="block font-medium text-start">Date Of Birth</label>
            <input type="date" className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block font-medium text-start">Gender</label>
            <div className="flex gap-4 mt-1">
              <label><input type="radio" name="gender" value="male" /> Male</label>
              <label><input type="radio" name="gender" value="female" /> Female</label>
            </div>
          </div>
          <div className="w-1/2">
            <label className="block font-medium text-start">Student Photo</label>
            <input type="file" className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-start">Select Branch</label>
          <div className="flex gap-4 mt-1">
            <label><input type="checkbox" /> DAC</label>
            <label><input type="checkbox" /> ADCA</label>
            <label><input type="checkbox" /> TALLY</label>
            <label><input type="checkbox" /> CCC</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-start">Address</label>
          <textarea className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </div>

  )
}
