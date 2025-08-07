import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreDB } from '../../Utility/addToDb';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // don't forget this import

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  // useEffect(() => {
  //   toast('Wow so easy!');
  // }, []);

  if (!data || !Array.isArray(data)) {
    return <div className="text-center p-8">Loading book data...</div>;
  }

  const singleBook = data.find(book => book.bookId === parseInt(id));

  if (!singleBook) {
    return <div className="text-center p-8">Book not found</div>;
  }

  const {
    review,
    bookName,
    image,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = id => {
    // You can enable this Swal alert if you want
    // MySwal.fire({
    //   title: 'Good job!',
    //   text: 'You clicked the button!',
    //   icon: 'success',
    // });
    addToStoreDB(id);
    toast.success('Marked as read!');
  };

  return (
    <div className="w-4/5 mx-auto flex flex-col md:flex-row gap-x-12 mt-8 mb-8">
      <img
        className="w-full md:w-80 h-auto max-h-[500px] object-cover rounded-lg shadow-md"
        src={image}
        alt={bookName}
      />

      <div className="flex-1">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <ToastContainer />
        <br />
        <h2 className="text-lg text-amber-300">By: {author}</h2>
        <br />
        <hr />
        <h3 className="mt-2 mb-2 text-md font-semibold text-red-600">
          {category}
        </h3>
        <hr />
        <br />
        <p className="mb-4 text-justify leading-relaxed">Review: {review}</p>

        <h2 className="mb-3">
          Tag:{' '}
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block border border-green-600 px-3 py-1 mr-2 mb-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 ml-2 mt-4">
          <div className="text-sm font-medium text-gray-600">
            📄 Pages: <span className="font-semibold">{totalPages}</span>
          </div>
          <div className="text-sm font-medium text-gray-600">
            🏢 Publisher: <span className="font-semibold">{publisher}</span>
          </div>
          <div className="text-sm font-medium text-gray-600">
            🗓️ Year: <span className="font-semibold">{yearOfPublishing}</span>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn btn-accent m-2"
          >
            Mark as Read
          </button>
          <button className="btn btn-info m-2">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
