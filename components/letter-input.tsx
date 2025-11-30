"use client";
import React from 'react'

export type Color = 'gray' | 'yellow' | 'green';

export type LetterInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  color?: Color;
};

const LetterInput = ({ color, className, onChange, ...props }: LetterInputProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.substring(0, 1).toUpperCase();
    if (onChange && typeof onChange === 'function') {
      onChange({
        ...e,
        target: {
          ...e.target,
          value,
        },
      });
    }
  };

  const getColors = (): string => {
    switch (color) {
      case 'gray':
        return 'bg-gray-600 text-white border-gray-300';
      case 'yellow':
        return 'bg-yellow-600 text-white border-yellow-400';
      case 'green':
        return 'bg-green-600 text-white border-green-500';
      default:
        return 'bg-white text-black';
    }
  }


  return (
    <input
      {...props}
      className={
        `w-12 h-12 border border-gray-600 text-center 
        text-2xl font-bold uppercase mx-1 focus:outline-none focus:ring-2 
      focus:ring-blue-500 rounded ${className}
        ${getColors()}`
      }
      onChange={handleChange}
    />
  )
}

export default LetterInput