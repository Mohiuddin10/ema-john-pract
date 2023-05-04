import React from 'react';
import './Hero.css';
import img from '../../images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing.jpg';

const Hero = () => {
    return (
        <div className='heroContainer'>
            <div className="left">
                <small>Sell upto 70% off</small>
                <h1 className='heading'>New Collection for Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <button>
                    <h4>Shop Now</h4>
                </button>
            </div>
            <div className="right">
                <img src={img} alt="" />
            </div>
            
        </div>
    );
};

export default Hero;