import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import CtaButton from '../common/CtaButton';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleCtaButtonClick(e) {
    e.preventDefault();
    formRef.current.dispatchEvent(new Event('submit'));
  }

  function handleSubmit(e) {
    console.log('SUBMIT');
    e.preventDefault();
  }

  return (
    <div className="Page">
      <main>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="johndoe@mail.com"
              autoComplete="email"
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
          <CtaButton to="/note" onClick={handleCtaButtonClick}>
            Continue
          </CtaButton>
        </form>
        <span className="Details">
          Don't have an account? <Link to="/signup">Create one</Link>.
        </span>
      </main>
    </div>
  );
}
