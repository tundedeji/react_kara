import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white grid grid-rows-5 place-content-center lg:grid-cols-5 p-4">
      <ul className="">
        <div className="">
          <span className="font-rubik font-bold text-[28px] mt-10 ml-10">
            Brainwave.io
          </span>
          <p className="w-40 text-xs ml-10 mt-5">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <div className="ml-10 mt-3">
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-facebook-square"></i>
            <i class="bx bxl-instagram-alt"></i>
            <i class="bx bxl-linkedin-square"></i>
          </div>
        </div>
      </ul>
      <ul className="ml-5">
        <span className="text-sm text-slate-400">Company</span>
        <li className="text-xs mt-5">
          <Link to="/"> About Us</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/"> Contact Us</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/"> Careers</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/"> Press</Link>
        </li>
      </ul>

      <ul>
        <span className="text-sm text-slate-400">Product</span>
        <li className="text-xs mt-5">
          <Link to="/"> Features</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/"> Pricing</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/"> News</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/">Help Desk</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/">Support</Link>
        </li>
      </ul>

      <ul>
        <span className="text-sm text-slate-400">Services</span>
        <li className="text-xs mt-5">
          <Link to="/">Digital Marketing</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/">Content Writing</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/">SEO for Business</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/">UI Design</Link>
        </li>
      </ul>

      <ul>
        <span className="text-sm text-slate-400">Legal</span>
        <li className="text-xs mt-5">
          <Link to="/">Privacy Policy</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/">Terms & Conditions</Link>
        </li>
        <li className="text-xs mt-5">
          <Link to="/">Return Policy</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
