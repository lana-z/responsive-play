import React from 'react';

const Flex = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      <div className="text-xl text-white">Item 1</div>
      <ul className="flex space-x-4">
        <li className="text-white ">Item 2</li>
        <li className="text-white">Item 3</li>
        <li className="text-white ">Item 4</li>
        <li className="text-white ">Item 5</li>
      </ul>
    </nav>
  );
};

export default Flex;
