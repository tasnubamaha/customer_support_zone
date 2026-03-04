import React from 'react';

const NavBar = () => {
    return (
  <div className="pt-6 bg-white mb-4 navbar text-black mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost font-bold text-xl ml-20">CS — Ticket System</a>
  </div>
  <div>
    <a className='mr-3 ' href="">Home</a>
    <a className='mr-3 ' href="">FAQ</a>
    <a className='mr-3 ' href="">ChangeLog</a>
    <a className='mr-3 ' href="">Blog</a>
    <a className='mr-3 ' href="">Download</a>
    <a className='mr-3 ' href="">Contact</a>
  </div>
  <div className="flex items-center mr-24">
    <button className='btn text-white bg-[#422AD5] border-2 border-gray-400'>
    <span className='mr-2'>+</span>
    <span className='mr-2'>New Ticket</span>
    </button>
   
  </div>
</div>
    );
};

export default NavBar;