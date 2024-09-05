import React from 'react';

const Grid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-900">
      <div className="p-4 text-white bg-gray-700 rounded">Item 1</div>
      <div className="p-4 text-white bg-gray-700 rounded">Item 2</div>
      <div className="p-4 text-white bg-gray-700 rounded">Item 3</div>
      <div className="p-4 text-white bg-gray-700 rounded">Item 4</div>
      <div className="p-4 text-white bg-gray-700 rounded">Item 5</div>
      <div className="p-4 text-white bg-gray-700 rounded">Item 6</div>
    </div>
  );
};

export default Grid;
