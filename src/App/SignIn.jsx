import React from 'react'

export default function SignIn() {
  return (
      <div className=" flex items-center  bg-blue-50  mt-4 mb-4 px-4">
      <div className="w-full max-w-md bg-white p-5 rounded-xl">
        <h2 className="text-3xl font-bold mb-2 ">Sign <span className='text-red-600'>in</span></h2>
        <p className="mb-6 text-sm">
          or <a href="#" className="text-blue-600 hover:underline">create an account</a>
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" defaultChecked />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
        <div className="my-4">
          <button className="w-full py-2 border flex items-center justify-center gap-2 rounded">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google logo"
              className="h-5 w-5"
            />
            Sign in with Google
          </button>
        </div>
        <div className="text-sm text-blue-600 hover:underline text-center">
          <a href="#">Forgotten your password?</a>
        </div>
      </div>
    </div>
  )
}
