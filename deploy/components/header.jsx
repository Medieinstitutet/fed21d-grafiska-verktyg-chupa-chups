import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-24 top-0 bg-black-400 drop-shadow-lg">
        <div className="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
            
            <a className="text-yellow-400 text-xl font-bold italic" href="">LOGO</a>

            
            <ul id="menu" className="hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50
                md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

                <li className="md:hidden z-90 fixed top-4 right-6">
                    <a href="" className="text-right text-white text-4xl"
                        >&times;</a>
                </li>

                <li>
                    <a className="text-white " href="#">Home</a>
                </li>
                <li>
                    <a className="text-white " href="#">About</a>
                </li>
                <li>
                    <a className="text-white " href="#">FAQ</a>
                </li>

            </ul>

            
            <div className="flex items-center md:hidden">
                <button className="text-white text-4xl font-bold"
                    >
                    &#9776;
                </button>
            </div>
</div>
    </header>
  );
};

export default Header;
