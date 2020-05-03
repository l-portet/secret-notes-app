import React from 'react';
import { Link } from 'react-router-dom';
import CtaButton from '../common/CtaButton';

export default function StepEmail(props) {
  function onSubmit(event) {
    event.preventDefault();
    console.log('submit');
    if (typeof props.onSubmit === 'function')
      props.onSubmit(event)
  }

  function handleGoBack(event) {
    event.preventDefault();
    if (typeof props.onGoBack === 'function')
    props.onGoBack(event)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
      <label>
        Password
        <input
          type="password"
          value={props.value}
          onChange={props.onChange}
          placeholder="••••••••••••••"
          autoComplete="current-password password"
          autoFocus
        />
      </label>
        <CtaButton onClick={onSubmit}>
          Create
        </CtaButton>
      </form>
      <span className="Details">
        Missed something ? <Link onClick={handleGoBack} to='/signup'>Go back</Link>
      </span>
    </>
  );
}
