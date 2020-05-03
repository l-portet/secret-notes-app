import React from 'react';
import { Link } from 'react-router-dom';
import './CtaButton.scss';

export default function CtaButton(props) {
  function handleClick(event) {
    if (typeof props.onClick === 'function') props.onClick(event);
  }

  return (
    <Link
      className={`CtaButton ${props.animated ? 'animated' : ''}`}
      to={props.to}
      onClick={handleClick}
    >
      {props.children}
    </Link>
  );
}

CtaButton.defaultProps = {
  to: ''
}
