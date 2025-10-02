import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large floating circle */}
      <div className="floating-shape w-64 h-64 top-20 left-10 opacity-20"></div>
      
      {/* Medium floating circle */}
      <div className="floating-shape w-32 h-32 top-1/3 right-20 opacity-15"></div>
      
      {/* Small floating circle */}
      <div className="floating-shape w-20 h-20 bottom-1/4 left-1/4 opacity-25"></div>
      
      {/* Additional shapes for more visual interest */}
      <div className="floating-shape w-40 h-40 top-1/2 right-1/3 opacity-10"></div>
      <div className="floating-shape w-24 h-24 bottom-20 right-10 opacity-20"></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 via-transparent to-purple-900/5"></div>
    </div>
  );
};

export default FloatingShapes;

