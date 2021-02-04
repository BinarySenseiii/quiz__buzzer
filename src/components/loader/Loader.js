import React from 'react'
import { FaSpinner } from 'react-icons/fa';
import './loader.css'

export const Loader = () => {

  return (
    <div className="spinner">
        <FaSpinner />
    </div>
  );
};
