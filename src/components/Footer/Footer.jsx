import React from 'react';
import footImg from '../../assets/fi_5969020.png'
import FbImg from '../../assets/fi_5968764.png'
import LinkedIlnImg from '../../assets/fi_145807.png'
import EmailImg from '../../assets/fi_6244710.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer mt-16 sm:footer-horizontal bg-black text-base-content p-10">
  <nav className='ml-12'>
    <h6 className="font-bold text-xl text-white mb-2">CS — Ticket System</h6>
    <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the <br></br> printing and typesetting industry. Lorem <br></br> Ipsum has been the industry's standard <br></br> dummy text ever since the 1500s, when an <br></br> unknown printer took a galley of type and <br></br> scrambled it to make a type specimen book.</p>
  </nav>
  <nav>
    <h6 className="font-bold text-xl text-white mb-2">Company</h6>
    <a className="link link-hover text-gray-400">About Us</a>
    <a className="link link-hover text-gray-400">Our Mission</a>
    <a className="link link-hover text-gray-400">Contact Saled</a>
  </nav>
  <nav>
    <h6 className="font-bold text-xl text-white mb-2">Services</h6>
    <a className="link link-hover text-gray-400">Products & Services</a>
    <a className="link link-hover text-gray-400">Customer Stories</a>
    <a className="link link-hover text-gray-400">Download Apps</a>
  </nav>
  <nav>
    <h6 className="font-bold text-xl text-white mb-2">Information</h6>
    <a className="link link-hover text-gray-400">Privacy Policy</a>
    <a className="link link-hover text-gray-400">Terms & Conditions</a>
    <a className="link link-hover text-gray-400">Join Us</a>
  </nav>
  <nav>
    <h6 className="font-bold text-xl text-white mb-2">Social Links</h6>
    <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <img src={footImg} alt="Logo" className="w-6 h-6" />
      <a className="link link-hover text-gray-400">@CS — Ticket System</a>
    </div>
    <div className="flex items-center gap-2">
      <img src={LinkedIlnImg} alt="LinkedIn" className="w-6 h-6" />
      <a className="link link-hover text-gray-400">@CS — Ticket System</a>
    </div>
    <div className="flex items-center gap-2">
      <img src={FbImg} alt="Facebook" className="w-6 h-6" />
      <a className="link link-hover text-gray-400">@CS — Ticket System</a>
    </div>
    <div className="flex items-center gap-2">
      <img src={EmailImg} alt="Email" className="w-6 h-6" />
      <a className="link link-hover text-gray-400">support@cst.com</a>
    </div>
  </div>
  </nav>

</footer>
<footer className='footer bg-black'>
    <hr className='border-gray-500 w-300 ml-16'/>
 <p className='text-gray-400 ml-130'>© 2025 CS — Ticket System. All rights reserved.</p>
</footer>
        </div>
    );
};

export default Footer;