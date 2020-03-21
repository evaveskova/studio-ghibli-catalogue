import React from 'react';
import { useParams } from 'react-router-dom';
// import style from './style.module.css';

const Film = () => {
  const { id } = useParams();

  return (
    <div>
      Film
      {id}
    </div>
  );
};

export default Film;
