import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import debounce from 'debounce';
import './NoteInput.scss';
import api from '../../api';

export default function NoteInput(props) {
  const history = useHistory();
  const [noteContent, setNoteContent] = useState('');
  const [changesStatus, setChangesStatus] = useState('Loading...');

  async function handleNoteChange(event) {
    console.log('function called');
    setNoteContent(event.target.value);
    updateNote();
  }

  const updateNote = debounce(async function() {
    setChangesStatus('Saving...');
    try {
      await api.updateNote();
      setChangesStatus('Saved');
    } catch (e) {
      console.error(e);
      setChangesStatus('Error');
      window.alert('Oops! Unable to update note.');
    }
  }, 500);

  useEffect(() => {
    async function fetchNote() {
      let result;
      try {
        result = await api.getNote();
        console.log(result);
        setNoteContent(result.note);
        setChangesStatus('No changes');
      } catch (e) {
        window.alert('Oops! Unable to fetch note, redirecting to home.');
        redirectToHome();
      }
    }

    function redirectToHome() {
      history.push('/');
    }

    console.log('note check');
    console.log(api.token);
    console.log(api.isLogged());
    if (!api.isLogged()) return redirectToHome();
    fetchNote();
  }, [history]);

  return (
    <div className="NoteInput">
      <p>This is your secret note. No one can see it, except you.</p>
      <textarea
        value={noteContent}
        onChange={handleNoteChange}
        autoFocus
        placeholder="My super secret note"
      />
      <span className="ChangesStatus">{changesStatus}</span>
    </div>
  );
}
