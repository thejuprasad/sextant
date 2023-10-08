// ExhibitComponent.js

import React from 'react';

const ExhibitComponent = ({ children }) => {
  return (
    <div className="exhibit">
      <div className="exhibit-heading">
        <h2>Exhibit Heading</h2>
      </div>
      <div className="exhibit-content">
        {children}
      </div>
    </div>
  );
};

export default ExhibitComponent;
