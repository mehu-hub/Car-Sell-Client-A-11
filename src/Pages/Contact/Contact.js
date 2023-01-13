import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../img/avatar/Contact-bg.jpg'
import logo from '../../img/flogo.png'

const Contact = () => {
    return (
        <section className='w-full h-[600px]'
            style={{ background: `url(${bg})` }}
        >
            <div className="hero">
                <div className=" ">
                    <div className='mt-10'>
                        <div className='w-[200px] mx-auto'>
                            <Link to="/"><img src={logo} alt="" /></Link>
                        </div>
                        <h1 className="text-3xl font-bold mt-2 text-warning text-center">STAY CONNECTED WITH US</h1>
                    </div>
                    <div className='mb-10 mt-5 text-center pr-5 pl-5'>
                        <input type="name" placeholder="Name" className="input   input-bordered w-full  " />
                        <input type="email" placeholder="Your Email" className="input mt-3 input-bordered w-full  " />
                        <textarea type="text" placeholder="your message" className="input h-48 mt-3 input-bordered w-full  " />
                        <div className='text-center'>
                            <button className="btn mt-3 bg-warning text-black hover:bg-black hover:text-white border border-2 border-blue-900">Submit Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;