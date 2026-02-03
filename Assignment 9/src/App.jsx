import React from 'react'
import png from './assets/pngegg.png';

const App = () => {
  return (
    <div className='bg-linear-to-r from-fuchsia-300 to-cyan-100 h-screen w-screen flex items-center justify-center'>
      <div className="flex flex-col items-center justify-center bg-white w-8/10 h-9/10 rounded-3xl px-25 py-5 font-['Poppins']">

        <nav className='flex justify-between items-center font-semibold h-1/10 w-full'>
          <div className='flex gap-10'>
            <a href="" className='font-bold text-2xl mr-8'>Lando</a>
            <a href="" className='hover:text-blue-600'>Home</a>
            <a href="" className='hover:text-blue-600'>Pricing</a>
            <a href="" className='hover:text-blue-600'>About us</a>
            <a href="" className='hover:text-blue-600'>Contact</a>
          </div>
          <div className='flex gap-2'>
            <a href="" className='px-3 py-1'>Log in</a>
            <a href="" className='border border-[#3B82F6] bg-[#3B82F6] hover:bg-blue-700 rounded-lg text-white px-3 py-1'>Sign up</a>
          </div>
        </nav>

        <section className="grow flex items-center">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

            <div className="flex flex-col space-y-6">
              <span className="text-[12px] font-bold tracking-[.2em] text-gray-400">
                — FREE 30 DAYS TRAIL
              </span>

              <h1 className="text-6xl font-semibold">
                The best way <br />
                to showcase <br />
                your project.
              </h1>

              <p className=" text-sm">
                Here you can put a short description about your project.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 text-sm">
                <button className="bg-[#3B82F6] hover:bg-blue-700 text-white px-8 py-1 rounded-xl font-semibold">
                  Try for free
                </button>
                <button className="border border-gray-400 px-8 py-3 rounded-xl font-semibold">
                  See how it works
                </button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-125">
                <img
                  src={png}
                  alt="3D Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </section>

        <footer className='flex flex-col h-1/10 w-7/20 justify-center align-middle text-center mt-10'>
          <p className='text-sm mb-6'>Trusted by individuals and teams at the world's best companies</p>
          <div className="flex justify-center gap-10 text-gray-400 font-semibold text-2xl">
            <span>Logo</span>
            <span>Logo</span>
            <span>Logo</span>
            <span>Logo</span>
            <span>Logo</span>
            <span>Logo</span>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default App
