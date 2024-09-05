import React from 'react';

const Green = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-green-300 sm:grid-cols-2">
      <div className="col-span-2 row-span-1 p-4 text-white bg-gray-700 rounded">
        Item 1 (Wider)
      </div>
      <div className="col-span-1 row-span-2 p-4 text-white bg-gray-700 rounded">
        Item 2 (Taller)
      </div>
      <div className="col-span-1 row-span-1 p-4 text-white bg-gray-700 rounded">
        Item 3
      </div>
      <div className="col-span-1 row-span-1 p-4 text-white bg-gray-700 rounded">
        Item 4
      </div>
      <div className="col-span-2 row-span-1 p-4 text-white bg-gray-700 rounded">
        Item 5 (Wider)
      </div>
    </div>
  );
};

export default Green;
