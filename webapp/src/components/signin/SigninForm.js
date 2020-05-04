import React, { useState, useRef } from 'react';
import CtaButton from '../common/CtaButton';

export default function SigninForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleCtaButtonClick(event) {
    event.preventDefault();
    formRef.current.dispatchEvent(new Event('submit'));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (typeof props.onSubmit === 'function')
      props.onSubmit({ email, password });
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="johndoe@mail.com"
          autoComplete="email"
          autoFocus
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="••••••••••••••"
          autoComplete="current-password password"
        />
      </label>
      {/*
        This proxy input allows form to submit and emulate the
        Link contained in CtaButton as submit action, have not find a
        better solution in React, so far
      */}
      <input type="submit" value="" style={{ display: 'none' }} />
      <CtaButton to="/note" loading={props.loading} onClick={handleCtaButtonClick}>
        Continue
      </CtaButton>
    </form>
  );
}
