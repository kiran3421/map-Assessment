// Tooltip.js
import React from 'react';

function Tooltip({ text, children }) {
  return (
    <div>
     
      <div>{text}</div>
      {children}
    </div>
  );
}

export default Tooltip;
