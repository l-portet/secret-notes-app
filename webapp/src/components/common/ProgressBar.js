import React from 'react';
import './ProgressBar.scss';

export default function ProgressBar(props) {
  return (
    <div className={`ProgressBar ${props.className}`}>
      <div
        className="ProgressBarFill"
        style={{ '--progress-bar-fill-width': `${props.percentValue}%` }}
      ></div>
    </div>
  );
}

ProgressBar.defaultProps = {
  className: '',
  percentValue: '0'
};
