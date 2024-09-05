import React from 'react';
import TwoDim from './Grid';

const Blue = () => {
    return (
        <div className="grid grid-cols-3 gap-4 p-4 bg-blue-300 sm:grid-cols-2">

            <div className="col-span-3 p-4 text-white bg-gray-700 rounded sm:col-span-2">
                Item 1 
            </div>

            <div className="col-span-1 row-start-2 p-4 text-white bg-gray-700 rounded sm:col-span-2 sm:col-start-1 sm:justify-self-center">
                Item 2 
            </div>

            <div className="col-span-1 row-start-2 p-4 text-white bg-gray-700 rounded sm:col-span-1 sm:row-start-3">
                Item 3
            </div>

            <div className="col-span-1 row-start-2 p-4 text-white bg-gray-700 rounded sm:col-span-1 sm:row-start-4">
                Item 4
            </div>

            <div className="col-span-3 p-4 text-white bg-gray-700 rounded sm:col-span-2 sm:col-start-1 sm:row-start-5">
                Item 5 
            </div>
        </div>
    );
};

export default Blue;
