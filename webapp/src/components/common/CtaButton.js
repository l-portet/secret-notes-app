import React from 'react';
import { Link } from 'react-router-dom';
import './CtaButton.scss';

export default function CtaButton(props) {
  function handleClick(e) {
    if (typeof props.onClick === 'function') props.onClick(e);
  }

  return (
    <Link
      className={`CtaButton ${props.animate ? 'animate' : ''}`}
      to={props.to}
      onClick={handleClick}
    >
      {props.children}
    </Link>
  );
}
