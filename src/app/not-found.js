import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
      <h1 className="font-headings text-6xl uppercase text-[#1D1A55] mb-2">404</h1>
      <h2 className="font-headings text-2xl uppercase text-[#E9511C] mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The requested page does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="button-link px-6 py-3 font-headings uppercase text-white bg-[#1D1A55] rounded inline-block"
      >
        Return to Home
      </Link>
    </div>
  );
}
