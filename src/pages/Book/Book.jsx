import React, { use } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data);

  // console.log(singleBook);

  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    bookId,
    totalPages,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-full shadow-sm border p-6">
        <figure className="p-4 bg-teal-950 w-2/3 mx-auto">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-2 flex-wrap">
            {tags.map(tag => (
              <button key={tag}>{tag}</button>
            ))}
          </div>

          <h2 className="card-title mt-2">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by: {publisher}</p>
          <div className="border-t-2 border-dashed my-2"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline flex items-center gap-1">
              {rating} <FaStarHalfAlt />
              <h2>Pages{totalPages}</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
