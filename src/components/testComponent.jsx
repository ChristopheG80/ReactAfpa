import React from 'react';

const ParentComponent = () => {
    return (
      <div>
        <h2>Je suis le composant parent</h2>
        <ChildComponent />
      </div>
    );
  };
  
  const ChildComponent = () => {
    return <p>Je suis le petit composant enfant</p>;
  };

  export default ParentComponent;