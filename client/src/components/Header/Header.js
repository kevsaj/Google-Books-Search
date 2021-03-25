import React from "react";

const Header = () => {
    return(
        <header className="flex flex-col justify-center items-center w-full mx-auto">
          <div class="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
            <div class="text-6xl font-semibold text-gray-900 leading-none">Find the Best Books waiting for you!</div>
            <div class="mt-6 text-xl font-light text-true-gray-500 antialiased">Use the power of Google to search and bookmark books.</div>
            
          </div>
          <div class="flex justify-center items-center mt-5 mx-auto text-left">
            <bottom type="button" class="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </bottom>
          </div>
        </header>
    )
}

export default Header;