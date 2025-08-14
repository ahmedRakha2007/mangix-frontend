"use client";
import React from "react";

const SkeletonCardId = () => {
  return (
    <div className="animate-pulse flex sm:flex-row flex-col items-center sm:gap-5 px-5 lg:px-20 py-10">
      {/* Image Skeleton */}
      <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] bg-gray-300 rounded-lg shadow-2xl" />

      {/* Text + Button Skeleton */}
      <div className="flex flex-col justify-center pt-8 sm:pt-0 gap-5 lg:gap-8 w-full h-full">
        <div className="h-16 xl:w-3/4 lg:w-2/3 sm:w-3/4 w-full bg-gray-300 rounded" />
        <div className="h-6 w-1/2 bg-gray-300 rounded" />
        <div className="h-20 w-full bg-gray-300 rounded" />
        <div className="flex gap-4 items-center">
          <div className="h-6 w-20 bg-gray-300 rounded" />
          <div className="h-6 w-20 bg-gray-300 rounded" />
        </div>
        <div className="h-12 w-full bg-gray-300 rounded-2xl" />
      </div>
    </div>
  );
};

export default SkeletonCardId;
