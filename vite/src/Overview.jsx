import React from 'react';

const Overview = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Light Fixture 1</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">Detailed overview content goes here...</p>
        <img src="path_to_image.jpg" alt="Light Fixture" className="mt-8" />
      </div>
    </div>
  );
};

export default Overview;
