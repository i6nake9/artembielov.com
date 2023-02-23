import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://images.unsplash.com/photo-1677093685946-3b2bed5aeb7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Artem Bielov
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'Full-Stack Egineer',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://twitter.com/i6nake9">
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100011159619623">
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a href="https://instagram.com/i6nake9">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/artem-bielov-827562168/">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
