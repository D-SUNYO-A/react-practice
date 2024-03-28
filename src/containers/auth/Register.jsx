import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="flex items-center min-h-screen text-gray-600 body-font">
      <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
        <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
          <h1 className="text-3xl font-medium text-gray-900 title-font">
            Register here to join us
          </h1>
          <p className="mt-4 leading-relaxed">Tongava maro oh !</p>
        </div>
        <div className="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="text-sm leading-7 text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <Link
            to={`/app`}
            className="px-8 py-2 my-3 text-lg text-center text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
          >
            Save
          </Link>
          <p className="text-xs text-gray-500">
            If you already have an accoumpte, you can directly{" "}
            <Link to={`/login`} className="text-blue-400 hover:underline">
              log here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
