import React, { useState, Suspense } from 'react';

// Usando lazy loading para cargar el componente UserDetails
const UserDetails = React.lazy(
  () => import('./UserDetails')
);

const UserProfile = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <button onClick={handleToggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <Suspense
          fallback={<div>Loading user details...</div>}
        >
          <UserDetails userId={user.id} />
        </Suspense>
      )}
    </div>
  );
};

export default UserProfile;
