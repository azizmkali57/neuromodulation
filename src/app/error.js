"use client";

import React, { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
      <h2 className="font-headings text-3xl uppercase text-[#1D1A55] mb-4">
        Something went wrong
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        An unexpected error occurred while loading this page.
      </p>
      <button
        onClick={() => reset()}
        className="button-link px-6 py-3 font-headings uppercase text-white bg-[#E9511C] rounded"
      >
        Try Again
      </button>
    </div>
  );
}
