import React from 'react';
import './styles.css';

interface Props {
  title: String;
}

const handleAlert = () => {
  alert('clicou no teste');
};
const Button: React.FC<Props> = ({ title }) => {
  return (
    <button className="button" onClick={handleAlert}>
      {title}
    </button>
  );
};

export default Button;
