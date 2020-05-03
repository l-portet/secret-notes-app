import React from 'react';
import './NoteInput.scss';

export default function NoteInput(props) {
  return (
    <div className="NoteInput">
    <p>This is your secret note. No one can see it, except you.</p>
      <textarea autoFocus placeholder="My super secret note" />
      <span className="ChangesStatus">No changes</span>
    </div>)
}
