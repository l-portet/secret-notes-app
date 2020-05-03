import React from 'react';
import { Link } from 'react-router-dom';
import CtaButton from '../common/CtaButton';

export default function Home() {
  return (
    <div className="Page">
      <main>
        <h1>Secret notes</h1>
        <p>Keep your your most precious text notes locked and secret.</p>
        <span className="Details">Already have an account ? <Link to="/signin">Sign in</Link>.</span>
        <CtaButton to="/signup" animated>Create a note</CtaButton>
      </main>
    </div>
  );
}
