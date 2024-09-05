import React from 'react';

const Pink = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-pink-400 sm:grid-cols-1">
      <div className="col-span-2 row-span-1 p-4 text-white bg-gray-700 rounded">
        Item 1 (Wider)
      </div>
      <div className="col-span-1 row-span-2 p-4 text-white bg-gray-700 rounded">
        Item 2 (Taller and Stays Wide)
      </div>
      <div className="col-span-1 row-start-2 p-4 text-white bg-gray-700 rounded sm:row-start-auto">
        Item 3 
      </div>
      <div className="col-span-1 row-start-2 p-4 text-white bg-gray-700 rounded sm:row-start-auto">
        Item 4
      </div>
      <div className="col-span-2 row-start-3 p-4 text-white bg-gray-700 rounded sm:row-start-auto">
        Item 5 (Wider)
      </div>
    </div>
  );
};

export default Pink;
