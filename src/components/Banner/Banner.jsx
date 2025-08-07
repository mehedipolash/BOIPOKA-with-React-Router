import React from 'react';
import bookImage from '../../assets/book.png';

const Banner = () => {
  return (
    <div className="hero bg-cyan-900 rounded-3xl py-15">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <img
          src={bookImage}
          alt="Book"
          className="max-w-sm rounded-xl shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-white">
            Books to freshen up your bookshelf
          </h1>
          <br />
          <div className="mt-6">
            <button className="btn btn-primary text-white hover:bg-green-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;