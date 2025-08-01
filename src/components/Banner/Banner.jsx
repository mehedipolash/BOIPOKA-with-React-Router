import React from 'react';
import bookImage from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className='flex justify-around items-center'>
      <div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores illo libero nobis, mollitia, quisquam natus consequuntur quae laudantium sapiente possimus, velit culpa at? Odio, facilis?</h1>
        <button className='btn btn-primary'>Test</button>
      </div>
      <div>
        <img src={bookImage}></img>
       </div>
    </div>
  );
};

export default Banner;