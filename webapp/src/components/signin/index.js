import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import SigninForm from './SigninForm';
import api from '../../api';

export default function Signin() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function handleSubmit({ email, password }) {
    setLoading(true);
    try {
      await api.signin({ email, password })
      setLoading(false);
      history.push('/note')
    } catch (e) {
      console.error(e)
      // TEMP Replace by a smooth toast notification
      window.alert('Oops! Unable to sign in, check your email or password.');
      setLoading(false);
    }
  }

  return (
    <div className="Page">
      <main>
        <h1>Sign in</h1>
        <SigninForm onSubmit={handleSubmit} loading={loading} />
        <span className="Details">
          Don't have an account? <Link to="/signup">Create one</Link>.
        </span>
      </main>
    </div>
  );
}
