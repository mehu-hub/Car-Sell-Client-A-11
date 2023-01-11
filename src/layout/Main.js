import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shered/Header/Footer/Footer";
import Header from "../Pages/Shered/Header/Header";
import "../layout/Main.Module.css";
import logo from "../img/logo.png"
import {
  MapPinIcon,
  PhoneArrowUpRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const Main = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div className="lg:mt-24">
      <div className="hidden lg:block">
        <div
          className="flex justify-between py-2 bg-white px-16 "
          id="navbar"
        >
           <img className="ml-32 w-[250px]" src={logo} alt="" />
          <div className="flex gap-6">
            <div className="flex gap-3 mt-3">
              <MapPinIcon className="h-12 w-12 text-blue-900" />
              <div>
                <h1 className="text-blue-900 text-lg">Our Location</h1>
                <h3 className="text-lg text-black">Dhaka, Bangladesh</h3>
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <EnvelopeIcon className="h-12 w-12 text-blue-900" />

              <div>
                <h1 className="text-blue-900 text-lg">Online Support</h1>
                <h3 className="text-lg text-black">contact@bikertunnel.com</h3>
              </div>
            </div>

            <div className="flex gap-3 mt-3">
              <PhoneArrowUpRightIcon className="h-12 w-12 text-blue-900 " />

              <div>
                <h1 className="text-blue-900 text-lg">Call Us</h1>
                <h3 className="text-lg text-black">+886875896</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
