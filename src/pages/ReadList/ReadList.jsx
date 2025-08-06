import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map(id => parseInt(id));
    const myReadList = data.filter(book =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  const handleSort = type => {
    setSort(type);

    if (type === 'pages') {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }

    if (type === 'ratings') {
      const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedByRating);
    }
  };

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">sort by : {sort ? sort : ''}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort('pages')}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort('ratings')}>Ratings</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I read: {readList.length}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {readList.map(b => (
              <Book key={b.bookId} singleBook={b} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2>My WishList</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
