"use client"
import { useState } from 'react';
export default function TruncatedDescription({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <p className={`${isExpanded ? 'block' : 'line-clamp-3'} text-zinc-400`}>
        {description}
      </p>
      <button 
        onClick={toggleDescription} 
        className="text-blue-500 mt-2">
        {isExpanded ? "View Less" : "View More"}
      </button>
    </div>
  );
}