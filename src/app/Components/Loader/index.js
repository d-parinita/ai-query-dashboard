'use client'
import { useLoader } from '@/app/context/LoaderContext';
import React from 'react'
import { DotLoader } from 'react-spinners';

export default function Loader() {
  const { loading } = useLoader();

  if (!loading) return null;

  return (
    <div className="absolute inset-0 flex justify-center items-center backdrop-blur-md bg-opacity-50 z-10">
      <DotLoader
        color="#bcbfff"
        loading={loading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
