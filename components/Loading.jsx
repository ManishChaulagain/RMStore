import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[70vh] w-full">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-orange-500 border-gray-200"></div>
        <p className="text-gray-600 text-sm">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
