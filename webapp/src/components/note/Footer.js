import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import './Footer.scss';

export default function Footer(props) {
  function handleLogout() {
    console.log('Log out')
    api.deleteToken();
  }

  return (
    <footer>
      <Link to="/" onClick={handleLogout}>Log out</Link>
    </footer>
  );
}
