import React from 'react';
import './homeButton.css';

interface HomeButtonProps {
  name: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ name }) => {
  return (
    <div className="holographic-card">
      <h2>{name}</h2>
    </div>
  );
};

export default HomeButton;
