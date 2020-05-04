import React from 'react';
import { Link } from 'react-router-dom';
import './CtaButton.scss';
import ClipLoader from 'react-spinners/BeatLoader';

const loaderStyle = {
  css: `transform: translateY(2px);`,
  size: 13
};

export default function CtaButton(props) {
  function handleClick(event) {
    if (typeof props.onClick === 'function') props.onClick(event);
  }

  return (
    <Link
      className={`
        CtaButton
        ${props.animated ? 'animated' : ''}
        ${props.loading ? 'loading' : ''}
      `}
      to={props.to}
      onClick={handleClick}
    >
      {props.loading ? (
        <ClipLoader
          color="white"
          css={loaderStyle.css}
          size={loaderStyle.size}
        />
      ) : (
        props.children
      )}
    </Link>
  );
}

CtaButton.defaultProps = {
  to: '',
  loading: false
};
