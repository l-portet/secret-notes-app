import React from 'react';
import { Link } from 'react-router-dom';
import CtaButton from '../common/CtaButton';

export default function StepEmail(props) {
  function onSubmit(event) {
    event.preventDefault();
    if (typeof props.onSubmit === 'function')
      props.onSubmit(event)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input
            type="text"
            value={props.value}
            onChange={props.onChange}
            placeholder="johndoe@mail.com"
            autoComplete="email"
            autoFocus
          />
        </label>
        <CtaButton onClick={onSubmit}>
          Continue
        </CtaButton>
      </form>
      <span className="Details">
        Already have an account ? <Link to="/signin">Sign in</Link>
      </span>
    </>
  );
}
