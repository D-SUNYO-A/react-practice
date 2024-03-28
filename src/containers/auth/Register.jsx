import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className="text-gray-600 body-font flex min-h-screen items-center">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Register here to join us
          </h1>
          <p className="leading-relaxed mt-4">
            Tongava maro oh !
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <Link to={`/app`} className="text-white bg-indigo-500 border-0 my-3 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center">
            Save
          </Link>
          <p className="text-xs text-gray-500">
            If you already have an accoumpte, you can directly <Link to={`/login`} className="text-blue-400 hover:underline">log here</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Register