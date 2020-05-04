import React from 'react';
import CtaButton from '../common/CtaButton';
import './StepEnd.scss';

export default function StepEnd(props) {

  function handleCtaButtonClick(event) {
    event.preventDefault();
    if (typeof props.onSubmit === 'function')
      props.onSubmit();
  }

  return (
    <>
      <div className="OnboardMessage">
        <img
          src="/assets/images/icons/checkmark-light.png"
          alt="checkmark white"
        />
        <p>
          It’s all good, {props.username} !<br />
          Your account has been created.
        </p>
      </div>
      <CtaButton onClick={handleCtaButtonClick}>Start</CtaButton>
    </>
  );
}

StepEnd.defaultProps = {
  username: 'guest'
};
