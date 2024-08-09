import style from './LogIn.module.scss'

const LogIn = () => {
  return (
    <div className={style.loginContainer}>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <main className="bg-white p-8 rounded-lg  w-full max-w-md text-center">
        <h1 className="text-xs font-bold mb-8 ">MY ACCOUNT</h1>
        <form className="space-y-6">
          <div className="text-left">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="text-left">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <a href="#" className="block mt-4 text-sm text-gray-600 hover:underline">
            Forgot your password?
          </a>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-black rounded-md hover:bg-gray-800"
          >
            Sign In
          </button>
        </form>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-6 py-2 text-sm font-bold text-black border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Create Account
          </a>
        </div>
      </main>
    </div>
    </div>
  );
};

export default LogIn
