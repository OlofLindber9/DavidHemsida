import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homeButton.css';

interface HomeButtonProps {
  name: string;
  to?: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ name, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
  };

  return (
    <div className="holographic-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h2>{name}</h2>
    </div>
  );
};

export default HomeButton;
