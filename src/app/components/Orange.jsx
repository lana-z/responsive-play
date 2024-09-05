import React from 'react';

const Orange = () => {
  return (
    <div className="grid gap-4 p-4 bg-orange-300 grid-cols-18 grid-rows-12">

      <div className="row-start-1 p-4 text-white bg-gray-700 rounded col-span-18 md:col-span-12">
        Header 
      </div>

      {/* Item 2: Initially in the same row as Item 1, drops below on small screens */}
      <div className="p-4 text-white bg-gray-700 rounded md:row-start-1 col-span-18 md:col-span-6">
        Latest
      </div>


    </div>
  );
};



export default Orange;
